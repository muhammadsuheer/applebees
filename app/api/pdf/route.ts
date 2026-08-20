import { NextResponse } from 'next/server';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { items, totals } = data;

    if (!items || !totals) {
      return NextResponse.json({ error: 'Missing payload data' }, { status: 400 });
    }

    // Initialize an A4 PDF portrait
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // --- High-End Header Banner ---
    // Dark Charcoal Background
    doc.setFillColor(31, 41, 55); 
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    // Applebee's Red Accent Line at the bottom of the header
    doc.setFillColor(220, 38, 38);
    doc.rect(0, 40, pageWidth, 2, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    doc.setFont('helvetica', 'bold');
    doc.text("Applebee's Custom Macro Planner", 20, 22);

    doc.setTextColor(156, 163, 175); // Light Gray
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text("Your Personalized Nutrition & Diet Guide", 20, 32);

    // --- Generation Info ---
    doc.setTextColor(75, 85, 99);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text(`Generated Date: ${new Date().toLocaleDateString()}`, 20, 52);
    doc.text(`Selected Items: ${items.length}`, pageWidth - 20, 52, { align: 'right' });

    // --- Table: Selected Items ---
    const tableColumn = ["Plan", "Menu Item", "Calories", "Protein", "Carbs", "Fat", "Sodium"];
    const tableRows: (string | number)[][] = [];

    items.forEach((item: { name: string; calories: number | string; protein: number | string; carbs: number | string; fat: number | string; sodium: number | string }) => {
      const itemData = [
        "", // We will draw a physical checkbox in the hook
        item.name,
        item.calories,
        `${item.protein}g`,
        `${item.carbs}g`,
        `${item.fat}g`,
        `${item.sodium}mg`
      ];
      tableRows.push(itemData);
    });

    autoTable(doc, {
      startY: 60,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      headStyles: {
        fillColor: [220, 38, 38], // Applebee's Red Header
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
        cellPadding: 3,
        halign: 'center'
      },
      bodyStyles: {
        textColor: [50, 50, 50],
        fontSize: 8,
        cellPadding: 3,
        valign: 'middle'
      },
      alternateRowStyles: {
        fillColor: [249, 250, 251], 
      },
      columnStyles: {
        0: { cellWidth: 15, halign: 'center' }, // Checkbox column
        1: { cellWidth: 'auto', halign: 'left', fontStyle: 'bold' },
        2: { halign: 'center' },
        3: { halign: 'center' },
        4: { halign: 'center' },
        5: { halign: 'center' },
        6: { halign: 'center' },
      },
      didDrawCell: (data) => {
        // Draw a physical square checkbox in the first column
        if (data.section === 'body' && data.column.index === 0) {
          doc.setDrawColor(100, 100, 100);
          doc.setLineWidth(0.3);
          // @ts-expect-error - jsPDF autoTable types are incomplete
          doc.rect(data.cell.x + 5, data.cell.y + 1.5, 4, 4, 'S');
        }
      }
    });

    // --- Totals Section (Styled as an invoice summary) ---
    // @ts-expect-error - jsPDF autoTable adds lastAutoTable to doc dynamically
    const finalY = doc.lastAutoTable.finalY + 10;
    
    // Draw an aligned summary table on the right side
    autoTable(doc, {
      startY: finalY,
      margin: { left: pageWidth - 90 }, // Push to the right
      tableWidth: 75,
      body: [
        ['Protein:', `${totals.protein}g`],
        ['Carbs:', `${totals.carbs}g`],
        ['Fat:', `${totals.fat}g`],
        ['Sodium:', `${totals.sodium}mg`],
        ['TOTAL CALORIES:', `${totals.calories} Cal`]
      ],
      theme: 'plain',
      styles: {
        fontSize: 9,
        cellPadding: 3,
        halign: 'right'
      },
      columnStyles: {
        0: { fontStyle: 'normal', textColor: [100, 100, 100], cellWidth: 40 },
        1: { fontStyle: 'bold', textColor: [31, 41, 55], cellWidth: 35 }
      },
      willDrawCell: (data) => {
        if (data.row.index === 4) {
          // Highlight the final calories row
          data.cell.styles.textColor = [220, 38, 38];
          data.cell.styles.fontStyle = 'bold';
          if (data.column.index === 1) data.cell.styles.fontSize = 12;
        }
      },
      didParseCell: (data) => {
         if (data.row.index === 4 && data.section === 'body') {
           // Add a top border to the final totals row
           data.cell.styles.lineWidth = { top: 0.5 };
           data.cell.styles.lineColor = [200, 200, 200];
         }
      }
    });

    // --- Footer ---
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(156, 163, 175);
    doc.text("Nutrition values are estimates. Check official Applebee's guides for allergies.", pageWidth / 2, pageHeight - 15, { align: 'center' });

    // Output binary PDF data
    const pdfBuffer = doc.output('arraybuffer');

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Applebees_Macro_Plan.pdf"',
      },
    });

  } catch (error) {
    console.error('PDF Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}

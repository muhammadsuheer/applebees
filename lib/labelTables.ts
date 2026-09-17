// Adds data-label="<column header>" to every body cell of each HTML table, so
// tables can stack into labelled cards on phones without CSS guessing which
// column is which.
export function labelTableCells(html: string): string {
  return html.replace(/<table\b[\s\S]*?<\/table>/g, (table) => {
    const thead = table.match(/<thead[\s\S]*?<\/thead>/);
    if (!thead) return table;

    const headers = [...thead[0].matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/g)].map((m) =>
      m[1].replace(/<[^>]+>/g, '').replace(/"/g, '&quot;').trim()
    );

    return table.replace(/<tbody[\s\S]*?<\/tbody>/, (tbody) =>
      tbody.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/g, (row) => {
        let col = 0;
        return row.replace(/<(td|th)\b([^>]*)>/g, (tag, name: string, attrs: string) => {
          const label = headers[col++];
          if (!label || attrs.includes('data-label=')) return tag;
          return `<${name}${attrs} data-label="${label}">`;
        });
      })
    );
  });
}

'use client';

import { useState } from 'react';
import { nutritionData, NutritionItem } from '@/data/nutrition';
import styles from './NutritionCalculator.module.css';

export default function NutritionCalculator() {
  const [selectedItems, setSelectedItems] = useState<NutritionItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>(nutritionData[0].title);
  const [isTrayOpen, setIsTrayOpen] = useState(true);

  const toggleItem = (item: NutritionItem) => {
    setSelectedItems((prev) => {
      const isSelected = prev.some((i) => i.id === item.id);
      if (isSelected) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = async () => {
    if (selectedItems.length === 0) return;
    setIsGenerating(true);
    try {
      const response = await fetch('/api/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: selectedItems, totals }),
      });

      if (!response.ok) throw new Error('Failed to generate PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Applebees_Macro_Plan.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const totals = selectedItems.reduce(
    (acc, item) => ({
      calories: acc.calories + item.calories,
      protein: acc.protein + item.protein,
      carbs: acc.carbs + item.carbs,
      fat: acc.fat + item.fat,
      sodium: acc.sodium + item.sodium,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 }
  );

  const activeCategory = nutritionData.find((cat) => cat.title === activeTab) || nutritionData[0];

  return (
    <div className={styles.calculatorContainer}>
      {/* Left Panel: Menu Selection (Tabbed UI) */}
      <div className={styles.selectionPanel}>
        {/* Tab Bar */}
        <div className={styles.tabsContainer}>
          {nutritionData.map((category) => (
            <button
              key={category.title}
              className={`${styles.tabButton} ${activeTab === category.title ? styles.tabButtonActive : ''}`}
              onClick={() => setActiveTab(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category List */}
        <div className={styles.itemList}>
          {activeCategory.items.map((item) => {
            const isSelected = selectedItems.some((i) => i.id === item.id);
            return (
              <div 
                key={item.id} 
                className={`${styles.itemLabel} ${isSelected ? styles.itemLabelSelected : ''}`}
                onClick={() => toggleItem(item)}
              >
                <div className={styles.itemInfo}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemMacros}>{item.calories} Cal | {item.protein}g Protein</span>
                </div>
                <div className={styles.addButton}>
                  {isSelected ? '−' : '+'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Panel / Bottom Smart Tray */}
      <div className={`${styles.summaryPanel} ${isTrayOpen ? styles.expanded : ''}`}>
        
        {/* Mobile-only visible compact header */}
        <div className={styles.mobileTrayHeader} onClick={() => setIsTrayOpen(!isTrayOpen)}>
          <div>
            <div className={styles.mobileTraySummary}>
              {selectedItems.length} Items | {totals.calories} Cal
            </div>
            <div className={styles.mobileTraySub}>
              Tap to view full meal macros
            </div>
          </div>
          <div className={styles.mobileTrayToggle}>
            ▼
          </div>
        </div>

        {/* The actual summary content (Desktop always visible, Mobile hidden unless tray open) */}
        <div className={`${styles.summaryContent} ${isTrayOpen ? styles.expanded : ''}`}>
          
          <div className={styles.printOnlyHeader}>
            Applebee's Custom Macro & Meal Planner (Generated: {new Date().toLocaleDateString()})
          </div>

          <div className={styles.summaryTitle}>
            <span>Your Meal</span>
            <div className={styles.actionButtons}>
              <button 
                className={styles.clearBtn} 
                onClick={() => setSelectedItems([])}
                disabled={selectedItems.length === 0 || isGenerating}
                title="Clear all items"
              >
                Clear
              </button>
              <button 
                className={styles.printBtn} 
                onClick={handlePrint}
                disabled={selectedItems.length === 0 || isGenerating}
                title="Download PDF or Print"
              >
                {isGenerating ? 'Saving...' : 'Save PDF'}
              </button>
            </div>
          </div>
          
          <div className={styles.macroRow}>
            <span className={styles.macroLabel}>Protein</span>
            <span className={styles.macroValue}>{totals.protein}g</span>
          </div>
          <div className={styles.macroRow}>
            <span className={styles.macroLabel}>Carbs</span>
            <span className={styles.macroValue}>{totals.carbs}g</span>
          </div>
          <div className={styles.macroRow}>
            <span className={styles.macroLabel}>Fat</span>
            <span className={styles.macroValue}>{totals.fat}g</span>
          </div>
          <div className={styles.macroRow}>
            <span className={styles.macroLabel}>Sodium</span>
            <span className={styles.macroValue}>{totals.sodium}mg</span>
          </div>
          <div className={styles.macroRow}>
            <span className={styles.macroLabel}>Total Calories</span>
            <span className={styles.macroValue}>{totals.calories}</span>
          </div>

          {selectedItems.length === 0 ? (
            <div className={styles.emptyState}>
              Select items from the menu to build your meal and calculate totals.
            </div>
          ) : (
            <div className={styles.selectedItemsList}>
              <h4>Selected Items ({selectedItems.length})</h4>
              {selectedItems.map((item) => (
                <div key={item.id} className={styles.selectedItem}>
                  <div>
                    <span className={styles.printCheckbox}></span>
                    <span className={styles.selectedItemName}>{item.name}</span>
                  </div>
                  <span>{item.calories} cal</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

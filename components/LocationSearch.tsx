"use client";

import React, { useState, useMemo } from 'react';
import styles from './LocationSearch.module.css';
import { StateLocations } from '@/data/locations';

interface LocationSearchProps {
  locationsData: StateLocations[];
}

export default function LocationSearch({ locationsData }: LocationSearchProps) {
  const [query, setQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('ALL');

  // Extract all available state names
  const availableStates = useMemo(() => {
    return locationsData.map(s => s.stateName);
  }, [locationsData]);

  // Memoize the filtering logic so it's snappy
  const filteredData = useMemo(() => {
    let result = locationsData;

    if (selectedState !== 'ALL') {
      result = result.filter(s => s.stateName.toLowerCase() === selectedState.toLowerCase());
    }

    if (!query.trim()) return result;

    const lowerQuery = query.toLowerCase();
    
    return result
      .map(stateData => {
        const matchingLocations = stateData.locations.filter(
          loc => 
            loc.city.toLowerCase().includes(lowerQuery) ||
            loc.address.toLowerCase().includes(lowerQuery) ||
            stateData.stateName.toLowerCase().includes(lowerQuery)
        );
        return { ...stateData, locations: matchingLocations };
      })
      .filter(stateData => stateData.locations.length > 0);
  }, [query, selectedState, locationsData]);

  return (
    <div className={styles.searchContainer} id="location-finder-widget">
      <div className={styles.searchHeader}>
        <h3 className={styles.searchHeading}>Find a Restaurant Near You</h3>
        <p className={styles.searchSub}>Search by ZIP code, city, or filter by state below.</p>
        
        <div className={styles.searchInputWrapper}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Enter ZIP code, city, or address..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className={styles.clearSearchBtn} onClick={() => setQuery('')}>✕</button>
          )}
        </div>

        {/* State Filter Pills */}
        <div className={styles.statePillsContainer}>
          <button
            className={`${styles.statePill} ${selectedState === 'ALL' ? styles.statePillActive : ''}`}
            onClick={() => setSelectedState('ALL')}
          >
            All States ({locationsData.reduce((acc, s) => acc + s.locations.length, 0)})
          </button>
          {availableStates.map(state => {
            const count = locationsData.find(s => s.stateName === state)?.locations.length || 0;
            return (
              <button
                key={state}
                className={`${styles.statePill} ${selectedState === state ? styles.statePillActive : ''}`}
                onClick={() => setSelectedState(selectedState === state ? 'ALL' : state)}
              >
                {state} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Display */}
      {filteredData.length > 0 ? (
        filteredData.map((stateInfo) => (
          <div key={stateInfo.stateName} className={styles.stateSection} id={`state-${stateInfo.stateName.toLowerCase()}`}>
            <div className={styles.stateHeader}>
              <h3 className={styles.stateTitle}>{stateInfo.stateName}</h3>
              <span className={styles.stateCount}>{stateInfo.locations.length} Locations</span>
            </div>
            <div className={styles.locationsGrid}>
              {stateInfo.locations.map((loc, idx) => (
                <div key={idx} className={styles.locationCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.cityBadge}>{loc.city}</span>
                    <span className={styles.openBadge}>Open Today: 11 AM – 11 PM</span>
                  </div>
                  
                  <p className={styles.address}>{loc.address}</p>
                  
                  <div className={styles.cardActions}>
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className={styles.phoneBtn} title="Call this location">
                      📞 {loc.phone}
                    </a>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className={styles.directionsBtn}
                      title="Open in Google Maps"
                    >
                      🧭 Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noResults}>
          <h4>No Locations Found</h4>
          <p>
            We couldn't find any Applebee's matching "{query}".
          </p>
          <button className={styles.resetBtn} onClick={() => { setQuery(''); setSelectedState('ALL'); }}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

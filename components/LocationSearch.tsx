"use client";

import React, { useState, useMemo } from 'react';
import styles from './LocationSearch.module.css';
import { StateLocations } from '@/data/locations';

interface LocationSearchProps {
  locationsData: StateLocations[];
}

export default function LocationSearch({ locationsData }: LocationSearchProps) {
  const [query, setQuery] = useState('');

  // Memoize the filtering logic so it's snappy
  const filteredData = useMemo(() => {
    if (!query.trim()) return locationsData;

    const lowerQuery = query.toLowerCase();
    
    return locationsData
      .map(stateData => {
        // Filter locations within the state
        const matchingLocations = stateData.locations.filter(
          loc => 
            loc.city.toLowerCase().includes(lowerQuery) ||
            loc.address.toLowerCase().includes(lowerQuery) ||
            stateData.stateName.toLowerCase().includes(lowerQuery) // If they search by state, return all in that state
        );
        return { ...stateData, locations: matchingLocations };
      })
      .filter(stateData => stateData.locations.length > 0); // Remove empty states
  }, [query, locationsData]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchHeader}>
        <h3>Find a Restaurant Near You</h3>
        <div className={styles.searchInputWrapper}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by city, state, or zip code..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredData.length > 0 ? (
        filteredData.map((stateInfo) => (
          <div key={stateInfo.stateName} className={styles.stateSection}>
            <h2 className={styles.stateTitle}>{stateInfo.stateName}</h2>
            <div className={styles.locationsGrid}>
              {stateInfo.locations.map((loc, idx) => (
                <div key={idx} className={styles.locationCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cityBadge}>{loc.city}</span>
                    <p className={styles.address}>{loc.address}</p>
                  </div>
                  <div className={styles.cardActions}>
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className={styles.phoneBtn}>
                      📞 {loc.phone}
                    </a>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className={styles.directionsBtn}
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
            <br/><br/>
            <strong>Note:</strong> Applebee's does not operate locations in Hawaii, Fiji, or US Territories. If you are searching in these areas, you will need to travel to the mainland.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useMemo } from 'react';
import styles from './LocationSearch.module.css';
import { StateLocations } from '@/data/locations';

interface LocationSearchProps {
  locationsData: StateLocations[];
  /** Keep the document outline intact: use h2 when the widget sits directly under the page h1. */
  headingLevel?: 'h2' | 'h3';
  /** Show results only after a search or state pick, so guide pages don't repeat the full directory. */
  compact?: boolean;
}

export default function LocationSearch({ locationsData, headingLevel = 'h3', compact = false }: LocationSearchProps) {
  const [query, setQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const Heading = headingLevel;
  const SubHeading = headingLevel === 'h2' ? 'h3' : 'h4';

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

  const showPrompt = compact && !query.trim() && selectedState === 'ALL';

  return (
    <div className={styles.searchContainer} id="location-finder-widget">
      <div className={styles.searchHeader}>
        <Heading className={styles.searchHeading}>Find a Restaurant Near You</Heading>
        <p className={styles.searchSub}>Search by ZIP code, city, or filter by state below.</p>

        <div className={styles.searchInputWrapper}>
          <span className={styles.searchIcon} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg></span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Enter ZIP code, city, or address..."
            aria-label="Search restaurants by ZIP code, city or address"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className={styles.clearSearchBtn} onClick={() => setQuery('')} aria-label="Clear search">✕</button>
          )}
        </div>

        {/* State Filter Pills */}
        <div className={styles.statePillsContainer}>
          <button
            className={`${styles.statePill} ${selectedState === 'ALL' ? styles.statePillActive : ''}`}
            onClick={() => setSelectedState('ALL')}
          >
            All states
          </button>
          {availableStates.map(state => (
            <button
              key={state}
              className={`${styles.statePill} ${selectedState === state ? styles.statePillActive : ''}`}
              onClick={() => setSelectedState(selectedState === state ? 'ALL' : state)}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* Results Display */}
      {showPrompt ? (
        <div className={styles.noResults}>
          <p>
            Type your city or ZIP code, or tap a state, to see nearby restaurants with phone numbers and
            directions.
          </p>
        </div>
      ) : filteredData.length > 0 ? (
        filteredData.map((stateInfo) => (
          <div key={stateInfo.stateName} className={styles.stateSection} id={`state-${stateInfo.stateName.toLowerCase()}`}>
            <div className={styles.stateHeader}>
              <SubHeading className={styles.stateTitle}>{stateInfo.stateName}</SubHeading>
            </div>
            <div className={styles.locationsGrid}>
              {stateInfo.locations.map((loc, idx) => (
                <div key={idx} className={styles.locationCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.cityBadge}>{loc.city}</span>
                    <span className={styles.openBadge}>Call for today&apos;s hours</span>
                  </div>

                  <p className={styles.address}>{loc.address}</p>

                  <div className={styles.cardActions}>
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className={styles.phoneBtn} title="Call this location">
                      Call {loc.phone}
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.directionsBtn}
                      title="Open in Google Maps"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noResults}>
          <p className={styles.searchHeading}>No Locations Found</p>
          <p>
            We couldn&apos;t find any Applebee&apos;s matching &quot;{query}&quot;. Try a nearby city or a ZIP code.
          </p>
          <button className={styles.resetBtn} onClick={() => { setQuery(''); setSelectedState('ALL'); }}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

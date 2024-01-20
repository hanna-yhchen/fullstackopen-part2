import { useState } from 'react';
import { CountryInformation } from './CountryInformation';

/**
 * @param {{country: Country}}
 */
export function CountryItem({ country }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li style={{ marginBottom: '0.5em' }}>
      {country.name}
      <button style={{ marginLeft: '1em' }} onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Hide' : 'Show'}</button>
      {isExpanded && <CountryInformation country={country} />}
    </li>
  );
}

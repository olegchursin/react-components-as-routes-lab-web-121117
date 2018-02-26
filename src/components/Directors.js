import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => {
        return(
          <div key={d.name}>
            <h3>{d.name}</h3>
            <ul>
              {d.movies.map(m => {
                return (
                  <li key={m}>{m}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors

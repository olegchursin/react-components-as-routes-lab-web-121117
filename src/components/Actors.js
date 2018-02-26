import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => {
        return (
          <div key={a.name}>
            <h3>{a.name}</h3>
            <ul>
              {a.movies.map(m => {
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
};

export default Actors;

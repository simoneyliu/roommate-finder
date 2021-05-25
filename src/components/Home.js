import React from 'react';
import '../styles/home.scss';

export function Home({ rentals }) {
  // console.log(rentals);
  return (
    <div>
      {rentals.map((rental) => (
        <div className='rental-card' key={rental.id}>
          {rental.formattedAddress}
        </div>
      ))}
    </div>
  );
}

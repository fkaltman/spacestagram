import React from 'react'


const SpacepicGrid = ({ items, isLoading }) => {
  
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
      <section className="cards">
  
        {[items].map((item) => (
      <h1>{item.explanation}</h1>
    ))}
  </section>
  )
}

export default SpacepicGrid

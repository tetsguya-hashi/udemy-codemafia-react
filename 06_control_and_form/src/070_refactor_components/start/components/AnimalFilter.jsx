import React from 'react'

const AnimalFilter = ({ fiterState }) => {
  const [filterVal, setFilterVal] = fiterState;
  return (
    <input
      type="text"
      value={filterVal}
      onChange={(e) => setFilterVal(e.target.value)}
    />
  )
}

export default AnimalFilter
import React from 'react'

const AnimalItem = ({ animal }) => {
  return (
    <li key={animal}>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  )
}

export default AnimalItem
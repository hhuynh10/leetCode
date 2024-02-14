import React from 'react'

const PersonCard = ({ name, age, phoneNumber, address, children}) => {
  return (
    <div>
        <h3>{children}</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Address: {address}</p>
    </div>
  )
}

export default PersonCard
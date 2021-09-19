import React from 'react'

const SpacePic = ({item}) => {
  return (
    <div>
      <img src={item.url} alt="The Nasa picture of the day" />
    </div>
  )
}

export default SpacePic

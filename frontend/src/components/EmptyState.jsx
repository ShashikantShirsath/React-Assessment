import React from 'react'

const EmptyState = ({date}) => {
    const formattedDate = date.replace(/-/g, ' ');
  return (
    <div className='empty'>
        <p>There are no strategies for</p> <strong>{formattedDate}</strong>
    </div>
  )
}

export default EmptyState

import React from 'react'

const StrategyCard = ({ name, count }) => {
    return (
        <div className='card'>
            <span className='card-name'>{name}</span>
            <span className='count'>
                <span className='card-circular-dot' />{count} {count === 1 ? 'Strategy' : 'Strategies'}
            </span>
        </div>
    )
}

export default StrategyCard

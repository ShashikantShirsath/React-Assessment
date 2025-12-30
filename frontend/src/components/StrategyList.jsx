import React from 'react'
import StrategyCard from './StrategyCard'
import EmptyState from './EmptyState'

const StrategyList = ({ view, date, data }) => {
    const viewData = data.find(item => item.View === view);
    const strategies = viewData?.Value[date] || [];

    if (strategies.length === 0) {
        return <EmptyState date={date} />
    };

    const countMap = strategies.reduce((acc, strategy) => {
        acc[strategy] = (acc[strategy] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className='card-list'>
            {Object.entries(countMap).map(([name, count]) => (
                <StrategyCard
                    key={name}
                    name={name}
                    count={count}
                />
            ))}
        </div>
    )
}

export default StrategyList

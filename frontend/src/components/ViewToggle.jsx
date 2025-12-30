import React from 'react'

const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

const ViewToggle = ({ selectedView, onChange }) => {
    return (
        <div className='tabs'>
            {views.map(view => (
                <button
                    key={view}
                    className={view === selectedView ? 'active' : ''}
                    style={{opacity: view !== selectedView ? '0.4' : '1'}}
                    onClick={() => onChange(view)}
                >
                    {view}
                </button>
            ))}
        </div>
    )
}

export default ViewToggle

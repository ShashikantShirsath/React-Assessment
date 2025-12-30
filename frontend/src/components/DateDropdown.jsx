import React, { useEffect, useRef, useState } from 'react'

const DateDropdown = ({ dates, selectedDate, onChange }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const handleSelect = (date) => {
        onChange(date);
        setOpen(false);
    }

    const formattedDate = (date) => date.replace(/-/g, ' ');

    return (
        <div className='custom-dropdown' ref={dropdownRef}>
            <div className='dropdown-header' onClick={() => setOpen(!open)}>
                <span style={{ fontWeight: 600 }}>{formattedDate(selectedDate) || "Select Date"}</span>
                <span className={`arrow ${open ? "up" : "down"}`} />
            </div>

            {open && (
                <div className='dropdown-list'>
                    {dates.map((date) => (
                        <div
                            key={date}
                            className={`dropdown-item ${selectedDate === date ? 'selected' : ''}`}
                            onClick={() => handleSelect(date)}
                        >
                            {formattedDate(date)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DateDropdown

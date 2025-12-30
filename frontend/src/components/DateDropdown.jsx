import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react";

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
                {open ? (
                    <ChevronUp size={18} color="#2563eb" />
                ) : (
                    <ChevronDown size={18} color="#2563eb" />
                )}
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

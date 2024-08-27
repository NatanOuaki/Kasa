import React, { useState } from 'react';
import './dropdown.css';
import arrow_up from '../../assets/img/arrow_up.png';
import arrow_down from '../../assets/img/arrow_down.png';

function Dropdown({ content, type }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropdown'>
            <div className='dropdown-header'>
                <p className='type'>{type}</p>
                <img className='arrow_up_down' src={isOpen ? arrow_down : arrow_up} alt={isOpen ? 'arrow down' : 'arrow up'} onClick={toggleDropdown} />
            </div>
            {isOpen && (
                <div className='dropdown-content'>
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dropdown;

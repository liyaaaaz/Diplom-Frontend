import React from 'react';

const Arrow = ({ direction, onClick, green }) => {
    return (
        <div
            className={`absolute top-1/2 ${direction === 'right' ? 'right-2' : 'left-2'} transform -translate-y-1/2 cursor-pointer`}
            onClick={onClick}
        >
            {direction === 'right' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${green && 'text-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${green && 'text-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            )}
        </div>
    );
};

export default Arrow;

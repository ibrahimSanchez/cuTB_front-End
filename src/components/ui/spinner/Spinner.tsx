import React from 'react';

export default function Spinner() {
    return (
        <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[--primary] border-opacity-75"></div>
        </div>
    );
}

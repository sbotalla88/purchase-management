import React from 'react';

export const Progress = (props: React.SVGAttributes<SVGElement>) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M9.5 1.5C9.5 0.6875 8.8125 0 8 0C7.15625 0 6.5 0.6875 6.5 1.5C6.5 2.34375 7.15625 3 8 3C8.8125 3 9.5 2.34375 9.5 1.5ZM9.5 14.5C9.5 13.6875 8.8125 13 8 13C7.15625 13 6.5 13.6875 6.5 14.5C6.5 15.3438 7.15625 16 8 16C8.8125 16 9.5 15.3438 9.5 14.5ZM1.5 9.5C2.3125 9.5 3 8.84375 3 8C3 7.1875 2.3125 6.5 1.5 6.5C0.65625 6.5 0 7.1875 0 8C0 8.84375 0.65625 9.5 1.5 9.5ZM16 8C16 7.1875 15.3125 6.5 14.5 6.5C13.6562 6.5 13 7.1875 13 8C13 8.84375 13.6562 9.5 14.5 9.5C15.3125 9.5 16 8.84375 16 8ZM4.4375 13.6562C5.03125 13.0938 5.03125 12.125 4.4375 11.5625C3.875 10.9688 2.90625 10.9688 2.34375 11.5625C1.75 12.125 1.75 13.0938 2.34375 13.6562C2.90625 14.25 3.875 14.25 4.4375 13.6562ZM4.4375 4.46875C5.03125 3.90625 5.03125 2.9375 4.4375 2.34375C3.875 1.78125 2.90625 1.78125 2.34375 2.34375C1.75 2.9375 1.75 3.90625 2.34375 4.46875C2.90625 5.0625 3.875 5.0625 4.4375 4.46875ZM11.5312 13.6562C12.0938 14.25 13.0625 14.25 13.6562 13.6562C14.2188 13.0938 14.2188 12.125 13.6562 11.5625C13.0625 10.9688 12.0938 10.9688 11.5312 11.5625C10.9375 12.125 10.9375 13.0938 11.5312 13.6562Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default Progress;
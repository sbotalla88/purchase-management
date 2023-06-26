export const VendorIcon = ({ width = '32px', height = '32px', ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x="7.28551"
                y="2.14293"
                width="0.857143"
                height="4.28571"
                rx="0.428571"
                stroke="white"
                strokeWidth="0.857143"
            />
            <rect
                x="15.8573"
                y="2.14293"
                width="0.857143"
                height="4.28571"
                rx="0.428571"
                stroke="white"
                strokeWidth="0.857143"
            />
            <rect
                x="9.85728"
                y="18.4286"
                width="4.28571"
                height="0.857143"
                rx="0.428571"
                stroke="white"
                strokeWidth="0.857143"
            />
        </svg>
    );
};

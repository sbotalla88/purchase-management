export const EditIcon = ({ width = '25px', height = '25px', stroke = '#6B96B5', ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.8334 4.66666H4.66671C4.04787 4.66666 3.45438 4.91249 3.01679 5.35007C2.57921 5.78766 2.33337 6.38115 2.33337 6.99999V23.3333C2.33337 23.9522 2.57921 24.5457 3.01679 24.9832C3.45438 25.4208 4.04787 25.6667 4.66671 25.6667H21C21.6189 25.6667 22.2124 25.4208 22.65 24.9832C23.0875 24.5457 23.3334 23.9522 23.3334 23.3333V15.1667"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.5834 2.91668C22.0475 2.45255 22.677 2.1918 23.3334 2.1918C23.9898 2.1918 24.6192 2.45255 25.0834 2.91668C25.5475 3.38081 25.8082 4.0103 25.8082 4.66668C25.8082 5.32305 25.5475 5.95255 25.0834 6.41668L14 17.5L9.33337 18.6667L10.5 14L21.5834 2.91668Z"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

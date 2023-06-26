export const JobHistoryIcon = ({ width = '32px', height = '32px', ...props }) => {
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
                d="M12.0002 2.83325L2.8335 7.41659L12.0002 11.9999L21.1668 7.41659L12.0002 2.83325Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.8335 16.5833L12.0002 21.1666L21.1668 16.5833"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.8335 12L12.0002 16.5833L21.1668 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

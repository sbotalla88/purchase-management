export const UpHeader = ({ width = '12px', height = '12px', fill = '', ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="scale(1, -1)"
            {...props}
        >
            <path d="M6 10L0.803848 4H11.1962L6 10Z" fill={fill || '#D5DEE4'} />
        </svg>
    );
};

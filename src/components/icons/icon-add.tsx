export const AddIcon = ({ width = '26px', height = '26px', circleFill = '#FFF', rectFill = '#6B96B5', ...props }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="13" cy="13" r="13" fill={circleFill} />
            <rect x="12" y="8" width="2" height="10" rx="1" fill={rectFill} />
            <rect x="18" y="12" width="2" height="10" rx="1" transform="rotate(90 18 12)" fill={rectFill} />
        </svg>
    );
};

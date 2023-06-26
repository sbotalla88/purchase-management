export const ClockIcon = ({
    width = '24px',
    height = '24px',
    fill = 'currentColor',
    stroke = 'currentColor',
    strokeWidth = '.2',
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            fillRule="evenodd"
            clipRule="evenodd"
            {...props}
        >
            <g fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11S1 18.071 1 12 5.929 1 12 1zm0 11h6v1h-7V4h1v8z"></path>
            </g>
        </svg>
    );
};

export const PlusIcon = ({ width = '25px', height = '25px', ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 25 25"
            xmlSpace="preserve"
            fillRule="evenodd"
            clipRule="evenodd"
            {...props}
        >
            <g fill="currentColor" stroke="currentColor" strokeWidth=".2">
                <path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"></path>
            </g>
        </svg>
    );
};

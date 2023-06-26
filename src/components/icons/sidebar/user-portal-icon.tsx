export const UserPortalIcon: React.FC<React.SVGAttributes<{}>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
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
        <circle cx="18.5" cy="17.5" r="2.5" stroke="white" strokeWidth="2" />
        <mask id="mask0_4959_713" maskUnits="userSpaceOnUse" x="14" y="13" width="9" height="9">
            <circle cx="18.5" cy="17.5" r="4" stroke="white" />
        </mask>
        <g mask="url(#mask0_4959_713)">
            <path d="M18.5 13.5V21.5" stroke="white" strokeLinecap="round" />
            <path d="M14.5 17.5H22.5" stroke="white" strokeLinecap="round" />
            <path d="M15.6719 14.6716L21.3287 20.3285" stroke="white" strokeLinecap="round" />
            <path d="M15.6719 20.3284L21.3287 14.6715" stroke="white" strokeLinecap="round" />
        </g>
    </svg>
);

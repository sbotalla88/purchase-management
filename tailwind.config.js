const colors = require('tailwindcss/colors');

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        } else {
            return `rgb(var(${variableName}))`;
        }
    };
}

module.exports = {
    content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '300px',
                sm: '640px',
                md: '768px',
                lg: '1025px',
                xl: '1280px',
                '2xl': '1536px',
                '3xl': '1900px',
            },
            fontFamily: {
                body: ['Open Sans', 'system-ui', 'sans-serif'],
                heading: ['Open Sans', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                '1xl': '1.4rem',
            },
            colors: {
                light: withOpacity('--color-light'),
                dark: withOpacity('--color-dark'),
                accent: withOpacity('--color-accent'),
                'accent-hover': withOpacity('--color-accent-hover'),
                'accent-300': withOpacity('--color-accent-300'),
                'accent-400': withOpacity('--color-accent-400'),
                'accent-500': withOpacity('--color-accent-500'),
                'accent-600': withOpacity('--color-accent-600'),
                'accent-700': withOpacity('--color-accent-700'),
                'border-50': withOpacity('--color-border-50'),
                'border-100': withOpacity('--color-border-100'),
                'border-200': withOpacity('--color-border-200'),
                'border-base': withOpacity('--color-border-base'),
                'border-400': withOpacity('--color-border-400'),
                'gray-50': withOpacity('--color-gray-50'),
                'gray-100': withOpacity('--color-gray-100'),
                'gray-200': withOpacity('--color-gray-200'),
                'gray-300': withOpacity('--color-gray-300'),
                'gray-400': withOpacity('--color-gray-400'),
                'gray-500': withOpacity('--color-gray-500'),
                'gray-600': withOpacity('--color-gray-600'),
                'gray-700': withOpacity('--color-gray-700'),
                'gray-800': withOpacity('--color-gray-800'),
                'gray-900': withOpacity('--color-gray-900'),
                'blue-10': withOpacity('--color-blue-10'),
                'blue-50': withOpacity('--color-blue-50'),
                'blue-100': withOpacity('--color-blue-100'),
                'blue-200': withOpacity('--color-blue-200'),
                'blue-400': withOpacity('--color-blue-400'),
                'light-grey': '#616161',
                'blue-cta-900': withOpacity('--blue-cta-900'),
                'light-cta-blue': '#EEF4F9',
                'blue-cta': '#273E61',
                'blue-placeholder': '#5476A6',
                'bg-grey': '#E1E2E6',
                purp: '#66094E',
                social: {
                    facebook: '#3b5998',
                    'facebook-hover': '#35508a',
                    twitter: '#1da1f2',
                    instagram: '#e1306c',
                    youtube: '#ff0000',
                    google: '#4285f4',
                    'google-hover': '#3574de',
                },
                'cta-black': '#040B26',
                'light-blue': '#004277',
                'fade-blue': '#6B96B5',
                'blue-450': '#7699C1',
                sharpBlue: '#496079',
                'light-gray': '#F0F0F0',
                'cta-blue': '#00467F',
                'cyan-650': '#009ca6',
                'light-green': '#27bfc9',
                'fade-light-green': 'rgb(187 247 208)',
                'fade-light-orange': 'rgb(254 215 170)',
                maroon: '#6d1455',
                'regal-blue': '#243c5a',
                warn: '#FFA31A',
                yellow: colors.amber,
                purple: colors.violet,
            },

            textColor: {
                body: withOpacity('--text-base'),
                'body-dark': withOpacity('--text-base-dark'),
                muted: withOpacity('--text-muted'),
                'muted-light': withOpacity('--text-muted-light'),
                heading: withOpacity('--text-heading'),
                'sub-heading': withOpacity('--text-sub-heading'),
                bolder: withOpacity('--text-text-bolder'),
            },

            height: {
                13: '3.125rem',
                double: '200%',
            },
            maxWidth: {
                5: '1.25rem',
                40: '10rem',
            },
            maxHeight: {
                5: '1.25rem',
            },
            spacing: {
                22: '5.5rem',
            },

            borderRadius: {
                DEFAULT: '5px',
            },

            boxShadow: {
                base: 'rgba(0, 0, 0, 0.16) 0px 4px 16px',
                sm: '0px 10px 20px rgba(58, 70, 84, 0.12)',
            },
            gridTemplateColumns: {
                fit: 'repeat(auto-fit, minmax(0, 1fr))',
            },
            backgroundImage: {
                'side-gradient':
                    'linear-gradient(120deg, #00295a ,#00295a 62%, #004277 62%, #004277 90%, #00295a 10%);',
            },
        },
    },
    plugins: [require('tailwindcss-rtl')],
};

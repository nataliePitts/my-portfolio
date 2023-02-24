module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#133B5C',
          DEFAULT: '#1fb6ff',
          dark: '#1D2D50',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        warm: {
          darkest: '#DBD0C0',
          dark: '#F9E4C8',
          DEFAULT: '#c0ccda',
          light: '#FAEEE0',
          lightest: '#f9fafc',
        },
        brown: {
          darkest: '#483434',
          dark: '#6B4F4F',
          DEFAULT: '#EED6C4',
          light: '#EED6C4',
          lightest: '#FFF3E4',
        },
        purple: {
          darkest: '#424874',
          dark: '#A6B1E1',
          DEFAULT: '#DCD6F7',
          light: '#DCD6F7',
          lightest: '#F4EEFF',

        },
        green: {
          dark: '#4BAEA0',
          DEFAULT: '#CAF7E3',
          light: '#1DB9C3',
        },
        newwinter: {
          darkest: '#7D5A50',
          dark: '#B4846C',
          DEFAULT: '#B7C4CF',
          light: '#E5B299',
          lightest: '#FCDEC0',

        }

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
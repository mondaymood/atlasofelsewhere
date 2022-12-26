module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/*.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    extend: {
    },
    container: {
      center: true,
      padding: '1rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'sage': {
        DEFAULT: '#707862',
        '50': '#F7F8F5',
        '100': '#E8EAE5',
        '200': '#e3e8dd',
        '300': '#ADB3A2',
        '400': '#8F9780',
        '500': '#707862',
        '600': '#5B6150',
        '700': '#464B3D',
        '800': '#31352B',
        '900': '#1C1E19'
      },
      'graphit': {
        DEFAULT: '#444444',
        '50': '#A0A0A0',
        '100': '#969696',
        '200': '#e3e8dd',
        '300': '#6D6D6D',
        '400': '#585858',
        '500': '#444444',
        '600': '#3A3A3A',
        '700': '#303030',
        '800': '#252525',
        '900': '#1B1B1B'
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
      display: ['Canela', 'serif'],
      handwritten: ['Anderson', 'serif'],
    },
  },
  plugins: [],

}



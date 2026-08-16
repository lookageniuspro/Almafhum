module.exports = {
  content: ['./*.html', './js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:   'rgb(var(--c-primary) / <alpha-value>)',
        secondary: 'rgb(var(--c-secondary) / <alpha-value>)',
        accent:    'rgb(var(--c-accent) / <alpha-value>)',
        accent2:   'rgb(var(--c-accent2) / <alpha-value>)',
        surface:   'rgb(var(--c-surface) / <alpha-value>)',
        card:      'rgb(var(--c-card) / <alpha-value>)',
        content:   'rgb(var(--c-content) / <alpha-value>)',
        muted:     'rgb(var(--c-muted) / <alpha-value>)',
        line:      'rgb(var(--c-line) / <alpha-value>)',
        success:   'rgb(var(--c-success) / <alpha-value>)',
        info:      'rgb(var(--c-info) / <alpha-value>)',
        warning:   'rgb(var(--c-warning) / <alpha-value>)',
        error:     'rgb(var(--c-error) / <alpha-value>)'
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-d1': 'fadeUp 0.8s ease-out 0.1s forwards',
        'fade-up-d2': 'fadeUp 0.8s ease-out 0.2s forwards',
        'fade-up-d3': 'fadeUp 0.8s ease-out 0.3s forwards',
        'fade-up-d4': 'fadeUp 0.8s ease-out 0.4s forwards'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      }
    }
  },
  plugins: []
};

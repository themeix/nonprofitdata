module.exports = {
  mode: 'jit',
  purge: ['./*.html','./*/*.html'],
  darkMode: false,
  corePlugins: {
    container: true 
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({

        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1100px',
          },
          '@screen 2xl': {
            maxWidth: '1140px',
          },


        }

      })
    }
  ],
  theme: {
     extend: {
      container: {
        center: true,
        padding: '1rem',
      }, 
      colors: {    
        black:{
          100: '#000000',
          400: '#7f7f7f',
          500: '#595959',
        },
        gray:{
          100: '#d2d2d2',
 
        },
        sky:{
          100: '#1a96d1',
          200: '#1696d2',
          900: '#0a4c6a',
        
        },
       
        backgroundImage: {
          "curved-blue-gradient": "url(/imagenes/precios/curved-blue-gradient-bg.svg)",
          "hero-cyan-gradient": "linear-gradient(360deg, rgba(3, 90, 224, 0.2) 0%, rgba(247, 250, 255, 0) 111.49%);",
        },
        
         
      },
      fontFamily: {
        lato: [
          '"Lato", sans-serif',
        ],
        
      },

    },
  },
  // Other stuff
};
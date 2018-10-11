import Typography from 'typography';
import { injectGlobal } from 'emotion';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400', '800'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['300'],
    },
  ],
  headerFontFamily: ['Raleway', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'Helvetica', 'sans-serif'],
});

injectGlobal`
  body {
    background-color: #f3f3f3;
  }
`;

export default typography;

import Typography from 'typography';
import { injectGlobal } from 'emotion';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Google Sans',
      styles: ['400', '800'],
    },
  ],
  headerFontFamily: ['Google Sans', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Google Sans', 'Helvetica', 'sans-serif'],
});

injectGlobal`
  body {
    background-color: #f3f3f3;
  }
`;

export default typography;

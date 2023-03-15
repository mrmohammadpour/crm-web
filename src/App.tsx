
import './App.css';
import Layout from './layout/layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import { CssBaseline } from '@mui/material';
import { Rtt } from '@mui/icons-material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import Wl_route from './route/route';
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],

    },
  },
  typography: {
    fontFamily: ['IRANSansDigit'].join(','),
  },
  direction: 'rtl',
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face{font-family:IRANSans;font-style:normal;font-weight:700;src:url(./fonts/IRANSans/eot/IRANSansWeb_Bold.eot);src:url(./fonts/IRANSans/eot/IRANSansWeb_Bold.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANSans/woff2/IRANSansWeb_Bold.woff2) format("woff2"),url(./fonts/IRANSans/woff/IRANSansWeb_Bold.woff) format("woff"),url(./fonts/IRANSans/ttf/IRANSansWeb_Bold.ttf) format("truetype")}@font-face{font-family:IRANSans;font-style:normal;font-weight:500;src:url(./fonts/IRANSans/eot/IRANSansWeb_Medium.eot);src:url(./fonts/IRANSans/eot/IRANSansWeb_Medium.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANSans/woff2/IRANSansWeb_Medium.woff2) format("woff2"),url(./fonts/IRANSans/woff/IRANSansWeb_Medium.woff) format("woff"),url(./fonts/IRANSans/ttf/IRANSansWeb_Medium.ttf) format("truetype")}@font-face{font-family:IRANSans;font-style:normal;font-weight:300;src:url(./fonts/IRANSans/eot/IRANSansWeb_Light.eot);src:url(./fonts/IRANSans/eot/IRANSansWeb_Light.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANSans/woff2/IRANSansWeb_Light.woff2) format("woff2"),url(./fonts/IRANSans/woff/IRANSansWeb_Light.woff) format("woff"),url(./fonts/IRANSans/ttf/IRANSansWeb_Light.ttf) format("truetype")}@font-face{font-family:IRANSans;font-style:normal;font-weight:200;src:url(./fonts/IRANSans/eot/IRANSansWeb_UltraLight.eot);src:url(./fonts/IRANSans/eot/IRANSansWeb_UltraLight.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANSans/woff2/IRANSansWeb_UltraLight.woff2) format("woff2"),url(./fonts/IRANSans/woff/IRANSansWeb_UltraLight.woff) format("woff"),url(./fonts/IRANSans/ttf/IRANSansWeb_UltraLight.ttf) format("truetype")}@font-face{font-family:IRANSans;font-style:normal;font-weight:400;src:url(./fonts/IRANSans/eot/IRANSansWeb.eot);src:url(./fonts/IRANSans/eot/IRANSansWeb.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANSans/woff2/IRANSansWeb.woff2) format("woff2"),url(./fonts/IRANSans/woff/IRANSansWeb.woff) format("woff"),url(./fonts/IRANSans/ttf/IRANSansWeb.ttf) format("truetype")}@font-face{font-family:IRANSansDigit;font-style:normal;font-weight:400;src:url(./fonts/IRANSans/woff/IRANSansWebFaNum.woff) format("woff");src:url(./fonts/IRANSans/ttf/IRANSansWebFaNum.ttf) format("truetype")}@font-face{font-family:IRANSansDigit;font-style:normal;font-weight:700;src:url(./fonts/IRANSans/woff/IRANSansWebFaNum_Bold.woff) format("woff");src:url(./fonts/IRANSans/ttf/IRANSansWebFaNum_Bold.ttf) format("truetype")}@font-face{font-family:IRANSansDigit;font-style:normal;font-weight:400;src:url(./fonts/IRANSans/woff/IRANSansWebFaNum_Medium.woff) format("woff");src:url(./fonts/IRANSans/ttf/IRANSansWebFaNum_Medium.ttf) format("truetype")}@font-face{font-family:IRANSansDigit;font-style:normal;font-weight:300;src:url(./fonts/IRANSans/woff/IRANSansWebFaNum_Light.woff) format("woff");src:url(./fonts/IRANSans/ttf/IRANSansWebFaNum_Light.ttf) format("truetype")}@font-face{font-family:IRANSansDigit;font-style:normal;font-weight:200;src:url(./fonts/IRANSans/woff/IRANSansWebFaNum_UltraLight.woff) format("woff");src:url(./fonts/IRANSans/ttf/IRANSansWebFaNum_UltraLight.ttf) format("truetype")}@font-face{font-family:iranyekan;font-style:normal;font-weight:700;src:url(./fonts/IRANYekan/eot/iranyekanwebbold.eot);src:url(./fonts/IRANYekan/eot/iranyekanwebbold.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANYekan/woff2/iranyekanwebbold.woff2) format("woff2"),url(./fonts/IRANYekan/woff/iranyekanwebbold.woff) format("woff"),url(./fonts/IRANYekan/ttf/iranyekanwebbold.ttf) format("truetype")}@font-face{font-family:iranyekan;font-style:normal;font-weight:300;src:url(./fonts/IRANYekan/eot/iranyekanweblight.eot);src:url(./fonts/IRANYekan/eot/iranyekanweblight.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANYekan/woff2/iranyekanweblight.woff2) format("woff2"),url(./fonts/IRANYekan/woff/iranyekanweblight.woff) format("woff"),url(./fonts/IRANYekan/ttf/iranyekanweblight.ttf) format("truetype")}@font-face{font-family:iranyekan;font-style:normal;font-weight:400;src:url(./fonts/IRANYekan/eot/iranyekanwebregular.eot);src:url(./fonts/IRANYekan/eot/iranyekanwebregular.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANYekan/woff2/iranyekanwebregular.woff2) format("woff2"),url(./fonts/IRANYekan/woff/iranyekanwebregular.woff) format("woff"),url(./fonts/IRANYekan/ttf/iranyekanwebregular.ttf) format("truetype")}@font-face{font-family:IRANYekanDigit;font-style:normal;font-weight:400;src:url./fonts/IRANYekan/woff/iranyekanwebregular(fanum).woff) format("woff");src:url(./fonts/IRANYekan/ttf/iranyekanwebregular(fanum).ttf) format("truetype")}@font-face{font-family:IRANYekanDigit;font-style:normal;font-weight:300;src:url(./fonts/IRANYekan/woff/iranyekanweblight(fanum).woff) format("woff");src:url(./fonts/IRANYekan/ttf/iranyekanweblight(fanum).ttf) format("truetype")}@font-face{font-family:IRANYekanDigit;font-style:normal;font-weight:700;src:url(./fonts/IRANYekan/woff/iranyekanwebbold(fanum).woff) format("woff");src:url(./fonts/IRANYekan/ttf/iranyekanwebbold(fanum).ttf) format("truetype")}@font-face{font-family:roboto;font-style:normal;font-weight:700;src:url(./fonts/IRANYekan/eot/robotobold.eot);src:url(./fonts/IRANYekan/eot/robotobold.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANYekan/woff2/robotobold.woff2) format("woff2"),url(./fonts/IRANYekan/woff/robotobold.woff) format("woff"),url(./fonts/IRANYekan/ttf/robotobold.ttf) format("truetype")}@font-face{font-family:roboto;font-style:normal;font-weight:300;src:url(./fonts/IRANYekan/eot/robotolight.eot);src:url(./fonts/IRANYekan/eot/robotolight.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANYekan/woff2/robotolight.woff2) format("woff2"),url(./fonts/IRANYekan/woff/robotolight.woff) format("woff"),url(./fonts/IRANYekan/ttf/robotolight.ttf) format("truetype")}@font-face{font-family:roboto;font-style:normal;font-weight:400;src:url(./fonts/IRANYekan/eot/robotoregular.eot);src:url(./fonts/IRANYekan/eot/robotoregular.eot?#iefix) format("embedded-opentype"),url(./fonts/IRANYekan/woff2/robotoregular.woff2) format("woff2"),url(./fonts/IRANYekan/woff/robotoregular.woff) format("woff"),url(./fonts/IRANYekan/ttf/robotoregular.ttf) format("truetype")}.yekan-digit{font-family:IRANYekanDigit}.sans-digit{font-family:IRANSansDigit}`
    }
  }
});



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
   
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <CacheProvider value={cacheRtl}>
          <BrowserRouter>
            <Wl_route></Wl_route>
          </BrowserRouter>

      </CacheProvider>
    </ThemeProvider>
  );
}
export default App;

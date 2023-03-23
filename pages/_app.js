import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/globals.css';
import TopBar from 'components/modules/TopBar';
import Footer from 'components/modules/Footer';
import { ProjectProvider } from 'context/ModalContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: ['Hebden Grotesque', 'Andale Mono', 'Andale Mono Italic'].join(
      ',',
    ),
    fontSize: 16,
    '@media (min-width:600px)': {
      fontSize: 12,
    },
    h1: {
      fontFamily: 'Hebden Grotesque',
      fontSize: '3.188rem',
      lineHeight: '66pt',
      letterSpacing: '0.1em',
    },
    h2: {
      fontFamily: 'Hebden Grotesque',
      fontSize: '2.625rem',
      lineHeight: '54pt',
      letterSpacing: '0.1em',
    },
    h3: {
      fontFamily: 'Hebden Grotesque',
      fontSize: '2.438rem',
      lineHeight: '47pt',
    },
    h4: {
      fontFamily: 'Hebden Grotesque',
      fontSize: '1.75rem',
      lineHeight: '36pt',
      letterSpacing: '0.2em',
    },
    h5: {
      fontFamily: 'Hebden Grotesque',
      fontSize: '1.438rem',
      lineHeight: '28pt',
    },
    h6: {
      fontFamily: 'Hebden Grotesque',
      fontSize: '1.375rem',
      lineHeight: '19pt',
      letterSpacing: '0.2em',
    },
    subtitle1: {
      fontFamily: 'Andale Mono',
      fontSize: '2.313rem',
      lineHeight: '44pt',
    },
    subtitle2: {
      fontFamily: 'Andale Mono',
      fontSize: '1.875rem',
      lineHeight: '36pt',
    },
    subtitle3: {
      fontFamily: 'Andale Mono',
      fontSize: '1.438rem',
      lineHeight: '28pt',
      letterSpacing: '0.11em',
    },
    subtitle4: {
      fontFamily: 'Andale Mono',
      fontSize: '1.375rem',
      lineHeight: '26pt',
      letterSpacing: '0.11em',
    },
    subtitle5: {
      fontFamily: 'Andale Mono',
      fontSize: '1.25rem',
      lineHeight: '24pt',
      letterSpacing: '0.11em',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <ProjectProvider>
        <Component {...pageProps} />
      </ProjectProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;

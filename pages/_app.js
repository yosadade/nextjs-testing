import '../styles/globals.css';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { store } from '../src/app/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
};

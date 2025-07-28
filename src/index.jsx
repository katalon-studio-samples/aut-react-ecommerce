import { Preloader } from '@/components/common';
import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import 'react-phone-input-2/lib/style.css';
import { onAuthStateFail, onAuthStateSuccess } from '@/redux/actions/authActions';
import configureStore from '@/redux/store/store';
import '@/styles/style.scss';
import WebFont from 'webfontloader';
import App from './App';
import firebase from '@/services/firebase';

WebFont.load({
  google: {
    families: ['Tajawal']
  }
});

const { store, persistor } = configureStore();
const root = document.getElementById('app');

// Render the preloader on initial load
render(<Preloader />, root);

firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    TrueTest.setSessionAttributes({
      email: user.email,
      providerId: user.providerData[0].providerId,
      displayName: user.providerData[0].displayName,
      photoUrl: user.providerData[0].photoUrl,
      thisIsForTrueTestTesting123_long_key_display_name_heioHHDNMTesting98 = '-test-add-tri-!this_value_is_random_from_xu_029392_%@%@&_hello_uuid_value_test_1283839303838393'
    });
    store.dispatch(onAuthStateSuccess(user));
  } else {
    TrueTest.setSessionAttributes({
      email: 'anonymous',
      providerId: 'no',
    });
    store.dispatch(onAuthStateFail('Failed to authenticate'));
  }
  // then render the app after checking the auth state
  render(<App store={store} persistor={persistor} />, root);
});

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

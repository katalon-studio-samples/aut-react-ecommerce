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
      key-01_1#@%^$&*(#): 'abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !"§ $%& /() =?* '<> #|; ²³~ @`´ ©«» ¤¼× {} abc def ghi jkl mno pqrs tuv wxyz ABC D DEF',
      key_02: 'abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !"§ $%& /(!"§ $%& /() =?* '<> #|; ²³~ @`´ ©«» ¤¼× {} abc def ghi jkl mno pqrs tuv wx',
      key_03_testing_long_255_characters_key______________dummy_-----+__00384793739303!@%--d=djkdfgjksngkfshidufhgosdgnjkdfngjshfgusy4y5g5328492502hdisisisi_____dummy_-----+__003847937_____dummy_-----+__003847937_____dummy_-----+__003847937_____dummy_-----+__: 'key_02_testing_long_255_characters_key______________dummy_-----+__00384793739303!@%--d=djkdfgjksngkfshidufhgosdgnjkdfngjshfgusy4y5g5328492502hdisisisi_____dummy_-----+__003847937_____dummy_-----+__003847937_____dummy_-----+__003847937_____dummy_-----+__',
      'key_04': 'testtinh_key 03 with space',
      'key_05': '@#($8484994 10c9e703-16de-40af-8225-9af018adfa68',
      'key_06_10c9e703-16de-40af-8225-9af018adfa68': 'session_timestampt_a651ad3e-91a9-4d25-aeab-54b638d55955',
      'a651ad3e-91a9-4d25-aeab-54b638d55955': '0XE77D101C647747C488AA751376B08A06',
      '1234456779594030393838383848949404847474948484': 1234456779594030393838383848949404847474948484,
      'KEY_06': '0XE77D101C647747C488AA751376B08A06 0XA529143872B1446A9D98026B6EF22D1D'
      thisIsForTrueTestTesting123_long_key_display_name_heioHHDNMTesting98: '~!@#$%^?-test-add-tri-!this_value_is_random_from_xu_029392_%@%@&_hello_uuid_value_test_1283839303838393'
    });
    store.dispatch(onAuthStateSuccess(user));
  } else {
    TrueTest.setSessionAttributes({
      email: 'anonymous',
      providerId: 'no',
      'key_05_10c9e703-16de-40af-8225-9af018adfa68' = 'session_timestampt_a651ad3e-91a9-4d25-aeab-54b638d55955',
      'a651ad3e-91a9-4d25-aeab-54b638d55955' = '0XE77D101C647747C488AA751376B08A06'
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

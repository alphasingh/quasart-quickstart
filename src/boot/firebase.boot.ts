// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot((/* { app, router, ... } */) => {
  // import { getAnalytics } from 'firebase/analytics';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyDEnpfRK9sj6lpncBymnImcDEthMB6QFMU',
    authDomain: 'quick-start-922a9.firebaseapp.com',
    projectId: 'quick-start-922a9',
    storageBucket: 'quick-start-922a9.appspot.com',
    messagingSenderId: '751051893418',
    appId: '1:751051893418:web:6e7e3799df6feccb357ed3',
    measurementId: 'G-6JFFEHDHPT',
  };
  // Initialize Firebase
  // const app =
  // const analytics = getAnalytics(app);
  initializeApp(firebaseConfig);
  console.log('Firebase init succes');
});

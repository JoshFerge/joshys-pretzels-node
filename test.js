const Sentry = require("@sentry/node");
// or use es6 import statements
// import * as Sentry from '@sentry/node';

const Tracing = require("@sentry/tracing");
// or use es6 import statements
// import * as Tracing from '@sentry/tracing';
Sentry.init({
  dsn: "https://f20e48638e134b649bf67de1f91df83f@o504099.ingest.sentry.io/5591628",
  release: process.env.VERSION,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "new event4",
});
// setTimeout(() => {
//   try {
//     foo();
//   } catch (e) {
//     Sentry.captureException(e);
//   } finally {
//     console.log('hay')
//   }
// }, 99);

// setTimeout(() => {
//     try {
//       zzzzz();
//     } catch (e) {
//       Sentry.captureException(e);
//     } finally {
//       transaction.finish();
//     }
//   }, 99);


//   setTimeout(() => {
//     try {
//       barrr();
//     } catch (e) {
//       Sentry.captureException(e);
//     } finally {
//       transaction.finish();
//     }
//   }, 99);


// setTimeout(() => {
//     try {
//       aaaaaaaa();
//     } catch (e) {
//       Sentry.captureException(e);
//     } finally {
//       transaction.finish();
//     }
//   }, 99);


// setTimeout(() => {
//     try {
//       newerror();
//     } catch (e) {
//       Sentry.captureException(e);
//     } finally {
//       transaction.finish();
//     }
//   }, 99);



setTimeout(() => {
    try {
      commit4();
    } catch (e) {
      Sentry.captureException(e);
    } finally {
      transaction.finish();
    }
  }, 99);
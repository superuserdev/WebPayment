# WebPayment
[![Build Status](https://travis-ci.org/superuserdev/WebPayment.svg?branch=master)](https://travis-ci.org/superuserdev/WebPayment)
- - -
Progressive enhancement for the Web Payment API

Creates a payment form, complete with `autocomplete` attributes, in a `<dialog>`
to provide a polyfill for the Web Payment API.

```js
import PaymentRequest from './PaymentRequest.js';
document.getElementById('buy-now').addEventListener('click', async () => {
  try {
    const endpoint = new URL('/pay/', location.origin);
    const pay = new PaymentRequest(/* ... */);
    const payment = await pay.show();
    const resp = await fetch(endpoint, {
      method: 'POST',
      body: payment
    });
  } catch(error) {
    console.error(error);
  }
});
```

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse
 */
export default class BasicCardResponse {
	constructor(paymentRequest) {
		console.log(paymentRequest);
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/BasicCardResponse/cardNumber
	 */
	get cardNumber() {
		//
	}

	get cardholderName() {
		//
	}

	get cardSecurityCode() {
		//
	}

	get expiryMonth() {
		//
	}

	get expiryYear() {
		//
	}

	get billingAddress() {
		//
	}
}

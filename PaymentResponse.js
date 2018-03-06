/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse
 */
import BasicCardResponse from './BasicCardResponse.js';

export default class PaymentResponse {
	constructor(form) {
		this._form = form;
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/details
	 */
	get details() {
		return new BasicCardResponse();
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/methodName
	 */
	get methodName() {
		//
	}

	/**
	* @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerEmail
	*/
	get payerEmail() {
		//
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerName
	 */
	get payerName() {
		//
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/payerPhone
	 */
	get payerPhone() {
		//
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/requestId
	 */
	get requestId() {
		//
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingAddress
	 */
	get shippingAddress() {
		//
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/shippingOption
	 */
	get shippingOption() {
		//
	}

	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse/complete
	 */
	complete() {
		//
	}
}

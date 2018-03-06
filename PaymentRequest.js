/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API
 */
import PaymentResponse from './PaymentResponse.js';
import BasicCardRequest from './BasicCardRequest.js';
import PaymentAddress from './PaymentAddress.js';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest
 */
export default class PaymentRequest {
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/PaymentRequest
	 */
	constructor(methodData, {
		total,
		id              = null,
		displayItems    = [],
		shippingOptions = [],
		modifiers       = null,
	} = {}, {
		requestPayerName  = false,
		requestPayerEmail = false,
		requestPayerPhone = false,
		requestShipping   = false,
		shippingType      = 'shipping',
	} = {}) {
		console.info({
			total, id, displayItems, shippingOptions, modifiers,
			requestPayerName, requestPayerEmail, requestPayerPhone, requestShipping, shippingType,
		});
		this._requestId = id;
		this._total = total;
		this._displayItems = displayItems;
		this._cardRequest = new BasicCardRequest();
		this._paymentAddress = new PaymentAddress({
			requestPayerName,
		});
	}

	get requestId() {
		return this._requestId;
	}

	get shippingAddress() {
		//
	}

	get shippingOption() {
		//
	}

	get shippingType() {
		//
	}

	async show() {
		return new PaymentResponse();
	}

	abort() {
		//
	}

	canMakePayment() {
		return true;
	}
}

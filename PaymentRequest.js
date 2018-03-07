/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API
 * @TODO Add events
 */
import {$, css} from './functions.js';
import PaymentResponse from './PaymentResponse.js';
import BasicCardRequest from './BasicCardRequest.js';
import PaymentAddress from './PaymentAddress.js';
import PaymentRequestUpdateEvent from './PaymentRequestUpdateEvent.js';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest
 */
export default class PaymentRequest extends EventTarget {
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
		super();
		this._total = total;
		this._requestId = id;
		this._displayItems = displayItems;
		this._shippingOptions = shippingOptions;
		this._modifiers = modifiers;
		this._requestShipping = requestShipping;
		this._requestPayerName = requestPayerName;
		this._requestPayerEmail = requestPayerEmail;
		this._requestPayerPhone = requestPayerPhone;
		this._shippingType = shippingType;
		this._cardRequest = new BasicCardRequest(this);
		this._paymentAddress = new PaymentAddress(this);

		this._dialog = document.createElement('dialog');
		this._form = document.createElement('form');
		this._dialog.append(this._form);
		this._dialog.addEventListener('close', () => this.abort());

		const close = document.createElement('button');
		const submit = document.createElement('button');

		close.type = 'button';
		close.addEventListener('click', () => this._dialog.close());
		submit.type = 'submit';
		close.textContent = 'Cancel';
		submit.textContent = 'Buy';

		css(this._dialog, {
			border: 'none',
		});

		css(close, {
			background: 'unset',
		});
		this._form.append(submit, close);

		document.body.append(this._dialog);
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
		return this._shippingType;
	}

	async show() {
		$('fieldset', this._form).forEach(fieldset => fieldset.disabled = false);
		return new Promise((resolve) => {
			this._form.addEventListener('submit', event => {
				event.preventDefault();
				const data = new FormData(event.target);
				resolve(new PaymentResponse(data));
				this._dialog.remove();
			},{once: true});
			this._dialog.addEventListener('close', event => {
				console.log(event);
			});
			this._dialog.showModal();
		}).catch(this.abort);
	}

	abort() {
		this._dialog.remove();
		$('fieldset', this._form).forEach(fieldset => fieldset.disabled = true);
		throw new DOMException('Request cancelled');
	}

	async canMakePayment() {
		return true;
	}
}

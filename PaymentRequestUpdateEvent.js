/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent
 */
import PaymentRequest from './PaymentRequest.js';
export default class PaymentRequestUpdateEvent extends CustomEvent {
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent/updateWith
	 */
	updateWith({
		displayItems = [],
		error = '',
		modifiers = [],
		total = 0,
	} = {}) {
		if (event.target instanceof PaymentRequest) {
			// Update it somehow
		}
	}
}

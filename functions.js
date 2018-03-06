export function $(selector, base = document) {
	const results = new Set(typeof selector === 'string' ? base.querySelectorAll(selector) : selector);
	if (base instanceof Element && base.matches(selector)) {
		results.add(base);
	}
	return results;
}

export function css(el, rules = {}) {
	Object.keys(rules).forEach(([key, value]) => el.style.setProperty(key, value));
}

import Choices from 'choices.js';

const defaultSelect = () => {
	const selectCollection = document.querySelectorAll('.js-form-select');

	if (selectCollection) {
		selectCollection.forEach(el => {
			// eslint-disable-next-line no-undef
			const choices = new Choices(el, {
				searchEnabled: false,
				shouldSort: false,
				shouldSortItems: false,
			});
		});
	}
};

defaultSelect();

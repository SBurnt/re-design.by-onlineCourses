// import Inputmask from 'inputmask';
import JustValidate from 'just-validate';

const form = document.querySelector('.form__feedback');
const telSelector = form.querySelector('.input-tel');
const childSelector = form.querySelector('.input-child');
const citySelector = form.querySelector('.input-city');
const ageSelector = form.querySelector('.input-age');
// const inputMask = new Inputmask('+375 (99) 999-99-99');
// inputMask.mask(telSelector);

const validation = new JustValidate('.form__feedback', {
	errorFieldCssClass: 'has__error',
	errorLabelCssClass: 'form__input-error',
});

validation
	.addField('.input-child', [
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Введите корректное имя!',
		},
		{
			rule: 'maxLength',
			value: 40,
			errorMessage: 'Введите корректное имя!',
		},
		{
			rule: 'required',
			value: true,
			errorMessage: 'Введите имя!',
		},
	])
	.addField('.input-age', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Введите возраст!',
		},
	])
	.addField('.input-city', [
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Введите корректный город!',
		},
		{
			rule: 'maxLength',
			value: 40,
			errorMessage: 'Введите корректный город!',
		},
		{
			rule: 'required',
			value: true,
			errorMessage: 'Введите Ваш город!',
		},
	])
	.addField('.input-tel', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Телефон обязателен!',
		},
		// {
		// 	rule: 'function',
		// 	validator: function() {
		// 		const phone = telSelector.inputmask.unmaskedvalue();
		// 		return phone.length === 9;
		// 	},
		// 	errorMessage: 'Введите корректный телефон!',
		// },
	])
	.addField('.input-format', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Выберите значение!',
		},
	])
	.onSuccess(event => {
		const formData = new FormData(event.target);
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					const thanks = document.querySelector('.form__thanks');
					thanks.classList.add('active');
				}
			}
		};

		xhr.open('POST', 'assets/files/send.php', true);
		xhr.send(formData);

		childSelector.setAttribute('value', '');
		citySelector.setAttribute('value', '');
		telSelector.setAttribute('value', '');
		ageSelector.setAttribute('value', '');

		event.target.reset();
	});

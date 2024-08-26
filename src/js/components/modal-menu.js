export const modalMenu = () => {
	const buttonOpen = document.querySelector('.button-mobile[data-type="open"]');
	const buttonClose = document.querySelector('.button-mobile[data-type="close"]');

	const modalMenu = document.querySelector('.modal-menu');

	const onButtonOpen = () => {
		modalMenu.classList.add('modal-menu--open');
	};

	const onButtonClose = () => {
		modalMenu.classList.remove('modal-menu--open');
	};

	buttonOpen.addEventListener('click', onButtonOpen);
	buttonClose.addEventListener('click', onButtonClose);
};

import { homeSlider } from '../components/home-slider';
import { modalMenu } from '../components/modal-menu';

import { page } from '../utils';

export const indexPage = page(() => {
	modalMenu();
	homeSlider();
});

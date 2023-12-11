import { configureStore } from '@reduxjs/toolkit';

import { Gift } from './slices/GiftSlice';
import { Menu } from './slices/MenuSlice';

export const store = configureStore({
	reducer: {
		menu: Menu,
		gift: Gift,
	},
});

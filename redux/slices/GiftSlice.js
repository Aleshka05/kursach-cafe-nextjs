import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {
		christmas: [
			{
				id: 1,
				img: '/gift/christmas-1.jpg',
			},
			{
				id: 2,
				img: '/gift/christmas-2.jpg',
			},
			{
				id: 3,
				img: '/gift/christmas-3.jpg',
			},
			{
				id: 4,
				img: '/gift/christmas-4.jpg',
			},
			{
				id: 5,
				img: '/gift/christmas-5.jpg',
			},
		],
		halloween: [
			{
				id: 1,
				img: '/gift/halloween-1.jpg',
			},
			{
				id: 2,
				img: '/gift/halloween-2.jpg',
			},
			{
				id: 3,
				img: '/gift/halloween-3.jpg',
			},
		],
		celebrate: [
			{
				id: 1,
				img: '/gift/celebrate-1.jpg',
			},
			{
				id: 2,
				img: '/gift/celebrate-2.jpg',
			},
			{
				id: 3,
				img: '/gift/celebrate-3.jpg',
			},
			{
				id: 4,
				img: '/gift/celebrate-4.jpg',
			},
			{
				id: 5,
				img: '/gift/celebrate-5.jpg',
			},
			{
				id: 6,
				img: '/gift/celebrate-6.jpg',
			},
			{
				id: 7,
				img: '/gift/celebrate-7.jpg',
			},
			{
				id: 8,
				img: '/gift/celebrate-8.jpg',
			},
			{
				id: 9,
				img: '/gift/celebrate-9.jpg',
			},
		],
	},
	selectedGift: null,
};

export const GiftSlice = createSlice({
	name: 'gift',
	initialState,
	reducers: {
		// coffeeTypes(state, action) {
		// 	state.data = state.data.coffee;
		// },
		// teaTypes(state, action) {
		// 	state.data = action.data.tea;
		// },
		selectGift: (state, action) => {
			const gift = 'hello';
			let giftType = action.payload.giftType;

			switch (giftType.toLowerCase()) {
				case 'christmas':
					state.selectedGift = state.data.christmas.find(
						(item) => item.id === action.payload.id,
					);
					break;
				case 'halloween':
					state.selectedGift = state.data.halloween.find(
						(item) => item.id === action.payload.id,
					);
					break;
				case 'celebrate':
					state.selectedGift = state.data.celebrate.find(
						(item) => item.id === action.payload.id,
					);
					break;

				default:
					state.selectedGift = null;
					break;
			}
		},
	},
	extraReducers: {},
});

// export const coffeeTypesAction = createAction('coffeeTypes', () => {
// 	return {
// 		data: [
// 			{
// 				name: 'Americano',
// 				price: 9.99,
// 			},
// 			{
// 				name: 'Latte',
// 				price: 7.99,
// 			},
// 			{
// 				name: 'Сappuccino',
// 				price: 7.99,
// 			},
// 		],
// 	};
// });
// const teaTypesAction = createAction('teaTypes');

// MenuSlice.actions.coffeeTypes = coffeeTypesAction;
// MenuSlice.actions.teaTypes = teaTypesAction;

export const { selectGift } = GiftSlice.actions;

export const Gift = GiftSlice.reducer;

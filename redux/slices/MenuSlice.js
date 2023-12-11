import { createAction, createSlice } from '@reduxjs/toolkit';


const initialState = {
	data: {
		coffee: {
			name: 'Coffee',
			id: 1,
			types: [
				{
					img: '/coffee/americano.jpg',
					name: 'Americano',
					price: 9.99,
				},
				{
					img: '/coffee/latte.jpg',
					name: 'Latte',
					price: 7.99,
				},
				{
					img: '/coffee/cappuchino.jpg',
					name: 'Сappuccino',
					price: 7.99,
				},
				{
					img: '/coffee/ice-cappuchino.jpg',
					name: 'Ice Сappuccino',
					price: 9.99,
				},
			],
		},
		tea: {
			name: 'Tea',
			id: 2,
			types: [
				{
					img: '/tea/black-tea.jpg',
					name: 'Black tea',
					price: 7.99,
				},
				{
					img: '/tea/green-tea.jpg',
					name: 'Green tea',
					price: 7.99,
				},
				{
					img: '/tea/milk-tea.jpg',
					name: 'Milk tea',
					price: 7.99,
				},
			],
		},
		cocktails: {
			name: 'Cocktails',
			id: 3,
			types: [
				{
					img: '/cocktails/mojito.jpg',
					name: 'Mojito',
					price: 10.99,
				},
				{
					img: '/cocktails/pina-colada.jpg',
					name: 'Pina Colada',
					price: 11.99,
				},
				{
					img: '/cocktails/margarita.jpg',
					name: 'Margarita',
					price: 9.99,
				},
			],
		},
		sandwiches: {
			name: 'Sandwiches',
			id: 4,
			types: [
				{
					img: '/sandwiches/sandwich.jpg',
					name: 'Club Sandwich',
					price: 12.99,
				},
				{
					img: '/sandwiches/simple-sandwich.jpg',
					name: 'Simple Sandwich',
					price: 8.99,
				},
				{
					img: '/sandwiches/reuben-sandwich.jpg',
					name: 'Reuben Sandwich',
					price: 11.99,
				},
			],
		},
		pastries: {
			name: 'Pastries',
			id: 5,
			types: [
				{
					img: '/pastries/croissant.jpg',
					name: 'Croissant',
					price: 3.99,
				},
				{
					img: '/pastries/eclair.jpg',
					name: 'Eclair',
					price: 4.99,
				},
				{
					img: '/pastries/tiramisu.jpg',
					name: 'Tiramisu',
					price: 5.99,
				},
			],
		},
	},
	selectedMenu: null,
};

export const MenuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		// coffeeTypes(state, action) {
		// 	state.data = state.data.coffee;
		// },
		// teaTypes(state, action) {
		// 	state.data = action.data.tea;
		// },
		selectMenu: (state, action) => {
			switch (action.payload) {
				case 'tea':
					state.selectedMenu = state.data.tea;
					break;
				case 'coffee':
					state.selectedMenu = state.data.coffee;
					break;
				case 'coctail':
					state.selectedMenu = state.data.cocktails;
					break;
				case 'sandwiches':
					state.selectedMenu = state.data.sandwiches;
					break;
				case 'pastries':
					state.selectedMenu = state.data.pastries;
					break;
				default:
					state.selectedMenu = null;
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

export const { coffeeTypes, selectMenu } = MenuSlice.actions;

export const Menu = MenuSlice.reducer;
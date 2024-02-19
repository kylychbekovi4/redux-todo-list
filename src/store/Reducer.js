const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "Ready":
			return [...state, action.payload];
		case "Delete":
			return state.filter((todo) => todo.id !== action.payload.id);
		case "DeleteAll":
			return [];
		case "Edit":
			return state.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, ...action.payload.updates };
				}
				return item;
			});
		default:
			return state;
	}
};

export default reducer;

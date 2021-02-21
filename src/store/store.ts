import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ActionType } from './action-types';
import rootReducer from './reducers';

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch({
	type: ActionType.INSERT_CELL_AFTER,
	payload: {
		id: 'null',
		type: 'code',
	},
});

store.dispatch({
	type: ActionType.INSERT_CELL_AFTER,
	payload: {
		id: 'null1',
		type: 'text',
	},
});

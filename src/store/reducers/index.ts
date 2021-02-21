import { combineReducers } from 'redux';
import cells from './cellsReducer';
import bundles from './bundlesReducer';

const rootReducer = combineReducers({
	cells,
	bundles,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

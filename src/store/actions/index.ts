import { CellTypes } from '../cell';
import { ActionType } from '../action-types';

export type CellDirection = 'up' | 'down';

export interface MoveCellAction {
	type: ActionType.MOVE_CELL;
	payload: {
		id: string;
		direction: CellDirection;
	};
}

export interface DeleteCellAction {
	type: ActionType.DELETE_CELL;
	payload: string;
}

export interface InsertCellAfterAction {
	type: ActionType.INSERT_CELL_AFTER;
	payload: {
		id: string | null;
		type: CellTypes;
	};
}

export interface UpdateCellAction {
	type: ActionType.UPDATE_CELL;
	payload: {
		id: string;
		content: string;
	};
}

export type Action =
	| MoveCellAction
	| UpdateCellAction
	| InsertCellAfterAction
	| DeleteCellAction;
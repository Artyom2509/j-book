import { CellTypes } from '../cell';
import { ActionType } from '../action-types';
import {
	UpdateCellAction,
	DeleteCellAction,
	MoveCellAction,
	InsertCellAfterAction,
	CellDirection,
} from '../actions';

export const updateCell = (id: string, content: string): UpdateCellAction => ({
	type: ActionType.UPDATE_CELL,
	payload: { id, content },
});

export const deleteCell = (id: string): DeleteCellAction => ({
	type: ActionType.DELETE_CELL,
	payload: id,
});

export const moveCell = (
	id: string,
	direction: CellDirection
): MoveCellAction => ({
	type: ActionType.MOVE_CELL,
	payload: { id, direction },
});

export const insertCellAfter = (
	id: string | null,
	type: CellTypes
): InsertCellAfterAction => ({
	type: ActionType.INSERT_CELL_AFTER,
	payload: { id, type },
});

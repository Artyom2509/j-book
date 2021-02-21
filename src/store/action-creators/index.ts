import { CellTypes } from '../cell';
import { ActionType } from '../action-types';
import {
	UpdateCellAction,
	DeleteCellAction,
	MoveCellAction,
	InsertCellAfterAction,
	CellDirection,
	Action,
} from '../actions';
import bundle from '../../bundler';
import { Dispatch } from 'redux';

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

export const createBundle = (cellId: string, code: string) => async (
	dispatch: Dispatch<Action>
) => {
	dispatch({
		type: ActionType.BUNDLE_START,
		payload: { cellId },
	});

	const result = await bundle(code);

	dispatch({
		type: ActionType.BUNDLE_COMPLETE,
		payload: {
			cellId,
			bundle: result,
		},
	});
};

import './cell-list.css';
import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import AddCell from './add-cell';
import CellListItem from './cell-list-item';

const CellList: React.FC = () => {
	const cells = useTypedSelector(({ cells: { order, data } }) => {
		return order.map((id) => data[id]);
	});

	const renderCells = cells.map((cell) => (
		<Fragment key={cell.id}>
			<CellListItem cell={cell} />
			<AddCell previousCellId={cell.id} />
		</Fragment>
	));

	return (
		<div className="cell-list">
			<AddCell
				key={Math.random()}
				forceVisible={cells.length === 0}
				previousCellId={null}
			/>
			{renderCells}
		</div>
	);
};

export default CellList;

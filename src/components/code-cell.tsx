import bundle from '../bundler';
import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import { Cell } from '../store';
import useActions from '../hooks/useActions';

interface CodeCellProps {
	cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
	const [code, setCode] = useState('');
	const [err, setErr] = useState('');
	const { updateCell } = useActions();

	useEffect(() => {
		const timeout = setTimeout(async () => {
			const output = await bundle(cell.content);
			setCode(output.code);
			setErr(output.err);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [cell.content]);

	return (
		<Resizable direction="vertical">
			<div style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row' }}>
				<Resizable direction="horizontal">
					<CodeEditor
						initialValue={cell.content}
						onChange={(value) => updateCell(cell.id, value)}
					/>
				</Resizable>

				<Preview code={code} err={err} />
			</div>
		</Resizable>
	);
};

export default CodeCell;

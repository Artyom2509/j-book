import bundle from '../bundler';
import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';

const CodeCell = () => {
	const [input, setInput] = useState('');
	const [code, setCode] = useState('');

	useEffect(() => {
		const timeout = setTimeout(async () => {
			const output = await bundle(input);
			setCode(output);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [input]);

	return (
		<Resizable direction="vertical">
			<div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
				<Resizable direction="horizontal">
					<CodeEditor
						initialValue={'const a = 1'}
						onChange={(value) => setInput(value)}
					/>
				</Resizable>

				<Preview code={code} />
			</div>
		</Resizable>
	);
};

export default CodeCell;

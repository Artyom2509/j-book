import './code-editor.css';
import { useRef } from 'react';
import MonakoEditor, { OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
	initialValue: string;
	onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
	const editorRef = useRef<any>();
	const onEditorDidMount: OnMount = (editor, monaco) => {
		editorRef.current = editor;

		editor.onDidChangeModelContent(() => {
			onChange(editor.getValue());
		});

		editor.getModel()?.updateOptions({ tabSize: 2 });
	};

	const onFormatClick = () => {
		const unformated = editorRef.current.getModel().getValue();
		const formated = prettier
			.format(unformated, {
				parser: 'babel',
				plugins: [parser],
				useTabs: false,
				semi: true,
				singleQuote: true,
			})
			.replace(/\n$/, '');

		editorRef.current.setValue(formated);
	};

	return (
		<div className="editor-wrapper">
			<button
				onClick={onFormatClick}
				className="button button-format is-primary is-small">
				Format
			</button>
			<MonakoEditor
				onMount={onEditorDidMount}
				value={initialValue}
				theme="vs-dark"
				language="javascript"
				height="300px"
				options={{
					wordWrap: 'on',
					minimap: { enabled: false },
					showUnused: false,
					folding: false,
					lineNumbersMinChars: 3,
					fontSize: 14,
					scrollBeyondLastLine: false,
					automaticLayout: true,
				}}
			/>
		</div>
	);
};

export default CodeEditor;

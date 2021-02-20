import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { render } from 'react-dom';
import TextEditor from './components/text-editor';
// import CodeCell from './components/code-cell';

const App = () => {
	return (
		<div>
			{/* <CodeCell /> */}
			<TextEditor />
		</div>
	);
};

render(<App />, document.getElementById('root'));

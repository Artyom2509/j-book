import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TextEditor from './components/text-editor';
import { store } from './store';
// import CodeCell from './components/code-cell';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				{/* <CodeCell /> */}
				<TextEditor />
			</div>
		</Provider>
	);
};

render(<App />, document.getElementById('root'));

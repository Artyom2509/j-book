import './preview.css';
import { useEffect, useRef } from 'react';

interface PreviewProps {
	code: string;
	err: string;
}

const html = `
	<html>
		<head>
		<style>html {	background: #fff; }</style>
		</head>
		<body>
			<div id="root"></div>
			<script>
				const handleError = (err) => {
						const root = document.querySelector('#root');
						root.innerHTML = '<div style="color: red;"><h4>Runtime error</h4>' + err + '</div>'
						console.error(err)
				}

				window.addEventListener('error', (event) => {
					event.preventDefault()
					handleError(event.error)
				})

				window.addEventListener('message', (event) => {
					try {
						eval(event.data)
					} catch (err) {
						handleError(err)
					}
				}, false)
			</script>
		</body>
	</html>
	`;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
	const iframe = useRef<any>();
	console.log('err', err);

	useEffect(() => {
		iframe.current.srcDoc = html;
		const timer = setTimeout(() => {
			iframe.current.contentWindow.postMessage(code, '*');
		}, 50);

		return () => clearTimeout(timer);
	}, [code]);

	return (
		<div className="preview-wrapper">
			<iframe
				ref={iframe}
				sandbox="allow-scripts"
				srcDoc={html}
				title="preview"
			/>
			{err && <div className="preview-error">{err}</div>}
		</div>
	);
};

export default Preview;

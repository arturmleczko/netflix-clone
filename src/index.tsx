import { render } from 'react-dom';
import App from './App';
import GlobalStyles from './styledHelpers/globalStyles';
import 'normalize.css';

render(
	<>
		<GlobalStyles />
		<App />
	</>,
	document.getElementById('root')
);

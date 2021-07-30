import { FC } from 'react';

import JumbotronContainer from './containers/JumbotronContainer/JumbotronContainer';
import FAQContainer from './containers/FAQContainer/FAQContainer';

const App: FC = () => {
	return (
		<>
			<JumbotronContainer />
			<FAQContainer />
		</>
	);
};

export default App;

import { Routes, Route } from 'react-router-dom';

import Hello from '../Components/Hello';
import HelloCopy from '../Components/Hello copy';

const Router = () => {
	return (
		<Routes>
			<Route path='/hello' element={<Hello />} />
			<Route exact path='/' element={<HelloCopy />} />
		</Routes>
	);
};
export default Router;

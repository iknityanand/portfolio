import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppWithState from './AppWithState';
import registerServiceWorker from './registerServiceWorker';

let allComponents= (
	<div>
		<App cat={50} />
		<AppWithState />
	</div>
);

ReactDOM.render(
	allComponents,
	document.getElementById('root')
	);
registerServiceWorker();

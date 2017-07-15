import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppWithState from './AppWithState';
import AppWithNestedData from './AppWithNestedData';
import ReactSyntheticEventSystem from './ReactSyntheticEventSystem';
import ReferenceSpecificComponents from './ReferenceSpecificComponents';
import registerServiceWorker from './registerServiceWorker';

let allComponents= (
	<div>
		<App cat={50} />
		<AppWithState />
		<AppWithNestedData />
		<ReactSyntheticEventSystem />
		<ReferenceSpecificComponents />
	</div>
);

ReactDOM.render(
	allComponents,
	document.getElementById('root')
	);
registerServiceWorker();

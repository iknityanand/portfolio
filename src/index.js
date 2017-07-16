import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppWithState from './AppWithState';
import AppWithNestedData from './AppWithNestedData';
import ReactSyntheticEventSystem from './ReactSyntheticEventSystem';
import ReferenceSpecificComponents from './ReferenceSpecificComponents';
import ComponentLifeCycle from './ComponentLifeCycle';
import registerServiceWorker from './registerServiceWorker';

let allComponents= (
	<div>
		<App cat={50} />
		<AppWithState />
		<AppWithNestedData />
		<ReactSyntheticEventSystem />
		<ReferenceSpecificComponents />
		<ComponentLifeCycle />
	</div>
);

ReactDOM.render(
	allComponents,
	document.getElementById('root')
	);
registerServiceWorker();

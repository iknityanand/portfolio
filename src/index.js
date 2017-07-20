import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppWithState from './AppWithState';
import AppWithNestedData from './AppWithNestedData';
import ReactSyntheticEventSystem from './ReactSyntheticEventSystem';
import ReferenceSpecificComponents from './ReferenceSpecificComponents';
import ComponentLifeCycle from './ComponentLifeCycle';
import ControlingComponent from './ControlingComponent';
import ComponentUsingMap from './ComponentUsingMap';
import HigherOrderComponents from './HigherOrderComponents';
import registerServiceWorker from './registerServiceWorker';

let allComponents= (
	<div>
		<App cat={50} />
		<AppWithState />
		<AppWithNestedData />
		<ReactSyntheticEventSystem />
		<ReferenceSpecificComponents />
		<ComponentLifeCycle />
		<ControlingComponent />
		<ComponentUsingMap />
		<HigherOrderComponents />
	</div>
);

ReactDOM.render(
	allComponents,
	document.getElementById('root')
	);
registerServiceWorker();

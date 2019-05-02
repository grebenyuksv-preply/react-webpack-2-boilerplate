import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';

const locale = new URL(location.href).searchParams.get('lang') || 'en';

System.import(`@preply/chat/dist/${locale}/index.js`).then(({ TextChat }) =>
	ReactDOM.render(<TextChat />, document.getElementById('mountNode')),
);

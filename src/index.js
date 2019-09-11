import React from 'react';
import ReactDOM from 'react-dom';
import App, {store} from './App';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router, hashIntegration} from 'solid-app-router';
import { MetaProvider } from 'solid-meta';

import App from './App';

render(
    () => (
        <MetaProvider>
            <Router source={hashIntegration()}>
                <App />
            </Router>
        </MetaProvider>
    ),
    document.getElementById('root') as HTMLElement,
);

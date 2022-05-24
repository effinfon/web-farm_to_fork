/// ----
// ---- 3rd party
import React from 'react';
import ReactDOM from 'react-dom/client';

// ---- project
import { Root } from './components/root';
import { Mock_Root } from "./mock_components/root"
/// ----

// ---- global configuration
const mocking = false;

/// ----

const root = ReactDOM.createRoot(document.getElementById('root'));

if(mocking == false) {
    root.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    );
}
else if (mocking == true) {
    root.render(
        <React.StrictMode>
            <Mock_Root />
        </React.StrictMode>
    );
}
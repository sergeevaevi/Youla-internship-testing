import React from 'react';
import { createRoot } from 'react-dom/client';
import Timer from './Timer';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Timer/>);




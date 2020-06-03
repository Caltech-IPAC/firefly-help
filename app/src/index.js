import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {create} from './toc/toc_creator';


const appName = process.env.REACT_APP_app_name;
const {toc, showHidden=false} = create(appName);

ReactDOM.render(<App showHidden={showHidden} tableOfContent={toc}/>, document.getElementById('app-root'));



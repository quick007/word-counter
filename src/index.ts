import { mount } from 'ripple';
import './index.css';
// @ts-expect-error: known issue, we're working on it
import { App } from './App.ripple';

mount(App, {
	target: document.getElementById('root'),
});

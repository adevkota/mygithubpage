import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';


// import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Resume from '../routes/resume';
import Work from '../routes/work';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				{/* header is being used per route because react no-prerender does not load styles for anything outside of a route */}
				{/* <Header />  */}
				<Router onChange={this.handleRoute} history={createHashHistory()}>
					<Home path="/" />
					<Resume path = "/resume"/>
					<Work path = "/work" />
				</Router>
			</div>
		);
	}
}

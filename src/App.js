import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import createStore from './store/configureStore';
import InPageCtx from './context/InPageCtx';
import SiteDrawerCtx from './context/DrawerCtx';
import { ModalCtx } from './context/ModalCtx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { DrawerRoute, ModalRoute } from './components/Route';
import { SiteDrawer } from './components/SiteDrawer';
import { Modal } from './components/Modal';
import './App.css';

const store = createStore({});

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<InPageCtx>
						<div className="Page">
							<Switch>
								<Route path="/" exact>
									<HomePage />
								</Route>
								<Route path="/about" exact>
									<AboutPage />
								</Route>
							</Switch>
						</div>
					</InPageCtx>
					<SiteDrawerCtx>
						<SiteDrawer>
							<DrawerRoute path="/" exact component={HomePage} />
							<DrawerRoute path="/about" exact component={AboutPage} />
						</SiteDrawer>
					</SiteDrawerCtx>
					<ModalCtx>
						<Modal>
							<ModalRoute path="/" exact component={HomePage} />
							<ModalRoute path="/about" exact component={AboutPage} />
						</Modal>
					</ModalCtx>
				</div>
			</Router>
		</Provider>
	);
}

export default App;

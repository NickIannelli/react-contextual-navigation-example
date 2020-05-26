import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { matchPath } from 'react-router';

const Route = ({ component: Element, path, activePath, ...props }) => {
	const match = matchPath(activePath, {
		path,
		...props,
	});

	return match ? <Element match={match} /> : null;
};

Route.propTypes = {
	component: PropTypes.func,
	path: PropTypes.string,
	activePath: PropTypes.string,
};

export const DrawerRoute = connect((state) => ({ activePath: state.siteDrawer?.path }))(Route);

export const ModalRoute = connect((state) => ({ activePath: state.modal?.path }))(Route);

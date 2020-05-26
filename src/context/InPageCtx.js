import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DrawerLink from '../components/DrawerLink';
import ModalLink from '../components/ModalLink';
import NavContext from './NavContext';

const setLocationHref = (value) => {
	window.location.hash = value;
};

const value = {
	value: 'InPage',
	Link,
	push: setLocationHref,
	replace: setLocationHref,
	DrawerLink,
	ModalLink,
	PageLink: Link,
};

export const InPageCtx = ({ children }) => (
	<NavContext.Provider value={value}>{children}</NavContext.Provider>
);

InPageCtx.propTypes = {
	children: PropTypes.any,
};

export default InPageCtx;

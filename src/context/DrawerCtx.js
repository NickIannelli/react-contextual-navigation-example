import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DrawerLink from '../components/DrawerLink';
import ModalLink from '../components/ModalLink';
import { pushState, replaceState } from '../store/siteDrawer';
import NavContext from './NavContext';

export const SiteDrawerCtx = ({ children }) => {
	const dispatch = useDispatch();
	const value = React.useRef({
		value: 'SiteDrawer',
		Link: DrawerLink,
		DrawerLink,
		ModalLink,
		PageLink: Link,
		push: (...args) => dispatch(pushState(...args)),
		replace: (...args) => dispatch(replaceState(...args)),
	});

	return <NavContext.Provider value={value.current}>{children}</NavContext.Provider>;
};

SiteDrawerCtx.propTypes = {
	children: PropTypes.any,
};

export default SiteDrawerCtx;

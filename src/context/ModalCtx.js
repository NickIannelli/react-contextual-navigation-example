import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DrawerLink from '../components/DrawerLink';
import ModalLink from '../components/ModalLink';
import { pushState, replaceState } from '../store/modal';
import NavContext from './NavContext';

export const ModalCtx = ({ children }) => {
	const dispatch = useDispatch();
	const value = React.useRef({
		value: 'Modal',
		Link: ModalLink,
		DrawerLink,
		ModalLink,
		PageLink: Link,
		push: (...args) => dispatch(pushState(...args)),
		replace: (...args) => dispatch(replaceState(...args)),
	});

	return <NavContext.Provider value={value.current}>{children}</NavContext.Provider>;
};

ModalCtx.propTypes = {
	children: PropTypes.any,
};

export default ModalCtx;

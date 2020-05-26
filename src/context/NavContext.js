import React from 'react';

const warnDev = (fn) => () => {
	if (process.env.NODE_ENV !== 'production') {
		// eslint-disable-next-line no-console
		console.warn(`[NavContext]: Function ${fn} not implemented in this context!`);
	}
};

export const NavContext = React.createContext({
	value: '',
	Link: warnDev('Link'),
	PageLink: warnDev('PageLink'),
	DrawerLink: warnDev('DrawerLink'),
	ModalLink: warnDev('ModalLink'),
	push: warnDev('push'),
	replace: warnDev('replace'),
});

export default NavContext;

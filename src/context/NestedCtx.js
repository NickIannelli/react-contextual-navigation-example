import React from 'react';
import PropTypes from 'prop-types';
import NavContext from './NavContext';

export const NestedCtx = ({ children }) => {
	const ctx = React.useContext(NavContext);
	const value = React.useRef({
		...ctx,
		value: `Nested parent value: ${ctx.value}`,
	});

	return <NavContext.Provider value={value.current}>{children}</NavContext.Provider>;
};

NestedCtx.propTypes = {
	children: PropTypes.any,
};

export default NestedCtx;

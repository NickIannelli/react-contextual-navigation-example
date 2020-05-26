import React from 'react';
import PropTypes from 'prop-types';

const isEnterKey = (e) => e.key === 'Enter' || e.which === 13;
const isSpaceKey = (e) => e.key === ' ' || e.which === 32;

export const Link = ({ to, title, replace, children, action, style, onClick, ...props }) => {
	const triggerAction = (e) => {
		action(to, title);

		if (typeof onClick === 'function') {
			onClick(e);
		}
	};

	return (
		<a
			{...props}
			style={{ ...style, cursor: 'pointer' }}
			onMouseUp={(e) => {
				// Handle middle-mouse click, as it is treated as open in a new tab
				// 0 = mouse down, 1 = middle down
				if (e.button === 1 || e.button === 0) {
					triggerAction(e);
				}
			}}
			onTouchEnd={triggerAction}
			onKeyDown={(e) => {
				if (isEnterKey(e) || isSpaceKey(e)) {
					triggerAction(e);
				}
			}}
			tabIndex="0"
			role="link"
		>
			{children}
		</a>
	);
};

export const propTypes = (Link.propTypes = {
	to: PropTypes.string.isRequired,
	title: PropTypes.string,
	replace: PropTypes.bool,
	children: PropTypes.any,
	action: PropTypes.func,
	onClick: PropTypes.func,
	style: PropTypes.object,
});

export default Link;

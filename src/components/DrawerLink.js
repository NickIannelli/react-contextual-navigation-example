import { connect } from 'react-redux';
import { pushState, replaceState } from '../store/siteDrawer';
import Link from './Link';

export const DrawerLink = connect(
	null,
	{
		push: pushState,
		replace: replaceState,
	},
	(_, { push, replace }, props) => ({
		...props,
		action: props.replace ? replace : push,
	})
)(Link);

export default DrawerLink;

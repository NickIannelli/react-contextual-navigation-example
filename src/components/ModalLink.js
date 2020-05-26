import { connect } from 'react-redux';
import { pushState, replaceState } from '../store/modal';
import Link from './Link';

export const ModalLink = connect(
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

export default ModalLink;

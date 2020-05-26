import React from 'react';
import { connect } from 'react-redux';

export function Modal({ children }) {
	return <div className="Modal">{children}</div>;
}

export default connect((state) => state.modal)(Modal);

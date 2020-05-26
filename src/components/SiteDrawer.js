import React from 'react';
import { connect } from 'react-redux';

export function SiteDrawer({ children }) {
	return <div className="SiteDrawer">{children}</div>;
}

export default connect((state) => state.siteDrawer)(SiteDrawer);

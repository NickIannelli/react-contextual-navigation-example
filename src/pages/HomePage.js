import React from 'react';
import { NavContext } from './../context/NavContext';

export default function HomePage() {
	const ctx = React.useContext(NavContext);

	return (
		<div>
			<h1>Home Page!</h1>
			<p>
				Current context: <strong>{ctx.value}</strong>
			</p>
			<h3>Actions</h3>
			<p>
				<ctx.Link to="/about">Open /about in Current Context</ctx.Link>
				<br />
				<ctx.DrawerLink to="/about">Open /about in Drawer</ctx.DrawerLink>
				<br />
				<ctx.ModalLink to="/about">Open /about in Modal</ctx.ModalLink>
				<br />
				<ctx.PageLink to="/about">Open /about in Page</ctx.PageLink>
			</p>
		</div>
	);
}

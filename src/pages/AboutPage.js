import React from 'react';
import NavContext from './../context/NavContext';
import NestedCtx from './../context/NestedCtx';

function InnerAbout() {
	const ctx = React.useContext(NavContext);

	return (
		<div>
			<h3>This is a nested context</h3>
			<p>{ctx.value}</p>
			<p>
				The context attributes are inherited in &lt;NestedCtx /&gt; -{' '}
				<ctx.Link to="/">Link example</ctx.Link>
			</p>
		</div>
	);
}

export default function AboutPage() {
	const ctx = React.useContext(NavContext);

	return (
		<div>
			<h1>About Page!</h1>
			<p>
				Current context: <strong>{ctx.value}</strong>
			</p>
			<h3>Actions</h3>
			<p>
				<ctx.Link to="/">Open / in Current Context</ctx.Link>
				<br />
				<ctx.DrawerLink to="/">Open / in Drawer</ctx.DrawerLink>
				<br />
				<ctx.ModalLink to="/">Open / in Modal</ctx.ModalLink>
				<br />
				<ctx.PageLink to="/">Open / in Page</ctx.PageLink>
			</p>
			<NestedCtx>
				<InnerAbout />
			</NestedCtx>
		</div>
	);
}

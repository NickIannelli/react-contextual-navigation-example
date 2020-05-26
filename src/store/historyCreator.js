import { createActions, handleActions } from 'redux-actions';

export default function (prefix) {
	const actions = createActions(
		{
			PUSH_STATE: (path) => ({ path }),
			POP_STATE: () => ({}),
			REPLACE_STATE: (path) => ({ path }),
		},
		{ prefix }
	);

	const initialState = {
		path: '',
		history: [],
	};

	const reducer = handleActions(
		{
			[actions.pushState]: (state, { payload }) => ({
				path: payload.path,
				title: payload.title || state.title,
				isOpen: payload.isOpen,
				history: [...state.history, payload.path],
			}),
			[actions.popState]: (state) => {
				if (state.history.length <= 1) {
					return initialState;
				}

				const item = state.history[state.history.length - 2];
				return {
					...item,
					history: state.history.slice(0, state.history.length - 1),
				};
			},
			[actions.replaceState]: (state, { payload }) => ({
				path: payload.path,
				history: [...state.history.slice(0, state.history.length - 1), payload.path],
			}),
		},
		initialState
	);

	return { reducer, actions };
}

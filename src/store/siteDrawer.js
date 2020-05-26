import historyCreator from './historyCreator';

const { reducer, actions } = historyCreator('@SiteDrawer');

export const { pushState, popState, replaceState } = actions;

export const syncActions = actions;

export default reducer;

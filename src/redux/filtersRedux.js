/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_TAGS = createActionName('CHANGE_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeSearchTags = payload => ({ payload, type: CHANGE_TAGS });
export const removeSearchTags = payload => ({ payload, type: REMOVE_TAGS });
export const changeSearchDuration = payload => ({ payload, type: CHANGE_DURATION });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
      case CHANGE_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload]
      };
      case REMOVE_TAGS:
        const indexOfRemovedTag = statePart.tags.indexOf(action.payload);
      return {
        ...statePart,
        tags: [...statePart.tags.splice(indexOfRemovedTag, 1)]
      };
      case CHANGE_DURATION:
      return {
        ...statePart,
        duration: action.payload,
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}

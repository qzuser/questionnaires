import { fromJS } from "immutable";
const defaultState = fromJS({
  title: '',
  pos: -1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_pos":
      return state.merge({
        'pos': action.data
      });
    case "change_tittle":
      return state.merge({
        title: action.data
      })
    default:
      return state;
  }
};

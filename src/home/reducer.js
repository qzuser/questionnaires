import { fromJS } from "immutable";
const defaultState = fromJS({
  quesInfo: [
    
  ],
  addStatus: true
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case "add_question":
      return state.merge({
        quesInfo: action.data
      });
    case "create_questions":
      return state.merge({
        addStatus: action.data
      });
    case 'selectAnswer':
      return state.merge({
        quesInfo: action.data
      })
    case 'changeReduxdata':
      return state.merge({
        quesInfo: action.data
      })
    default:
      return state;
  }
};


import { ADD_ARTICLE } from "../constants/action-types";

const initState = {articles: []
};
function rootReducer(state = initState, action){
	if (action.type === ADD_ARTICLE){
	return Object.assign({},state, {articles : state.article.concat(action.payload)
	});
}
	return state;
};

export default rootReducer;
import DataTypes from "./types";

const INITIAL_STATE = {
  visitors: [],
  loading: false,
  error: undefined
};

const VisitorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DataTypes.GET_VISITORS:
      return { ...state, loading: true, error: undefined };

    case DataTypes.GET_VISITORS_START:
      return { ...state, loading: true, error: undefined };

    case DataTypes.GET_VISITORS_SUCCESS:
      return { ...state, loading: false, visitors: action.payload };

    case DataTypes.GET_VISITORS_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
export default VisitorsReducer;

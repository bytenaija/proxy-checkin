import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import DataTypes from "./types";

const API_BASE_URL =
  "https://epic-gates-a1c2f8.netlify.com/.netlify/functions/getVisits?count=5";

export const fetchVisitors = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export function* getVisitors() {
  try {
    yield put({ type: DataTypes.GET_VISITORS_START });

    const visitors = yield call(fetchVisitors);

    yield put({
      type: DataTypes.GET_VISITORS_SUCCESS,
      payload: visitors
    });
  } catch (err) {
    yield put({
      type: DataTypes.GET_VISITORS_FAILURE,
      error: `${err && err.message ? err.message : err}`
    });
  }
}

export function* watcherGetVisitorsStart() {
  yield takeEvery(DataTypes.GET_VISITORS, getVisitors);
}

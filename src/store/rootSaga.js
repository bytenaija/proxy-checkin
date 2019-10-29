import { all, fork } from "redux-saga/effects";
import { watcherGetVisitorsStart } from "./visitors/sagas";

export default function* rootSaga() {
  yield all([fork(watcherGetVisitorsStart)]);
}

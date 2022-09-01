import { all } from "redux-saga/effects";
import { watchDownloadExampleTasks } from "./tasksSaga";

export default function* rootSaga() {
  yield all([
    watchDownloadExampleTasks(),
  ])
};
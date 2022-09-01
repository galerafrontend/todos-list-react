import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  downloadExampleTasks,
  downloadExampleTasksPending,
  downloadExampleTasksError
} from "./tasksSlice";

function* watchDownloadExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(downloadExampleTasksPending(exampleTasks));
  } catch (error) {
    yield call(alert, "Upss... Coś poszło nie tak")
    yield put(downloadExampleTasksError());
  }
}

export function* watchDownloadExampleTasks() {
  yield takeLatest(downloadExampleTasks.type, watchDownloadExampleTasksHandler);
}
import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLoacalStorage } from "./tasksLocalStorage";
import {
  downloadExampleTasks,
  downloadExampleTasksPending,
  downloadExampleTasksError,
  selectTasks
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

function* saveTasksInLoacalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLoacalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(downloadExampleTasks.type, watchDownloadExampleTasksHandler);
  yield takeEvery("*", saveTasksInLoacalStorageHandler);
}
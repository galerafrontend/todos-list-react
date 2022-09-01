import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLoacalStorage } from "./tasksLocalStorage";
import {
  downloadTasks,
  downloadTasksPending,
  downloadTasksError,
  selectTasks
} from "./tasksSlice";

function* watchDownloadTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(downloadTasksPending(exampleTasks));
  } catch (error) {
    yield call(alert, "Upss... Coś poszło nie tak")
    yield put(downloadTasksError());
  }
}

function* saveTasksInLoacalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLoacalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(downloadTasks.type, watchDownloadTasksHandler);
  yield takeEvery("*", saveTasksInLoacalStorageHandler);
}
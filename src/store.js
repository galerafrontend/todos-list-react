import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasks/tasksSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './features/tasks/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;

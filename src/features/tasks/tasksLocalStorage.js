const loacalStorageKey = "tasks";

export const saveTasksInLoacalStorage = tasks =>
  localStorage.setItem(loacalStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(loacalStorageKey)) || [];

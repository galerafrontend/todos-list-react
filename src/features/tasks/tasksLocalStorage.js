const localStorageKey = "tasks";

export const saveTasksInLoacalStorage = tasks =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];

  

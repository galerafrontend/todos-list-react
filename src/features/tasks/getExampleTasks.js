import axios from "axios";

export const getExampleTasks = async () => {
  const response = await axios.get("/todos-list-react/exampleTasks.json")

  return await response.data;
};
import axios from "axios";

const URL = "https://react-native-project-90668-default-rtdb.firebaseio.com/";

export const sendDataToDatabase = async (expenseData) => {
  const response = await axios.post(URL + "/expensedata.json", expenseData);
  const id = response.data.name;
  return id;
};

export const fetchDataFromDatabase = async () => {
  const response = await axios.get(URL + "/expensedata.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateDataInDatabase = (id, expenseData) => {
  return axios.put(URL + `/expensedata/${id}.json`, expenseData);
};

export const deleteDataInDataBase = (id) => {
  return axios.delete(URL + `/expensedata/${id}.json`);
};

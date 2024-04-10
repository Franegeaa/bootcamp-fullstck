import axios from "axios";

export const getAll = () => {
  return axios.get("http://localhost:3001/persons").then((response) => response.data);
}

export const createContact = (newObject) => {
  return axios.post("http://localhost:3001/persons", newObject).then((response) => response.data);
}

export const deleteContact = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`);
}
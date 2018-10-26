import axios from "axios";
const instance = axios.create({
  baseURL: 'http://localhost:8080/data/'
});
export const getMainBenefits = () => {
  return instance.get("mainbenefits.json").then(res => {
    return res.data
  });
};
export const getComfort = () => {
  return instance.get("comfort.json").then(res => {
    return res.data
  });
};

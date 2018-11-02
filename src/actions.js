import axios from "axios";
console.log(process.env.NODE_ENV)
let url = '/data/'
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8082/data/'
}
const instance = axios.create({
  baseURL: url
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
export const getEntrance = () => {
  return instance.get("entrance.json").then(res => {
    return res.data
  });
};
export const getSecurity = () => {
  return instance.get("security.json").then(res => {
    return res.data
  });
};
export const getParking = () => {
  return instance.get("parking.json").then(res => {
    return res.data
  });
};
export const getContacts = () => {
  return instance.get("contacts.json").then(res => {
    return res.data
  });
};
export const getInfra = () => {
  return instance.get("infra.json").then(res => {
    return res.data
  });
};
export const getMain = () => {
  return instance.get("main.json").then(res => {
    return res.data
  });
};
export const sliderRenders = () => {
  return instance.get("renders.json").then(res => {
    return res.data
  });
}
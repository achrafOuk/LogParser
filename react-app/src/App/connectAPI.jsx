import axios from "axios";
export default api=  axios.create({ baseURL='localhost:8000' });
import axios from "axios";

const DATABASE_IP = "localhost"
const DATABASE_PORT = "5001"
const BASE_URL = "http://" + (DATABASE_IP) + ":" + (DATABASE_PORT) + "/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user)?.currentUser;
const TOKEN = currentUser?.accessToken;
console.log("requestMethods.js TOKEN is " + TOKEN)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
})
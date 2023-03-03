import { client } from "../index.js";
export function postuser(data) {
    console.log(data)
    return client.db("data").collection("user").insertOne(data);
  
}
export function getusersName(username) {
    return client
        .db("data")
        .collection("user")
        .findOne({username: username})
}
export function loginusersName(username) {
    return client
        .db("data")
        .collection("user")
        .findOne({username: username})
}
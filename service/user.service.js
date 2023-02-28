import { client } from "../index.js";
export function postuser(data) {
    console.log(data)
    return client.db("data").collection("user").insertOne(data);
  
}
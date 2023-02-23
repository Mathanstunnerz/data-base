import { client } from "../index.js";

export function onemovieget(id) {
    return client
        .db("data")
        .collection("movies")
        .findOne({ id: id });
}
export function updatemovie(id, data) {
    return client
        .db("data")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export function deletemovie(id) {
    return client
        .db("data")
        .collection("movies")
        .deleteOne({ id: id });
}
export function postmovie(data) {
    return client.db("data").collection("movies").insertMany(data);
}
export function getallmovies() {
    return client
        .db("data")
        .collection("movies")
        .find({})
        .toArray();
}

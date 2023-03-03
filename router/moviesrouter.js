
import express from "express"
import { getallmovies, postmovie, deletemovie, updatemovie,getallmovieslogin,onemovieget } from "../service/movies.service.js";
import {auth} from "../middleware/auth.js"
const router = express.Router();



router.get("/", async function (request, response) {
  //db.movies.find({})
  //cursor => pagination(20)
  //cursor => arry (toArray)

  const movies = await getallmovies();

  response.send(movies);
});
router.get("/login",auth, async function (request, response) {
  //db.movies.find({})
  //cursor => pagination(20)
  //cursor => arry (toArray)
   if(request.query.rating){
    request.query.rating = +request.query.rating
   }
  const movies = await getallmovieslogin(request.query);

  response.send(movies);
});
// express.json() -middleware
router.post("/", async function (request, response) {
  const data = request.body;

  const movies = await postmovie(data);

  response.send(movies);
});

router.delete("/:id", async function (request, response) {
  const err = "movie not found ";
  const { id } = request.params;
  const movie = await deletemovie(id);
    // console.log(movie)
  movie.deletedCount > 1
  ? response.send(movie) : response.status(404).send("movies not found");
});
router.put("/:id", async function (request, response) {
  //db.movies.updateOne({id:id},{$set:data})
  const err = "movie not found ";
  const { id } = request.params;
  const data = request.body;
  const movie = await updatemovie(id, data)
    // console.log(movie)
  movie ? response.send(movie) : response.status(404).send("movies not found");
});
router.get("/:id", async function (request, response) {
  const err = "movie not found ";
  const { id } = request.params;
  const movie = await onemovieget(id);
  movie ? response.send(movie) : response.status(404).send("movies not found");
});

export default router;



import express, { Request, Response } from "express";
import { createFilmsEndpoint } from "./endpoints/films/createFilms";
import { createSeriesEndpoint } from "./endpoints/series/createSeries";
import { createEpisodesEndpoint } from "./endpoints/episodes/createEpisodes";
import { getFilmsByIdEndpoint } from "./endpoints/films/getFilmsById";

const app = express();
app.use(express.json());

app.post("/create/film", createFilmsEndpoint);
app.post("/create/serie", createSeriesEndpoint);
app.post("/create/episode", createEpisodesEndpoint);
app.get("/films/:id", getFilmsByIdEndpoint);

export default app;

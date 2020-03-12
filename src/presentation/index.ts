import express, { Request, Response } from "express";
import { createFilmsEndpoint } from "./endpoints/films/createFilms";
import { createSeriesEndpoint } from "./endpoints/series/createSeries";
import { createEpisodesEndpoint } from "./endpoints/episodes/createEpisodes";

const app = express();
app.use(express.json());

app.post("/create/film", createFilmsEndpoint);
app.post("/create/serie", createSeriesEndpoint);
app.post("/create/episode", createEpisodesEndpoint);

export default app;

import { Series } from "../../entities/series";
import { v4 } from "uuid";
import { SeriesDB } from "../../../data/seriesDB";

export class CreateSeriesUC {
    constructor(private db: SeriesDB) { }

    public async execute(input: CreateSeriesUCInput): Promise<CreateSeriesUCOutput> {
        const id = v4();

        const series = new Series(
            id,
            input.title,
            input.debut_date,
            input.image,
            input.sinopse
        );

        await this.db.createSeries(series);

        return {
            message: "Series created successfully"
        }
    }
}

export interface CreateSeriesUCInput {
    title: string,
    debut_date: Date,
    image: string,
    sinopse: string
}

export interface CreateSeriesUCOutput {
    message: string;
}
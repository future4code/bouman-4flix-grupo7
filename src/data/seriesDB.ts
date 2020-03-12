import { BaseDB } from "./baseDB";
import { Series } from "../business/entities/series";

export class SeriesDB extends BaseDB {
    private seriesTableName = "series";


    public async createSeries(series: Series): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${
            this.seriesTableName
            }(id, title, debut_date, link, image, sinopse)
            VALUES(
                '${series.getId()}',
                '${series.getTitle()}',
                '${series.getDebut_date()}',
                '${series.getLink()}',
                '${series.getImage}',
                '${series.getSinopse}'
            );
        `)
    }
}
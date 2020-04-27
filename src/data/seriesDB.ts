import { BaseDB } from "./baseDB";
import { Series } from "../business/entities/series";

export class SeriesDB extends BaseDB {
    private seriesTableName = "series";


    public async createSeries(series: Series): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${
            this.seriesTableName
            }(id, title, debut_date, image, sinopse, length )
            VALUES(
                '${series.getId()}',
                '${series.getTitle()}',
                '${series.getDebut_date()}',
                '${series.getImage()}',
                '${series.getSinopse()}',
                '${series.getLength()}'
            );
        `)
    } 

    private mapDbFilmToFilm(input?: any): Series | undefined {
        return (
          input &&
          new Series(
            input.id,
            input.title,
            input.debut_date,
            input.sinopse,
            input.length,
            input.image
          )
        );
      }

    public async getSerieById(id: string): Promise<Series | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.seriesTableName} WHERE id='${id}'
        `);
        return this.mapDbFilmToFilm(result[0][0])
    }
 
     
}
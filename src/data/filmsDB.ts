import { BaseDB } from "./baseDB";
import { Films } from "../business/entities/films";


export class FilmsDB extends BaseDB {
    private filmsTableName = "FILMS_TABLE";
    private seriesTableName = "SERIES_TABLE";
    private episodesTableName = "EPISODES_TABLE";

    public async createFilms(films: Films): Promise<void>{
        await this.connection.raw(`
        INSERT INTO ${
            this.filmsTableName
          } (id, title, debut_date, sinopse, link, length, image)
          VALUES(
          '${films.getId()}',
          '${films.getTitle()}',
          '${films.getDebut_date()}',
          '${films.getSinopse()}',
          '${films.getLink()}',
          '${films.getLength()}',
          '${films.getImage()}'
          );
        `)
    }

}
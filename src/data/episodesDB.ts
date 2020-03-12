import { BaseDB } from "./baseDB";
import { Episodes } from "../business/entities/episodes";

export class EpisodesDB extends BaseDB {
    private episodesTableName = "episodes";

    public async createEpisodes(episodes: Episodes): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${
                this.episodesTableName
            }(id, title, length, link, sinopse, serieId)
            VALUES(
                '${episodes.getId()}',
                '${episodes.getTitle()}',
                '${episodes.getLength()}',
                '${episodes.getLink()}',
                '${episodes.getSinopse()}',
                '${episodes.getSerieId()}'
            );
        `)
    }
}
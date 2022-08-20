import {Show} from './show.essence';
import {IGenre} from '../interfaces';
import {Episode} from './episode.essence';

export class Series extends Show {


    constructor(name: string, genre: IGenre, releaseDate: Date, public episodes: Episode[],private duration:number) {
        super(name, genre, releaseDate);
    }

    getDuration(): number {
        return this.duration;
    }

}
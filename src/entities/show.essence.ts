import {IGenre} from '../interfaces';

export abstract class Show {

    protected constructor(public name: string, public genre: IGenre, public releaseDate: Date) {
    }

    abstract getDuration(): number

    compare(other: Show): boolean {
        return this.name === other.name
            && this.genre === other.genre
            && this.releaseDate === other.releaseDate
    }
}
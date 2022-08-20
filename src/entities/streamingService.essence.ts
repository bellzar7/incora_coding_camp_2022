import {Show} from './show.essence';
import {IGenre} from '../interfaces';

export class StreamingService {
    constructor(
        public name: string,
        public shows: Show[],
        public viewsByShowNames: Map<string, number> = new Map<string, number>()
    ) {
    }

    addShow(show: Show): void {
        for (let item of this.shows) {
            if (item.compare(show)) {
                throw new Error('This show is already exists')
            }
        }

        this.shows.push(show)
    }

    getMostViewedShowsOfYear(year: number): Show[] {
        const res = this.shows.filter(value => value.releaseDate.getFullYear() === year && this.viewsByShowNames.has(value.name))
        return this._filterMostViewedGtTen(res)


    }

    getMostViewedShowsOfGenre(genre: IGenre): Show[] {
        const res = this.shows.filter(value => value.genre.id === genre.id && this.viewsByShowNames.has(value.name))
        return this._filterMostViewedGtTen(res)
    }

    private _filterMostViewedGtTen(shows: Show[]): Show[] {
        const max = 10

        if (shows.length <= max) {
            return shows
        }

        const showNames = shows.map(value => value.name);
        const sortedViews = [...this.viewsByShowNames]
            .filter(value => showNames.includes(value[0]))
            .sort((a, b) => b[1] - a[1])
            .slice(0, max)
            .map(value => value[0])

        return shows.filter(value => sortedViews.includes(value.name))
    }
}
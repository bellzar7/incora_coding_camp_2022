import {FC} from 'react';

import {Episode, Movie, Series, StreamingService} from './entities';
import {genres} from './data';
import {StreamingServiceComponent} from "./components/StreamingServiceComponent";

const App: FC = () => {
    const episode = new Episode('first_episode', genres[0], new Date(), 1.5);
    const series = new Series('s1', genres[0], new Date(2015, 6, 25), [episode], 2);
    const movie = new Movie('batman', genres[2], new Date(2000, 5, 5), 3);
    const streamingService: StreamingService[] = [new StreamingService('myStream', [episode, series, movie]), new StreamingService('Netflix', [episode, series, movie]), new StreamingService('megoGo', [episode, series, movie])];

    return (
        <div>
            {streamingService.map((value, index) => <StreamingServiceComponent key={index} service={value}/>)}
        </div>
    );
};

export {App};
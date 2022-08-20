import {FC} from 'react';
import { Show } from '../entities';

interface IProps {
    show: Show;
}

const ShowComponent: FC<IProps> = ({show}) => {
    return (
        <div>
            {show.name} -- {show.releaseDate.getFullYear()} -- {show.genre.name} -- {show.getDuration()}
        </div>
    );
};

export {ShowComponent};
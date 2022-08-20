import {FC} from 'react';
import {StreamingService, User} from '../entities';
import {ShowComponent} from "./ShowComponent";

interface IProps {
    service: StreamingService;
}


const StreamingServiceComponent: FC<IProps> = ({service}) => {

const user = new User()

    return (
        <div>
            {service.name} - <button onClick={()=>user.subscribe(service)}>subscribe</button>
            <div>
                {user.subscriptions[0]?.streamingService.shows.map(value => <ShowComponent key={value.name} show={value}/>)}
            {user.subscriptions?.map(value => <div>{value.streamingService.name}</div>)}
            </div>
        </div>
    );
};

export {StreamingServiceComponent};
import {Subscription} from './subscription.essence';
import {StreamingService} from './streamingService.essence';

export class User {
    constructor(public subscriptions: Subscription[] = []) {
    }

    subscribe(streamingService: StreamingService): Subscription {
        const subscription = new Subscription(streamingService);
        this.subscriptions.push(subscription)
        return subscription
    }
}
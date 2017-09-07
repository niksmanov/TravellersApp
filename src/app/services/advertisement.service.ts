import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Advertisement } from '../models/advertisement';

@Injectable()
export class AdvertisementService {

    private basePath = '/advertisements';

    advertisements: FirebaseListObservable<Advertisement[]> = null; //  list of objects
    advertisement: FirebaseObjectObservable<Advertisement> = null; //   single object

    constructor(private db: AngularFireDatabase) { }

    // Return an observable list with optional query
    getAdvertisementsList(query = {}): FirebaseListObservable<Advertisement[]> {
        this.advertisements = this.db.list('/advertisements', {
            query: query
        });
        return this.advertisements;
    }

    // Return a single observable advertisement
    getAdvertisement(key: string): FirebaseObjectObservable<Advertisement> {
        const advPath = `${this.basePath}/${key}`;
        this.advertisement = this.db.object(advPath);
        return this.advertisement;
    }

    // Create a brand new advertisement
    createAdvertisement(advertisement: Advertisement): void {
        this.advertisements = this.db.list('/advertisements');
        this.advertisements.push(advertisement)
            .catch(error => this.handleError(error));
    }

    // Delete a single advertisement
    deleteAdvertisement(key: string): void {
        this.advertisements.remove(key)
            .catch(error => this.handleError(error));
    }

    // Edit advertisement
    updateItem(key: string, value: any): void {
        this.advertisements.update(key, value)
            .catch(error => this.handleError(error));
    }

    // Default error handling for all actions
    private handleError(error) {
        console.log(error);
    }

}

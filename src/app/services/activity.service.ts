import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[] {
    return SAVED_ACTIVITIES.slice(0);
  }

  getTotalActivities(allActivities: IActivity[]) {
    return allActivities.length;
  }

  getTotalDistance(allActivities: IActivity[]) {
    let totalDistance = 0;
    for (let i = 0; i < allActivities.length; i++) {
      totalDistance += allActivities[i].distance;
    }
    return totalDistance;
  }

  getFirstDate(allActivities: IActivity[]) {
    let earliesDate = new Date('01/01/1999');
    for (let i = 0; i < allActivities.length; i++) {
      const currentDate = allActivities[i].date;
      if (currentDate < earliesDate) {
        earliesDate = currentDate;
      }
    }
    return earliesDate;
  }
}
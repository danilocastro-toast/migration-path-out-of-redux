import { Subject } from 'rxjs';
 
export default {
  create: (initialValue) => {
    let value = initialValue
    const subject = new Subject();

    return {
      get: () => value,
      set: transformer => {
        const newValue = transformer(value)
        if (value !== newValue) {
          value = newValue
          subject.next(value)
        }
      },
      subscribe: subscriber => subject.subscribe(subscriber)
    }
  }
}

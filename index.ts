
import * as moment from 'moment';

export class ExampleClass {

    test(): void {
        console.log("Test: " + moment().format('YYYY-DD-MM'));
    }

    returnsTrue(): boolean {
        return true;
    }

}
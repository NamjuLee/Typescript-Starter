import { My } from './my/my';

class App {
    constructor() {
        console.log('App Init');
        const my = new My();
        console.log(my);
    }
}

const app = new App();
console.log('eee');
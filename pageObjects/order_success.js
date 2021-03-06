import { Header } from './components/header';
import { Footer } from './components/footer';

export class OrderSuccess {
    get container() {
        return $('#content');
    }

    header = new Header();
    footer = new Footer();

    successMessage() {
        if(this.container.$('h1.title')) {
            return this.container.$('h1.title').getText();
        } else {
            return false;
        }
    }

    
}
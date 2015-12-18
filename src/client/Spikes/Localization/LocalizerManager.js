/**
 * 
 */
import Localizer from './Localizer';
import resource from './resources/resource';

export default class LocalizerManager {

    constructor(locale) {
        this.locale = locale;
        this.localize();
    }

    localize() {

        // console.log('LocalizerManager : localize');

        var localizer = new Localizer(resource[this.locale]);
        window.locale = localizer.localize.bind(localizer);
    }
}

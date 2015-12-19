/**
 * 
 */
import Localizer from './Localizer';
import resource from '../../config/resources/resource';

export default class LocalizerManager {

    constructor(locale) {
        this.locale = locale;
        this.setLanguage(locale);
    }

    setLanguage(locale) {
        this.localize(locale);
    }

    localize(locale) {

        // console.log('LocalizerManager : localize');

        var localizer = new Localizer(resource[locale]);
        window.locale = localizer.localize.bind(localizer);
    }
}

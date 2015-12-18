/*eslint no-unused-vars: 0*/
class AppUtils {

    /**
     * This function is to send a GET request to the specified URL
     * 
     * @param -url - end point url to which request is made
     * @param - data - Data to be passed to server
     * @param - handleException - a boolean flag to indicate 
     *                             whether the exception from server need to be send to the caller
     */
    static doGet(url, data, handleException) {}

    /**
     * This function is to send a GET request to the specified URL
     * 
     * @param -url - end point url to which request is made
     * @param - data - Data to be passed to server
     * @param - handleException - a boolean flag to indicate 
     *                             whether the exception need to be send to the caller
     */
    static doPost(url, data, handleException) {}

    /**
     * This function is to send a GET request to the specified URL
     * 
     * @param -url - end point url to which request is made
     * @param - data - Data to be passed to server
     * @param - handleException - a boolean flag to indicate 
     *                             whether the exception need to be send to the caller
     */
    static doDelete(url, data, handleException) {}

    static convertDateFormatForService(date) {
        if (date != '') {
            let newDate = date.split('-');
            return newDate[2] + '/' + newDate[1] + '/' + newDate[0];
        }
        return date;
    }

    static convertDateFormatForView(date) {
        if (date != '') {
            let newDate = date.split('/');
            return newDate[2] + '-' + newDate[1] + '-' + newDate[0];
        }
        return date;
    }

    static convertToDate(datestr, formatstr) {
        if (!formatstr)
            formatstr = 'dd/mm/yyyy';
        if (!(datestr && formatstr)) {
            return null;
        }
        var splitter = formatstr.match(/\-|\/|\s/) || ['-'],
            df = formatstr.split(splitter[0]),
            ds = datestr.split(splitter[0]),
            ymd = [0, 0, 0],
            dat;
        for (var i = 0; i < df.length; i++) {
            if (/yyyy/i.test(df[i])) {
                ymd[0] = ds[i];
            } else if (/mm/i.test(df[i])) {
                ymd[1] = ds[i];
            } else if (/dd/i.test(df[i])) {
                ymd[2] = ds[i];
            }
        }
        dat = new Date(ymd.join('/'));
        return dat;
    }


    static findAge(birthDate) {
        Utils.convertToDate(birthDate, 'dd/mm/yyyy');
        let today = new Date();
        let dob = new Date(birthDate);
        let age = today.getFullYear() - dob.getFullYear();
        let month = today.getMonth() - dob.getMonth();
        // if the birthday hasn't happened yet this year...
        if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }

    static parseUrl(pattern) {
        let urlData = {};

        let hash = window.location.hash.split('?')[0];
        hash = hash.substring(2);

        let hashSplit = [];

        if (hash != '')
            hashSplit = hash.split('/');

        pattern.split('/').forEach(function(item, index) {
            urlData[item] = hashSplit[index] == undefined ? null : hashSplit[index];
        });

        return urlData;
    }
    static convertStringToBoolean(stringData) {
        var booleanData;
        if (stringData == 'Yes' || stringData == 'Normal' || stringData == 'Regular') {
            booleanData = true;
        } else {
            booleanData = false;
        }
        return booleanData;
    }
    static convertBooleanToString(booleanData, text) {
        var stringData;
        if (booleanData == true) {
            if (text == 'Normality') {
                stringData = 'Normal';
            } else if (text == 'Regularity') {
                stringData = 'Regular';
            } else {
                stringData = 'Yes';
            }
        } else {
            if (text == 'Normality') {
                stringData = 'Abnormal';
            } else if (text == 'Regularity') {
                stringData = 'Irregular';
            } else {
                stringData = 'No';
            }
        }
        return stringData;
    }


    static navigate(history, path) {
        history.pushState(null, path);
    }

}
export {AppUtils};
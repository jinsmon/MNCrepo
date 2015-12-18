var AppDispatcher = require('../dispatcher/AppDispatcher.js');


module.exports = {
    executeAction: function(type, data) {
        AppDispatcher.dispatch({
            type: type,
            data: data
        });
    }
};
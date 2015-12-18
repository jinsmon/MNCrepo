/*eslint no-unused-vars: 0*/
class ServiceManager {

    /**
	 * This function is to send a GET request to the specified URL
	 * 
	 * @param - obj - json object
	 * 			sample : {"url":"http://sampleUurl.for.getData/sampleGet"
	 *				 		, "headers":[{ "key":"key1" , "value":"value1" },{ "key":"key2" , "value":"value2" }]
	 *			 			, "dataType":"json"
	 *						, "notifyError":false,
	 *			 			, "timeout":2000};
	 *			 
	 * @param - returns response data in case sucess,
	 * 			returns error in case of error and notifyError is set FALSE
	 * 			handles error in case of error and notifyError is set TRUE
	 */
    static doGet(obj) {
        var url = obj.url;
        var notifyError = obj.notifyError;
        var headers = obj.headers;
        var dataType = obj.dataTypa;
        var timeout = obj.timeout;
        var contentType = obj.contentType;

        var promise = new Promise(function(resolve, reject) {
            // console.log('Inside ServiceManager : function PromisedGet');  

            if (null == obj.timeout) {
                timeout = 5000;
            }
            // //console.log('timeout '+timeout); 

            $.ajax({
                url: url,
                crossDomain: true,
                dataType: dataType,
                type: 'GET',
                beforeSend: function(request) {
                    if (headers != undefined) {
                        for (var i = 0; i < headers.length; i++) {
                            request.setRequestHeader(headers[i].key, headers[i].value);
                        }
                    }
                },
                contentType: contentType,
                timeout: timeout,
                success: function(jsondata) {
                    resolve(jsondata);
                },
                error: function(msg) {
                    if (notifyError) {
                        // console.log('notifyError ');
                        ServiceManager.handleError(msg.status+' : ' + msg.responseText);
                    } else {
                        // console.log('rejecting error , w/o notify' + JSON.stringify(msg));    
                        reject(JSON.stringify(msg));
                    }
                }
            });
        });
        // console.log("pronise" + promise)                                   
        return promise;
    }

    /**
	 * This function is to send a POST request to the specified URL
	 * 
	 * @param - obj - json object
	 * 			sample : {"url":"http://sampleUurl.for.postData/samplePost"
	 *				 		, "headers":[{ "key":"key1" , "value":"value1" },{ "key":"key2" , "value":"value2" }]
	 *				 		, "data":[{ "data1":"one" , "data2":"two" },{ "data1":"three" , "data2":"four" }]
	 *				 		, "dataType":"json"
	 *				 		, "notifyError":false};
	 *			 
	 * @param - returns response data in case success,
	 * 			returns error  in case of error and notifyError is set FALSE
	 * 			handles error in case of error and notifyError is set TRUE
	 */

    static doPost(obj) {

        var url = obj.url;
        var notifyError = obj.notifyError;
        var headers = obj.headers;
        var data = obj.data;
        var dataType = obj.dataTypa;
        var timeout = obj.timeout;
        var contentType = obj.contentType;

        var promise = new Promise(function(resolve, reject) {
            // console.log('Inside ServiceManager : function PromisedGet');  

            if (null == obj.timeout) {
                timeout = 5000;
            }

            $.ajax({
                url: url,
                crossDomain: true,
                data: data,
                dataType: dataType,
                type: 'POST',
                beforeSend: function(request) {
                    if (headers != undefined) {
                        for (var i = 0; i < headers.length; i++) {
                            request.setRequestHeader(headers[i].key, headers[i].value);
                        }
                    }
                },
                contentType: contentType,
                success: function(response) {
                    // console.log(response);
                    resolve(response);
                },
                error: function(msg) {
                    if (notifyError) {
                        ServiceManager.handleError(msg.status+' : ' + msg.responseText);
                    } else {
                        // console.log('rejecting error , w/o notify' + JSON.stringify(msg));    
                        reject(JSON.stringify(msg));
                    }
                },
                timeout: timeout
            });
        });

        return promise;
    }

    static handleError(error) {
        // console.log('Inside ServiceManager : function HandleError :' + error);
        toast.show(error, 'error');
    }
}

module.exports = ServiceManager;
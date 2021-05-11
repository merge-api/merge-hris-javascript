import ApiClient from './ApiClient';


function convertRelatedObjectToType(data, relatedModel) {
    if (Array.isArray(data)) {
        console.log("in array case")
        if (data.length == 0) {
            return []
        } 
        if (typeof data[0] == 'string') {
            return ApiClient.convertToType(data, ['String']);
        } else {
            console.log("attempting to convert to array of models")
            return ApiClient.convertToType(data, [relatedModel]);
        }
    } else {
        if (relatedModel){
            console.log(data)
        }
        if (typeof data == 'string') {
            return ApiClient.convertToType(data, 'String');
        } else {
            console.log("attempting to convert to model")
            return ApiClient.convertToType(data, relatedModel);
        }
    }
}

export default convertRelatedObjectToType;
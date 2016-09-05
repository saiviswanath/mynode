exports.MetadataType_Not_Found = function(type, callback) {
    callback(new Error("Metadata Type " + type + " is invalid"));
};

exports.UnexpectedError = function(callback) {
    callback(new Error("Unexpected Error"));
}
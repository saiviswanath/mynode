var metadataDao = require("../db/MetadataDao");

exports.getMetadataByType = function(type, callback) {
    metadataDao.getMetadataByType(type, callback);
} 

exports.getMetadataByTypeAndName = function(type, name, callback) {
    metadataDao.getMetadataByTypeAndName(type, name, callback);
};
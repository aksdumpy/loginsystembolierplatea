// var dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';
var dbPassword ="mongodb://localhost:27017/myapp";
module.exports = {
    MongoURI: dbPassword
};
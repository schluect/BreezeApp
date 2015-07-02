require.config({
    paths:{
        knockout: 'knockout'
    }
});
require(['knockout', 'models/appViewModel','routes', 'domReady!'], function(ko, appViewModel, routes){
 routes.InitRouter();
 ko.applyBindings(new appViewModel());   
});
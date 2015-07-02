require.config({
    paths:{
        knockout: 'knockout'
    }
});

require(['knockout', 'models/appViewModel', 'domReady!'], function(ko, appViewModel){
 ko.applyBindings(new appViewModel());   
});
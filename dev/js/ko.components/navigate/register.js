define(['knockout'], function(ko){
    var processNavigateObject = function(data){
           
    };
    
    ko.components.register["navigate"] = {
         update: function(params) {
             var value = valueAccessor(),
                 valueUnwrapped = ko.unwrap(value);
                
                processNavigateObject(valueUnwrapped);
                
             ko.utils.registerEventHandler(element, 'click', function(){
                 if (typeof valueUnwrapped === "object"){
                     history.pushState(valueUnwrapped.data, valueUnwrapped.title, valueUnwrapped.url);
                 } else if (typeof valueUnwrapped === "string") {
                     history.pushState(null, null,valueUnwrapped);
                 }
             });
         }
     }; 
});
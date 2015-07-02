define(['knockout'],function(ko){
    return {"InitRouter":function(){
            var processNavigateObject = function(data){
               
            };
            ko.bindingHandlers["navigate"] = {
                 update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                     var value = valueAccessor(),
                         valueUnwrapped = ko.unwrap(value);
                     
                     ko.utils.registerEventHandler(element, 'click', function(){
                         if (typeof valueUnwrapped === "object"){
                             history.pushState(valueUnwrapped.data, valueUnwrapped.title, valueUnwrapped.url);
                         } else if (typeof valueUnwrapped === "string") {
                             history.pushState(null, null,valueUnwrapped);
                         }
                     });
                 }
             };
            ko.utils.registerEventHandler(window, 'popstate', function(event){
               console.log("popstate:"+JSON.stringify(event)); 
            });
            
            ko.utils.registerEventHandler(window, 'pageshow', function(event){
               console.log("pageshow:"+JSON.stringify(event)); 
            });
            
            ko.utils.registerEventHandler(window, 'pagehide', function(event){
               console.log("pagehide:"+JSON.stringify(event)); 
            });
            
            ko.utils.registerEventHandler(window, 'hashchange', function(event){
               console.log("hashchange:"+JSON.stringify(event)); 
            });
        }
    };
});
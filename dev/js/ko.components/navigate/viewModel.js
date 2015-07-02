define(['knockout'], function(ko){
     var value = valueAccessor(),
         valueUnwrapped = ko.unwrap(value);
        
    function NavigateViewModel(params){
        if (typeof params === "object"){
            this.data = params.data;
            this.title = params.title;
            this.url = params.url;
            if (params.persistData){
             this.url += "?title="+this.title+"&data="+encodeURI(JSON.stringify(this.data));   
            }
        } else if (typeof params === "string") {
            this.url = params
        }
    }  
    
    NavigateViewModel.prototype.handleClick = function() {
        if (this.url){
            history.pushState(this.data, this.title, this.url);
        }
    };
     
     return NavigateViewModel;
});
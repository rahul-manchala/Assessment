var app = angular.module('myApp',["ngRoute","ngSanitize"])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "modules/blog/blog.html",
        controller: 'blogController'
    })
    .when("/glossary", {
        templateUrl : "modules/glossary/glossary.html",
        controller: 'glossaryController'
    })
    .when("/contact", {
        templateUrl : "modules/contact/contact.html",
        controller: 'contactController'
    });
})
.directive('validateForm', function(){
    return {
        restrict: 'A',
        require:  '^form',
        link: function(scope, el, attrs, formCtrl) {
            el.bind('click', function() {
                if(!formCtrl.$valid && formCtrl.selectedReason.$modelValue == undefined){
                    scope.$apply(function() {
                      scope.forminValid = true;
                      scope.formValid = false;
                    });
                }else if(formCtrl.$valid && formCtrl.selectedReason.$modelValue != undefined){
                    scope.$apply(function() {
                      scope.forminValid = false;
                      scope.formValid = true;
                    });
                }
            });
        }
    }
})
.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
            result.push(item);
        }
        });
        return result;
    };
});
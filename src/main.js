var MyApp=angular.module("myapp",["ngRoute"]);


//Run here
MyApp.run(function(){
   console.log("Application run here.");
});

//Config here
MyApp.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
	
	$routeProvider
    .when('/', {
        templateUrl: 'view/dashboard.html',
		controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
    })
	.otherwise({
        redirectTo: '/'
    })
	
});
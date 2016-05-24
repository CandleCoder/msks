/*!
* leap-analyticx - v0.0.1 - MIT LICENSE 2016-05-24. 
* @author Magic Software Pvt. Ltd.
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('leap-analyticx', [
		'ngResource',
		'ngAria',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home',
		'login',
		'ngProgress',
		'googlechart'
		]);

})();

(function () {
	'use strict';


	angular
		.module('leap-analyticx')
		.config(configure)
		.run(runBlock);


	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider','$mdThemingProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider,$mdThemingProvider) {
		// This is required for Browser Sync to work poperly
	 //	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		 //$httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
        $mdThemingProvider.theme('default')
       .primaryPalette('teal')
        .accentPalette('blue');
        $mdThemingProvider.theme('input')
		$urlRouterProvider
				.otherwise('/dashboard');

		//$locationProvider.hashPrefix('!');
   	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

	}

})();

(function() {
  'use strict';
    angular.module('home', []);
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:loginModule
	 * @description
	 * # loginModule
	 * Module of the app
	 */

  	angular.module('login', []);

})();

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('leap-analyticx')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.viewCount', {
				url:'/viewcount',
				templateUrl: 'app/modules/home/viewCount.html',
				controller: 'ViewCountCtrl'

			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html',
				controller: 'ViewCountCtrl'

			})

			.state('home.timeSpent', {
				url:'/timeSpent',
				templateUrl: 'app/modules/home/timeSpent.html',
				controller: 'ViewCountCtrl'

			});

	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:loginRoute
 * @description
 * # loginRoute
 * Route of the app
 */

angular.module('login')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('login', {
				url:'/login',
				templateUrl: 'app/modules/login/login.html',
				controller: 'LoginCtrl',
				controllerAs: 'vm'
			});

		
	}]);

angular.module('home', [])
       .controller('DashboardCtrl', function ($scope) {
// if($http.defaults.headers.common['x-auth-token'] == 'null'){
//     $window.location.href = '/#/login';
// }       	
console.log("dashboard", $scope.pageTitle);

});

(function () {
	'use strict';

	 angular
 		.module('leap-analyticx')
 		.controller('HomeCtrl', Home);

 	  Home.$inject = ['homeService','$scope'];


 	/*
 	 * recommend
 	 * Using function declarations
 	 * and bindable members up top.
 	 */

 	function Home(homeService, $scope) {
 		/*jshint validthis: true */
 		var vm = this;
 		//vm.title = "Hello, leap-analyticx!";
 		vm.version = "1.0.0";
 		vm.listFeatures = homeService.getFeaturesList();

 		$scope.pageTitle = "Manikant";

 	}

})();

angular.module("home", ['ngMaterial', 'ngMessages'])
.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.controller("ViewCountCtrl", function ($scope,$http,$window,$element,$mdDialog, $mdMedia,$mdSidenav) {

  // if($http.defaults.headers.common['x-auth-token'] == 'null'){
  //   $window.location.href = '/#/login';
  // }

  // store response data in a variable
  var responsejson;
  var graphMainArr=[];
  var graphInnerArr=[];

  var courseObjectList = [];
  var userObjectList = [];

  var tempSelectedCourse = [];
  var tempSelectedUser = [];
  var tempSelectedBoard = [];
  var tempSelectedGrade = [];
  var tempSelectedSubject = [];

  $scope.user = null;
  $scope.users = null;

  $scope.course = null;
  $scope.courses = null;

  $scope.board = null;
  $scope.boards = null;

  $scope.grade = null;
  $scope.grades = null;

  $scope.subject = null;
  $scope.subjects = null;

  $scope.loadUsers = function(){
   $scope.users = $scope.users ||[
       { id: 1, name: 'Amit' },
       { id: 2, name: 'Ankit' },
       { id: 3, name: 'Akash' },
       { id: 4, name: 'Chitra' },
       { id: 5, name: 'Charu' },
       { id: 6, name: 'Deepti' },
       { id: 7, name: 'Diya' },
       { id: 8, name: 'Deepika' },
       { id: 9, name: 'Jaspreet' },
       { id: 10, name: 'Harshit' },
       { id: 11, name: 'Anisha' },
       { id: 12, name: 'Arshi' },
       { id: 13, name: 'Shubhi' },
       { id: 14, name: 'Prateek' },
       { id: 15, name: 'Vinay' },
       { id: 16, name: 'Charvi' },
       { id: 17, name: 'Sandhya' },
       { id: 18, name: 'Stephy' },
       { id: 19, name: 'Astha' },
   ];
}

$scope.loadCourses = function(){
  $scope.courses = $scope.courses || [
    { id: 1, name: 'Motion' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'Plant' },
  ]
}

$scope.loadSubjects = function(){
  $scope.subjects = $scope.subjects || [
    { id: 1, name: 'Economics' },
    { id: 2, name: 'Science' },

  ]
}

$scope.loadBoards = function(){
  $scope.boards = $scope.boards || [
    { id: 1, name: 'CBSE' },
    { id: 2, name: 'ICSE' },
  ]
}

$scope.loadGrades = function(){
   $scope.grades = $scope.grades ||[
       { id: 1, name: '1' },
       { id: 2, name: '2' },
       { id: 3, name: '3' },
       { id: 4, name: '4' },
       { id: 5, name: '5' },
       { id: 6, name: '6' },
       { id: 7, name: '7' },
       { id: 8, name: '8' },
       { id: 9, name: '9' },
       { id: 10, name: '10' },

   ];
}

  //API Variables
  var BASE_VIEW_COUNT_API = "http://188.166.217.86/app/v1/analytics/";

  $scope.isSidenavOpen = false;

  $scope.redirectToViewCount = function(){
  location = "#/viewcount";
  }

  $scope.redirectToTimeSpent = function(){
  location = "#/timeSpent";
  }

  $scope.openLeftMenu = function() {
    $mdSidenav('right').toggle();
  };

  $scope.$watch('isSidenavOpen', function(isSidenavOpen) {
      //alert('sidenav is ' + (isSidenavOpen ? 'open' : 'closed'));
  });

    $scope.myDate = new Date();
    $scope.minDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() - 2,
    $scope.myDate.getDate());
    $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

      //$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

      //$http.defaults.headers.common['x-auth-token'] = $window.sessionStorage.Token;

       $scope.onCourseSelectValueChange = function(item){


        tempSelectedCourse = item;
        //console.log(tempSelectedCourse);
      }

      $scope.onBoardSelectValueChange = function(item){


        tempSelectedBoard = item;
       // console.log(tempSelectedBoard);
      }

      $scope.onGradeSelectValueChange = function(item){


        tempSelectedGrade = item;
        //console.log(tempSelectedGrade);
      }

      $scope.onSubjectSelectValueChange = function(item){


        tempSelectedSubject = item;
        //console.log(tempSelectedSubject);
      }

      $scope.onUserSelectValueChange = function(item){


        tempSelectedUser = item;
        //console.log(tempSelectedUser);
      }
      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      ///////////////////// *** API CONSUMING METHODS *** //////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////

      // $scope.showAllCourses = function(api_name){

      //   var api = BASE_VIEW_COUNT_API+api_name;

      // }

      // $scope.showCoursesDetailByCourseIdAndUserId = function(courseIds,userIds){

      //     var api = $scope.getApiByCourseIdAndUserId(courseIds,userIds);

      //     $http.get(api).success(function(responseCourse, status, headers, config){


      //       //var responseCourse = data;
      //       var courseGraphArr = [];
      //       // store response data in a variable
      //       //responseCourse = data;

      //       if(responseCourse.ResultData.length >= 0){

      //       for( i = 0; i < responseCourse.ResultData.length ; i++){

      //         delete responseCourse.ResultData[i].CourseId;

      //         var obj = responseCourse.ResultData[i];
      //         var course_name = obj.CourseName;
      //         var total_time_attempted = obj.UsersAttempt[0].Total_times_attempted;
      //         courseGraphArr.push({c: [{v:course_name},{v:total_time_attempted}]});
      //       }
      //     }


      //       //console.log(courseGraphArr);
      //       $scope.chartObject = {};
      //       $scope.chartObject.type = "ColumnChart";

      //       $scope.chartObject.data = {"cols": [
      //         {id: "t", label: "Course Name", type: "string"},
      //         {id: "s", label: "View Count", type: "number"}
      //       ], "rows": courseGraphArr
      //     };


      //     $scope.chartObject.options = {
      //       'title': 'Graph',
      //       'vAxis': {
      //         'title': 'View Count',
      //         logScale:true,
      //         'gridlines': {
      //           'count': 10
      //         }
      //       },
      //       'hAxis': {
      //         'title': 'Courses',

      //       }
      //     }


      //     }).error(function(data, status,$event){
      //         $scope.showAlert($event);
      //     });

      // }

       // $scope.getApiByCourseIdAndUserId = function(courseIds,userIds){

       //  return BASE_VIEW_COUNT_API+"analytics/viewcount?action=attempted&type=course&id="+courseIds+"&users="+userIds;
       // }


       // $scope.showCoursesDetailByCourseId = function(courseIds){

       //  var api = $scope.getApiByCourseIds(courseIds);

       //  $http.get(api).success(function(data, status, headers, config){

       //      var responseCourse;
       //      var courseGraphArr = [];
       //      // store response data in a variable
       //      responseCourse = data;
       //      if(responseCourse.ResultData.length >0){
       //       // console.log("No data found");
       //      for( i = 0; i < responseCourse.ResultData.length ; i++){

       //        delete responseCourse.ResultData[i].CourseId;
       //        var obj = responseCourse.ResultData[i];
       //        var course_name = obj.CourseName;
       //        var total_time_attempted = obj.Total_times_attempted;
       //        courseGraphArr.push({c: [{v: course_name},{v: total_time_attempted}]});
       //      }
       //    }


       //      //console.log(courseGraphArr);
       //      $scope.chartObject = {};
       //      $scope.chartObject.type = "ColumnChart";

       //      $scope.chartObject.data = {"cols": [
       //        {id: "t", label: "Course Name", type: "string"},
       //        {id: "s", label: "View Count", type: "number"}
       //      ], "rows": courseGraphArr
       //    };


       //    $scope.chartObject.options = {
       //      'title': 'Graph',
       //      'vAxis': {
       //        'title': 'View Count',
       //        logScale:true,
       //        'gridlines': {
       //          'count': 10
       //        }
       //      },
       //      'hAxis': {
       //        'title': 'Courses',

       //      }
       //    }


       //    }).error(function(data, status,$event){
       //        $scope.showAlert($event);
       //    });
       // }

         //  $scope.showAlert = function(ev) {
         //      var defaults = {
         //      title: 'Confirm',
         //      content: '',
         //      event: null
         // };

      // var opts = angular.merge({}, defaults);
      //   $mdDialog.show(
      //     $mdDialog.alert()
      //       .parent(angular.element(document.querySelector('#popupContainer')))
      //       .clickOutsideToClose(true)

      //       .textContent('No user data available')
      //       .ariaLabel('Alert Dialog Demo')
      //       .ok('Dismiss')
      //       .targetEvent(opts.event)
      //   );
      // };

       // $scope.getApiByCourseIds = function(courseIds){

       //  return BASE_VIEW_COUNT_API+"analytics/viewcount?action=attempted&type=course&id="+courseIds;
       // }

       // $scope.showCoursesDetailByUserId = function(userIds){

       //  var api = $scope.getApiByUserIds(userIds);

       //  $http.get(api).success(function(responseCourse, status, headers, config){

       //     // var responseCourse;
       //      var courseGraphArr = [];
       //      // store response data in a variable
       //      //responseCourse = data;
       //      if(responseCourse.ResultData.length >0){
       //       // console.log("No data found");
       //      for( i = 0; i < responseCourse.ResultData.length ; i++){

       //        delete responseCourse.ResultData[i].CourseId;
       //        var obj = responseCourse.ResultData[i];

       //        //console.log("obj is :",obj.UsersAttempt[0],i);
       //        var course_name = obj.CourseName;
       //        //console.log("name is :", course_name);
       //        var total_time_attempted = obj.UsersAttempt[0].Total_times_attempted;
       //        //console.log("attempts",total_time_attempted);
       //        courseGraphArr.push({c: [{v: course_name},{v: total_time_attempted}]});
       //      }
       //    }


       //      //console.log(courseGraphArr);
       //      $scope.chartObject = {};
       //      $scope.chartObject.type = "ColumnChart";

       //      $scope.chartObject.data = {"cols": [
       //        {id: "t", label: "Course Name", type: "string"},
       //        {id: "s", label: "View Count", type: "number"}
       //      ], "rows": courseGraphArr
       //    };


       //    $scope.chartObject.options = {
       //      'title': 'Graph',
       //      'vAxis': {
       //        'title': 'View Count',
       //        logScale:true,
       //        'gridlines': {
       //          'count': 10
       //        }
       //      },
       //      'hAxis': {
       //        'title': 'Courses',

       //      }
       //    }


       //    }).error(function(data, status,$event){
       //        $scope.showAlert($event);
       //    });
       // }

       // $scope.getApiByUserIds = function(userIds){

       //  return BASE_VIEW_COUNT_API+"analytics/viewcount?action=attempted&type=course&users="+userIds;
       // }

      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      ///////////////////// *** API CONSUMING METHODS *** //////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////




      $scope.submit = function(){
         var courseIdArr = [];
         var userIdArr = [];
         var gradeArr = [];
         var subjectArr = [];
         var boardArr = [];

         for( i = 0; i < tempSelectedCourse.length ; i++){

           courseIdArr.push(tempSelectedCourse[i].name);

           console.log(courseIdArr);

         }

         for( j = 0; j < tempSelectedUser.length ; j++){

           userIdArr.push(tempSelectedUser[j].name);

           console.log(userIdArr);

         }

         for( k = 0; k < tempSelectedGrade.length ; k++){

           gradeArr.push(tempSelectedGrade[k].name);

           console.log(gradeArr);

         }

         for( l = 0; l < tempSelectedSubject.length ; l++){

           subjectArr.push(tempSelectedSubject[l].name);



         }

         for( m = 0; m < tempSelectedBoard.length ; m++){

          boardArr.push(tempSelectedBoard[m].name);

          console.log(boardArr);
         }

         // if(courseIdArr.length > 0 && userIdArr.length == 0 ){

         //   $scope.showCoursesDetailByCourseId(courseIdArr);

         // }

      //   else if(courseIdArr.length > 0 && userIdArr.length > 0){

      //    $scope.showCoursesDetailByCourseIdAndUserId(courseIdArr,userIdArr);

      //    }



      //  else if(userIdArr){

      //   $scope.showCoursesDetailByUserId(userIdArr);

      // }

    }
      // The md-select directive eats keydown events for some quick select
      // logic. Since we have a search input here, we don't need that logic.
      // $element.find('input').on('keydown', function(ev) {
      //   ev.stopPropagation();
      // });



      // The md-select directive eats keydown events for some quick select
      // logic. Since we have a search input here, we don't need that logic.
      // $element.find('input').on('keydown', function(ev) {
      //   ev.stopPropagation();
      // });
      $scope.DashboardName="Dashboard";
      $scope.ViewCountName = "View Count";
      $scope.TimeSpentName = "Last Visited"
      $.get("http://188.166.217.86/app/v1/analytics/viewcount?ids=Private_Equity,Motion&action=viewcount&type=lesson&board=cbse&grade=10&subject=Economics",function(data,status){
       alert("Data: " + data + "\nStatus: " + status);
      })

      $http.get("http://188.166.217.86/app/v1/analytics/viewcount?ids=Private_Equity,Motion&action=viewcount&type=lesson&board=cbse&grade=10&subject=Economics")
      .then(function(response,error) {

        if(error){
          console.log(error);
        }
        // store response data in a variable
        responsejson = response.data;
        console.log(responsejson);
     //    for( i = 0; i < responsejson.ResultData.length ; i++){
     //      delete responsejson.ResultData[i].CourseId;
     //      graphInnerArr.push({v: responsejson.ResultData[i].CourseName});
     //      graphInnerArr.push({v: responsejson.ResultData[i].Total_times_attempted});

     //      graphMainArr.push({c: graphInnerArr});
     //      graphInnerArr=[];
     //    }



     //    $scope.chartObject = {};
     //    $scope.chartObject.type = "ColumnChart";

     //    $scope.chartObject.data = {"cols": [
     //      {id: "t", label: "Course Name", type: "string"},
     //      {id: "s", label: "View Count", type: "number"}
     //    ], "rows": graphMainArr
     //  };


     //  $scope.chartObject.options = {
     //    'title': 'Graph',
     //    'vAxis': {
     //      'title': 'View Count',
     //      logScale:true,
     //      'gridlines': {
     //        'count': 10
     //      }
     //    },
     //    'hAxis': {
     //      'title': 'Courses',

     //    }
     //  };

      });
  });

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:LayoutCtrl
	 * @description
	 * # LayoutCtrl
	 * Controller of the app
	 */

	angular
		.module('leap-analyticx')
		.controller('LayoutCtrl', Layout);
		/*function loginMgr($scope, $window, $http, authService){
         
		};*/
   
	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog','$window', '$http','$location'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog, $window, $http,$location ) {

	$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $http.defaults.headers.common['Content-Type'] = 'application/json';
    $http.defaults.headers.common['x-auth-token'] = $window.sessionStorage.Token;
		// console.log("dsjfhddddddd",$window);
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
					.content('Password clicked!')
					.position('top right')
					.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
				$mdDialog.show({
					controller: DialogController,
					templateUrl: 'tabDialog.tmpl.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose:true
				})
				.then(function(answer) {
					$mdToast.show(
						$mdToast.simple()
							.content('You said the information was "' + answer + '".')
							.position('top right')
							.hideDelay(2000)
					);

				}, function() {
					$mdToast.show(
						$mdToast.simple()
							.content('You cancelled the dialog.')
							.position('top right')
							.hideDelay(2000)
					);
				});

				function DialogController($scope, $mdDialog) {
					$scope.hide = function() {
						$mdDialog.hide();
					};

					$scope.cancel = function() {
						$mdDialog.cancel();
					};

					$scope.answer = function(answer) {
						$mdDialog.hide(answer);
					};
				}
		};


		vm.logOut = function () {
			$window.sessionStorage.Token=null;
			$window.location.href = '/#/login';
        };

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:SidenavCtrl
	 * @description
	 * # SidenavCtrl
	 * Controller of the app
	 */
	angular
		.module('leap-analyticx')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
            $mdSidenav('left').close();
        };

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
		];

		vm.navigateTo = function (target) {
			var page = target;
			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
						.content(clickedItem['name'] + ' clicked!')
						.position('top right')
						.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:loginCtrl
	* @description
	* # loginCtrl
	* Controller of the app
	*/

	angular
	.module('login')
	.controller('LoginCtrl',
	function LoginCtrl($scope, $window, $http, authService, utilityservice, leapconfig,$location, ngProgressFactory) {
		$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		$scope.username = '';
		$scope.password = '';
		$scope.hasError = false;
		$scope.errorMsg = '';
		$scope.Name = '';
		$scope.dataLoading = false;

		//$scope.image="../../images/login_bg.jpg";
  		//$scope.bodyStyle = {background: "url(" + $scope.image + ") no-repeat center center fixed"};
  		//angular.element('body').css('background-image', "url("+$scope.image + ")");

		// Login functionality for user
		$scope.login = function () {

			$scope.progressbar = ngProgressFactory.createInstance();
			$scope.progressbar.start();
			if (utilityservice.IsNullOrEmpty($scope.username)) {
				$scope.userHide = false;
			}
			if (utilityservice.IsNullOrEmpty($scope.password)) {
				$scope.pwdHide = false;
			}
			if (!utilityservice.IsNullOrEmpty($scope.username) && !utilityservice.IsNullOrEmpty($scope.password)) {
				authService.login(angular.lowercase($scope.username), $scope.password).then(function (data) {

					if (!data) {
						$scope.errorMsg = "Username or passsord is incorrect!";
						$scope.dataLoading = false;
						return;
					}
					var roles = data.roles;
					var image = data.image;
					if (angular.isDefined(image)) {
						$window.sessionStorage["userImage"] = image.src;
					}
					var metaDataMap = data.metaDataMap;
					if (angular.isDefined(metaDataMap)) {
						$window.sessionStorage["MB_USER_TOKEN"] = metaDataMap.MB_USER_TOKEN;
					}
					$window.sessionStorage["leapLaunchedUser"] = false;
					$window.sessionStorage["UserName"] = data.userName;
					$window.sessionStorage["email"] = data.email;
					$window.sessionStorage["UserId"] = data.id;

					if (angular.isDefined(roles)) {
						var role = roles[0].title;
						$window.sessionStorage["Role"] = role;
						if (role) {
							if (angular.uppercase(role) === 'ADMIN') {
								$scope.hasError = false;
								$scope.errorMsg = '';
								$window.location.href = '/#/dashboard';
								$scope.progressbar.complete();
								//$(location).attr('href', "/leap/#/dashboard.html");

							}
							else if (angular.uppercase(role) === 'LEARNER') {
								//$(location).attr('href', "/leap/#/dashboard.html");

							}
						}
					}
				}, function (error) {
					$scope.username = '';
					$scope.password = '';
					$scope.hasError = true;
					$scope.errorMsg = "Username or passsord is incorrect!";
					$scope.dataLoading = false;
					$scope.progressbar.complete();
					alert("login unsuccessfull");
					return;
				}
			);
		}
	};
})

.factory('leapconfig', function () {
	return {
		//ServiceBaseUrl: 'http://121.241.115.117/api/',
		ServiceBaseUrl: 'http://10.11.9.8/api/',
		LoginUrl: "v1/login",
		Logout: "v1/logout"
	};
})

.factory('utilityservice', function () {
	var factory = {};

	factory.IsNullOrEmpty = function (data) {
		if (data === null || data === 'undefined' || data === '') {
			return true;
		}
		return false;
	};

	return factory;
})

.factory('authService', function ($http, $rootScope, $window, $q, leapconfig, utilityservice) {
	return {
		login: function (userName, password) {
			var deferred = $q.defer();
			var loginUrl = leapconfig.ServiceBaseUrl + leapconfig.LoginUrl;
			$window.sessionStorage["BasicAuth"] = 'Basic ' + window.btoa(userName + ":" + password);
			$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
			$http.defaults.headers.common.Authorization = 'Basic ' + window.btoa(userName + ":" + password);
			$http({
				method: 'GET',
				url: loginUrl
				//,headers: { 'X-Requested-With': 'XMLHttpRequest' }
			}).then(function (response) {
				$window.sessionStorage["Token"] = response.headers('x-auth-token');
				deferred.resolve(response.data);
				
			}, function (error) {
				deferred.reject(error);
			});
			return deferred.promise;
		},
		logout: function (userName, password) {
			var deferred = $q.defer();
			var logoutUrl = app.config.ServiceBaseUrl + app.config.Logout;
			$http.get(logoutUrl).then(function (response) {
				$window.sessionStorage["BasicAuth"] = null;
				$window.sessionStorage["Token"] = null;
				deferred.resolve(response.data);
			}, function (error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	};
}).directive('ngEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if (event.which === 13) {
				scope.$apply(function () {
					scope.$eval(attrs.ngEnter);
				});

				event.preventDefault();
			}
		});
	};
});


})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:homeService
	 * @description
	 * # homeService
	 * Service of the app
	 */

	angular.module('leap-analyticx')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list
		}

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('leap-analyticx')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'login',
							name: 'Login'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('leap-analyticx')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'login',
							name: 'Login'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:loginService
	 * @description
	 * # loginService
	 * Service of the app
	 */

  	angular
		.module('login')
		.factory('LoginService', Login);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Login.$inject = ['$http'];

		function Login ($http) {

		}

})();

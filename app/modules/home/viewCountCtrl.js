angular.module("home", ['ngMaterial', 'ngMessages']).controller("ViewCountCtrl", function ($scope,$http,$window,$element,$mdDialog, $mdMedia,$mdSidenav) {

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
  $scope.user = null;
  $scope.users = null;

  $scope.course = null;
  $scope.courses = null;

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

      $http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      $http.defaults.headers.common['Content-Type'] = 'application/json';
      $http.defaults.headers.common['x-auth-token'] = $window.sessionStorage.Token;


      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      ///////////////////// *** API CONSUMING METHODS *** //////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////

      $scope.showAllCourses = function(api_name){

        var api = BASE_VIEW_COUNT_API+api_name;

      }

      $scope.showCoursesDetailByCourseIdAndUserId = function(courseIds,userIds){

          var api = $scope.getApiByCourseIdAndUserId(courseIds,userIds);

          $http.get(api).success(function(responseCourse, status, headers, config){


            //var responseCourse = data;
            var courseGraphArr = [];
            // store response data in a variable
            //responseCourse = data;

            if(responseCourse.ResultData.length >= 0){

            for( i = 0; i < responseCourse.ResultData.length ; i++){

              delete responseCourse.ResultData[i].CourseId;

              var obj = responseCourse.ResultData[i];
              var course_name = obj.CourseName;
              var total_time_attempted = obj.UsersAttempt[0].Total_times_attempted;
              courseGraphArr.push({c: [{v:course_name},{v:total_time_attempted}]});
            }
          }


            //console.log(courseGraphArr);
            $scope.chartObject = {};
            $scope.chartObject.type = "ColumnChart";

            $scope.chartObject.data = {"cols": [
              {id: "t", label: "Course Name", type: "string"},
              {id: "s", label: "View Count", type: "number"}
            ], "rows": courseGraphArr
          };


          $scope.chartObject.options = {
            'title': 'Graph',
            'vAxis': {
              'title': 'View Count',
              logScale:true,
              'gridlines': {
                'count': 10
              }
            },
            'hAxis': {
              'title': 'Courses',

            }
          }


          }).error(function(data, status,$event){
              $scope.showAlert($event);
          });

      }

       $scope.getApiByCourseIdAndUserId = function(courseIds,userIds){

        return BASE_VIEW_COUNT_API+"analytics/viewcount?action=attempted&type=course&id="+courseIds+"&users="+userIds;
       }


       $scope.showCoursesDetailByCourseId = function(courseIds){

        var api = $scope.getApiByCourseIds(courseIds);

        $http.get(api).success(function(data, status, headers, config){

            var responseCourse;
            var courseGraphArr = [];
            // store response data in a variable
            responseCourse = data;
            if(responseCourse.ResultData.length >0){
             // console.log("No data found");
            for( i = 0; i < responseCourse.ResultData.length ; i++){

              delete responseCourse.ResultData[i].CourseId;
              var obj = responseCourse.ResultData[i];
              var course_name = obj.CourseName;
              var total_time_attempted = obj.Total_times_attempted;
              courseGraphArr.push({c: [{v: course_name},{v: total_time_attempted}]});
            }
          }


            //console.log(courseGraphArr);
            $scope.chartObject = {};
            $scope.chartObject.type = "ColumnChart";

            $scope.chartObject.data = {"cols": [
              {id: "t", label: "Course Name", type: "string"},
              {id: "s", label: "View Count", type: "number"}
            ], "rows": courseGraphArr
          };


          $scope.chartObject.options = {
            'title': 'Graph',
            'vAxis': {
              'title': 'View Count',
              logScale:true,
              'gridlines': {
                'count': 10
              }
            },
            'hAxis': {
              'title': 'Courses',

            }
          }


          }).error(function(data, status,$event){
              $scope.showAlert($event);
          });
       }

          $scope.showAlert = function(ev) {
              var defaults = {
              title: 'Confirm',
              content: '',
              event: null
         };

      var opts = angular.merge({}, defaults);
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)

            .textContent('No user data available')
            .ariaLabel('Alert Dialog Demo')
            .ok('Dismiss')
            .targetEvent(opts.event)
        );
      };

       $scope.getApiByCourseIds = function(courseIds){

        return BASE_VIEW_COUNT_API+"analytics/viewcount?action=attempted&type=course&id="+courseIds;
       }

       $scope.showCoursesDetailByUserId = function(userIds){

        var api = $scope.getApiByUserIds(userIds);

        $http.get(api).success(function(responseCourse, status, headers, config){

           // var responseCourse;
            var courseGraphArr = [];
            // store response data in a variable
            //responseCourse = data;
            if(responseCourse.ResultData.length >0){
             // console.log("No data found");
            for( i = 0; i < responseCourse.ResultData.length ; i++){

              delete responseCourse.ResultData[i].CourseId;
              var obj = responseCourse.ResultData[i];

              //console.log("obj is :",obj.UsersAttempt[0],i);
              var course_name = obj.CourseName;
              //console.log("name is :", course_name);
              var total_time_attempted = obj.UsersAttempt[0].Total_times_attempted;
              //console.log("attempts",total_time_attempted);
              courseGraphArr.push({c: [{v: course_name},{v: total_time_attempted}]});
            }
          }


            //console.log(courseGraphArr);
            $scope.chartObject = {};
            $scope.chartObject.type = "ColumnChart";

            $scope.chartObject.data = {"cols": [
              {id: "t", label: "Course Name", type: "string"},
              {id: "s", label: "View Count", type: "number"}
            ], "rows": courseGraphArr
          };


          $scope.chartObject.options = {
            'title': 'Graph',
            'vAxis': {
              'title': 'View Count',
              logScale:true,
              'gridlines': {
                'count': 10
              }
            },
            'hAxis': {
              'title': 'Courses',

            }
          }


          }).error(function(data, status,$event){
              $scope.showAlert($event);
          });
       }

       $scope.getApiByUserIds = function(userIds){

        return BASE_VIEW_COUNT_API+"analytics/viewcount?action=attempted&type=course&users="+userIds;
       }

      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      ///////////////////// *** API CONSUMING METHODS *** //////////////////////////
      //////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////




      $scope.submit = function(){
        var courseIdArr = [];
        var userIdArr = [];

        for( i = 0; i < tempSelectedCourse.length ; i++){

          courseIdArr.push(tempSelectedCourse[i].id);

        }

        for( j = 0; j < tempSelectedUser.length ; j++){

          userIdArr.push(tempSelectedUser[j].id);
        }

        if(courseIdArr.length > 0 && userIdArr.length == 0 ){

          $scope.showCoursesDetailByCourseId(courseIdArr);

        }

        else if(courseIdArr.length > 0 && userIdArr.length > 0){

         $scope.showCoursesDetailByCourseIdAndUserId(courseIdArr,userIdArr);

         }



       else if(userIdArr){

        $scope.showCoursesDetailByUserId(userIdArr);

      }}
      // The md-select directive eats keydown events for some quick select
      // logic. Since we have a search input here, we don't need that logic.
      $element.find('input').on('keydown', function(ev) {
        ev.stopPropagation();
      });



      // The md-select directive eats keydown events for some quick select
      // logic. Since we have a search input here, we don't need that logic.
      $element.find('input').on('keydown', function(ev) {
        ev.stopPropagation();
      });
      $scope.DashboardName="Dashboard";
      $scope.ViewCountName = "View Count";
      $scope.TimeSpentName = "Time Spent"


      $http.get("http://10.11.9.8/api/v1/analytics/viewcount?action=attempted&type=course")
      .then(function(response) {

        // store response data in a variable
        responsejson = response.data;

        for( i = 0; i < responsejson.ResultData.length ; i++){
          delete responsejson.ResultData[i].CourseId;
          graphInnerArr.push({v: responsejson.ResultData[i].CourseName});
          graphInnerArr.push({v: responsejson.ResultData[i].Total_times_attempted});

          graphMainArr.push({c: graphInnerArr});
          graphInnerArr=[];
        }



        $scope.chartObject = {};
        $scope.chartObject.type = "ColumnChart";

        $scope.chartObject.data = {"cols": [
          {id: "t", label: "Course Name", type: "string"},
          {id: "s", label: "View Count", type: "number"}
        ], "rows": graphMainArr
      };


      $scope.chartObject.options = {
        'title': 'Graph',
        'vAxis': {
          'title': 'View Count',
          logScale:true,
          'gridlines': {
            'count': 10
          }
        },
        'hAxis': {
          'title': 'Courses',

        }
      };

     });
  });

angular.module("home", ['ngMaterial', 'ngMessages'])
.controller("ViewCountCtrl", function ($scope,$http,$window,$element,$mdDialog, $mdMedia,$mdSidenav) {

  // store response data in a variable
  
  // var graphMainArr=[];
  // var graphInnerArr=[];
  var courseObjectList = [];
  var userObjectList = [];
  var tempSelectedCourse = [];
  var tempSelectedUser = [];
  var tempSelectedBoard = [];
  var tempSelectedGrade = [];
  var tempSelectedSubject = [];
  var ankush;
  var marksharks;

  
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

  $.get(BASE_VIEW_COUNT_API+ "viewcount?ids=Private_Equity,Motion&action=viewcount&type=lesson&board=cbse&grade=10&subject=Economics",function(data,status){

   var responsejson = data.userattempts;
   var graphMainArr = [];
   var graphInnerArr = [];

      for( i = 0; i < responsejson.ResultData.length ; i++){
        delete responsejson.ResultData[i].Id;
        graphInnerArr.push({v: responsejson.ResultData[i].Name});
        graphInnerArr.push({v: responsejson.ResultData[i].Total_times_attempted});

        graphMainArr.push({c: graphInnerArr});
        graphInnerArr=[];
      }

     $scope.chartObject = {};
     $scope.chartObject.type = "ColumnChart";

     $scope.chartObject.data = {"cols": [
       {id: "t", label: "Lesson Name", type: "string"},
       {id: "s", label: "Total Times Attempted", type: "number"}
     ], "rows": graphMainArr
   };


   $scope.chartObject.options = {
     'title': 'Graph',
     'vAxis': {
       'title': 'Total Times Attempted',
       logScale:true,
       'gridlines': {
         'count': 10
       }
     },
     'hAxis': {
       'title': 'Lesson Name',

     }
   };
  });


  $.get(BASE_VIEW_COUNT_API+"viewcount?ids=What_is_Private_Equity&action=viewcount&type=topic&board=cbse&grade=10&subject=Economics&lessonid=Private_Equity",function(data,status){

   var responsejson = data.userattempts;
    var graphMainArr = [];
   var graphInnerArr = [];

      for( i = 0; i < responsejson.ResultData.length ; i++){
        delete responsejson.ResultData[i].Id;
        graphInnerArr.push({v: responsejson.ResultData[i].Name});
        graphInnerArr.push({v: responsejson.ResultData[i].Total_times_attempted});

        graphMainArr.push({c: graphInnerArr});
        graphInnerArr=[];
      }

     $scope.chartObject1 = {};
     $scope.chartObject1.type = "ColumnChart";

     $scope.chartObject1.data = {"cols": [
       {id: "t", label: "Lesson Name", type: "string"},
       {id: "s", label: "Total Times Attempted", type: "number"}
     ], "rows": graphMainArr
   };
   $scope.$apply();

   $scope.chartObject1.options = {
     'title': 'Graph',
     'vAxis': {
       'title': 'Total Times Attempted',
       logScale:true,
       'gridlines': {
         'count': 10
       }
     },
     'hAxis': {
       'title': 'Lesson Name',

     }
   };
  });

  
   $.get(BASE_VIEW_COUNT_API+"viewcount?ids=Perspectives_of_Limited_and_General_Partners,Industry_Review&action=viewcount&type=subtopic&board=cbse&grade=10&subject=Economics&lessonid=Private_Equity&topicid=What_is_Private_Equity",function(data,status){

   var responsejson = data.userattempts;
    var graphMainArr = [];
   var graphInnerArr = [];

      for( i = 0; i < responsejson.ResultData.length ; i++){
        delete responsejson.ResultData[i].Id;
        graphInnerArr.push({v: responsejson.ResultData[i].Name});
        graphInnerArr.push({v: responsejson.ResultData[i].Total_times_attempted});

        graphMainArr.push({c: graphInnerArr});
        graphInnerArr=[];
      }

     $scope.chartObject2 = {};
     $scope.chartObject2.type = "ColumnChart";

     $scope.chartObject2.data = {"cols": [
       {id: "t", label: "Lesson Name", type: "string"},
       {id: "s", label: "Total Times Attempted", type: "number"}
     ], "rows": graphMainArr
   };
   $scope.$apply();

   $scope.chartObject2.options = {
     'title': 'Graph',
     'vAxis': {
       'title': 'Total Times Attempted',
       logScale:true,
       'gridlines': {
         'count': 10
       }
     },
     'hAxis': {
       'title': 'Lesson Name',

     }
   };
  });

    $scope.DashboardName="Dashboard";
    $scope.ViewCountName = "View Count";
    $scope.TimeSpentName = "Last Visited";
    $scope.myDate = new Date();
    $scope.minDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() - 2,
    $scope.myDate.getDate());
    $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());


       $scope.onCourseSelectValueChange = function(item){
              tempSelectedCourse = item;
              }

      $scope.onBoardSelectValueChange = function(item){
        tempSelectedBoard = item;
      }

      $scope.onGradeSelectValueChange = function(item){
        tempSelectedGrade = item;
      }

      $scope.onSubjectSelectValueChange = function(item){
        tempSelectedSubject = item;
      }

      $scope.onUserSelectValueChange = function(item){
        tempSelectedUser = item;
      }

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
    }
  });
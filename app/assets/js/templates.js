angular.module('leap-analyticx').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/dashboard.html',
    "  <center>\r" +
    "\n" +
    "	  <h1>{{DashboardName}}</h1>\r" +
    "\n" +
    "	</center>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <md-content class=\"md-padding\" layout-xs=\"column\" layout=\"row\">\r" +
    "\n" +
    "    <div flex layout=\"row\">\r" +
    "\n" +
    "      <md-card flex=\"50\">\r" +
    "\n" +
    "        <md-card-title>\r" +
    "\n" +
    "          <md-card-title-text>\r" +
    "\n" +
    "            <span class=\"md-headline\">View Count</span>\r" +
    "\n" +
    "            <span class=\"md-subhead\">Shows view Count of the user corresponding to its courses</span>\r" +
    "\n" +
    "          </md-card-title-text>\r" +
    "\n" +
    "          <md-card-title-media>\r" +
    "\n" +
    "            <div class=\"md-media-lg card-media viewCountBg\"></div>\r" +
    "\n" +
    "          </md-card-title-media>\r" +
    "\n" +
    "        </md-card-title>\r" +
    "\n" +
    "        <md-card-actions layout=\"row\" layout-align=\"end center\">\r" +
    "\n" +
    "          <md-button class=\"md-primary\" ng-click=\"redirectToViewCount()\">Show View Count</md-button>\r" +
    "\n" +
    "        </md-card-actions>\r" +
    "\n" +
    "      </md-card>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <md-card flex=\"50\">\r" +
    "\n" +
    "        <md-card-title>\r" +
    "\n" +
    "          <md-card-title-text>\r" +
    "\n" +
    "            <span class=\"md-headline\">Last Visited</span>\r" +
    "\n" +
    "            <span class=\"md-subhead\">Shows Last Visited data of user</span>\r" +
    "\n" +
    "          </md-card-title-text>\r" +
    "\n" +
    "          <md-card-title-media>\r" +
    "\n" +
    "            <div class=\"md-media-lg card-media timeSpentBg\"></div>\r" +
    "\n" +
    "          </md-card-title-media>\r" +
    "\n" +
    "        </md-card-title>\r" +
    "\n" +
    "        <md-card-actions layout=\"row\" layout-align=\"end center\">\r" +
    "\n" +
    "          <md-button class=\"md-primary\" ng-click=\"redirectToTimeSpent()\">Show Last Visited</md-button>\r" +
    "\n" +
    "        </md-card-actions>\r" +
    "\n" +
    "      </md-card>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </md-content>\r" +
    "\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\">\r" +
    "\n" +
    "    <div ng-controller=\"SidenavCtrl as vm\" ng-cloak>\r" +
    "\n" +
    "        <md-toolbar class=\"md-tall md-hue-2\">\r" +
    "\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\r" +
    "\n" +
    "                <div layout=\"row\">\r" +
    "\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;\">\r" +
    "\n" +
    "                        <div>Analytics</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </md-toolbar>\r" +
    "\n" +
    "        <md-list>\r" +
    "\n" +
    "            <md-list-item ui-sref=\"home.dashboard\">\r" +
    "\n" +
    "                <div class=\"inset\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"apps\"></ng-md-icon>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <p> Dashboard </p>\r" +
    "\n" +
    "            </md-list-item>\r" +
    "\n" +
    "            <!-- <md-list-item ui-sref=\"home.viewCount\">\r" +
    "\n" +
    "                <div class=\"inset\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"poll\"></ng-md-icon>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <p> View Count </p>\r" +
    "\n" +
    "            </md-list-item>\r" +
    "\n" +
    "            <md-list-item ui-sref=\"home.timeSpent\">\r" +
    "\n" +
    "                <div class=\"inset\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"timer\"></ng-md-icon>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <p> Time Spent </p>\r" +
    "\n" +
    "            </md-list-item> -->\r" +
    "\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo('home.' + item.link)\">\r" +
    "\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <p > {{ item.name }}</p>\r" +
    "\n" +
    "            </md-list-item>\r" +
    "\n" +
    "            <md-divider></md-divider>\r" +
    "\n" +
    "            <md-subheader>Admin</md-subheader>\r" +
    "\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\" >\r" +
    "\n" +
    "                <div class=\"inset\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <p> {{ item.title }}</p>\r" +
    "\n" +
    "            </md-list-item>\r" +
    "\n" +
    "        </md-list>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</md-sidenav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\" ng-cloak>\r" +
    "\n" +
    "    <md-toolbar ng-show=\"!showSearch\">\r" +
    "\n" +
    "        <div class=\"md-toolbar-tools\">\r" +
    "\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span flex></span>\r" +
    "\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "            <md-menu>\r" +
    "\n" +
    "                <md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\r" +
    "\n" +
    "                    <md-icon> more_vert </md-icon>\r" +
    "\n" +
    "                </md-button>\r" +
    "\n" +
    "                <md-menu-content width=\"4\">\r" +
    "\n" +
    "                    <md-menu-item>\r" +
    "\n" +
    "                        <md-button ng-click=\"layout.changeProfile($event)\">\r" +
    "\n" +
    "                            <md-icon>face</md-icon>\r" +
    "\n" +
    "                            Profile\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </md-menu-item>\r" +
    "\n" +
    "                    <md-menu-item>\r" +
    "\n" +
    "                        <md-button ng-click=\"layout.changePassword()\">\r" +
    "\n" +
    "                            <md-icon>lock</md-icon>\r" +
    "\n" +
    "                            Password\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </md-menu-item>\r" +
    "\n" +
    "                    <md-menu-divider></md-menu-divider>\r" +
    "\n" +
    "                    <md-menu-item>\r" +
    "\n" +
    "                        <md-button ng-click=\"layout.logOut()\">\r" +
    "\n" +
    "                            <md-icon>power_settings_new</md-icon>\r" +
    "\n" +
    "                            Logout\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </md-menu-item>\r" +
    "\n" +
    "                </md-menu-content>\r" +
    "\n" +
    "            </md-menu>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </md-toolbar>\r" +
    "\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\r" +
    "\n" +
    "        <div class=\"md-toolbar-tools\">\r" +
    "\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "            <h3 flex=\"10\">\r" +
    "\n" +
    "                Back\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "            <md-input-container md-theme=\"input\" flex>\r" +
    "\n" +
    "                <label>&nbsp;</label>\r" +
    "\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\r" +
    "\n" +
    "            </md-input-container>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </md-toolbar>\r" +
    "\n" +
    "    <div ui-view ></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "        body, md-content.md-blue-grey-theme {\r" +
    "\n" +
    "            background-color:#FFFFFF;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        md-toolbar:not(.md-hue-1),\r" +
    "\n" +
    "        .md-fab {\r" +
    "\n" +
    "            fill: #fff;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        md-sidenav {\r" +
    "\n" +
    "            fill: #737373;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        .user-avatar {\r" +
    "\n" +
    "            border-radius: 99%;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "\r" +
    "\n" +
    "        md-toolbar.md-tall {\r" +
    "\n" +
    "            height: 64px;\r" +
    "\n" +
    "            max-height: 64px;\r" +
    "\n" +
    "            min-height: 64px;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "        code {\r" +
    "\n" +
    "            color: #4285f4;\r" +
    "\n" +
    "            -webkit-font-smoothing: auto;\r" +
    "\n" +
    "            font-weight: 300;\r" +
    "\n" +
    "            background-color: #F2F2F2;\r" +
    "\n" +
    "            padding: 10px;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "        .text-center {\r" +
    "\n" +
    "            text-align: center!important\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "        ul {\r" +
    "\n" +
    "            list-style: none\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "    </style>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</head>\r" +
    "\n" +
    "<body ng-cloak>\r" +
    "\n"
  );


  $templateCache.put('app/modules/home/timeSpent.html',
    "<div ng-controller=\"ViewCountCtrl\">\r" +
    "\n" +
    "	<center>\r" +
    "\n" +
    "	  <h1>{{TimeSpentName}}</h1>\r" +
    "\n" +
    "	</center>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/home/viewCount.html',
    "<div layout=\"column\" align=\"end\">\r" +
    "\n" +
    "<div layout=\"column\" layout-align=\"space-around center\">\r" +
    "\n" +
    "<!--RightSidenavigation -->\r" +
    "\n" +
    "<md-sidenav md-component-id=\"right\" md-is-open=\"isSidenavOpen\" class=\"md-sidenav-right\">\r" +
    "\n" +
    "<md-toolbar class=\"md-tall md-hue-2\">\r" +
    "\n" +
    "            <div layout=\"column\" layout-align=\"center center\"  class=\"md-toolbar-tools-bottom inset\">\r" +
    "\n" +
    "                <div layout=\"row\">\r" +
    "\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;\">\r" +
    "\n" +
    "                        <div>Filters</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "</md-toolbar>\r" +
    "\n" +
    "<md-list>\r" +
    "\n" +
    "<div layout=\"column\"  layout-align=\"space-around stretch\">\r" +
    "\n" +
    "<div layout=\"row\" layout=\"center\">\r" +
    "\n" +
    "<div class=\"inset\" layout=\"center\" class=\"md-padding\" ng-cloak>\r" +
    "\n" +
    "    <ng-md-icon icon=\"description\"></ng-md-icon>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<md-select id=\"mg-courseSelector\" ng-change=\"onCourseSelectValueChange(ddlvalue)\"  data-ng-model=\"ddlvalue\"  placeholder=\"Select courses\"\r" +
    "\n" +
    "                   md-on-close=\"clearSearchTerm()\" md-on-open=\"loadCourses()\"\r" +
    "\n" +
    "                   data-md-container-class=\"selectdemoSelectHeader\"\r" +
    "\n" +
    "                   multiple flex style=\"text-align: center;\">\r" +
    "\n" +
    "          <md-select-header class=\"demo-select-header\">\r" +
    "\n" +
    "            <input ng-model=\"searchTerm\"\r" +
    "\n" +
    "                   type=\"search\"\r" +
    "\n" +
    "                   placeholder=\"Search for a Courses\"\r" +
    "\n" +
    "                   class=\"demo-header-searchbox _md-text\" layout=\"center center\">\r" +
    "\n" +
    "          </md-select-header>\r" +
    "\n" +
    "          <md-optgroup label=\"courses\">\r" +
    "\n" +
    "            <md-option ng-value=\"course\" ng-repeat=\"course in courses\">{{course.name}}</md-option>\r" +
    "\n" +
    "          </md-optgroup>\r" +
    "\n" +
    "    </md-select>\r" +
    "\n" +
    " </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    " <div layout=\"row\" layout=\"center\">\r" +
    "\n" +
    "<div class=\"inset\" layout=\"center\" class=\"md-padding\" ng-cloak>\r" +
    "\n" +
    "    <ng-md-icon icon=\"description\"></ng-md-icon>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<md-select id=\"mg-courseSelector\" ng-change=\"onBoardSelectValueChange(ddlvalue1)\"  data-ng-model=\"ddlvalue1\"  placeholder=\"Select Board\"\r" +
    "\n" +
    "                   md-on-close=\"clearSearchTerm()\" md-on-open=\"loadBoards()\"\r" +
    "\n" +
    "                   data-md-container-class=\"selectdemoSelectHeader\"\r" +
    "\n" +
    "                   multiple flex style=\"text-align: center;\">\r" +
    "\n" +
    "          <md-select-header class=\"demo-select-header\">\r" +
    "\n" +
    "            <input ng-model=\"searchTerm\"\r" +
    "\n" +
    "                   type=\"search\"\r" +
    "\n" +
    "                   placeholder=\"Search for a Boards\"\r" +
    "\n" +
    "                   class=\"demo-header-searchbox _md-text\" layout=\"center center\">\r" +
    "\n" +
    "          </md-select-header>\r" +
    "\n" +
    "          <md-optgroup label=\"boards\">\r" +
    "\n" +
    "            <md-option ng-value=\"board\" ng-repeat=\"board in boards\">{{board.name}}</md-option>\r" +
    "\n" +
    "          </md-optgroup>\r" +
    "\n" +
    "    </md-select>\r" +
    "\n" +
    " </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    " <div layout=\"row\" layout=\"center\">\r" +
    "\n" +
    "<div class=\"inset\" layout=\"center\" class=\"md-padding\" ng-cloak>\r" +
    "\n" +
    "    <ng-md-icon icon=\"description\"></ng-md-icon>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<md-select id=\"mg-courseSelector\" ng-change=\"onGradeSelectValueChange(ddlvalue2)\"  data-ng-model=\"ddlvalue2\"  placeholder=\"Select Grade\"\r" +
    "\n" +
    "                   md-on-close=\"clearSearchTerm()\" md-on-open=\"loadGrades()\"\r" +
    "\n" +
    "                   data-md-container-class=\"selectdemoSelectHeader\"\r" +
    "\n" +
    "                   multiple flex style=\"text-align: center;\">\r" +
    "\n" +
    "          <md-select-header class=\"demo-select-header\">\r" +
    "\n" +
    "            <input ng-model=\"searchTerm\"\r" +
    "\n" +
    "                   type=\"search\"\r" +
    "\n" +
    "                   placeholder=\"Search for a Grade\"\r" +
    "\n" +
    "                   class=\"demo-header-searchbox _md-text\" layout=\"center center\">\r" +
    "\n" +
    "          </md-select-header>\r" +
    "\n" +
    "          <md-optgroup label=\"grades\">\r" +
    "\n" +
    "            <md-option ng-value=\"grade\" ng-repeat=\"grade in grades\">{{grade.name}}</md-option>\r" +
    "\n" +
    "          </md-optgroup>\r" +
    "\n" +
    "    </md-select>\r" +
    "\n" +
    " </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    " <div layout=\"row\" layout=\"center\">\r" +
    "\n" +
    "<div class=\"inset\" layout=\"center\" class=\"md-padding\" ng-cloak>\r" +
    "\n" +
    "    <ng-md-icon icon=\"description\"></ng-md-icon>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<md-select id=\"mg-courseSelector\" ng-change=\"onSubjectSelectValueChange(ddlvalue3)\"  data-ng-model=\"ddlvalue3\"  placeholder=\"Select Subject\"\r" +
    "\n" +
    "                   md-on-close=\"clearSearchTerm()\" md-on-open=\"loadSubjects()\"\r" +
    "\n" +
    "                   data-md-container-class=\"selectdemoSelectHeader\"\r" +
    "\n" +
    "                   multiple flex style=\"text-align: center;\">\r" +
    "\n" +
    "          <md-select-header class=\"demo-select-header\">\r" +
    "\n" +
    "            <input ng-model=\"searchTerm\"\r" +
    "\n" +
    "                   type=\"search\"\r" +
    "\n" +
    "                   placeholder=\"Search for a Boards\"\r" +
    "\n" +
    "                   class=\"demo-header-searchbox _md-text\" layout=\"center center\">\r" +
    "\n" +
    "          </md-select-header>\r" +
    "\n" +
    "          <md-optgroup label=\"subjects\">\r" +
    "\n" +
    "            <md-option ng-value=\"subject\" ng-repeat=\"subject in subjects\">{{subject.name}}</md-option>\r" +
    "\n" +
    "          </md-optgroup>\r" +
    "\n" +
    "    </md-select>\r" +
    "\n" +
    " </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    " <div layout=\"row\" layout=\"center center\">\r" +
    "\n" +
    "                <div class=\"inset\" layout=\"center\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"people\"></ng-md-icon>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            <md-select  ng-change=\"onUserSelectValueChange(ddlvalue4)\"  data-ng-model=\"ddlvalue4\" placeholder=\"Select users\"\r" +
    "\n" +
    "                   md-on-close=\"clearSearchTerm()\" md-on-open=\"loadUsers()\"\r" +
    "\n" +
    "                   data-md-container-class=\"selectdemoSelectHeader\"\r" +
    "\n" +
    "                   multiple flex style=\"text-align: center;\">\r" +
    "\n" +
    "          <md-select-header class=\"demo-select-header\">\r" +
    "\n" +
    "            <input ng-model=\"searchTerm\"\r" +
    "\n" +
    "                   type=\"search\"\r" +
    "\n" +
    "                   placeholder=\"Search for a Users\"\r" +
    "\n" +
    "                   class=\"demo-header-searchbox _md-text\">\r" +
    "\n" +
    "          </md-select-header>\r" +
    "\n" +
    "\r" +
    "\n" +
    "          <md-optgroup label=\"users\">\r" +
    "\n" +
    "            <md-option ng-value=\"user\" ng-repeat=\"user in users\">{{user.name}}</md-option>\r" +
    "\n" +
    "          </md-optgroup>\r" +
    "\n" +
    "        </md-select>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div layout=\"row\" layout=\"center\">\r" +
    "\n" +
    "  <md-datepicker class=\"datePickerHolder\" ng-model=\"startDate\"  md-placeholder=\"Enter start date\"></md-datepicker>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div layout=\"row\" layout=\"center center\">\r" +
    "\n" +
    "  <md-datepicker ng-model=\"endDate\" md-placeholder=\"Enter end date\"></md-datepicker>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "  <md-button class=\"md-raised\"  layout-align=\"center center\" ng-click=\"submit();openLeftMenu()\">Apply</md-button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</md-list>\r" +
    "\n" +
    "</md-sidenav>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "<div layout=\"row\" layout-align=\"center\">\r" +
    "\n" +
    "   <h1>{{ViewCountName}}</h1>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "    <md-content>\r" +
    "\n" +
    "            <md-button class=\"md-raised md-warn\" ng-click=\"openLeftMenu()\">\r" +
    "\n" +
    "             Filter\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "  </md-content>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div layout=\"row\" layout-wrap  md-cols-xs=\"1\" md-cols-sm=\"2\" md-cols-md=\"4\" md-cols-gt-md=\"6\">\r" +
    "\n" +
    "  <div google-chart chart=\"chartObject\" style=\"height:600px; width:100%;\"></div>\r" +
    "\n" +
    "  </div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/layouts/main-page/main-page.html',
    "    <md-toolbar ng-show=\"!showSearch\">\r" +
    "\n" +
    "        <div class=\"md-toolbar-tools\">\r" +
    "\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "            <span flex></span>\r" +
    "\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "            <md-menu>\r" +
    "\n" +
    "                <md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\r" +
    "\n" +
    "                            <md-icon> more_vert </md-icon>\r" +
    "\n" +
    "                </md-button>\r" +
    "\n" +
    "                <md-menu-content width=\"4\">\r" +
    "\n" +
    "                    <md-menu-item>\r" +
    "\n" +
    "                        <md-button ng-click=\"layout.changeProfile($event)\">\r" +
    "\n" +
    "                            <md-icon>face</md-icon>\r" +
    "\n" +
    "                            Profile\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </md-menu-item>\r" +
    "\n" +
    "                    <md-menu-item>\r" +
    "\n" +
    "                        <md-button ng-click=\"layout.changePassword()\">\r" +
    "\n" +
    "                            <md-icon>lock</md-icon>\r" +
    "\n" +
    "                            Password\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </md-menu-item>\r" +
    "\n" +
    "                    <md-menu-divider></md-menu-divider>\r" +
    "\n" +
    "                    <md-menu-item>\r" +
    "\n" +
    "                        <md-button ng-click=\"layout.logOut()\">\r" +
    "\n" +
    "                            <md-icon>power_settings_new</md-icon>\r" +
    "\n" +
    "                            Logout\r" +
    "\n" +
    "                        </md-button>\r" +
    "\n" +
    "                    </md-menu-item>\r" +
    "\n" +
    "                </md-menu-content>\r" +
    "\n" +
    "            </md-menu>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </md-toolbar>\r" +
    "\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\r" +
    "\n" +
    "        <div class=\"md-toolbar-tools\">\r" +
    "\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\r" +
    "\n" +
    "            </md-button>\r" +
    "\n" +
    "            <h3 flex=\"10\">\r" +
    "\n" +
    "                Back\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "            <md-input-container md-theme=\"input\" flex>\r" +
    "\n" +
    "                <label>&nbsp;</label>\r" +
    "\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\r" +
    "\n" +
    "            </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </md-toolbar>\r" +
    "\n" +
    "    <md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\r" +
    "\n" +
    "        <ui-view layout=\"column\" layout-fill layout-padding>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </ui-view>\r" +
    "\n" +
    "    </md-content>\r" +
    "\n"
  );


  $templateCache.put('app/modules/layouts/side-nav/sidenav.html',
    "        <md-toolbar class=\"md-tall md-hue-1\">\r" +
    "\n" +
    "        <theme-preview primary=\"primary\" accent=\"accent\"></theme-preview>\r" +
    "\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\r" +
    "\n" +
    "                <div layout=\"row\">\r" +
    "\n" +
    "                    <div flex=\"20\">\r" +
    "\n" +
    "                        <img style=\"width: 36px; height: 36px; border-radius: 50%\"\r" +
    "\n" +
    "                             actual-src=\"data:image/jpeg;base64,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\"\r" +
    "\n" +
    "                             showloader=\"\" loader-class=\"preload\" loader-src=\"app/assets/images/loader.gif\"\r" +
    "\n" +
    "                             src=\"data:image/jpeg;base64,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\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;font-size: 1em;\">\r" +
    "\n" +
    "                        <div>Fernando Monteiro</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </md-toolbar>\r" +
    "\n" +
    "        <md-list>\r" +
    "\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo(item.link)\" >\r" +
    "\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <p> {{ item.name }}</p>\r" +
    "\n" +
    "            </md-list-item>\r" +
    "\n" +
    "            <md-divider></md-divider>\r" +
    "\n" +
    "            <md-subheader>Admin</md-subheader>\r" +
    "\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\" >\r" +
    "\n" +
    "                <div class=\"inset\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <p> {{ item.title }}</p>\r" +
    "\n" +
    "            </md-list-item>\r" +
    "\n" +
    "        </md-list>\r" +
    "\n" +
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-4dp\" md-component-id=\"right\">\r" +
    "\n" +
    "      <md-toolbar class=\"md-theme-light\">\r" +
    "\n" +
    "        <h1 class=\"md-toolbar-tools\">Sidenav Right</h1>\r" +
    "\n" +
    "      </md-toolbar>\r" +
    "\n" +
    "      <md-content ng-controller=\"RightCtrl\" layout-padding>\r" +
    "\n" +
    "        <form>\r" +
    "\n" +
    "          <md-input-container>\r" +
    "\n" +
    "            <label for=\"testInput\">Test input</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"testInput\"\r" +
    "\n" +
    "                   ng-model=\"data\" md-autofocus>\r" +
    "\n" +
    "          </md-input-container>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "        <md-button ng-click=\"close()\" class=\"md-primary\">\r" +
    "\n" +
    "          Close Sidenav Right\r" +
    "\n" +
    "        </md-button>\r" +
    "\n" +
    "      </md-content>\r" +
    "\n" +
    "    </md-sidenav>"
  );


  $templateCache.put('app/modules/login/login.html',
    "<body layout=\"row\" >\r" +
    "\n" +
    "    <div layout=\"column\" flex id=\"content\" role=\"main\" ng-controller=\"LoginCtrl\" >\r" +
    "\n" +
    "			<md-content class=\"loginbg\" layout=\"vertical\" flex id=\"loginContent\" layout-align=\"center center\">\r" +
    "\n" +
    "				<div layout=\"row\" layout-align=\"center center\" layout-fill flex=\"100\">\r" +
    "\n" +
    "					<md-whiteframe-1dp layout=\"column\" flex=\"35\" layout-padding>\r" +
    "\n" +
    "						<md-content form name=\"projectForm\" >\r" +
    "\n" +
    "							<div layout=\"row\"  layout-fill flex=\"100\">\r" +
    "\n" +
    "                            <div class=\"inset\" layout=\"center\" >\r" +
    "\n" +
    "                     <ng-md-icon icon=\"people\"></ng-md-icon>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "							<md-input-container class=\"md-block\" flex>\r" +
    "\n" +
    "								<label>Username</label>\r" +
    "\n" +
    "								<input required name=\"clientName\" ng-model=\"username\">\r" +
    "\n" +
    "								<div ng-messages=\"projectForm.clientName.$error\">\r" +
    "\n" +
    "								<div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "								</div>\r" +
    "\n" +
    "							</md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "							</div>\r" +
    "\n" +
    "							<div layout=\"row\" layout-fill>\r" +
    "\n" +
    "							<div class=\"inset\" layout=\"center\" >\r" +
    "\n" +
    "                             <ng-md-icon icon=\"lock\"></ng-md-icon>\r" +
    "\n" +
    "                             </div>\r" +
    "\n" +
    "							<md-input-container class=\"md-block\" flex>\r" +
    "\n" +
    "								<input ng-model=\"password\" type=\"password\" placeholder=\"Password\" ng-required=\"true\">\r" +
    "\n" +
    "								<div ng-messages=\"projectForm.clientName.$error\">\r" +
    "\n" +
    "								<div ng-message=\"required\">This is required.</div>\r" +
    "\n" +
    "							</div>\r" +
    "\n" +
    "							</md-input-container>\r" +
    "\n" +
    "						</div>	\r" +
    "\n" +
    "						<md-input-container layout-align=\"center center\">\r" +
    "\n" +
    "						<div layout=\"row\" layout-sm=\"column\" layout-margin>\r" +
    "\n" +
    "						<md-button class=\"md-raised md-accent\" ng-click=\"login()\" ng-enter=\"login()\">Login</md-button>\r" +
    "\n" +
    "	         		 </div>\r" +
    "\n" +
    "          			</md-whiteframe>\r" +
    "\n" +
    "              </md-input-container>\r" +
    "\n" +
    "    			 </form md-content>\r" +
    "\n" +
    "    		   \r" +
    "\n" +
    "    		</div>	\r" +
    "\n" +
    "  		</md-content>\r" +
    "\n" +
    "   </div>\r" +
    "\n" +
    "</body>\r" +
    "\n"
  );

}]);

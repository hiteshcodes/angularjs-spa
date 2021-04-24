myApp.controller("footerController", function ($scope) {
  $scope.currYear = new Date().getFullYear();
  $scope.owner = "Hitesh Bhargav";
  $scope.ownerURL = "https://github.com/hiteshbhargav";
});

myApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../views/home.html",
        controller: "homeController",
      })
      .when("/features", {
        templateUrl: "../views/features.html",
        controller: "",
      })
      .when("/pricing", {
        templateUrl: "../views/pricing.html",
        controller: "",
      })
      .when("/shop", {
        templateUrl: "../views/shop.html",
        controller: "shop",
      })

      .otherwise({ redirectTo: "/" });
  },
]);

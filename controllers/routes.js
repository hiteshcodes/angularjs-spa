myApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../views/home.html",
        controller: "homeController",
      })
      .when("/product", {
        templateUrl: "../views/shop.html",
        controller: "shopController",
      })
      .when("/contact", {
        templateUrl: "../views/contact.html",
        controller: "contactController",
      })
      .when("/login", {
        templateUrl: "../views/login.html",
        controller: "loginController",
      })
      .when("/register", {
        templateUrl: "../views/register.html",
        controller: "registerController",
      })

      .otherwise({ redirectTo: "/" });
  },
]);

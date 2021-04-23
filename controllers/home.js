myApp.controller("homeController", function ($scope) {
  $scope.product = [
    {
      id: 1,
      img: "../images/products/logitech/ergo.webp",
      name: "ERGO M575",
      price: 3995,
      brand: "logitech",
      category: "mouse",
    },
    {
      id: 2,
      img: "../images/products/logitech/mx-master-3.webp",
      name: "Mx master 3",
      price: 9495,
      brand: "logitech",
      category: "mouse",
    },
    {
      id: 3,
      img: "../images/products/logitech/mx-master-anywhere.webp",
      name: "MX Anywhere 3",
      price: 7995,
      brand: "logitech",
      category: "mouse",
    },
  ];
});

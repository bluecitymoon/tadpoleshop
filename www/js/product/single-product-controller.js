angular.module('tadpoleshop.single-product-controllers', [])

  .controller('SingleProductCtrl', function ($scope, $stateParams) {

    $scope.search = {keyword: $stateParams.id};

    $scope.product = { name: '摩斯维 乐视1S手机壳 乐视1s手机保护套x500后盖金属边框外壳防摔',  };

  });

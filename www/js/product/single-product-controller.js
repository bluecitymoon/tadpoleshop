angular.module('tadpoleshop.single-product-controllers', [])

  .controller('SingleProductCtrl', function ($scope, $stateParams) {

    $scope.search = {keyword: $stateParams.id};

    $scope.product = { name: '摩斯维 乐视1S手机壳 乐视1s手机保护套x500后盖金属边框外壳防摔',  };

    $scope.ads = ['http://m.360buyimg.com/mobilecms/s720x350_jfs/t2164/42/2097632757/103691/1c8f91c/56930c75Nd8bfb136.jpg',
      'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2116/86/2106245119/61336/522f6540/56935ec4N49995849.jpg'];

  });

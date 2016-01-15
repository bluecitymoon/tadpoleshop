angular.module('tadpoleshop.product-list-controllers', [])

  .controller('ProductListCtrl', function ($scope, $stateParams) {

    $scope.search = {keyword: $stateParams.keyword};

    $scope.allProducts = [
      {name : '摩斯维 乐视1S手机壳 乐视1s手机保护套x500后盖金属边框外壳防摔', picture: 'http://gw3.alicdn.com/bao/uploaded/i2/TB1DFu2LXXXXXXDaXXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg', price: 29.80, originalPrice: 58, shippingType : '免运费', dealCount : 2280, city : '上海'},
      {name : '摩斯维 乐视1S手机壳 乐视1s手机保护套x500后盖金属边框外壳防摔', picture: 'http://gw3.alicdn.com/bao/uploaded/i2/TB1DFu2LXXXXXXDaXXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg', price: 29.80, originalPrice: 58, shippingType : '免运费', dealCount : 2280, city : '上海'},
      {name : '摩斯维 乐视1S手机壳 乐视1s手机保护套x500后盖金属边框外壳防摔', picture: 'http://gw3.alicdn.com/bao/uploaded/i2/TB1DFu2LXXXXXXDaXXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg', price: 29.80, originalPrice: 58, shippingType : '免运费', dealCount : 2280, city : '上海'},
      {name : '摩斯维 乐视1S手机壳 乐视1s手机保护套x500后盖金属边框外壳防摔', picture: 'http://gw3.alicdn.com/bao/uploaded/i2/TB1DFu2LXXXXXXDaXXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg', price: 29.80, originalPrice: 58, shippingType : '免运费', dealCount : 2280, city : '上海'},
      {name : '摩斯维 乐视1S手机壳 乐视1s手机保护套x500后盖金属边框外壳防摔', picture: 'http://gw3.alicdn.com/bao/uploaded/i2/TB1DFu2LXXXXXXDaXXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg', price: 29.80, originalPrice: 58, shippingType : '免运费', dealCount : 2280, city : '上海'},

    ];

    $scope.searchProductsWithKeyword = function() {


    };

  });

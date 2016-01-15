angular.module('tadpoleshop.searchcontrollers', [])

  .controller('SearchProductCtrl', function ($scope, $state) {

    $scope.keywordHistoryList = [
      {
        name: '剃须刀'
      },
      {
        name: '飞机',
      }, {
        name: '酱油'
      },
      {
        name: '飞机',
      },
      {
        name: '飞机',
      },
      {
        name: '飞机',
      },
      {
        name: '飞机',
      },
      {
        name: '飞机',
      },
      {
        name: '飞机',
      },
      {
        name: '飞机',
      }];

    $scope.hotKeywords = [
      {
        name: '剃须刀'
      },
      {
        name: '飞机',
      }, {
        name: '酱油'
      }];

    $scope.gotoProductsPage = function(keyword) {

      $state.go('product-list', {keyword: keyword});

    }

  });

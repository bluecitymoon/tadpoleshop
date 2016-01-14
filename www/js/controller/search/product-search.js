angular.module('tadpoleshop.searchcontrollers', [])

  .controller('SearchProductCtrl', function ($scope) {

    $scope.keywordHistoryList = [
      {
        name: '剃须刀'
      },
      {
        name: '飞机',
      }, {
        name: '酱油'
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

  });

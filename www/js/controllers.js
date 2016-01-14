angular.module('tadpoleshop.controllers', [])

.controller('HomeCtrl', function($scope, $state) {
    $scope.ads = ['http://m.360buyimg.com/mobilecms/s720x350_jfs/t2164/42/2097632757/103691/1c8f91c/56930c75Nd8bfb136.jpg',
    'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2116/86/2106245119/61336/522f6540/56935ec4N49995849.jpg'];

    $scope.categories = [
      {name: '瓜子', icon: 'ion-log-in', id: 'signin', color: 'balanced'},
      {name: '水果', icon: 'ion-log-out', id: 'signout', color: 'assertive'},
      {name: '啤酒', icon: 'ion-ios-compose-outline', id: 'taskPlan', color: 'positive'},
      {name: '花生', icon: 'ion-ios-color-wand', id: 'executePlan', color: 'royal'},
      {name: '鸭子', icon: 'ion-ios-paper-outline', id: 'tempWork', color: 'energized '},
      {name: '鸡翅', icon: 'ion-ios-personadd-outline', id: 'newCustomer', color: 'calm'},
      {name: '瓜子', icon: 'ion-log-in', id: 'signin', color: 'balanced'},
      {name: '水果', icon: 'ion-log-out', id: 'signout', color: 'assertive'},
      {name: '啤酒', icon: 'ion-ios-compose-outline', id: 'taskPlan', color: 'positive'},
      {name: '花生', icon: 'ion-ios-color-wand', id: 'executePlan', color: 'royal'}
    ];

    $scope.highlightProducts = [
      {productName : 'Nike', pic: 'ion-log-in', c: 'balanced'}
    ];

    $scope.goSeachIndexPage = function() {
      $state.go('search-product');
    }
  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

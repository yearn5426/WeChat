angular.module('starter.controllers', [])



.controller('ChatsCtrl', function($scope, Chats, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.data = {
    showDelete: false
  };
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.onItemDelete = function(chat) {
    Chats.remove(chat);
  };
  $scope.onChatHold = function() {
    $scope.data.showDelete = !$scope.data.showDelete;
  };
})

.controller('ContactsCtrl', function($scope) {})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

  .controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
  .controller('FindCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
  .controller('NavCtrl',  function($scope, $ionicPopup, $ionicHistory, Chats, $timeout){
    $scope.addNum = 0;
    $scope.showMyPopup = function(){
      var myPopup = $ionicPopup.show({
        scope: $scope,
        buttons: [
          {
            text: '<i class="icon ion-ios-camera"></i> 拍照',
            type: 'button-full',
            onTap: function(e) {
              e.preventDefault();
              $timeout(function() {
                myPopup.close(); //由于某种原因3秒后关闭弹出
              }, 200);
            }
          },
          {
            text: '<i class="icon ion-ios-personadd"></i> 添加好友',
            type: 'button-full',
            onTap: function(e) {
              e.preventDefault();
              $timeout(function() {
                myPopup.close(); //由于某种原因3秒后关闭弹出
              }, 200);
            }
          },
          {
            text: '<i class="icon ion-ios-compose"></i> 新建',
            type: 'button-full',
            onTap: function(e) {
              if($scope.addNum < 5){
                Chats.add($scope.addNum);
                $scope.addNum += 1;
              }
              else $scope.addNum = 0;
              e.preventDefault();
              $timeout(function() {
                myPopup.close(); //由于某种原因3秒后关闭弹出
              }, 200);
              var msg = document.getElementsByClassName("badge-assertive")[0];
              msg.innerHTML = parseInt(msg.innerHTML) + 1;
            }
          }
        ]
      });
    };
    $scope.back = function() {
      $ionicHistory.goBack();
    };
  });

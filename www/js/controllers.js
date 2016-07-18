angular.module('starter.controllers', [])



.controller('ChatsCtrl', function($scope, Chats, $timeout, Contacts) {
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
    var msgNum = document.getElementsByClassName("badge-assertive")[0];
    if(msgNum.innerHTML != 1){
      if(chat.read == false){
        msgNum.innerHTML--;
      }
    } else {
      msgNum.innerHTML = "";
    }
  };
  $scope.onChatHold = function() {
    $scope.data.showDelete = !$scope.data.showDelete;
  };
  $scope.getPeople = function(chatId){
    return Contacts.getPeople(chatId);
  };
  $scope.doRefresh = function() {
    $timeout(function(){
      if($scope.addNum < 5){
        Chats.add($scope.addNum);
        $scope.addNum += 1;
        var msgNum = document.getElementsByClassName("badge-assertive")[0];
        if(!msgNum.innerHTML){
          msgNum.innerHTML = 1;
        }else {
          msgNum.innerHTML++;
        }
      }
      else $scope.addNum = 0;
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
  $scope.read = function(chatId){
    if(Chats.get(chatId).read == false){
      var msgNum = document.getElementsByClassName("badge-assertive")[0];
      if(msgNum.innerHTML != 1){
        msgNum.innerHTML--;
      } else {
        msgNum.innerHTML = "";
      }
    }
  }
})

.controller('ContactsCtrl', function($scope, Contacts, $ionicPopup, $timeout) {
  $scope.contacts = Contacts.all();
  $scope.showInfo = function(peopleId) {
    $scope.people = Contacts.getPeople(peopleId);
    $scope.otherInfo = $ionicPopup.show({
      scope: $scope,
      template: '<div class="info" ng-click="closeInfo()"><h1 class="info">Infomation</h1><img class="info" ng-src="{{people.face}}"> ' +
      '<h2 class="info">{{people.name}}</h2><br> <i class="icon ion-ios-list-outline info"></i><h3 class="info">Info：{{people.info}}</h3> '
    });
  };
  $scope.closeInfo = function(){
    $scope.otherInfo.close();
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, Contacts) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.getPeople = function(chatId){
    return Contacts.getPeople(chatId);
  };
  $scope.sendMsg = function(){
    var msg = document.getElementsByClassName("msg")[0];
    var ul = document.getElementById("msg");
    var newLi = document.createElement("li");
    newLi.className = "send";
    var newImg = document.createElement("img");
    var newP = document.createElement("p");
    newImg.setAttribute("src", "img/me.jpg");
    newImg.setAttribute("ng-src", "img/me.jpg");
    newP.innerHTML = msg.value;
    newP.className = "ng-binding";
    newLi.appendChild(newImg);
    newLi.appendChild(newP);
    ul.appendChild(newLi);
    msg.value = "";
  };
})


  .controller('AccountCtrl', function($scope, $ionicPopup) {
  $scope.settings = {
    visibility: true
  };
  $scope.showLarge = function(src){
    $scope.src = src;
    $scope.largePic = $ionicPopup.show({
      scope: $scope,
      template: '<img style="width: 250px;height: 250px;" ng-src="{{src}}" ng-click="closeImg()">'
    });
  };
  $scope.closeImg = function() {
    $scope.largePic.close();
  }
})
  .controller('FindCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
  .controller('NavCtrl',  function($scope, $ionicPopup, $ionicHistory, Chats, Contacts, $timeout, $cordovaCamera){
    $scope.addNum = 0;
    $scope.myPicture = "img/me.jpg";

    $scope.getPeople = function(chatId){
      return Contacts.getPeople(chatId);
    };
    $scope.showMyPopup = function(){
      var myPopup = $ionicPopup.show({
        scope: $scope,
        buttons: [
          {
            text: '<i class="icon ion-ios-camera"></i> 拍照',
            type: 'button-full',
            onTap: function(e) {
              var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation:true
              };

              $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.myPicture = "data:image/jpeg;base64," + imageData;
              }, function(err) {
                // error
              });
            }
          },
          {
            text: '<i class="icon ion-ios-personadd"></i> 添加好友',
            type: 'button-full',
            onTap: function(e) {

                e.preventDefault();
                myPopup.close();
            }
          },
          {
            text: '<i class="icon ion-ios-compose"></i> 新建',
            type: 'button-full',
            onTap: function(e) {
              if($scope.addNum < 5){
                Chats.add($scope.addNum);
                $scope.addNum += 1;
                var msgNum = document.getElementsByClassName("badge-assertive")[0];
                if(!msgNum.innerHTML){
                  msgNum.innerHTML = 1;
                }else {
                  msgNum.innerHTML++;
                }
              }
              else $scope.addNum = 0;
              e.preventDefault();
              myPopup.close();
            }
          }
        ]
      });
    };
    $scope.back = function(chatId) {
      $ionicHistory.goBack();
      Chats.get(chatId).read = true;
      $scope.chat = Chats.get(chatId);
    };
    $scope.info = function(chatId) {
      $scope.people = $scope.getPeople(chatId);
      $scope.otherInfo = $ionicPopup.show({
        scope: $scope,
        template: '<div class="info" ng-click="closeInfo()"> <h1 class="info">Infomation</h1><img class="info" ng-src="{{people.face}}"> ' +
        '<h2 class="info">{{people.name}}</h2><br> <i class="icon ion-ios-list-outline info"></i><h3 class="info">Info：{{people.info}}</h3> </div>'
      });

    };
    $scope.closeInfo = function(){
      $scope.otherInfo.close();
    };
  });

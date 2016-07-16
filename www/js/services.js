angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    read:false
  }, {
    id: 1,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    read:false
  }, {
    id: 2,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    read:false
  }, {
    id: 3,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    read:false
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    read:false
  }];
  var newChats = [{
    id: 5,
    name: 'Rocky',
    lastText: 'I should buy a boat',
    read:false
  }, {
    id: 6,
    name: 'Robin',
    lastText: 'You on your way?',
    read:false
  }, {
    id: 7,
    name: 'Steven Kate',
    lastText: 'Hey, it\'s me',
    read:false
  }, {
    id: 8,
    name: 'Tom',
    lastText: 'This is wicked good ice cream.',
    read:false
  }, {
    id: 9,
    name: 'Tarry',
    lastText: 'Look at my mukluks!',
    read:false
  }];
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    add: function(chatId){
      chats.push(newChats[parseInt(chatId)]);
    }
  };
})
  .factory('Contacts',function(){
    var contacts = [{
      order: 'A',
      people:[{
        id: 0,
        name: 'Adam Bradleyson',
        face: 'img/adam.jpg',
        info: 'A good man'
      }]
    }, {
      order: 'B',
      people:[{
        id: 1,
        name: 'Ben Sparrow',
        face: 'img/ben.png',
        info: 'A handsome man'
      }]
    }, {
      order: 'M',
      people:[{
        id: 2,
        name: 'Max Lynx',
        face: 'img/max.png',
        info: 'A clever man'
      }, {
        id: 3,
        name: 'Mike Harrington',
        face: 'img/mike.png',
        info: 'A pretty man'
      }]
    }, {
      order: 'P',
      people:[{
        id: 4,
        name: 'Perry Governor',
        face: 'img/perry.png',
        info: 'A great man'
      }]
    }, {
      order: 'R',
      people:[{
        id: 5,
        name: 'Rocky',
        face: 'img/max.png',
        info: 'A clever man'
      }, {
        id: 6,
        name: 'Robin',
        face: 'img/mike.png',
        info: 'A pretty man'
      }]
    }, {
      order: 'S',
      people:[{
        id: 7,
        name: 'Steven Kate',
        face: 'img/perry.png',
        info: 'A great man'
      }]
    }, {
      order: 'T',
      people:[{
        id: 8,
        name: 'Tom',
        face: 'img/adam.jpg',
        info: 'A clever man'
      }, {
        id: 9,
        name: 'Tarry',
        face: 'img/ben.png',
        info: 'A pretty man'
      }]
    }];
    return {
      all: function() {
        return contacts;
      },
      remove: function(contact) {
        contacts.splice(contacts.indexOf(contact), 1);
      },
      getPeople: function(peopleId) {
        for (var i = 0; i < contacts.length; i++) {
          for(var j = 0; j < contacts[i].people.length; j++){
            if(contacts[i].people[j].id === parseInt(peopleId))
              return contacts[i].people[j];
          }
        }
        return null;
      }
    };
  })
;

angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat'
  }, {
    id: 1,
    name: 'Ben Sparrow',
    lastText: 'You on your way?'
  }, {
    id: 2,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me'
  }, {
    id: 3,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!'
  }];

  var newChats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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

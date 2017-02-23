// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var angular = window.angular;
var notesApp = angular.module('starter', ['ionic']);

notesApp.config(['$httpProvider', function($http) {
  $http.defaults.useXDomain = true;
}]);

//require('./notes/notes')(notesApp);
notesApp.controller('NotesController', ['$scope', '$http', '$ionicModal', function($scope, $http, $ionicModal){
    //var server = 'http://' + SERVER_ADDRESS + '/api/notes';
    var handleError = function(res) {
      console.log(res);
    };

    
    $scope.notes = [{
      title: "First Notes",
      noteBody: "This is my first note",
      editing: false
    },{
      title: "Second Notes",
      noteBody: "This is my second note",
      editing: false
    }];
    $scope.orig = {};
    $scope.newNote = {};
    console.log( $scope.notes )
    $scope.getAll = function() {
      
    }

    $scope.createNote = function(note) {
        note.editing = false;
        $scope.notes.push( note )
        $scope.newNote = {
          title:"",
          noteBody: "",
          editing: false
        };
    }

    $scope.deleteNote = function(index) {
        $scope.notes.splice( index , 1 )
    }

    $scope.updateNote = function(note) {
        $scope.noted.editing = !$scope.noted.editing;
    }

    $scope.edit = function(note) {
        $scope.temp = angular.copy(note);
        $scope.noted = note;
        $scope.noted.editing = !$scope.noted.editing;
        console.log( $scope.temp )
    }

    $scope.cancelEdit = function(note) {
        angular.copy($scope.temp, note);
        console.log( $scope.noted )
        $scope.temp = {};

    }

  }])

notesApp.run(['$ionicPlatform', function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}]);

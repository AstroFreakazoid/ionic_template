angular.module('starter.controllers', ['ionic','ion-gallery'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.name_2 = "asd";

  $scope.items = [
    {
      src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
      sub: 'This is a <b>subtitle</b>'
    },
    {
      src:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
      sub: '' /* Not showed */
    },
    {
      src:'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg',
      thumb:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
    },
    {
      src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
      sub: 'This is a <b>subtitle</b>'
    },
    {
      src:'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg',
      thumb:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
    },
    {
      src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
      sub: 'This is a <b>subtitle</b>'
    },
    {
      src:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
      sub: '' /* Not showed */
    },
    {
      src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
      sub: 'This is a <b>subtitle</b>'
    }
  ]
})

.controller('PlaylistsCtrl', function($scope, $rootScope) {
  $rootScope.playlists = [
    { title: 'Zapateria Zooks', descrip: 'Zapatos a 1/2 de Precio', img: 'http://lorempixel.com/400/200/city', id: 1, likes: 165, recommends: 12 },
    { title: 'Tienda AEROFAST', descrip: 'Billeteras de la nueva Era', img: 'http://lorempixel.com/400/200/abstract/', id: 2, likes: 5, recommends: 1 },
    { title: 'Blind Comic Store', descrip: 'Marvel Comics', img: 'http://lorempixel.com/400/200/technics/', id: 3, likes: 6, recommends: 2 },
    { title: 'Pizza Hut', descrip: 'Combo de 3 Slices por solo 3999$', img: 'http://lorempixel.com/400/200/food/', id: 4, likes: 955, recommends: 0 },
    { title: 'Eventos', descrip: 'Concierto con Duo: Al son de un bolero', img: 'http://lorempixel.com/400/200/nightlife/', id: 5, likes: 562, recommends: 300 }
  ];
})

.controller('PlaylistCtrl', function($scope, $rootScope, $stateParams, $ionicPopup, $timeout) {

  var id = $stateParams.playlistId;

  $scope.playlist = {
    title: $rootScope.playlists[id-1].title,
    descrip: $rootScope.playlists[id-1].descrip,
    img: $rootScope.playlists[id-1].img,
    id: $rootScope.playlists[id-1].id,
    likes: $rootScope.playlists[id-1].likes,
    recommends: $rootScope.playlists[id-1].recommends
  };

  $scope.showMap = function() {
      $scope.data = {}

      // Custom popup
      var myPopup = $ionicPopup.show({
         template: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.03460911625!2d-84.05653072987651!3d9.933236836350208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3f14d13a1b5%3A0x55def35dd8fbd62d!2sProvincia+de+San+Jos%C3%A9%2C+San+Pedro%2C+Costa+Rica!5e0!3m2!1ses!2ses!4v1485570889063" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
         title: 'Title',
         subTitle: 'Subtitle',
         scope: $scope,

         buttons: [
            { text: 'Continuar' }, {
               text: '<a class="icon ion-model-s" />',
               type: '',
                  onTap: function(e) {

                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });
   };

});

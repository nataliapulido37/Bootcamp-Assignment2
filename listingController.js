angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.detailedCode;
    $scope.detailedBuilding;
    $scope.detailedlat;
    $scope.detailedlong;
    $scope.detailedaddress;
    let indexhere = 0;
    this.listings = Listings;

    // console.log( this.listings );
    //3. for add listing you can add to the entries array and clear the table and then display the function again
    //4. for delete listing you can remove from the array in listing factory and then re run the display function  

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      this.listings.push({code: this.codeInput, 
            name: this.buildingInput, 
            coordinates: {
                latitude: this.latitudeInput, 
                longitude: this.longitudeInput
            }, 
            address: this.addressInput})
      this.codeInput = '';
      this.buildingInput = '';
      this.latitudeInput = '';
      this.longitudeInput = '';
      this.addressInput = '';
    };
    $scope.deleteListing = function(index) {
      this.listings.splice( indexHere, 1);
    };
    $scope.showDetails = function(index) {
      indexHere = this.listings.indexOf(this.currListing);
      $scope.detailedInfo = this.currListing;
      $scope.detailedCode = this.detailedInfo.code;
      $scope.detailedBuilding = this.detailedInfo.name;
      $scope.detailedlat = this.detailedInfo.coordinates.latitude;
      $scope.detailedlong = this.detailedInfo.coordinates.longitude;
      $scope.detailedaddress = this.detailedInfo.address;

    };

     

  }
]);
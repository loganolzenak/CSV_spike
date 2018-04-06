console.log('in csv controller first');

myApp.controller('CSVController', ['CSVService', function(CSVService) {
  let self = this;
      console.log('in csv controller');

self.createCSV = CSVService.createCSV;


}]);

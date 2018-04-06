console.log('in service first');

myApp.service('CSVService', ['$route', '$http', function($route, $http){
  let self = this;
  self.export = {};
  self.csvString = ''
console.log('in csv service');

self.createCSV = function(){
    console.log( 'in createCSV' );
    let csvString = '';
    self.displayDB()
  }

self.displayDB = function (){
  console.log('in display DB');
  $http({
    method: 'GET',
    url: '/csv'
  }).then(function(response){
    self.export.response = response.data.rows;
    console.log(self.export);
    self.createStringForCSV(self.export);
  }).catch(function(error){
    console.log('error in get DB', error);
  })
}

self.createStringForCSV = function(taco) {
console.log('in createStringForCSV', taco);
let objectLength = Object.keys(taco.response[0]).length;
console.log(objectLength, 'objectLength');

self.csvString += 'transaction_id, charity_id, user_id, amount, date\n';

for (i=0; i<taco.response.length; i++){
  self.csvString += taco.response[i].id + ',';
  self.csvString += taco.response[i].charity_id + ',';
  self.csvString += taco.response[i].user_id + ',';
  self.csvString += taco.response[i].amount + ',';
  self.csvString += taco.response[i].date_posted.substring(0,10) + '\n';
}
console.log( 'creating csv with string:', self.csvString );
self.downloadCsv( self.csvString, 'test.csv' );

}
//end createStringForCSV


    // csvString += document.getElementById( 'input0' ).value + ',';
    // csvString += document.getElementById( 'input1' ).value + ',';
    // csvString += document.getElementById( 'input2' ).value + ',';
    // csvString += document.getElementById( 'input3' ).value + '\n';
    //
    // csvString += document.getElementById( 'input4' ).value + ',';
    // csvString += document.getElementById( 'input5' ).value + ',';

    // csvString += document.getElementById( 'input0' ).value + ',';
    // csvString += document.getElementById( 'input1' ).value + ',';
    // csvString += document.getElementById( 'input2' ).value + ',';
    // csvString += document.getElementById( 'input3' ).value + '\n';



self.downloadCsv = function( string, fileName ){
    let data = encodeURI( 'data:text/csv;charset=utf-8,' + string );
    link = document.createElement( 'a' );
    link.setAttribute( 'href', data );
    link.setAttribute( 'download', fileName );
    link.click();
}




}]);//end service

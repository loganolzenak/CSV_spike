console.log('in service first');

myApp.service('CSVService', ['$route', function($route){
  let self = this;
console.log('in csv service');

self.createCSV = function(){
    console.log( 'in createCSV' );
    let csvString = '';
    csvString += document.getElementById( 'input0' ).value + ',';
    csvString += document.getElementById( 'input1' ).value + ',';
    csvString += document.getElementById( 'input2' ).value + ',';
    csvString += document.getElementById( 'input3' ).value + '\n';

    csvString += document.getElementById( 'input4' ).value + ',';
    csvString += document.getElementById( 'input5' ).value + ',';

    // csvString += document.getElementById( 'input0' ).value + ',';
    // csvString += document.getElementById( 'input1' ).value + ',';
    // csvString += document.getElementById( 'input2' ).value + ',';
    // csvString += document.getElementById( 'input3' ).value + '\n';
    console.log( 'creating csv with string:', csvString );
    self.downloadCsv( csvString, 'test.csv' );
}

self.downloadCsv = function( string, fileName ){
    let data = encodeURI( 'data:text/csv;charset=utf-8,' + string );
    link = document.createElement( 'a' );
    link.setAttribute( 'href', data );
    link.setAttribute( 'download', fileName );
    link.click();
}




}]);//end service

var someApi = {
  dvds : [
    { name: 'Fun with Dick and Jane', company: 'New Line Cinemas' },
    { name: 'Game of Thrones', company: 'HBO'},
    { name: 'Back to the Future', company: 'Universal Studios'}
  ]
};



var rendered2= Handlebars.templates['dvds'];

$('#dvds').append( rendered2(someApi) );


var library = {
  books : [
    { title: 'Moby Dick', author: 'Herman Melville' },
    { title: 'Great Expectations', author: 'Charles Dickens'},
    { title: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
  ]
};

var someApi = {
  dvds : [
    { name: 'Fun with Dick and Jane', company: 'New Line Cinemas' },
    { name: 'Game of Thrones', company: 'HBO'},
    { name: 'Back to the Future', company: 'Universal Studios'}
  ]
};

//Creating our handlebars function
var rendered= Handlebars.templates['books'];

$('#books').append( rendered(library) );

var rendered2= Handlebars.templates['dvds'];

$('#dvds').append( rendered2(someApi) );


var library = {
  books : [
    { title: 'Moby Dick', author: 'Herman Melville' },
    { title: 'Great Expectations', author: 'Charles Dickens'},
    { title: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
  ]
};

//Creating our handlebars function
var rendered= Handlebars.templates['books'];

$('#books').append( rendered(library) );

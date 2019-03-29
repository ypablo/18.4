var movies = [
  {
    id: 1,
	title: 'Harry Potter',
    desc: 'Film o czarodzieju',
	image: 'potter.jpg'
  },
  {
	id: 2,  
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	image: 'lew.jpg'
  },
  {
	id: 3,  
    title: 'Forrest Gump',
    desc: 'Film o przygodach autystyka',
	image: 'forrest.jpg'
  },
  {
	id: 4,  
    title: 'Private Ryan',
    desc: 'Film o II Wojnie Światowej',
	image: 'ryan.jpg'
  },
  {
	id: 5,  
    title: 'Pulp Fiction',
    desc: 'Film o gangsterach',
	image: 'pulp.jpg'
  }
];


var MovieTitle = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
			return React.createElement('h2', {}, this.props.movie.title );
	}	
});	

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
			return React.createElement('p', {}, this.props.movie.desc );
	}	
});	

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},
	render: function() {
			return React.createElement('img', {src:this.props.src} );
	}	
});	

var MovieList = React.createClass({
	propTypes: {
		image: React.PropTypes.number.isRequired,
	},
	render: function() {
			return React.createElement('li', {key:this.props.id} );
	}	
});	 

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key:movie.id},
      React.createElement(MovieTitle, {movie:movie}),
	  React.createElement(MovieDesc, {movie:movie}),
	  React.createElement(MovieImage,{src:movie.image})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));



	
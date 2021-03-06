var React = require('react'),
	Router = require('react-router');

var Header = React.createClass({
	render: function() {
		return (<header className="container-fluid full-width">
					<span className="mdl-layout-title">Browsertime</span>
					<PageNav />
				</header>);
	}
});

var Footer = React.createClass({
	render: function() {
		return (<footer className="mdl-mini-footer">
		<div className="mdl-mini-footer__left-section">
			<div className="courier-new-font">Support this project: 146z8MPUeogNxpT3ptpBWjr6rkpviGd4JG</div>
		</div>
	</footer>);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
			<div className="nav">
				<Router.Link to="movies">Movies</Router.Link>
				<Router.Link to="series">TV Series</Router.Link>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="">
				<Header />
				<Router.RouteHandler/>
				<Footer/>
			</div>
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	Movie: require('../routes/Movie'),
	MovieId: require('../routes/MovieId'),
	Series: require('../routes/Serie')
};

var routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={routes.Home}/>
		<Router.Route name="movies" path="/movies" handler={routes.Movie}/>
		<Router.Route name="movieid" path="/movies/:id" handler={routes.MovieId}/>
		<Router.Route name="series" path="/series" handler={routes.Series}/>
		<Router.DefaultRoute handler={routes.Home}/>
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});

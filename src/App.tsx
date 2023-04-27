import React from 'react'
import { Base } from './epfl-elements/Base.tsx'
import { Avatar } from './epfl-elements/Avatar.tsx'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import BioHazard from './pages/biohazard';
import HomePage from './pages/homepage';

function App() {
	return (
		<BrowserRouter>
			<Base>
                         	<Base.AsideMenu>
                         		<ul>
			 	      	<li className="active"><a href="#">Hazards</a></li>
			 	      	<li>
			 	      		<ul>
			 	      			<li>
			 	      				<Link to="/">Home</Link>
			 	      			</li>
			 	      			<li>
			 	      				<Link to="/biohazard">Bio hazards</Link>
			 	      			</li>
			 	      		</ul>
			 	      	</li>
                         		</ul>
                         	</Base.AsideMenu>
                         	<Base.Breadcrumbs><li className="breadcrumb-item">Laboratory Hazards Directory</li></Base.Breadcrumbs>
                         	<Base.User>
                         		<Avatar>
                         			<Avatar.Image peopleSciper={ "169419" } />
                         			<p>{ oidc.idToken.given_name } { oidc.idToken.family_name }</p>
                         		</Avatar>
                         	</Base.User>

                         	<div className="container-full" style={{width: "100%", padding: "1em" }}>

					<Switch>
						<Route path="/biohazard">
							<NothingHereNow />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>

                         	</div>
			</Base>
		</BrowserRouter>
	);
}

export default App;

function NothingHereNow() {
	return (
		<div>
			<Link to="/">NothingHereNow</Link>
		</div>
	);
}

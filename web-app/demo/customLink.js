import React from 'react';
import {render} from 'react-dom'; 
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

const CustomLinkExample = () => (
	<Router>
		<div>
			<OldSchoolMenuLink activeOnlyExact={true} to='/' label='Home' />
			<OldSchoolMenuLink to='/about' label='About' />
			<hr/>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
		</div>
	</Router>
	)

const OldSchoolMenuLink = ({label,to,activeOnlyExact}) => (

	<Route path={to} exact={activeOnlyExact} children={({match}) =>(
			<div className={match? 'active' : ''}>
				{match ? '>' : ''}<Link to={to}>{label}</Link>
			</div>
		) }/>

	)

const Home = (props) => {
	console.log(props,'1')
	return <div><h2>Home</h2></div>
	}

const About = (props) => {
	console.log(props,'2')
	return <div><h2>About</h2></div>
	}

export default CustomLinkExample;
render(<CustomLinkExample/>,document.getElementById('box'));
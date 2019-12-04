import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component {
	constructor(){
		super()
		this.state = {               // inorder to use this to call the constructor we need super
			robots : [],
	        searchField: ''
		}
	}
    componentDidMount() {
    	fetch('https://jsonplaceholder.typicode.com/users')
	    	.then(response=>response.json())
	    	.then(users=>this.setState({robots: users})) 	
    }
   
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value })
	}
	render() {
		const {robots, searchField} = this.state
		const filteredrobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return !robots.length ?
		<h1> loading</h1> :
	       (
				<div className = 'tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>   {/*This SearchBox component we have to create as we dont have any like h1 tag */}
					<Scroll>                                          
					<CardList robots = {filteredrobots}/>
					</Scroll>
				</div>
			);
        
	}
	
}
export default App;
// note in appp.js robots is a state while in cardList robots is a prop


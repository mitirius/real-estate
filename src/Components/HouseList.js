import React, { Component } from 'react';
import HouseItem from './HouseItem';

export class HouseList extends Component {
	constructor(props){
		super(props);

			this.state = {
				houses: []
			};
		}

	componentWillMount() {
    	this.fetchHouses();
  		}
	
	fetchHouses() {
    	const URL = 'https://api.mcmakler.de/v1/advertisements';

    	const fetchOptions = {
    		mode: 'no-cors',
    		timeout: 30000,
    	}

    	fetch(URL, fetchOptions)
      		.then(res => res.json())
      		.then(json => this.setState({houses: json.data}))
      		.catch(e => console.log(e));
  	}

	render() {
		return (
			<div>
				{this.state.houses.map(h => <HouseItem key={h.id} house={h} />)}
			</div>
		);
	}
}

export default HouseList;
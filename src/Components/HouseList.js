import React, { Component } from 'react';
import HouseItem from './HouseItem';
import myData from '../houses.json'

export class HouseList extends Component {
	constructor(props){
		super(props);

			this.state = {
				houses: []
			};
		}

	componentWillMount() {
    	this.fetchHouses();
    	this.setState({houses: myData.data});
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
			<div className='container'>
				<div className='row'>
					{this.state.houses
						.filter((h,idx) => idx < 10)
						.map(h => <HouseItem key={h.id} house={h} />)}
				</div>
			</div>
		);
	}
}

export default HouseList;
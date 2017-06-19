import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HouseItem.css';

export class HouseItem extends Component {
       
  render() {
        
      const house = this.props.house;
      
		return (
          <section className=" col-sm-3 col-xs-12 image1">
              <p className='title'><h4>{house.title}</h4></p>
            	<img className='img-responsive center-block' 
                 src={house.advertisementAssets[0].advertisementThumbnails.inventory_m.url}
                alt="real estate" />
              <p className='price'>{`${house.advertisementPrice.baseRent} Euro`}</p>
              <div className='details'>
                <p className='area'>{`ab ${house.realestateSummary.space.toFixed(2)} sq mt`}</p>
                <p className='zimmer'>{`${house.realestateSummary.numberOfRooms} Zimmer`}</p>
              </div>
          </section>
		);
	}
}

HouseItem.propTypes = {
  house: PropTypes.object.isRequired,
};

export default HouseItem;

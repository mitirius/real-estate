import React, { Component } from 'react';
import './HouseItem.css';

export class HouseItem extends Component {
       
  render() {
        
      const house = this.props.house;
      
		return (
		<div className='container'>
        <div className='row'>
          		<section className=" col-sm-3 col-xs-12 image1">
            	<img className='img-responsive center-block' src={`${URL}/${house.images[0]}`}  alt="Dr Winthrop Photo" />
            	<p>Dr. Winthrop is the guardian of Missy, a three-year old Llaso mix, 
            	who he</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p className='price'>10989</p>
              <div className='details'>
                <p className='roomnos'>zimmer</p>
                <p className='area'>sq mt</p>
              </div>
          		</section>
            
              <section className="col-sm-3 col-xs-12 image2">
              <img className='img-responsive ' src="images/drwinthrop.jpg" alt="Dr Winthrop Photo" />
              <p>Dr. Winthrop is the guardian of Missy, a three-year old Llaso mix, 
              who he</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p className='price'>10989</p>
              <div className='details'>
                <p className='roomnos'>zimmer</p>
                <p className='area'>sq mt</p>
              </div>
              </section>
  
              <section className="col-sm-3 col-xs-12 image3">
              <img className='img-responsive' src="images/drwinthrop.jpg" alt="Dr Winthrop Photo" />
              <p>Dr. Winthrop is the guardian of Missy, a three-year old Llaso mix, 
              who he</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p className='price'>10989</p>
              <div className='details'>
                <p className='roomnos'>zimmer</p>
                <p className='area'>sq mt</p>
              </div>
              </section>
      </div>
    </div>
		);
	}
}

export default HouseItem;

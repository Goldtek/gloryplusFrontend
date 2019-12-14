import React, { useState, useEffect } from 'react';
import { Carousel } from './styles'
import DA6 from '../assets/images/DA6.jpg';
import DA5 from '../assets/images/DA5.jpg';
import DA4 from '../assets/images/DA4.jpg';



import ImageSlider from './ImageSlider';

const Advert = () => {
  const imgUrls = [
    DA6,
    DA5,
    DA4,
    DA5,
  ]
  const [ displayImage, setDisplayImage] = useState(imgUrls[0]);


  const displayImages = (index) => {
		setTimeout(() => {
			setDisplayImage(imgUrls[index]);

			if (index < imgUrls.length - 1) {
				index += 1;
			} else {
				index = 0;
			}

			displayImages(index);
		}, 7000)
	}

	useEffect(() => {
		displayImages(1);
	}, [])
  return (
    <Carousel>
      <ImageSlider url={displayImage} />
    </Carousel>
  )
}

export default Advert;
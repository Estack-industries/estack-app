import React from 'react';
import Banner from '../Banner/Banner';

import './ImageAttachment.css';

const ImageAttachment = ({imageData, setImageData}) => {
	return (
		<div className="image-cont">
			<Banner title={'Image Attachment'} />
			{imageData && imageData.map((image, i) => (
				<img
					className="image-input" key={i}
					src={image} alt={'Submitted image ' + i}
				/>
			))}
			<div className='image-input-cont'>
				<p style={{margin: 'auto'}}>Add Image</p>
				<input
					type='file' accept='image/*'
					alt='Add Image' multiple={true}
					onInput={(e) => {
						const images = Array.from(e.target.files);
						const imagesURL = images.map((image) => URL.createObjectURL(image));
						setImageData(imagesURL)
					}}/>
			</div>
		</div>
	);
};

export default ImageAttachment;

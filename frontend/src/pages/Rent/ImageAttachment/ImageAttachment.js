import React from 'react';
import Banner from '../Banner/Banner';

import './ImageAttachment.css';

const ImageAttachment = () => {
	return (
		<div className="image-cont">
			<Banner title={'Image Attachment'} />
			<div className="image-input" />
			<button>Add Image</button>
		</div>
	);
};

export default ImageAttachment;

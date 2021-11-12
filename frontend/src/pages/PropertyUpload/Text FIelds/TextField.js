import React from 'react';

import './TextField.css';

export const TextField = ({ text, onChange }) => {
	return (
	<div className = 'form'>
		<label>
    		{text}
			
    		<input style ={{height : '2em',
							marginleft : '1em',
							fontfamily: 'Lato, sans-serif',
    						fontstyle : 'normal',
    						fontweight: 'normal',
    						fontsize: '1.2rem',
    						color: '#7B6F6F',
    						width: '100%',
    						lineheight: '72px',
    						paddingleft: '1em',
    						paddingright: '1em',

    						border: '1px solid #8A8A8A',
    /* box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); */
    						borderradius: '20px'}}
							 type="text" onChange ={onChange} autoComplete= 'off' />
			
  		</label>
	</div>
	);
};

import React, {useRef, useState, useEffect} from 'react';
import {makeStyles, Box, IconButton, Typography, Popover, TextField, InputLabel, Button} from "@material-ui/core";
import 'antd/dist/antd.css';
import './AccountSettings.css';
import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import editPicture from './assets/edit-picture.png';
import AccountVecotr1 from './assets/accountVector1.svg'
import AccountVecotr3 from './assets/accountVector3.svg'
import AccountVecotr4 from './assets/accountVector4.svg'
import GearsBig from './assets/2gearsBig.png'
import ProfileImage from './assets/ProfileImage.png'
import ProfileImage2 from './assets/ProfileImage2.png'
import ProfileImage3 from './assets/ProfileImage3.png'
import PlaceHolderImage from './assets/placeholderImage.png'

import Footer from '../../components/Footer/Footer';

function NavBar() {
    return (
        <div className="navbar-container">
            <img
                src={EStackLogo}
                alt="estack-logo"
                className="estack-logo"
                onClick={() => console.log('clicked')}
            />
            <div className="navbar-options">
                <a className="navbar-option white-color open-sans" href="#">
                    Buy
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    Sell
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    Rent
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    About Us
                </a>
            </div>
            <img
                src={DefaultUserIcon}
                alt="default-user-icon"
                className="user-icon"
                onClick={() => console.log('clicked')}
            />
        </div>
    
    );
};

function Background() {
	return (
		<>
      		<img src={AccountVecotr1} alt="account-vector-1" className="vector-1" />
		  	<img src={AccountVecotr3} alt="account-vector-3" className="vector-3" />
     		<img src={AccountVecotr4} alt="account-vector-4" className="vector-4" />
		</>
	);
}

const EditAvatar = ({avatar, parentObject, setParentObject, parentKey = 'avatar'}) => {
	const [localAvatar, setLocalAvatar] = useState(avatar ?? parentObject?.[parentKey]);

	useEffect(() => {
		setLocalAvatar(avatar ?? parentObject?.[parentKey]);
	}, [avatar, parentKey, parentObject]);

	const changeAvatar = (e) => {
		const image = e.target.files[0];
		if (image) {
			const imageURL = URL.createObjectURL(image);
			setLocalAvatar(imageURL);

			if (parentObject && setParentObject) setParentObject({...parentObject, [parentKey]: imageURL})
		}	
	}

	return (
		<div className='pictureContainer'>
			{localAvatar &&
				<>
					<div className='editPicture'>
						<input type='file' accept='image/*' onInput={changeAvatar}/>
						<img src={editPicture} alt='Edit avatar'/>
					</div>
					<img src={localAvatar} alt='Your avatar'/>
				</>
			}
		</div>
	)
}

function InlineEditor({ type, labelText, variant, value, onConfirmChange }) {
const [editMode, setEditMode] = useState(false);
const [internalValue, setInternalValue] = useState(value);
const [passwordShown, setPasswordShown] = useState(false);

const typoRef = useRef();

useEffect(() => {
	setInternalValue(value);
}, [value]);

const handleClick = () => {
	setEditMode(!editMode);
};

const handleClickConfirm = () => {
	setEditMode(!editMode);
	onConfirmChange(internalValue);
};

const handleChange = e => {
	setInternalValue(e.target.value);
};
return (
	<Box display="flex" flexDirection="row" alignItems="center">
	{labelText && (
		<Box pr={1}>
			<InputLabel>{labelText}</InputLabel>
		</Box>
	)}
	<Box pr={1}>
		<Typography ref={typoRef} variant={variant}>
			{value}
		</Typography>
		<Popover open={editMode} anchorEl={typoRef.current} anchorOrigin={{ vertical: "top", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}>
			<Box display="flex" flexDirection="column" >
				<Box display="flex" width="100%" justifyContent="flex-end" >
					<IconButton key="close" size="small" onClick={handleClick}>
						&times;
					</IconButton>
				</Box>
				<Box p={1}>
					<TextField type={type} fullWidth variant="standard" value={internalValue} onChange={handleChange}/>
				</Box>
				<Box p={1} >
					<Button color="primary" size="small" variant="outlined" onClick={handleClickConfirm}>
						Confirm
					</Button>
					<Button  size="small" variant="outlined" onClick={handleClick}>
						Cancel
					</Button>
				</Box>
			</Box>
		</Popover>
	</Box>
	<Box>
		<button classes onClick={handleClick}>
		Edit
		</button>
	</Box>
	</Box>
	);
};

const AccountSetting = () => {
    const uploadedImage = useRef(null)
    const imageUploader = useRef(null)
    const [personalInfo, setPersonalInfo] = useState({
      name: "your name",
      username: "your username",
	  email: "email@address.com",
	  password: "************",
	  reviews: "N/A"
    });
    const [notifications, setNotifications] = useState("On");

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
			const reader = new FileReader();
			const { current } = uploadedImage;
			current.file = file;
			reader.onload = e => {
            	current.src = e.target.result;
			};
			reader.readAsDataURL(file);
        }
      };
    const _setState = key => value => {
    	setPersonalInfo({ ...personalInfo, [key]: value });
    };


    return (
        <div>
            <NavBar />
            <Background />
            <div className='heading'>
                Account Settings
            </div>
            <div className='picture-container' >
                <div>
                    <EditAvatar avatar={PlaceHolderImage} />
                </div>
            </div>
            <div className='info-container'>
                <div className='personal-information'>
                    <div className='info-heading'>
                        Personal Information
                        <div className='name'>
                            Name
                            <Box  >
                                <InlineEditor value={personalInfo.name} variant="body3" onConfirmChange={_setState("name")}/>								
                            </Box>
                        </div>
                        <div className='username'>
                            Username
                            <Box label="Please Enter Your Username">
                                <InlineEditor value={personalInfo.username} variant="body3" onConfirmChange={_setState("username")}/>
                            </Box>
                        </div>
                        <div className='reviews'>
                            Reviews
                            <InlineEditor value={personalInfo.reviews} variant="body3" onConfirmChange={_setState("reviews")}/>
                        </div>
                    </div>
                </div>
                <div className='sign-in-security'>
                    <div className='info-heading'>
                        Sign-in & Security
                        <div className='email'>
                            Email Address
                            <InlineEditor value={personalInfo.email} variant="body3" onConfirmChange={_setState("email")}/>
                        </div>
                        <div className='password'>
                            Password
                            <InlineEditor type="password" value={personalInfo.password} variant="body3" onConfirmChange={_setState("password")}/>

                        </div>
                        <div className='google'>
                            Google Sign-In
                            <button>Link</button>
                        </div>
                    </div>
                </div>
                <div className='manage-account'>
                    <div className='info-heading'>
                        Manage Account
                        <div className='deactivate'>
                            Deactivate My Account
                            <button>Deactivate</button>
                        </div>
                        <div className='privacy-cookies'>
                            Privacy & Cookies
                            <button>View</button>
                        </div>
                        <div className='other-accounts'>
                            Link to Another Account
                            <button>Link</button>
                        </div>
                    </div>
                </div>
                <div className='notifications'>
                        Notifications
                        <button className='notifications-button' onClick={() => {notifications === "On" ? setNotifications("Off") : setNotifications("On");}}>
                            {notifications}
                        </button>
                    
                </div>
                <div className='more'>
                    <button className='more-button'>
                        More
                    </button>
                </div>
                <div className='deleted-searches'>
                    <div className='info-heading'>
                        Deleted Searches
                    </div>
                </div>
                <div className='bidded-properties'>
                	<div className='info-heading'>
                    	Bidded Properties
                  	</div>
                </div>
                <div className='loans-financing'>
                <div className='info-heading'>
                        Loans & Financing
                    </div>
                </div>
                <img src={GearsBig} className='gears-big' />
            </div>
            
            <Footer />
        </div>
    );
};

export default AccountSetting
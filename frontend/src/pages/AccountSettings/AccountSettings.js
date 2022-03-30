import React, {useRef, useState, useEffect} from 'react';
import {Box, IconButton, Typography, Popover, TextField, InputLabel, Button} from "@material-ui/core";
import './AccountSettings.css';
import GearsBig from './assets/2gearsBig.png'
import sampleHouse1 from './assets/temp/sample-house-1.jpg';
import sampleHouse2 from './assets/temp/sample-house-2.jpg';
import PlaceHolderImage from './assets/temp/sample-profile.jpg';

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import NavBackground from '../../components/NavBackground';
import PropertySummary from '../../components/PropertySummary';
import EditAvatar from '../../components/EditAvatar';

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

const formatPassword = (password) => {
    if (password.length < 6) return password.replace(/./g, '*');
    else {
        const first = password.substring(0, 2);
        const last = password.substring(password.length - 2);
        return first + '*'.repeat(password.length - 4) + last;
    }
}

const AccountSetting = () => {
    const uploadedImage = useRef(null)
    const imageUploader = useRef(null)
    const [personalInfo, setPersonalInfo] = useState({
      name: "your name",
      username: "your username",
	  email: "email@address.com",
	  password: "password",
	  reviews: "N/A",
      avatar: PlaceHolderImage,
    });
    const [notifications, setNotifications] = useState("On");
    const [deletedProperties, setDeletedProperties] = useState([
        {
            image: sampleHouse1,
            address: '26 Young Avenue East Elmhurst, NY 11369',
            price: 600000000000000000000000000,
            beds: 3,
            baths: 2.5,
            sqft: 2000,
            new: true,
        },
        {
            image: sampleHouse2,
            address: '8952 Glenholme Avenue Saugus, MA 01906',
            price: 900000,
            beds: 4,
            baths: 3,
            sqft: 3400,
            new: true,
        },
    ]);

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
        <>
            <Navbar />
            <NavBackground />
            <main>
                <h1 className='heading'>
                    Account Settings
                </h1>
                <div className='picture-container' >
                    <div>
                        <EditAvatar parentObject={personalInfo} setParentObject={setPersonalInfo} personalKey={'avatar'}/>
                    </div>
                </div>
                <div className='info-container'>
                    <div className='personal-information'>
                        <div className='info-heading'>
                            <h2>Personal Information</h2>
                            <div className='name'>
                                <label>Name</label>
                                <Box>
                                    <InlineEditor id='name' value={personalInfo.name} variant="body3" onConfirmChange={_setState("name")}/>			
                                </Box>
                            </div>
                            <div className='username'>
                                <label>Username</label>
                                <Box label="Please Enter Your Username">
                                    <InlineEditor value={personalInfo.username} variant="body3" onConfirmChange={_setState("username")}/>
                                </Box>
                            </div>
                            <div className='reviews'>
                                <label>Reviews</label>
                                <InlineEditor value={personalInfo.reviews} variant="body3" onConfirmChange={_setState("reviews")}/>
                            </div>
                        </div>
                    </div>
                    <div className='sign-in-security'>
                        <div className='info-heading'>
                            <h2>Sign-in & Security</h2>
                            <div className='email'>
                                <label>Email Address</label>
                                <InlineEditor value={personalInfo.email} variant="body3" onConfirmChange={_setState("email")}/>
                            </div>
                            <div className='password'>
                                <label>Password</label>
                                <InlineEditor type="password" value={formatPassword(personalInfo.password)} variant="body3" onConfirmChange={_setState("password")}/>

                            </div>
                            <div className='google'>
                                <label>Google Sign-In</label>
                                <button>Link</button>
                            </div>
                        </div>
                    </div>
                    <div className='manage-account'>
                        <div className='info-heading'>
                            <h2>Manage Account</h2>
                            <div className='deactivate'>
                                <label>Deactivate My Account</label>
                                <button>Deactivate</button>
                            </div>
                            <div className='privacy-cookies'>
                                <label>Privacy & Cookies</label>
                                <button>View</button>
                            </div>
                            <div className='other-accounts'>
                                <label>Link to Another Account</label>
                                <button>Link</button>
                            </div>
                        </div>
                    </div>
                    <div className='notifications'>
                        <h2>Notifications</h2>
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
                            <h2>Deleted Searches</h2>
                        </div>
                        <div className='deleted-searches-container'>
                            {deletedProperties.map((data, i) => (
                                <PropertySummary homeData={data} key={i}/>
                            ))}
                        </div>
                    </div>
                    <div className='bidded-properties'>
                        <div className='info-heading'>
                            <h2>Bidded Properties</h2>
                        </div>
                        <div className='deleted-searches-container'>
                            
                        </div>
                    </div>
                    <div className='loans-financing'>
                    <div className='info-heading'>
                        <h2>Loans & Financing</h2>
                    </div>
                    </div>
                    <img src={GearsBig} className='gears-big' />
                </div>
            </main>
            
            <Footer />
        </>
    );
};

export default AccountSetting
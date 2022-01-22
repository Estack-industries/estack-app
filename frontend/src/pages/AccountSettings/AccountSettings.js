import React, {useRef, useState, useEffect} from 'react';
import {makeStyles, Box, Typography, IconButton, Popover, TextField, InputLabel, Button} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";

import 'antd/dist/antd.css';
import EditButton from 'react-edit-button'
import './AccountSettings.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
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


const useStyle = makeStyles({
   
   
    popoverContainer: {
      position: "relative"
    },
    popoverCloseIcon: {
      position: "absolute",
      top: 0,
      right: 0
    },
  });

  const InlineEditor = ({ labelText, variant, value, onConfirmChange }) => {
    const [editMode, setEditMode] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value);
  
    const classes = useStyle();
    const typoRef = React.useRef();
  
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
  
    const handleChange = ev => {
      setInternalValue(ev.target.value);
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
  
          <Popover
            open={editMode}
            anchorEl={typoRef.current}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Box display="flex" flexDirection="column" className={classes.popoverContainer}>
              <Box display="flex" width="100%" justifyContent="flex-end" className={classes.popoverCloseIcon}>
                <IconButton key="close" size="small" onClick={handleClick}>
                  <CloseIcon className={classes.icon} />
                </IconButton>
              </Box>
              <Box p={1}>
                <TextField label="Please Write Your Name" fullWidth variant="standard" value={internalValue} onChange={handleChange}/>
              </Box>
              <Box p={1} >
                <Button color="primary" size="small" variant="outlined" onClick={handleClickConfirm}>
                  Confirm
                </Button>
                <Button
                  classes={{
                    outlined: classes.errorButton
                  }}
                  size="small"
                  variant="outlined"
                  onClick={handleClick}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Popover>
        </Box>
        <Box>
          <button cla onClick={handleClick}>
            Edit
          </button>
        </Box>
      </Box>
    );
  };



const AccountSetting = () => {
    const uploadedImage = React.useRef(null)
    const imageUploader = React.useRef(null)
    const [personalInfo, setPersonalInfo] = React.useState({});

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
            <div className='picture-container'  onClick={() => imageUploader.current.click()}>
                <div>
                    <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} style={{display: "none"}}/>
                    <div >
                        <img className='profile-picture' ref={uploadedImage} placeholder={PlaceHolderImage} />
                    </div>
                </div>
            </div>
            <div className='info-container'>
                <div className='personal-information'>
                    <div className='info-heading'>
                        Personal Information
                        <div className='name'>
                            Name
                            <Box>
                                <InlineEditor value={personalInfo.name} variant="body1" onConfirmChange={_setState("name")}
                                />
                            </Box>

                        </div>
                        <div className='username'>
                            Username
                            <Box>
                                <InlineEditor value={personalInfo.username} variant="body1" onConfirmChange={_setState("username")}
                                />
                            </Box>
                        </div>
                        <div className='reviews'>
                            Reviews
                            <button>Edit</button>
                        </div>
                    </div>
                </div>
                <div className='sign-in-security'>
                    <div className='info-heading'>
                        Sign-in & Security
                        <div className='email'>
                            Email Address
                            <button>Edit</button>
                        </div>
                        <div className='password'>
                            Password
                            <button>Edit</button>
                        </div>
                        <div className='google'>
                            Google Sign-In
                            <button>Edit</button>
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
                            <button>Edit</button>
                        </div>
                        <div className='other-accounts'>
                            Link to Another Account
                            <button>Edit</button>
                        </div>
                    </div>
                </div>
                <div className='notifications'>
                    <div className='info-heading'>
                        Notifications
                    </div>
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
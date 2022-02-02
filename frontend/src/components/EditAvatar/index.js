import { useState, useEffect } from 'react';
import styles from './index.module.css';
import editPicture from './edit-picture.svg';

/**
 * A component that allows the user to edit their avatar.
 * @param {object} prop The properties of the component.
 * @param {string} [prop.avatar] The user's current avatar.
 * @param {object} [prop.parentObject] The user object useState value.
 * @param {function} [prop.setParentObject] The user object useState set value.
 * @param {string} [prop.parentKey] The position of the avatar inside of the user object.
 * @example
 * // Simplest usage
 * <EditAvatar avatar={user.picture} />
 * 
 * // Usage with a parent object
 * // For example, when there are multiple avatars and they should all be updated.
 * <EditAvatar
 * 	parentObject={user}
 * 	setParentObject={setUser}
 * 	parentKey='picture'
 * />
 */
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
		<div id={styles.pictureContainer}>
			{localAvatar &&
				<>
					<div id={styles.editPicture}>
						<input type='file' accept='image/*' onInput={changeAvatar}/>
						<img src={editPicture} alt='Edit avatar'/>
					</div>
					<img src={localAvatar} alt='Your avatar'/>
				</>
			}
		</div>
	)
}

export default EditAvatar;
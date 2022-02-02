import { useState, useEffect }from 'react';
import styles from './messages.module.css';
import { FetchingContacts, FetchingMessages } from '../dataFetching';
import chatOptionsSvg from '../assets/chat-options.svg';
import { timeFormat, dateFormat } from '../utils';

const Messages = ({userData}) => {
	const [messages, setMessages] = useState();
	const [cacheMessages, setCacheMessages] = useState({});
	const [contacts, setContacts] = useState();
	const [contact, setContact] = useState();
	const [sentMessagesToday, setSentMessagesToday] = useState(0);

	useEffect(() => {
		FetchingContacts('example').then((data) => {
			setContacts(data);
			setContact(data[0]);
			window.currentContact = data[0];
			FetchingMessages('example', data[0].id).then((data) => {
				setMessages(data);
			})
		});

		return () => {
			delete window.currentContact;
		};
	}, []);

	useEffect(() => {
		setSentMessagesToday(userData.sentMessagesToday);
	} , [userData]);
	
	const ChatProfilePicture = ({src, online}) => {
		return (
			<div className={styles.pictureContainer}>
				{src && <img src={src} alt='profile appearance'/>}
				{online && <div className={styles.online}/>}
			</div>
		);
	};

	const ContactListElement = ({contactProp, index, allContactProp}) => {
		const changeContact = () => {
			setCacheMessages({...cacheMessages, [contact.id]: messages});
			setContact(contactProp);
			setMessages(cacheMessages[contactProp.id]);
			window.currentContact = contactProp;
			FetchingMessages('example', contactProp.id).then((data) => {
				if (contactProp.id === window.currentContact.id) setMessages(data);
			})
		}

		return (
			<>
				{allContactProp[index - 1]?.group !== contactProp.group &&
					<div>
						{allContactProp[index - 1]?.group !== undefined &&
							<div className={styles.contactSeparator}/>
						}
						<h3>{contactProp.group}</h3>
					</div>
				}
				<button className={styles.contact} onClick={changeContact}>
					{contactProp.profilePicture && <img src={contactProp.profilePicture} alt='profile appearance'/>}
					<p>{contactProp.name}</p>
				</button>
			</>
		)
	}

	const dates = [];
	const today = new Date().getDay();

	const AttachmentElement = ({attachment}) => {
		return (
			<figure className={styles.shareProperty}>
				<figcaption>{attachment.caption}</figcaption>
				<img src={attachment.url} alt={attachment.caption}/>
			</figure>
		)
	}

	const MessageElement = ({message, index}) => {
		const sender = contacts.find((e) => e.id === message.sender);
		dates.push(new Date(message.date).getDay());

		let dateString = dateFormat(message.date);
		if (dates[index] === today) dateString = 'Today';
		else if (dates[index] === today - 1) dateString = 'Yesterday';

		return (
			<>
				{dates[index - 1] !== dates[index] &&
					<div className={styles.dateSeparator}>
						<h3>{dateString}</h3>
					</div>
				}
				<div className={userData.id === message.sender ? styles.ourMessage : styles.theirMessage} key={index}>
					<ChatProfilePicture src={userData.id === message.sender ? userData.picture : sender?.profilePicture} online={userData.id === message.sender ? true : sender?.online}/>
					<div className={styles.messageContent}>
						<div className={styles.header}>
							<p className={styles.sender}>{userData.id === message.sender ? 'YOU' : sender?.name}</p>
							<p className={styles.date}>{timeFormat(message.date)}</p>
						</div>
						<p className={styles.text}>{message.text}</p>
						{message.attachments &&
							message.attachments.map((attachment, i) => (
								<AttachmentElement attachment={attachment} key={i}/>
							))
						}
					</div>
				</div>
			</>
		)
	}

	return (
		<div id={styles.container}>
			<div id={styles.contactsList}>
				<div id={styles.contactsFixed}>
					<img src={userData.picture} alt=''/>
					<h2>E-Stack Messages</h2>
					<p>{userData.name}</p>
				</div>
				<div id={styles.contactStatic}>
					{contacts && contacts.map((contact, i, allContact) => (
						<ContactListElement contactProp={contact} index={i} allContactProp={contacts} key={i}/>
					))}
				</div>
			</div>
			<div id={styles.messageContainer}>
				<div id={styles.topBar}>
					<ChatProfilePicture src={contact?.profilePicture} online={contact?.online}/>
					<div id={styles.topBarText}>
						<h2>{contact?.name}</h2>
						<p>{contact?.online ? 'Online' : 'Offline'}</p>
					</div>
					<button>
						<img src={chatOptionsSvg} alt='Chat Settings'/>
					</button>
				</div>
				<div id={styles.messages}>
					{messages && messages.map((message, i) => (
						<MessageElement message={message} index={i} key={i}/>
					))}
				</div>
				<div id={styles.inputMessage}>
					{!sentMessagesToday || sentMessagesToday < 20 ?
						<textarea placeholder='Reply...' onKeyPress={(e) => {
							if(e.which !== 13 || e.shiftKey) return;
							e.preventDefault();
							if (e.target.value.trim() === '') {
								return;
							}
							e.preventDefault();
							if (messages) setMessages([...messages, {sender: userData.id, text: e.target.value, date: new Date().toISOString()}]);
							else setMessages([{sender: userData.id, text: e.target.value, date: new Date().toISOString()}]);
							setSentMessagesToday(sentMessagesToday + 1);
							e.target.value = '';
						}}/>
						:
						<p>Sorry! You can only send 20 messages a day try our premium plan</p>
					}
				</div>
			</div>
		</div>
	)
}

export default Messages;
const URL = process && process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '';
const BackendURL = process && process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : '';

export {
	URL,
	BackendURL,
};
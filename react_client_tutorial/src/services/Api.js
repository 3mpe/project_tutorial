import axios from 'axios'

const baseURL = 'http://localhost:5001/api/'

const Client = axios.create({
	baseURL,
	headers: {
		'Cache-Control': 'no-cache'
	},
	timeout: 10000
})


// Client.addAsyncRequestTransform(request => async () => {
// 	const token = sessionStorage.getItem("@client-app-token")
// 	if (token !== null) request.headers.Authorization = `bearer ${token}`;
// 	return request;
// });

const responseHandler = res => {
	// if (!res.ok) return Promise.reject(res.data);

	return Promise.resolve(res.data);
};

class Api {
	get(...args) {
		return Client.get(...args).then(responseHandler);
	}

	post(...args) {
		return Client.post(...args).then(responseHandler);
	}

	put(...args) {
		return Client.put(...args).then(responseHandler);
	}

	patch(...args) {
		return Client.patch(...args).then(responseHandler);
	}

	delete(...args) {
		return Client.delete(...args).then(responseHandler);
	}
}

export default new Api();
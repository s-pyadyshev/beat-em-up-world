// const hostURL = process.env.HOST_URL;
const apiURL = process.env.API_URL;

function getQueryString(params) {
	const esc = encodeURIComponent;
	return Object.keys(params)
		.map(k => `${esc(k)}=${esc(params[k])}`)
		.join('&');
}

function handleResponse(response) {
	return response.json().then(json => {
		// console.log({ json });
		if (response.ok) {
			return json;
		} else {
			return Promise.reject(
				Object.assign({}, json, {
					status: json.status,
					statusText: json.message
				})
			);
		}
	});
}

function catchError(obj) {
	console.log('catchError', obj);
}

function request(params) {
	const method = params.method || 'GET';
	const isFormData = params.type === 'form-data';
	let qs = '';
	let body;
	const defaultHeaders = {
		Accept: 'application/json'
	};
	const userHeaders = params.headers || {};
	const headers = {
		...defaultHeaders,
		...userHeaders
	};
	if (!isFormData) {
		headers['Content-Type'] = 'application/json';
	}
	const data = {
		// lang: isomorphicCookies().get('locale'),
		// city_id: isomorphicCookies().get('city_id') || 1,
		...params.data
	};


	const url = params.apiUrl ? params.apiUrl : apiURL + params.url + qs;

	// console.log({ url });

	return fetch(url, { method, headers, body }).then(handleResponse);
}

export const get = params => request(Object.assign({ method: 'GET' }, params));
export const post = params =>
	request(Object.assign({ method: 'POST' }, params));
// export const put = params => request(Object.assign({ method: 'PUT' }, params));
// export const del = params => request(Object.assign({ method: 'DELETE' }, params));
// export const patch = params => request(Object.assign({ method: 'PATCH' }, params));

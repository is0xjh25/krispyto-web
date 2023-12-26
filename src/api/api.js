const BASE_URL = process.env.REACT_APP_API_URL;

// check crypto exists
function findCrypto(name) {
	const url = `${BASE_URL}/search?name=${name}`;
	const info = {
		method: 'GET',
		headers: {'Content-Type': 'application/json'},
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
    .catch((error) => {
      console.log(error);
    });
	});
};

// check crypto exists
function getCrypto(req) {
	const url = `${BASE_URL}/?name=${name}`;
	const info = {
		method: 'GET',
		headers: {'Content-Type': 'application/json'},
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
    .catch((error) => {
      console.log(error);
    });
	});
};


export {
	findCrypto,
  GetCrypto
};
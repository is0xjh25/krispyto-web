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

// get crypto data
function getCrypto(req) {
  const url = `${BASE_URL}/dashboard?id=${req.id}&date=${req.date}&order_by=${req.orderBy}&order_type=${req.orderType}`;
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
  getCrypto
};
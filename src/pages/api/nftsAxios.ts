// example with axios api

import axios from 'axios'

const chains = 'ethereum'

const getRequest = async wallet_addresses => {
	const url = `https://api.simplehash.com/api/v0/nfts/owners?chains=${chains}&wallet_addresses=${wallet_addresses}`

	// use get request with url and api key
	const response = await axios.get(url, {
		//  "headers" refers to the additional information that is sent along with the request or response.
		headers: {
			// api key
			'X-API-KEY': process.env.SIMPLEHASH_API_KEY,
			//   indicate that the client expects to receive a JSON response from the
			accept: 'application/json',
		},
	})
	// wait for the response
	const data = await response.data
	// return the response
	return data
}
// responsible for using the getRequest() function to fetch data and send it back as a JSON response
export default async function handler(req, res) {
	// get the address from the request query
	const { address } = req.query

	const result = await getRequest(address)
	console.log(result)
	//  res.status(200) sets the HTTP response status code to 200, which indicates a successful response
	// .json(result.nfts) serializes the result.nfts data as JSON and sends it as the response body.
	res.status(200).json(result.nfts)
}

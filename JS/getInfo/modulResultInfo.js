import * as queries from "./queries.js";

// Fetch for user info.
async function userInfo() {
	const JWTtoken = JSON.parse(sessionStorage.getItem("JWT"))["value"];
	const query = queries.userInfoQuery;

	try {
		const userInfo = await fetch("https://01.kood.tech/api/graphql-engine/v1/graphql", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + JWTtoken,
			},
			body: JSON.stringify({ query }),
		});

		const jsonData = await userInfo.json();
		const userData = jsonData.data.user[0];

		return userData;
	} catch (error) {
		console.log(error);
	}
}
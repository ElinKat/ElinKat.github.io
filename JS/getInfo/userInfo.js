export const fetchUserData = async () => {
  // Your query to fetch user information, audit ratio, and XP details
// Query for name, audit ratio and numbers, xp.
const userDataQuery = `
    query user {
        user {
            id
            login
            firstName
            lastName
            totalUp
            totalDown
            auditRatio
            xps {
                amount
                __typename
                path
            }
        }
    }
`;


	const token = JSON.parse(sessionStorage.getItem("JWT"))["value"];
	const query = userInfoQuery;

	try {
		const info = await fetch("https://01.kood.tech/api/graphql-engine/v1/graphql", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({ query }),
		});

		const data = await info.json();
		const userData = data.data.user[0];

    console.log(userData);
		return userData;
	} catch (error) {
		console.log(error);
	}
}


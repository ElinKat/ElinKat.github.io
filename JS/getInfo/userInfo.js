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

// Fetch for user info.
	const JWTtoken = JSON.parse(sessionStorage.getItem("JWT"))["value"];
	const userQuery = userDataQuery;

	try {
		const userInfo = await fetch("https://01.kood.tech/api/graphql-engine/v1/graphql", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + JWTtoken,
			},
			body: JSON.stringify({ userQuery }),
		});

		const jsonData = await userInfo.json();
		const userData = jsonData.data.user[0];

    console.log(userData);
		return userData;
	} catch (error) {
    console.error('Error fetching user data:', error);
	}
}

export {fetchUserData}

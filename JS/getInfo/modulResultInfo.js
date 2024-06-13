const passFailQuery = `
  query progress {
    progress {
      createdAt
      grade
      path
    }
  }
`;

async function passFailInfo() {
	const token = JSON.parse(sessionStorage.getItem("JWT"))["value"];
	const query = queries.passFailQuery;

	try {
		const info = await fetch("https://01.kood.tech/api/graphql-engine/v1/graphql", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({ query }),
		});

		const data = await info.json();
		console.log(data);
		const passFailData = data.data.progress;

		return passFailData;
	} catch (error) {
		console.log(error);
	}
}

export {passFailInfo}
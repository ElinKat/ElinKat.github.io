const xpQuery = `
  query transaction($order_by: [transaction_order_by!], $where: transaction_bool_exp) {
    transaction(order_by: $order_by, where: $where) {
      type
      amount
      objectId
      userId
      createdAt
      path
      object {
        attrs
      }
    }
  }
`;
const xpVariables = {
	order_by: { createdAt: "asc" },
	where: {
		type: {
			_eq: "xp",
		},
		object: {
			attrs: {
				_has_key: "displayedName",
			},
		},
		path: {
			_nregex: "/.+piscine.+/",
		},
	},
};

// Fetch for graph info.
async function graphInfo() {
	const token = JSON.parse(sessionStorage.getItem("JWT"))["value"];

	try {
		const info = await fetch("https://01.kood.tech/api/graphql-engine/v1/graphql", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({
				query: queries.xpQuery,
				variables: queries.xpVariables,
			}),
		});

		const data = await info.json();
		console.log(data);

    console.log(data.data.transaction);
		return data.data.transaction;
	} catch (error) {
		console.log(error);
	}
}

export {graphInfo}
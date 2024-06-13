const lvQuery = `
  query transaction($order_by: [transaction_order_by!], $where: transaction_bool_exp) {
    transaction(order_by: $order_by, where: $where) {
      type
      amount
      createdAt
      path
    }
  }
`;
const lvVariables = {
	order_by: {
		amount: "desc",
	},
	where: {
		type: {
			_eq: "level",
		},
	},
};

async function lvInfo() {
	const token = JSON.parse(sessionStorage.getItem("JWT"))["value"];

	try {
		const info = await fetch("https://01.kood.tech/api/graphql-engine/v1/graphql", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({
				query: queries.lvQuery,
				variables: queries.lvVariables,
			}),
		});

		const data = await info.json();
		const lvData = data.data.transaction;

    console.log(lvData);
		return lvData;
	} catch (error) {
		console.log(error);
	}
}

// export {lvInfo}
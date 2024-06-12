// Query for name, audit ratio and numbers, xp.
const userInfoQuery = `
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

const passFailQuery = `
  query progress {
    progress {
      createdAt
      grade
      path
    }
  }
`;

export { userInfoQuery, xpQuery, xpVariables, lvQuery, lvVariables, passFailQuery };




// Query to fetch user information including ID, login, name, audit stats, and XP details.
const getUserInfoQuery = `
    query getUser {
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

// Query to fetch XP transactions with specific filtering and ordering criteria.
const getXPQuery = `
  query getTransaction($order_by: [transaction_order_by!], $where: transaction_bool_exp) {
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

// Variables for the XP query to define ordering and filtering rules.
const xpQueryVariables = {
  order_by: { createdAt: "asc" }, // Order by creation date in ascending order
  where: {
    type: {
      _eq: "xp", // Filter for transactions of type 'xp'
    },
    object: {
      attrs: {
        _has_key: "displayedName", // Ensure the object has a 'displayedName' attribute
      },
    },
    path: {
      _nregex: "/.+piscine.+/", // Exclude paths matching the regex for piscine
    },
  },
};

// Query to fetch level transactions with specific filtering and ordering criteria.
const getLevelQuery = `
  query getTransaction($order_by: [transaction_order_by!], $where: transaction_bool_exp) {
    transaction(order_by: $order_by, where: $where) {
      type
      amount
      createdAt
      path
    }
  }
`;

// Variables for the level query to define ordering and filtering rules.
const lvQueryVariables = {
  order_by: {
    amount: "desc", // Order by amount in descending order
  },
  where: {
    type: {
      _eq: "level", // Filter for transactions of type 'level'
    },
  },
};

// Query to fetch progress data including creation date, grade, and path.
const getPassFailQuery = `
  query getProgress {
    progress {
      createdAt
      grade
      path
    }
  }
`;

export {
  getUserInfoQuery,
  getXPQuery,
  xpQueryVariables,
  getLevelQuery,
  lvQueryVariables,
  getPassFailQuery,
};

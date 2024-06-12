export const fetchData = async () => {
  // Your query to fetch user information, audit ratio, and XP details
  const userInfoQuery = `
    query {
        user {
            id
        }
    }
  `;

  try {
    const response = await fetch('https://01.kood.tech/api/graphql-engine/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: userInfoQuery }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
    } else {
      console.log('Fetched User Info:', data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

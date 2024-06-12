// userInfo.js

export const fetchData = async () => {
  const query = `
    query {
      user {
        id
        login
        firstName
        lastName
      }
    }
  `;

  try {
    const response = await fetch('https://01.kood.tech/api/graphql-engine/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const identification = `
    query user {
        user {
            id
            login
            firstName
            lastName
            auditRatio
            totalUp
            totalDown
            attrs
          
            audits (order_by: {createdAt: asc}) {
              grade
             group {
              path
            }
         
          }
        }
    }
`;

export async function fetchUser(jwt) {
    const token = JSON.parse(localStorage.getItem('jwtToken'), jwt);

    try {
        const info = await fetch('https://01.kood.tech/api/graphql-engine/v1/graphql', {
            method: "POST",
            headers: {

                Authorization: "Bearer " + token,
            },
            body: JSON.stringify({ query: identification }),
        });

        const data = await info.json();
        const userData = data.data.user[0] || null;
        return userData;
    } catch (error) {
        console.log(error);
    }
}

//UserInfo
export async function displayUserInfo() {
    const clickableContainer = document.getElementById('clickable-container');
    if (!clickableContainer) {
        console.error('Element with id "clickable-container" not found');
        return;
    }

    clickableContainer.addEventListener('click', async function (event) {
        event.preventDefault();
        clickableContainer.classList.toggle('rotated');

        try {
            const info = await fetchUser();
            if (info) {
                const user = info.login;
                const attrs = typeof info.attrs === 'string' ? JSON.parse(info.attrs) : info.attrs;
                const tel = attrs.tel;
                const email = attrs.email;
                const country = attrs.country;
                const city = attrs.addressCity;


                const userInfoContainer = document.getElementById('user-info');
                if (userInfoContainer) {
                    userInfoContainer.innerHTML = `
                        <p><strong>User:</strong> ${user}</p>
                              <p><strong>Tel:</strong> ${tel}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Country:</strong> ${country}</p>
                        <p><strong>City:</strong> ${city}</p>
                    `;
                }
            } else {
                console.error("Error: No user information found.");
            }
        } catch (error) {
            console.error("Error in displayUserInfo function:", error);
        }
    });
}
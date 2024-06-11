// import { logout as performLogout } from "./JS/logout.js";
import { login } from "./JS/login.js";

export function loginHandler() {
	const loginButton = document.getElementById("login");
	console.log("here1");
	loginButton.addEventListener("click", () => login());
	console.log("here2");

	window.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			login();
		}
	});
}

// export function logoutHandler() {
// 	const logoutButton = document.getElementById("logout");
// 	logoutButton.addEventListener("click", () => performLogout());
// }

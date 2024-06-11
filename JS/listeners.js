import { logout as performLogout } from "./JS/logout.js";
import { login as performLogin } from "./JS/login.js";

export function loginHandler() {
	const loginButton = document.getElementById("login");
	loginButton.addEventListener("click", () => performLogin());
	window.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			performLogin();
		}
	});
}

export function logoutHandler() {
	const logoutButton = document.getElementById("logout");
	logoutButton.addEventListener("click", () => performLogout());
}

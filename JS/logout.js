import { endSession } from "./JS/session.js";

export function logout() {
	endSession();
	window.location.href = "index.html";
}
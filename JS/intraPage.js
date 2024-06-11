import { sessionExpirationCheck } from "./JS/session.js";
import { logoutHandler } from "./JS/listeners.js";


// Base func for the profile page.
export async function profilePage() {
	sessionExpirationCheck("intraPage");
	logoutHandler();
}
import { sessionExpirationCheck } from "./session.js";
import { logoutHandler } from "./listeners.js";


// Base func for the profile page.
export async function profilePage() {
	sessionExpirationCheck("intraPage");
	logoutHandler();
}
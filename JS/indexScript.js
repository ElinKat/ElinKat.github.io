import { sessionTokenCheck, sessionExpirationCheck } from "./JS/session.js";
import { login } from "./JS/login.js";
import { addListeners } from "./JS/listeners.js";

sessionTokenCheck();
addListeners();
// sessionExpirationCheck();
login();

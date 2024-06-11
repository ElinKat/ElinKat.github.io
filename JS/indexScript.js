import { sessionTokenCheck, sessionExpirationCheck } from "./JS/session.js";
import { login } from "./JS/login.js";
import { loginHandler } from "./JS/listeners.js";

sessionTokenCheck();
loginHandler();
sessionExpirationCheck();
login();

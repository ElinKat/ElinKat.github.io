import { sessionExpirationCheck } from "./session.js";
import { logoutHandler } from "./listeners.js";
import { fetchData } from './getInfo/userInfo.js';



//SIIN V}IKS ERALDI T}STA FUNKTSIOONID

// Main function for the profile page
export async function userData() {


	// Check if the session has expired
	sessionExpirationCheck("intraPage");
	
	// Set up the logout button handler
	logoutHandler();
	
	// Fetch and process user data
	await fetchData();

	
  // Fetch the necessary data from the GraphQL API.
  // const uInfo = await fetching.userInfo();
  // const lInfo = await fetching.lvInfo();
  // const gInfo = await fetching.graphInfo();
  // const pfInfo = await fetching.passFailInfo();

  // Necessary variables for displaying data.
  // const { div01XP, piscineGO, piscineJS } = getXP(uInfo.xps);
  // const { goExercises, jsExercises } = getPassFail(pfInfo);

  // // Display the data received.
  // placeName(`${uInfo.firstName} "${uInfo.login}" ${uInfo.lastName}`);
  // placeAudit(uInfo.auditRatio, uInfo.totalUp, uInfo.totalDown);
  // placeLv(getLv(lInfo));
  // placeXP(div01XP, piscineGO, piscineJS);
  // placeAuditPie(uInfo.auditRatio, uInfo.totalUp, uInfo.totalDown);
  // //placePassFailRatio(goExercises, jsExercises);
  // placeFailCharts(goExercises, jsExercises);
  // placeProgress(gInfo, div01XP);
}

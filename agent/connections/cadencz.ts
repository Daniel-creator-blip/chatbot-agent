import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.cadencz.com/mcp",
  description: "Plan, write, and schedule social media posts with your approval.",
  auth: connect("api.cadencz.com/" + process.env.VERCEL_PROJECT_ID),
});

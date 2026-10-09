import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.firmledger.co.ke/mcp",
  description: "Search verified company records, profiles, relationships, news, and jobs.",
  auth: connect("mcp.firmledger.co.ke/" + process.env.VERCEL_PROJECT_ID),
});

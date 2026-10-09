import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.candid.org/mcp",
  description: "Research nonprofits and funders.",
  auth: connect("mcp.candid.org/" + process.env.VERCEL_PROJECT_ID),
});

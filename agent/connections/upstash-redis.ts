import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.upstash.com/mcp",
  description: "Manage and debug your Redis, QStash, Vector, and Search data.",
  auth: connect("mcp.upstash.com/" + process.env.VERCEL_PROJECT_ID),
});

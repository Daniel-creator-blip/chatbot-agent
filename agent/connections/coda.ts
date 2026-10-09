import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://coda.io/apis/mcp",
  description: "Create, search, and update docs and tables.",
  auth: connect("coda.io/" + process.env.VERCEL_PROJECT_ID),
});

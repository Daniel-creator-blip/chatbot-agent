import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.survicate.com/",
  description: "Run multichannel customer feedback surveys and analyze responses.",
  auth: connect("mcp.survicate.com/" + process.env.VERCEL_PROJECT_ID),
});

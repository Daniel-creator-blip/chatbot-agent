import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.postfa.st/mcp",
  description: "Schedule social media posts and answer comments from one inbox.",
  auth: connect("mcp.postfa.st/" + process.env.VERCEL_PROJECT_ID),
});

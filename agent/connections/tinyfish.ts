import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://agent.tinyfish.ai/mcp",
  description: "Search the web, read pages, and run browser sessions.",
  auth: connect("agent.tinyfish.ai/" + process.env.VERCEL_PROJECT_ID),
});

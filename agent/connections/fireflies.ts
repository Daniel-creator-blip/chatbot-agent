import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.fireflies.ai/mcp",
  description: "Search meeting notes and transcripts.",
  auth: connect("api.fireflies.ai/" + process.env.VERCEL_PROJECT_ID),
});

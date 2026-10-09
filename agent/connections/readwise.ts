import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp2.readwise.io/mcp",
  description: "Search saved highlights and documents.",
  auth: connect("mcp2.readwise.io/" + process.env.VERCEL_PROJECT_ID),
});

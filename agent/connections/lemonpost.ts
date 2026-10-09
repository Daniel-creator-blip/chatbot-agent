import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://app.lemonpost.co/mcp",
  description: "Write, schedule, and publish social media posts.",
  auth: connect("app.lemonpost.co/" + process.env.VERCEL_PROJECT_ID),
});

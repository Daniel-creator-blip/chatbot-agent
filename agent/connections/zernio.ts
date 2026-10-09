import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.zernio.com/mcp",
  description: "Publish, schedule, and measure social posts across 16 platforms.",
  auth: connect("mcp.zernio.com/" + process.env.VERCEL_PROJECT_ID),
});

import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.pagerduty.com/mcp",
  description: "Manage incidents, services, and on-call schedules.",
  auth: connect("pagerduty/chatbot-pagerduty"),
});

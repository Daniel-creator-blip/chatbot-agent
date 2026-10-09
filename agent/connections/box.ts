import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.box.com",
  description: "Search, edit, and analyze Box content.",
  auth: connect("box/chatbot-box"),
});

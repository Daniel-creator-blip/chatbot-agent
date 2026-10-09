import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.lotsofsounds.com",
  description: "Search, stream, and download royalty-free sound effects.",
  auth: connect("lots-of-sounds/chatbot-lots-of-sounds"),
});

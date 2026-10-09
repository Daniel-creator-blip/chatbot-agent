import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://unfetch.com/api/mcp",
  description: "Query marketing data from Google Ads, Meta Ads, Analytics, and Search Console.",
  auth: connect("unfetch.com/" + process.env.VERCEL_PROJECT_ID),
});

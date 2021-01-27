const jwt = require("jsonwebtoken");
const APP_SECRET = "GraphQL-is-aw3some";

function getTokenPayload(token) {
  console.log("cat");
  return jwt.verify(token, APP_SECRET);
}

function getUserId(req, authToken) {
  console.log(authToken, "niko", req.headers.authorization);
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      if (!token) {
        console.log("hello");
        throw new Error("No token found");
      }

      const { userId } = getTokenPayload(token);
      console.log(token, "iguana", userId);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    console.log(userId);
    console.log("here at utilis!");
    return userId;
  }

  throw new Error("Not authenticated");
}

module.exports = {
  APP_SECRET,
  getUserId,
};

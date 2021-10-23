/**********************************************************************
 * Authors:       Hyun
 * File name:     index.js
 * Date Created:  Oct 23, 2021
 * Modifications:
 *
 * Overview:
 *    Initialize the back end REST API server and end poitns using
 *    controller.js
 * 
 * Commands:
 *    Run - node index.js
 * 
***********************************************************************/

// constants
const HTTP = require("http");
const CONTROLLER = require("./controller");
const PORT = process.env.PORT || 5000;

// init server
const server = HTTP.createServer(async (req, res) => {
  /********************************************************************
   * Purpose:         Handle default route
   * Precondition:    N/A
   * Postcondition:   200 with welcome text
  *********************************************************************/
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hi, welcome to Estack Test API");
    res.end();
  }

  /********************************************************************
   * Purpose:         Handle getData()
   * Precondition:    GET request at /api/data
   * Postcondition:   200 with all data
  *********************************************************************/
  else if (req.url === "/api/data" && req.method === "GET") {
    try {
      const data = await new CONTROLLER().getAllData();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    }
    catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        message: "Error found at index js -> GET /api/data: " + error
      }));
    }
  }

  /********************************************************************
   * Purpose:         Handle getData(id)
   * Precondition:    GET request at /api/data/id
   * Postcondition:   1. 200 with the request data
   *                  2. 404 with an error message
  *********************************************************************/
  else if (req.url.match(/\/api\/data\/([0-9]+)/) && req.method === "GET") {
    try {
      const id = req.url.split("/")[3];
      const data = await new CONTROLLER().getData(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    }
    catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        message: "Error found at index js -> GET /api/data/id: " + error
      }));
    }
  }

  /********************************************************************
   * Purpose:         Handle route not found
   * Precondition:    N/A
   * Postcondition:   promise with resolve data
  *********************************************************************/
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// debug
server.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
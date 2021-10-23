/**********************************************************************
 * Authors:       Hyun
 * File name:     controller.js
 * Date Created:  Oct 23, 2021
 * Modifications:
 *
 * Overview:
 *    A controller class manages the back end REST API functionality
 *    and logic for each routes
 * 
***********************************************************************/

// constants
const testdata = require("./testdata");

class Controller {
  /********************************************************************
   * Purpose:         Get all test data in the temporary testdata.js
   *                  file
   * Precondition:    Access the API with GET request at /api/data
   * Postcondition:   Promise with resolve data
  *********************************************************************/
  async getAllData() {
    return new Promise((resolve, _) => resolve(testdata));
  }

  /********************************************************************
   * Purpose:         Get a single test data in the temporary testdata
   *                  js file
   * Precondition:    Access the API with GET request at /api/data/id
   * Postcondition:   1. Resolve with the data item
   *                  2. Reject with the given id
  *********************************************************************/
  async getData(id) {
    return new Promise((resolve, reject) => {
      let item = testdata.find((item) => item.id === parseInt(id));
      if (item) {
        resolve(item);
      }
      else {
        reject("Data with id " + id + " not found.");
      }
    });
  }
}

module.exports = Controller;
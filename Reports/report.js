const newman = require("newman");

newman.run(
  {
    collection:"https://api.postman.com/collections/29168455-46147633-b39d-4eb4-983a-bf5771b25663?access_key=PMAT-01H8VB3J5ZT9SZ9S9486D5WD1P",
     // pointing to local JSON file.

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", 
        // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);

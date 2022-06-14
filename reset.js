const fs = require("fs");
if (fs.existsSync("./dist/team.html")) {
  fs.unlink("./dist/team.html", (err) => {
    if (err) throw err;
    console.log("./dist/team.html was deleted");
  });
}

// npm run reset deletes team.html in dist

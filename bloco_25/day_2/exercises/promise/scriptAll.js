const fs = require("fs").promises;

function all() {
  const words = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  Promise.all([
    fs.writeFile("./file1.txt", words[0]),
    fs.writeFile("./file2.txt", words[1]),
    fs.writeFile("./file3.txt", words[2]),
    fs.writeFile("./file4.txt", words[3]),
    fs.writeFile("./file5.txt", words[4]),
  ]).then(() => console.log("files successfully created"));
}
all();

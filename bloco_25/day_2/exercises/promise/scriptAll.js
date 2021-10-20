const fs = require("fs").promises;

function all() {
  const words = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  Promise.all(
    words.map((word, i) => fs.writeFile(`./file${i + 1}.txt`, word))
  ).then(() => console.log("files successfully created"));
}
all();

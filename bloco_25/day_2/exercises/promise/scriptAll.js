const fs = require("fs").promises;

function all() {
  const words = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  Promise.all(words.map((word, i) => fs.writeFile(`./file${i + 1}.txt`, word)))
    .then(() => console.log("files successfully created"))
    .then(async () => {
      try {
        const files = await fs.readdir("./");
        const filtered = files.filter((f) => /file\d.txt$/gm.test(f));
        const filesText = await Promise.all(
          filtered.map((file) => fs.readFile(file, "utf-8"))
        );
        fs.writeFile("./fileAll.txt", filesText.join(" "));
      } catch (e) {
        console.log(e.message);
      }
    });
}
all();

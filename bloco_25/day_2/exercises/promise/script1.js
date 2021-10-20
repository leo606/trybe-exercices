function idk(p1, p2, p3) {
  return new Promise((resolve, reject) => {
    if (
      typeof p1 !== "number" ||
      typeof p2 !== "number" ||
      typeof p3 !== "number"
    ) {
      reject(new Error("Informe apenas números"));
    }

    const calc = (p1 + p2) * p3;

    if (calc < 5000) return reject(new Error("Valor muito baixo"));

    resolve(`${calc} calc resolve`);
  });
}

function randomN() {
  return Math.floor(Math.random() * 100 + 1);
}

async function main() {
  try {
    console.log(await idk(randomN(), randomN(), randomN()));
  } catch (e) {
    console.log(e.message);
  }
}

main();

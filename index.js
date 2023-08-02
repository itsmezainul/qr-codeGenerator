import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter URL address:",
      name: "URL",
    },
  ])
  .then((ans) => {
    const answer = ans.URL;
    const qr_png = qr.image(answer, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr-img.png"));
    fs.writeFile("./url.txt", answer, (err) => {
      if (err) throw err;
      console.log("file has been saved");
    });
  });

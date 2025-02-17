import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    let qrImg = qr.image(url);
    qrImg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("URL saved to URL.txt");
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

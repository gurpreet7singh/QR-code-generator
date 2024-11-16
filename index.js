// please run "npm i inquirer qr-image" inside of your terminal before running this code, and insure to add "type":"module" inside your package.json if it is not already addded.
import inquirer from 'inquirer';;
import qr from 'qr-image'
import fs from 'fs'

inquirer
  .prompt([{
    message:"Please enter your link",
    name:"URL"
  }
  ])
  .then((answers) => {
    const url=answers.URL
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('ur.png'));
    fs.writeFile("msg.txt","Program has generated a qr code of "+url, (err)=>{if(err) throw err;
        console.log("prcess sucessful")
    })

  })
  .catch((error) => {
    if (error.isTtyError) {

    }
    else {
      
    }
  });
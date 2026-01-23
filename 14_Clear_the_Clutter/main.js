const fs = require('fs');
const path = require('path');


fs.readdir("clutterdFiles", (err, files) => {
    if (err) {

        console.log("error", err);
        return;
    }

    files.forEach((file) => {

        const oldPath = path.join("clutterdFiles", file);
        const extn = path.extname(file);

        if (extn == ".pdf") {
            //if specific files of pdf not pre made then:
            // 1st we check is it available or not:
            if (!fs.existsSync('pdfFiles')) {
                //if not available then create it.
                fs.mkdirSync('pdfFiles')
            };
            const newPath = path.join("pdfFiles", file);
            fs.renameSync(oldPath, newPath);
        };

        if (extn == ".png") {
            //if specific files of png not pre made then:
            // 1st we check is it available or not:
            if (!fs.existsSync('pngFiles')) {
                //if not available then create it.
                fs.mkdirSync('pngFiles')
            };
            const newPath = path.join("pngFiles", file);
            fs.renameSync(oldPath, newPath);
        }

        if (extn == ".jpg") {
            //if specific files of jpg not pre made then:
            // 1st we check is it available or not:
            if (!fs.existsSync('jpgFiles')) {
                //if not available then create it.
                fs.mkdirSync('jpgFiles')
            };
            const newPath = path.join("jpgFiles", file);
            fs.renameSync(oldPath, newPath);
        }
    });
});
const fs = require('fs');
const path = require('path');


fs.readdir("clutterdFiles", (err, files) => {
    if (err) {

        console.log("error", err);
        return;
    }
    // console.log(files);

    files.forEach((file) => {

        // console.log(path.extname(file));
        const oldPath = path.join("clutterdFiles", file);
        const extn = path.extname(file);

        if (extn == ".pdf") {
            const newPath = path.join("pdfFiles", file);
            fs.renameSync(oldPath, newPath);
        }

        if (extn == ".png") {
            const newPath = path.join("pngFiles", file);
            fs.renameSync(oldPath, newPath);
        }

        if (extn == ".jpg") {
            const newPath = path.join("jpgFiles", file);
            fs.renameSync(oldPath, newPath);
        }
    });
});

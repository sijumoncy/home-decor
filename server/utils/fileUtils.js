const path = require("path");
const fs = require("fs");

async function deleteFile(filePath, fileName) {
  const existFile = await fs.existsSync(path.join(filePath, fileName));
  if (existFile) {
    await fs.unlink(path.join(filePath, fileName), (err) => {
      if (err) {
        console.log("deleted Error ", err);
        return false;
      }
      return true;
    });
  }
}

async function renameFile(filePath, oldFileName, newFileName) {
  const existNewFile = await fs.existsSync(path.join(filePath, oldFileName));
  if (existNewFile) {
    //rename the new upload with old name
    await fs.rename(
      path.join(filePath, newFileName),
      path.join(filePath, oldFileName),
			(err) => {
				if (err) {
					console.log("rename updated file failed", err);
					return false;
				}
				else {
					console.log("rename updated file success");
					return true
				}
      },
    );
  }
}

module.exports = {
  deleteFile,
	renameFile
};

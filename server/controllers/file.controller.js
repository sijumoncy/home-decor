const fs = require("fs");
const path = require("path");
const mimeTypes = require('mime-types');

async function getProductImage(req, res) {
  try {
    const filename = req.params.filename;
    const imagePathFull = path.join(process.cwd(), "uploads", filename);

    if (fs.existsSync(imagePathFull)) {
      const imageStream = fs.createReadStream(imagePathFull);
      const contentType = mimeTypes.lookup(imagePathFull) || 'application/octet-stream'
      res.setHeader("Content-Type", contentType);
      res.setHeader("Content-Disposition", "inline; filename=" + filename);

      imageStream.pipe(res);
      return
    } else {
      return res.status(404).json({ message: "Image not found" });

    }
  } catch (err) {
    console.error("get image error : ", err);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "error", error: err });
  }
}

module.exports = {
  getProductImage,
};

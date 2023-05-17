const { successCode, errorCode, failCode } = require("../Utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const uploadImage = async (req, res) => {
    try {
      let { ten_hinh, mo_ta, nguoi_dung_id } = req.body;
      let file = req.file;
      let urlImage = "/public/imgs/" + file.filename;
  
      let data = { ten_hinh, mo_ta, nguoi_dung_id:Number(nguoi_dung_id),duong_dan:urlImage  };
  
      await prisma.hinh_anh.create({
        data
      });
  
      successCode(res, "Upload Success", data);
    } catch (err) {
      console.log(err)
      errorCode(res, "Lỗi BE");
    }
  };

module.exports = {
    uploadImage
}
const { successCode, errorCode, failCode } = require("../Utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const editProfile = async (req, res) => {
    try {
      let { ho_ten, tuoi } = req.body;
      let { id } = req.params;
      let file = req.file
      let urlImage = "/public/img/" + file.filename
  
      let data = { ho_ten, tuoi:Number(tuoi),anh_dai_dien:urlImage };
      await prisma.nguoi_dung.update({
        data,
        where: {
          nguoi_dung_id: Number(id),
        },
      });
      successCode(res, "Edit Success", "");
    } catch (err) {
      console.log(err)
      errorCode(res, "Lỗi BE");
    }
  };

  module.exports = {
    editProfile
  }
const { successCode, errorCode, failCode } = require("../Utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getImage = async (req, res) => {
  try {
    let data = await prisma.hinh_anh.findMany({});
    successCode(res, "Get Success!", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

const getImageSearch = async (req, res) => {
  try {
    let { keyword } = req.params;

    let data = await prisma.hinh_anh.findMany({
      where: {
        ten_hinh: {
          contains: `${keyword}`,
        },
      },
    });

    successCode(res, "Get success!", data);
  } catch (err) {
    console.log(err);
    errorCode(res, "Lỗi BE");
  }
};

  module.exports = {
    getImage,
    getImageSearch
  }
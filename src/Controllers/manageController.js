const { successCode, errorCode, failCode } = require("../Utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getInfoUser = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.nguoi_dung.findFirst({
      where: {
        nguoi_dung_id: Number(id),
      },
    });
    successCode(res, "Get Success", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

const getImgSaved = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.luu_anh.findMany({
      where: {
        nguoi_dung_id: Number(id),
      },
    });
    successCode(res, "Get Success", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

const getImgCreated = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.hinh_anh.findMany({
      where: {
        nguoi_dung_id: Number(id),
      },
    });
    successCode(res, "Get Success", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

const deleteImg = async (req, res) => {
  try {
    let { id } = req.params;

    await prisma.hinh_anh.delete({
      where: {
        hinh_id: Number(id),
      },
    });
    successCode(res, "Delete Success", "");
  } catch (err) {
    errorCode(res, "Không có ảnh");
  }
};

module.exports = {
  getInfoUser,
  getImgCreated,
  getImgSaved,
  deleteImg,
};

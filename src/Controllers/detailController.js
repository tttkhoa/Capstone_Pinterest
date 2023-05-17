const { successCode, errorCode, failCode } = require("../Utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getInfoImage = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.hinh_anh.findFirst({
      where: {
        hinh_id: Number(id),
      },

      include: {
        nguoi_dung: true,
      },
    });
    successCode(res, "Get success!", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

const postComment = async (req, res) => {
  try {
    let { nguoi_dung_id, noi_dung, hinh_id } = req.body;

    let data = { nguoi_dung_id, noi_dung, hinh_id };

    await prisma.binh_luan.create({ data });

    successCode(res, "Post Success!", data);
  } catch (err) {
    console.log(err)
    errorCode(res, "Lỗi BE");
  }
};

const getComment = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.binh_luan.findMany({
      where: {
        hinh_id: Number(id),
      },
    });

    successCode(res, "Get Success!", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

const saveImage = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_id } = req.body;

    let data = { nguoi_dung_id, hinh_id };

    await prisma.luu_anh.create({ data });

    successCode(res, "Save Success!", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

const isImgSaved = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_id } = req.query;

    let data = await prisma.luu_anh.findMany({
      where: {
        nguoi_dung_id: Number(nguoi_dung_id),
        hinh_id: Number(hinh_id),
      },
    });

    successCode(res, "Get Success!", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

module.exports = {
    getInfoImage,
    postComment,
    getComment,
    saveImage,
    isImgSaved
};

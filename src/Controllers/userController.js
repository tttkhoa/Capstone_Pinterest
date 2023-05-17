const { successCode, errorCode, failCode } = require("../Utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const { generateToken } = require("../Utils/jwt");

const signUpUser = async (req, res) => {
  try {
    let { email, mat_khau, ho_ten, tuoi } = req.body;

    let data = {
      email,
      ho_ten,
      tuoi,
      mat_khau: bcrypt.hashSync(mat_khau, 10),
    };

    let checkEmail = await prisma.nguoi_dung.findFirst({
      where: {
        email,
      },
    });

    if (checkEmail) {
      failCode(res, "Email đã tồn tại", "");
      return;
    }

    await prisma.nguoi_dung.create({ data });
    successCode(res, "Sign up Success!", data);
  } catch (err) {
    errorCode(res, "Lỗi BE");
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, mat_khau } = req.body;

    let checkUser = await prisma.nguoi_dung.findFirst({
      where: {
        email,
      },
    });

    if (checkUser) {
      let checkPass = bcrypt.compareSync(mat_khau, checkUser.mat_khau);
      if (checkPass == true) {
        let token = generateToken(checkUser);
        successCode(res, "Login Success!", token);
      } else {
        failCode(res, "Password not found", "");
      }
    } else {
      failCode(res, "Email not found", "");
    }
  } catch (err) {
    errorCode(res, "Lỗi BE");
  }
};

module.exports = {
  signUpUser,
  loginUser,
};

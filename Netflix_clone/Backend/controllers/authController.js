import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

//register user
export const regUser = async (req, res) => {
  const { username, email } = req.body;
  const user = await User.findOne({ email });
  let newUser;
  try {
    user
      ? res.status(401).json("User Exists!")
      : (newUser = await User.create({
          username,
          email,
          password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
          ).toString(),
        }));
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//login user
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(401).json("Incorrect Username or Password!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) return res.status(401).json("Incorrect Username or Password");

    const accessToken = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "5d" })

    const { password, ...info } = user._doc;

    res.status(200).json({ info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};

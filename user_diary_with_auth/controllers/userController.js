import { User } from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(401).json(err);
  }
};

export const addUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.json("All fields are Required!");
    }
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.json("User Exist!");
    } else {
      const salt = await bcrypt.genSalt(16);
      const hashPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        username,
        email,
        password: hashPassword,
      });

      res.status(200).json({ user, accessToken: accessToken(user._id) });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.json("All fields are Required!");
    }
    const user = await User.findOne({ email });
    const matchPassword = await bcrypt.compare(password, user.password);

    if (user && matchPassword) {
      const { password, ...others } = user._doc;
      res.status(200).json({ others, accessToken: accessToken(user._id) });
    } else {
      res.json("Incorrect email or password!");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const { id: _id } = req.params;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await User.findByIdAndUpdate(
      { _id },
      {
        username,
        email,
        password: hashedPassword,
      },
      { new: true }
    );
    console.log(updatedUser);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
    throw err;
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("user deleted");
  } catch (err) {
    res.status(401).json(err);
  }
};

// jwt accessToken
const accessToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "2d" });
};

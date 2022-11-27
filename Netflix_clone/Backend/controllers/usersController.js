import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

//update
export const updateUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { $new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } else {
    res.status(403).json("You are not allowed to update this user");
  }
};

//delete
export const deleteUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to delete this user");
  }
};

//get
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all users
export const getAllUser = async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err); 
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
  }
};

// get user stat
export const totalUser = async (req, res) => {
  const today = new Date();
  const lastYear = today.getFullYear(today.getFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

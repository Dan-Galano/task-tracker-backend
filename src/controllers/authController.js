import { Auth } from "../models/authModel.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);
};

export const login = async (req, res) => {
  return res.status(200).json({ message: "wala pang login" });
};

export const getUsers = async (req, res) => {
  try {
    const users = await Auth.getUsers();
    console.log({ message: "Users fetched successfully" });
    return res.status(200).json({ success: true, users});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch users" });
  }
};

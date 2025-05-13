import mongoose from "mongoose";
import db from "../db/connect.js";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const Auth = {
  signup: async (user) => {},

  // Try lang
  getUsers: async (req, res) => {
    let collection = db.collection("Users");
    let users = await collection.find({}).toArray();    
    console.log(users);
    
    return users;
  },
};

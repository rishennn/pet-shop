import Users from "../models/Users";
import path from "path";
import fs from "fs";
import bcrypt from "bcrypt";

const userList = [];

class UsersController {
  static register = (req, res, next) => {
    try {
      const { username, dogname, mail, password, passwordRetype } = req.body;
      if (password === passwordRetype) {
        const file = path.join(__dirname, "../data", mail + ".json");
        if (fs.existsSync(file)) {
          res.status(422);
          console.log("The email has already been taken");
          return;
        }
        Users.create({ username, dogname, mail, password });
      } else {
        res.status(444);
        console.log("Password mismatch");
        return;
      }
    } catch (e) {
      next(e);
    }
  };
  static login = async (req, res, next) => {
    try {
      const { mail, password } = req.body;
      const file = path.join(__dirname, "../data", mail + ".json");

      if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file), "utf-8");
        const match = await bcrypt.compare(password, data.password);
        if (match) {
          console.log("You are logged in");
          userList.push(data);
          res.redirect("/users");
        } else {
          console.log("The entered password is incorrect");
        }
      } else {
        console.log("This email address does not exist");
      }
    } catch (e) {
      next(e);
    }
  };
  static users = async (req, res, next) => {
    res.json({ data: userList });
  };
}

export default UsersController;

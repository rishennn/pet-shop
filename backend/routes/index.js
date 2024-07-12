import { Router } from "express";
import UsersController from '../controllers/UsersControllers';
const router = Router();


/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({});
});
// router.post("/authLog", (req, res, next) => {
//   try {
//     const x = req.body;
//     console.log("Login...",x);
//   } catch (e) {
//     next(e);
//   }
// });
// router.post("/authReg", (req, res, next) => {
//   try {
//     const x = req.body;
//     console.log("Register...",x);
//   } catch (e) {
//     next(e);
//   }
// });

router.post('/authReg', UsersController.register);

router.post('/authLog', UsersController.login)

router.get('/users', UsersController.users)

export default router;

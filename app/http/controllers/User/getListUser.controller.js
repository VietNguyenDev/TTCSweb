import { GetUserService } from "../../services/user.service.js";

const getListUserController = async (req, res) => {
  const user = await GetUserService();
  if (user) {
    res.status(200).json(user);
  }
};

export default getListUserController;

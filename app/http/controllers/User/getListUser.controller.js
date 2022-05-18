import { GetUserService } from "../../services/user.service.js";

const getListUserController = async (req, res) => {
    const user = await GetUserService();
    try {
      if (user.length > 0) {
        res.status(200).json(user);
      } 
    }     
      catch(err) {
        res.status(500).send({ message : "Lỗi hệ thống"});
      }
    
}

export default getListUserController;

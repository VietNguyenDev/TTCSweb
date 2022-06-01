import { UpdateUserService } from "../../services/user.service.js";

const updateUserController = async (req,res) => {
    const {username,password} = req.body;
    const {message} = await UpdateUserService({ 
        username, 
        password
    });

    return res.status(200).send({message});
}

export default updateUserController;
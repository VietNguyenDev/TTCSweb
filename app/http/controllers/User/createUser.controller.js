import { CreateUserService } from "../../services/user.service.js";

const createUserController = async (req, res) => {
    const {username,password, created_at, modified_at} = req.body;
    const {message} = await CreateUserService({username,password, created_at, modified_at});
    return res.status(201).send(message);

}

export default createUserController;
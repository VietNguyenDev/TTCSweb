import {CreateUser} from "./services/user.service.js";

const createUserController = async (req, res) => {
    const {id, username,password, first_name, last_name, telephone, created_at, modified_at} = req.body;
    const {message} = await CreateUser({id, username,password, first_name, last_name, telephone, created_at, modified_at});
    return res.status(201).send(message);

}

export default createUserController;
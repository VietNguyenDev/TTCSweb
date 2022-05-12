import {UpdateUser} from "./services/user.service.js";

const updateUserController = async (req,res) => {
    const {id} = req.params;
    const {username,password, first_name, last_name, telephone, created_at, modified_at} = req.body;
    const {message} = await UpdateUser({
        id, 
        username, 
        password,
        first_name,
        last_name,
        telephone,
        created_at,
        modified_at
    });

    return res.status(200).send({message});
}

export default updateUserController;
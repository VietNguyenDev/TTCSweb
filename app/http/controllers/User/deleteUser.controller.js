import { DeleteUserService } from  "../../services/user.service.js";
 
async function DeleteUserController(req, res) {
    const {id} = req.params;
    await DeleteUserService({id});
    return res.status(200).send({message: "User deleted successfully"});
}

export default DeleteUserController;
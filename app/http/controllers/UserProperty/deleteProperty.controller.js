import { deleteUserPropertyService } from "../../services/userproperty.service.js";

export async function deleteUserPropertyController(req, res) {
    const {user_id} = req.params;
    await deleteUserPropertyService({user_id: user_id});
    return res.status(200).send({message: "User property deleted successfully"});
}

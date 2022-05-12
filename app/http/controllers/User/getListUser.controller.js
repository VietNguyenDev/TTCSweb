import {GetUser} from "../../service/user.service.js";

const getListUserController = async (req, res) => {
    const user = await GetUser();
    if (user.length > 0) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User is empty"})
    }
}

export default getListUserController;

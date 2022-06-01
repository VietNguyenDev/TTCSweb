import { updateUserPropertyService } from "../../services/userproperty.service.js";

export async function updateUserPropertyController(req, res) {
    const {first_name, last_name, address_line1, address_line2, postal_code, country, telephone, mobile, discount_id} = req.body;
    const {message} = await updateUserPropertyService({
        first_name,
        last_name,
        address_line1,
        address_line2,
        postal_code,
        country,
        telephone,
        mobile,
        discount_id
    })
}
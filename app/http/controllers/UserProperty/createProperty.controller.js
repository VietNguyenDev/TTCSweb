import { createUserPropertyService } from "../../services/userproperty.service.js";

export async function createUserPropertyController(req, res) {
    const {
        first_name,
        last_name,
        address_line1,
        address_line2,
        postal_code,
        country,
        telephone,
        mobile,
        discount_id
    } = req.body;
    const { message } = await createUserPropertyService({
        first_name,
        last_name,
        address_line1,
        address_line2,
        postal_code,
        country,
        telephone,
        mobile,
        discount_id
    });
    return res.status(201).send(message);
}
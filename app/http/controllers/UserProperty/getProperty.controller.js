import { getListUserPropertyService } from "../../services/userProperty.service.js";

export async function getListUserPropertyController(req, res) {
  const userProperty = await getListUserPropertyService();
  if (userProperty) {
    res.status(200).json(userProperty);
  }
}
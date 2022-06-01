import  UserPropertyModel  from "../models/userProperty.model.js";

export async function getListUserPropertyService() {
    const userProperties = await UserPropertyModel.query().select();
    return userProperties;
}

export async function createUserPropertyService(first_name, last_name, address_line1, address_line2, postal_code, country, telephone, mobile, discount_id ){
    try {
        const userProperty = await UserPropertyModel.query().findOne({ user_id});
        if (!userProperty) return abort(400, "User not found");
        await UserPropertyModel.query().insert({
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

        return { message: "User property created successfully" };
    } catch (error) {
        return abort(400, error);
    }
}

export async function deleteUserPropertyService(user_id) {
    const userProperty = await UserPropertyModel.query().findById(user_id);
    if (!userProperty) return abort(404, "User property not found");
    await UserPropertyModel.query().deleteById(id);
    return { message: "User property deleted successfully" };
}

export async function updateUserPropertyService(first_name, last_name, address_line1, address_line2, postal_code, country, telephone, mobile, discount_id) {
    const userProperty = await UserPropertyModel.query().findIf({ user_id });
    if (!userProperty) return abort(404, "User property not found");
    await UserPropertyModel.query().patchAndFetchById(id, {
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
    return { message: "User property updated successfully" };
}
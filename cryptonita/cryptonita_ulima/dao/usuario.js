import db from "../sequelize/models"

const getUsuarioByEmail = async (email) => {
    return await db.Usuario.findOne({
        where : {
            email : email
        },
        raw : true
    })
}

const getAdminByEmail = async (email) => {
    return await db.Admin.findOne({
        where : {
            email : email
        },
        raw : true
    })
}

export { getUsuarioByEmail, getAdminByEmail }
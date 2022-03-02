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

const getUsuario = async (id) => {
    return await db.Usuario.findOne({
        where : {
            id : id
        }
    })
}

const getUsuarioEmail = async (email) => {
    return await db.Usuario.findOne({
        where : {
            email : email
        },
    })
}

const getUsuarios = async () => {
    return await db.Usuario.findAll({
        
    })
}

const setUsuario = async (usuario) => {
    
}

export { getUsuarioByEmail, getAdminByEmail, getUsuario, getUsuarios, getUsuarioEmail }
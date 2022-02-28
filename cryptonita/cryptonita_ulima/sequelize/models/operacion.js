'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Operacion.belongsTo(models.Usuario, {
        foreignKey : "idUsuario"
      });
    }
  };
  Operacion.init({
    tipoCambio: DataTypes.FLOAT,          //
    montoBtc: DataTypes.FLOAT,            //
    tipoOperacion: DataTypes.STRING,      //
    estado: DataTypes.STRING,             //
    billeteraBtc: DataTypes.STRING,       //
    cuentaBancaria: DataTypes.STRING,     //
    codigoTransaccion: DataTypes.STRING,  //
    idCliente: DataTypes.STRING           //
  }, {
    sequelize,
    modelName: 'Operacion',
    freezeTableName : true
  });
  return Operacion;
};
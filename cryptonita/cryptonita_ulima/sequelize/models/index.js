'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const models = process.cwd() + '/sequelize/models/' || __dirname;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

/*fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
});*/

const model = require("../models/admin")
const modelUsuario = require("../models/usuario")
const modelOperacion = require("../models/operacion")
const modelTipoCambio = require("../models/tipocambio")

db[model(sequelize, Sequelize.DataTypes).name] = model(sequelize, Sequelize.DataTypes);
db[modelUsuario(sequelize, Sequelize.DataTypes).name] = modelUsuario(sequelize, Sequelize.DataTypes);
db[modelOperacion(sequelize, Sequelize.DataTypes).name] = modelOperacion(sequelize, Sequelize.DataTypes);
db[modelTipoCambio(sequelize, Sequelize.DataTypes).name] = modelTipoCambio(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

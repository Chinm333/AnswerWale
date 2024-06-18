const { Sequelize } = require("sequelize");
const config = require("../config.js");
const { database } = config;

const sequelize = new Sequelize(database.database_name, database.user, database.password, {
    host: database.host,
    dialect: "mysql",
});

const User = require("./user.js")(sequelize);
const Question = require("./question.js")(sequelize);

User.hasMany(Question, { foreignKey: "userId" });
Question.belongsTo(User, { foreignKey: "userId" });

const db = {
    sequelize,
    User,
    Question,
};

// export { sequelize, User, Question };
module.exports = db;
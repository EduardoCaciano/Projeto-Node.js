const { Model, DataTypes } = require("sequelize");


class Post extends Model {
    static init(connection) {
        super.init({
            title: DataTypes.STRING,
            descripition: DataTypes.STRING,
            image: DataTypes.STRING,
            gist: DataTypes.STRING
        },
            {
                connection
            }
        )
    }
    static assoate(crteate) {

    }
}
module.exports = Post;


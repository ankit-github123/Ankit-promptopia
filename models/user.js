import { Schema,model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required'],
    },
    name: {
        type: String,
        required: [true, 'Username is required'],
    },
    image: {
        type: String,
    }
});

const  User  = models.User || model("User", UserSchema) // If the model "User" is already present in the models dont create new model instance

export default User;
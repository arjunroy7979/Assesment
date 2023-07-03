import mongoose from 'mongoose';

export default async function ConnectionDB() {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.kxfrlrn.mongodb.net/Employee')
        .then((res) => console.log("Database connected"))
        .catch((err) => console.log(err))
}

//schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    std: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipcode: {
        type: Number,
        required: true,
    }
});

//model 
const UserModel = new mongoose.model('users', userSchema)

export { UserModel }

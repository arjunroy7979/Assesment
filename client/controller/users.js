import { UserModel } from '../database/mongodb.js';

export const getUsers = async (req, res) => {
    try {
        const allUser = await UserModel.find({});
        res.send(allUser);
    } catch (error) {
        console.log(error)
    }
};

export const createUser = (req, res) => {
    const { firstName, lastName, email, std, phone, address1, address2, country, state, city, zipcode } = req.body
    UserModel.findOne({ email: email }, (user) => {
        if (user) {
            res.send("User allready registered ")
        } else {
            const user = new UserModel({
                firstName, lastName, email, std, phone, address1, address2, country, state, city, zipcode
            });
            user.save((err) => {
                if (err) {
                    res.send("Something wents wrong")
                } else {
                    res.send("Successfully Registered")
                }
            })
        }
    })

};

export const getUser = async (req, res) => {
    try {
        const singleUser = await UserModel.find({ _id: req.params.id });
        res.send(singleUser);
    } catch (error) {
        console.log(error)
    }
};

export const deleteUser = async (req, res) => {
    try {
        await UserModel.deleteOne({ _id: req.params.id });
        res.send("User Deleted Sucessfully");
    } catch (error) {
        console.log(error)
    }
};

export const updateUser = async (req, res) => {
    const user = await UserModel.updateOne({ _id: req.params.id }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            std: req.body.std,
            phone: req.body.phone,
            address1: req.body.address1,
            address2: req.body.address2,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            zipcode: req.body.zipcode,
        }
    });
    console.log(user)
    res.send('User Updated Sucessfully');
};
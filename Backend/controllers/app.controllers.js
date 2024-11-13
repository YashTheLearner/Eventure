import userModel from "../models/app.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import dotenv from "dotenv"
dotenv.config();

const createToken = (userId) => {
    // Optionally extend the expiration to match the cookie's expiration (e.g., 1 year)
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Or '1y' for longer expiry
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input fields
        if (!email || !password) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        // Check if user exists in the database
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // Compare provided password with hashed password in DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        console.log("token", token)

        // Send response with success
        return res.status(200).json({
          message: "Login successful",
          success: true,
          token,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};



//register user
const registerUser = async (req,res) => {
    const {name, email, password,username } = req.body;
    try{
        //check if user already exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.status(400).json({message: "User already exists"})
        }
        const existsUsername = await userModel.findOne({username});
        if(existsUsername){
            return res.status(400).json({message: "Username already exists"})
        }
        if (validator.isEmpty(name) || validator.isEmpty(email) || validator.isEmpty(password)) {
            return res.status(400).json({message: "Please enter all fields"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message: "Please enter a valid email"})
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({message: "Please enter a strong password"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({name, email, password: hashedPassword , username})
        const user = await newUser.save()
        const token = createToken(user._id)
        console.log("user created successfully")
        res.status(200).json(
            {
                message:"user created successfully"
            }


        )
        

    } catch(error){
        res.status(500).json({message: error.message})
    }
}

//get user info
const getUser = async (req,res) => {
    console.log(req);
    const id = req.user.id
    try{
        const user = await userModel.find({_id:id})
        res.status(200).json({user: user[0]})
    } catch(error){
        res.status(502).json({message: error.message})
    }
}
export {loginUser, registerUser, getUser}
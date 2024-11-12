import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/app.routes.js';
import cors from "cors"
import eventRouter from './routes/event.routes.js';
import cookieParser from 'cookie-parser';



dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB using async/await
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            
        });
        console.log('DB Connected');
    } catch (err) {
        console.error('Error connecting to DB:', err);
        process.exit(1); // Exit process with failure
    }
};

const app = express();

app.use(cookieParser());
app.use(express.json())
app.use(cors({ origin: `${process.env.FRONTEND_URL}`, // Replace with your frontend URL
    credentials: true // Allow credentials to be sent
    }));


app.use("/api/user", userRouter);
app.use("/api/event", eventRouter);
const port = process.env.PORT || 3000;
app.listen(port, () =>{ console.log(`Listening on localhost:${port}`)
          
})

connectDB();
import mongoose from 'mongoose';
import config from '../config.js';

export default async function connectToDB() {
    try {
        await mongoose.connect(config.MONGO_DB_URI);
        console.log('Conectado a MongoDB Atlas');
    } catch (err) {
        console.error('Error al conectar a MongoDB Atlas:', err);
    }
}
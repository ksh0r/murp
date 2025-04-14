import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

const Log = mongoose.model('Log', logSchema);
export default Log;

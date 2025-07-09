import mongoose, {Schema, model,models} from 'mongoose';

export interface IUser{
    email: string,
    password: string,
    _id?: mongoose.Types.ObjectId
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps:true});

export const User = models.User || model<IUser>('User', userSchema);
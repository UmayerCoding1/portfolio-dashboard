import mongoose, {Schema, model,models} from 'mongoose';

export interface IAbout {
    title: string;
    description: string;
    image: string;
    fullname: string;
    education: string;
    email: string;
    location: string;
    _id?: mongoose.Types.ObjectId;
}

const aboutSchema = new Schema<IAbout>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
},{timestamps:true});

export const About = models.About || model<IAbout>('About', aboutSchema);
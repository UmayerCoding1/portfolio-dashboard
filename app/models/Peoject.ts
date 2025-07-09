import mongoose, {Schema, model,models} from 'mongoose';

export interface IProject{
    title: string,
    description: string,
    thumbnail: string,
    links: string[],
    tachnologies: string[],
    _id?: mongoose.Types.ObjectId
}

const projectSchema = new Schema<IProject>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    links: {
        type: [String],
        required: true
    },
    tachnologies: {
        type: [String],
        required: true
    }
},{timestamps:true});

export const Project = models.Project || model<IProject>('Project', projectSchema);
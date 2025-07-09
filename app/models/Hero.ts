import mongoose, {Schema, model,models} from 'mongoose';

export interface IHero{
    image: string;
    _id?:mongoose.Types.ObjectId
}

const heroSchema = new Schema<IHero>({
    image: {
        type: String,
        required: true
    }
},{timestamps:true});

export const Hero = models.Hero || model<IHero>('Hero', heroSchema);
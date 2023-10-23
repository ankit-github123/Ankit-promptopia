import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database";
export const GET = async (req,{params}) => {
    // console.log('----------------\n', params, )
    try {
        await connectToDB();
        const data =await Prompt.find({creator: params.id}).populate('creator');
        console.log('--------------------------------', data)
                return new Response(JSON.stringify(data), {status: 200})
    } catch (err) {
        return new Response(JSON.stringify({msg: err.message}), {status: 500})
    }
}
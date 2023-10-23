import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req,res) => {
    const {prompt, userId, tag} = await req.json();
    try {
        await connectToDB();
        Prompt.create({
            creator: userId,
            prompt,
            tag
        })
        return new Response(JSON.stringify({msg: 'added to db'}), {status: 201})
    } catch (err) {
        console.log(err);
        return new Response(JSON.stringify({msg: err}),{status: 500})
    }
}
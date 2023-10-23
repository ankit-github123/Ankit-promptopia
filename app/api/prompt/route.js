import Prompt from "@models/prompt"
export const GET = async (req, ) => {
    try {
    const res = await Prompt.find({}).populate('creator');
    return new Response(JSON.stringify(res),{status:200})
    } catch (e) {
        return new Response("No Data", {status: 500})
    }
}
import Feed from "@components/feed/index"

const Home = () => {
    return (
        <div>
            <div className='w-full flex flex-col items-center'>
                <h1 className='head_text text-center'>Discover & Share <span className='orange_gradient text-center'>AI-Powered Prompts</span></h1>
                <div className='desc text-center'>
                    Promptopia is ann open-source AI prompting tool for modern world to discover, create and share creative prompts.
                </div>
                <Feed />
            </div>
        </div>
    )
}

export default Home

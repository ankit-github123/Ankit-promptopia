import Nav from "@components/nav/index"
import Provider from "@components/Provider";

import '@styles/global.css';

export const metadata = {
    title: 'Ankit Promptopia',
    description: 'Ankit new project'
}

const Rootlayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient'></div>
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default Rootlayout

"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
const Nav = () => {

    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const initializeProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        initializeProviders()
    }, [])
    const isUserLoggedIn = false;
    console.log(session, providers, 'session1')
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href={'/'} className="flex gap-2 flex-center">
                <Image src={'/assets/images/logo.svg'} width={30} height={30} className="object-contain" />
                <p> Promptopia</p>
            </Link>
            <div className="flex">
                {/* {alert(session?.user)} */}
                {session?.user ? <div className="flex gap-3">
                    <Link href={'/create-prompt'} className="black_btn">Create Post</Link>
                    <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
                    <Link href={'/profile'}><Image src={session.user.image} width={37} height={37} className="rounded-full" /></Link>
                </div> : <div>
                    {providers && Object.values(providers).map((provider) => {
                        return <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">SignIn</button>
                    })}
                </div>}
            </div>
        </nav>
    )
}

export default Nav;

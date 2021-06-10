import Head from 'next/head'

const Header = () => {
    return (
        <>
            <Head>
                <title>CitizenLab Project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <img src="citizenlab.png" />
            </nav>
        </>
    )
}

export default Header
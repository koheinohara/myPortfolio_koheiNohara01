import Head from "next/head";

function Layout() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <headerc>
                <img src="/images/profile.jpeg"></img>
                <h1>koheiNohara</h1>
            </headerc>
        </div>
    );
}

export default Layout;
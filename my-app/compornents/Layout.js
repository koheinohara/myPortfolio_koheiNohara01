import Head from "next/head";
const name = "koheiNohara"
export const siteTitle = "Next.js Blog"

function Layout() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <headerc>
                <img src="/images/profile.jpeg"></img>
                <h1>{name}</h1>
            </headerc>
        </div>
    );
}

export default Layout;
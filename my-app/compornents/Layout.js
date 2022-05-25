import Head from "next/head";
import styles from "./layout.module.css"

const name = "koheiNohara"
export const siteTitle = "Next.js Blog"

function Layout( {children} ) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <headerc className={styles.header}>
                <img src="/images/profile.jpeg"></img>
                <h1>{name}</h1>
            </headerc>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
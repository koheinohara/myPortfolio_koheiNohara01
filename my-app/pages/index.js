import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/* Layoutコンポーネント追加 */
import Layout from '../compornents/Layout'

/* Linkコンポーネント追加 */
import Link from "next/link"

export default function Home() {
  return (
    <Layout></Layout> 
  );
}

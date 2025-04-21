import { Hero } from "@/sections";
import Head from "next/head";
import { companyName } from "@/components/utils/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{companyName}</title>
      </Head>
      <Hero />
    </>
  )
}

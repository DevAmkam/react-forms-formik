import Head from "next/head";

import Header from "../components/Header";
import YoutubeForm from '../forms/YoutubeForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container mx-auto my-8 bg-white p-6 h-screen border">
        <h1 className="text-green-600 text-3xl text-center">Formik Form</h1>
        <YoutubeForm />
      </div>
    </div>
  );
}

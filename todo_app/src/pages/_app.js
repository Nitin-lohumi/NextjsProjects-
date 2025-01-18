import "@/styles/globals.css";
import  Head from 'next/head'
export default function App({ Component, pageProps }) {
  return<>
  <Head>
    <title>todo App nextjs</title>
  </Head>
    <div className="bg-black text-white">
    <h1 className="text-2xl text-center p-2"> To-do App</h1>
    </div>
  <Component {...pageProps} />
  </> 
}

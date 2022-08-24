// POINT <head>内への挿入方法と<script>タグの挿入方法
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

export default function Page() {
  const [load, setLoad] = useState(false);

  const setLoadLoder = () => { setLoad(true) };
  return (
    <>
      <Head>
        <title>ページタイトル</title>
        <meta property="og:title" content="pegetitle" />
      </Head>
      <Script strategy="lazyOnload" src='/jquery-3.2.1.min.js' onLoad={setLoadLoder} />

      {load ? <h3>jquery load comp</h3> : ''}
      <h3>jquery : {load ? 'true' : 'false'}</h3>
    </>
  )
};

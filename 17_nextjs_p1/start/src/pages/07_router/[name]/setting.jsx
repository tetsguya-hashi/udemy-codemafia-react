import { useRouter } from 'next/router';

export default function Setting({ query }) {
  const router = useRouter();
  console.log(router.query);
  const clickHandler = () => {
    router.back()
  }
  return (
    <>
      <h1>routerから取得{router.query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  )
};

export async function getServerSideProps(context) {
  const { query } = context;
  return {
    props: { query }
  }
}

// http://localhost:3000/07router/hello/setting?key=val&key2=val2
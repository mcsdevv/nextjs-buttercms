import { useEffect, useState } from 'react';
import Head from 'next/head';
import Butter from 'buttercms';
import ReactHtmlParser from 'react-html-parser';

const butter = Butter(process.env.API_TOKEN);

function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const { data } = await butter.post.list({ page: 1, page_size: 10 });
      const allPosts = data.data;
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);
  return (
    <>
      <Head>
        <title>Next.js + ButterCMS</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {posts.length > 0 ? (
        posts.map(p => ReactHtmlParser(p.body))
      ) : (
        <h1>Loading ButterCMS Content...</h1>
      )}
    </>
  );
}

export default HomePage;

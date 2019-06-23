import { useEffect, useState } from 'react';
import Head from 'next/head';
import Post from '../components/post';

function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const res = await fetch(
        `https://api.buttercms.com/v2/content/?keys=posts&auth_token=${
          process.env.API_TOKEN
        }`
      );
      const { data } = await res.json();
      const allPosts = data.posts;
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
      <header>
        <div>
          <img src="/icons/next.svg" />
          <img src="/icons/buttercms.svg" />
        </div>
        <h1>Next.js + ButterCMS</h1>
      </header>
      <hr />
      {posts.length > 0
        ? posts.map(p => (
            <Post
              alt={p.alt}
              date={p.date}
              key={p.title}
              image={p.image}
              title={p.title}
              url={p.url}
            />
          ))
        : null}
      <style jsx>{`
        header {
          height: 9.5em;
          margin-top: 3em;
        }
        img {
          margin-right: 8px;
        }
        hr {
          margin 48px 0;
        }
        @media screen and (max-width: 360px) {
          header {
            height: 6em;
          }
          h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}

export default HomePage;

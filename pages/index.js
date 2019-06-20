// import { useEffect, useState } from 'react';
import Head from 'next/head';
import Butter from 'buttercms';

const butter = Butter(process.env.API_TOKEN);

function HomePage() {
  butter.post.list({ page: 1, page_size: 10 }).then(function(response) {
    console.log(response);
  });
  // async function fetchContentTypes() {
  //   const types = await client.getContentTypes();
  //   if (types.items) return types.items;
  //   console.log('Error getting Content Types.');
  // }
  // async function fetchEntriesForContentType(contentType) {
  //   const entries = await client.getEntries({
  //     content_type: contentType.sys.id
  //   });
  //   if (entries.items) return entries.items;
  //   console.log(`Error getting Entries for ${contentType.name}.`);
  // }
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   async function getPosts() {
  //     const contentTypes = await fetchContentTypes();
  //     const allPosts = await fetchEntriesForContentType(contentTypes[0]);
  //     setPosts([...allPosts]);
  //   }
  //   getPosts();
  // }, []);
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
      <h1>hi</h1>
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

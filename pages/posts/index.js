// SSG
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=20"
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" />
      <ol type="4" className="list-decimal ml-10">
        {posts &&
          posts.map(({ id, title }) => (
            <li className="hover:text-blue-900 mb-2" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ol>
    </>
  );
};

export default Posts;

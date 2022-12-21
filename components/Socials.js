import Head from "next/head";

const Socials = ({ socials }) => {
  if (!socials) {
    return null;
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
        />
      </Head>
      <ul className="flex m-0 p-0 list-none">
        {socials &&
          socials.map(({ id, icon, path }) => (
            <li className="ml-3 mr-3" key={id}>
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10"
              >
                <i className={`fab fa-${icon}`} aria-hidden="true" />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Socials;

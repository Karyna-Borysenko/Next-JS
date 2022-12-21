import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const NavBar = () => {
  const { pathname } = useRouter();
  return (
    <nav className="w-full h-full flex items-center justify-between ">
      <div>
        <Image src="/logo.png" width="70" height="70" alt="logo" />
      </div>
      <div className="h-full">
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? "link text-blue-600" : "link"}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

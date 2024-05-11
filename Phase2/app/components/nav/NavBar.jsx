import Link from "next/link";
// import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-black text-white flex items-center h-16 px-4">
      <Link href="/">
        <span className="font-bold text-xl">Makeup</span>
      </Link>
      <div className="flex justify-center flex-grow ">
        <ul className="flex space-x-6">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/cart">
              <span className="hover:purple relative">
                Cart
                {/* <FaShoppingCart className="ml-9 text-lg" /> */}
                <span className="absolute top-1 right-0 h-5 w-4 bg-red-600 text-white rounded-full text-sm">
                  0
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex ">
      <div>Hello eja</div>
      <Link
        className="h-16 px-5 p-6 ml-7 font-semibold rounded-md bg-black text-white"
        href={"/product"}
      >
        PRODUCT
      </Link>
    </div>
  );
}

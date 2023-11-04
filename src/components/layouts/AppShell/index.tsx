import { useRouter } from "next/router";
import Navbar from "../Navbar";
import { Roboto } from "next/font/google";

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={roboto.className}>
      {disableNavbar.includes(pathname) ? null : <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;

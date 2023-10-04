import Image from "next/image";
import Link from "next/link";

import Logo from "./helpdesk-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="helpdesk logo" width={70} height={70} quality={100} placeholder="blur" />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

import Link from "next/link";
import Header from "../Components/Header/Header";
export default () => (
  <div>
    <Header />
    <Link href="/symba">
      <a>Symba</a>
    </Link>
  </div>
);

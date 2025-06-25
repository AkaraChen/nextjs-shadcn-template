import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/">
        <h1 className="text-xl font-bold">next-app</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#">Menu Item 1</Link>
          </li>
          <li>
            <Link href="#">Menu Item 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

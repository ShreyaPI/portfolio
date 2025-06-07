import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/#about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/#education" className="hover:text-blue-500">
              Education
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#DomainDesc" className="hover:text-blue-500">
              Domain Description
            </Link>
          </li>
          <li>
            <Link href="/case-studies" className="hover:text-blue-500">
              Case Studies
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 
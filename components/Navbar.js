import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-gray-800">
          My Portfolio
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/#about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-gray-800 hover:text-blue-500">
              Education
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-gray-800 hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#DomainDesc" className="text-gray-800 hover:text-blue-500">
              Domain Description
            </Link>
          </li>
          <li>
            <Link href="/case-studies" className="text-gray-800 hover:text-blue-500">
              Case Studies
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 
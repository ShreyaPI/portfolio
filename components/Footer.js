import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <a href="mailto:shreyai1724@gmail.com" className="hover:text-blue-500 transition-colors">
                  shreyai1724@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              Exploring the intricacies of software engineering and system design through detailed case studies and analysis.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '@/data/nav';

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-900 p-4">
      <div className="text-2xl font-bold text-white mb-8">Ghost Sentinel</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`block py-2 px-4 rounded ${pathname === item.href ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
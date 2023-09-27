// Layout.tsx

import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

// Update the copy object in Layout.tsx
const copy = {
  title: "MissFix: Empowerment Through Home Maintenance",
  nav: ["Home", "Services", "Join", "Contact"],
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-yellow-100 min-h-screen p-3 sm:p-6">
      <header className="bg-white p-2 sm:p-4 rounded-lg shadow-lg flex flex-wrap justify-between items-center">
        <h1 className="text-2xl sm:text-4xl text-black font-bold w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">MissFix</h1>
        <nav className="flex space-x-2 sm:space-x-4 w-full sm:w-auto justify-around">
          {copy.nav.map(item => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <a className="text-black hover:bg-pink-100 px-2 sm:px-3 py-1 sm:py-2 rounded">{item}</a>
            </Link>
          ))}
        </nav>
      </header>

      <main className="mt-5 sm:mt-10 space-y-5 sm:space-y-10">
        {children}
      </main>
    </div>
  );
}

export default Layout;

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'Projects', id: 'projects' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

function Navbar() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wine/90 backdrop-blur-sm border-b border-ochre/20">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-sand">FH</span>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-sand/70 hover:text-ochre transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';

const Footer: React.FC<{ setView: (view: 'main' | 'blog') => void; currentView: 'main' | 'blog' }> = ({ setView, currentView }) => {
  const socialLinks = [
    { name: 'Twitter', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
    { name: 'LinkedIn', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
  ];

  const quickLinks = [
      { name: 'Ecosystem', href: '#ecosystem' },
      { name: 'Why Aivana?', href: '#why-aivana' },
      { name: 'Impact', href: '#impact' },
      { name: 'Team', href: '#team' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const scrollToTarget = () => {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerElement = document.querySelector('header');
        const headerOffset = headerElement ? headerElement.offsetHeight : 88;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    if (currentView !== 'main') {
      setView('main');
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
  };


  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white">Stay ahead with Aivana</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">Join our newsletter for updates on our products, research, and the future of healthcare AI.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md">
              <input type="email" placeholder="Enter your email" className="w-full sm:flex-grow px-4 py-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <button type="submit" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(link => (
                 <li key={link.name}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-400 hover:text-blue-400 transition-colors">
                        {link.name}
                    </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(link => (
                <a key={link.name} href="#" aria-label={link.name} className="text-slate-400 hover:text-blue-400 transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aivana Inc. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500" />
              <span className="font-semibold">DSRPT</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">We partner with ambitious teams to ship world-class products and ignite growth with creative technology.</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white">Work</a></li>
              <li><a href="#insights" className="hover:text-white">Insights</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="you@company.com" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="rounded-lg bg-white text-black px-4 py-2 text-sm font-semibold">Join</button>
            </form>
            <p className="text-xs text-gray-500 mt-2">We send monthly insights only. No spam.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DSRPT. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

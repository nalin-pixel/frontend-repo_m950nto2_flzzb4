import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white font-[Inter]">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <section id="about" className="bg-black py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
            <p className="mt-4 text-gray-400 max-w-3xl">Founded in Australia, DSRPT is a studio of engineers, designers, and strategists building the next wave of category-defining products. We combine rigorous engineering with brand clarity and modern growth to help ambitious teams move faster.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {["Mission","Vision","Team"].map((t, i) => (
                <div key={t} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                  <h3 className="text-xl font-semibold">{t}</h3>
                  <p className="mt-2 text-gray-400">We value velocity, craft, and measurable outcomes. Our team blends product thinking with creative technology to deliver outsized impact.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black to-gray-950 py-20" id="contact">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Let’s build what’s next</h2>
              <p className="mt-3 text-gray-400 max-w-xl">Tell us about your product, timeline, and goals. We’ll get back to you within 24 hours.</p>
              <div className="mt-8 aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="Map"
                  className="w-full h-full"
                  src="https://www.google.com/maps?q=Sydney%2C%20Australia&output=embed"
                  loading="lazy"
                />
              </div>
            </div>
            <form className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="First name" className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input required placeholder="Last name" className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="email" required placeholder="Work email" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Company" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea rows="4" required placeholder="Project details" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="w-full rounded-lg bg-white text-black px-4 py-3 font-semibold hover:opacity-90 transition">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

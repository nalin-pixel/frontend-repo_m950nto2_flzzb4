import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            <span className="block">Disrupt. Develop. Deliver.</span>
            <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-400">Building the future of digital experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-300 max-w-xl"
          >
            We craft high-performance software, bold brands, and scalable growth systems for innovators and enterprises across Australia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow">
              Get a Quote
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur">
              See Our Work
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-xs text-gray-400">
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

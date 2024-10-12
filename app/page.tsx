/* eslint-disable prettier/prettier */
'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : ''}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold">PASCAL.</h1>
          </motion.div>
          <motion.ul
            className="flex space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="#portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
            <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
            <li><a href="#research" className="hover:text-yellow-400 transition-colors">Research</a></li>
            <li><a href="#contact" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-all">CONTACT</a></li>
          </motion.ul>
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="text-center"
            style={{ opacity: headerOpacity }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 via-yellow-300 to-yellow-400 text-transparent bg-clip-text">
              HELLO, I&apos;M PASCAL<br />AN ASPIRING<br />MECHANICAL ENGINEER
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div style={{ scale: imageScale }}>
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Pascal"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-xl mx-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-10">Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  className="bg-gray-800 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Project+${item}`}
                    alt={`Project ${item}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">Project {item}</h4>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
            <motion.a
              href="#"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Pascal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
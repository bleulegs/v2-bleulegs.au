"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileDown, Github, FileText } from "lucide-react"
import Link from "next/link"

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Innovation Project <span className="text-yellow-300">Downloads</span> 💡
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get access to our GitHub source code, presentation slides, and final report.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-white relative z-0">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200 rounded-xl shadow-md hover:shadow-lg"
            >
              <Github className="w-10 h-10 text-blue-700 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2 text-gray-900">Source Code</h2>
              <p className="text-gray-700 mb-4">Browse our complete GitHub repository with all our project code.</p>
              <a
                href="https://github.com/bleulegs/rpi5-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  View on GitHub
                </Button>
              </a>
            </motion.div>

            {/* PowerPoint */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 border border-purple-200 rounded-xl shadow-md hover:shadow-lg"
            >
              <FileDown className="w-10 h-10 text-purple-700 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2 text-gray-900">Presentation</h2>
              <p className="text-gray-700 mb-4">Download our Canva-created PowerPoint slide deck.</p>
              <a
                href="https://bit.ly/bleulegs-pptx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  Download PPTX
                </Button>
              </a>
            </motion.div>

            <div className="text-center py-10">
            <Button>
                Back to <Link href="/" className="text-blue-600 hover:underline"><ArrowLeft className="inline" /> Home</Link>
            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

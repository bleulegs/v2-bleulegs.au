"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  FileText,
  Download,
  ExternalLink,
  Camera,
  Code,
  BookOpen,
  Calendar,
  Users,
  Presentation,
} from "lucide-react"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ResourcesPage() {
  const resources = [
    {
      category: "Documentation",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          title: "Engineering Portfolio 2024",
          description: "Complete documentation of our robot design process",
          type: "PDF",
          size: "15.2 MB",
          updated: "March 2024",
        },
        {
          title: "Innovation Project Report",
          description: "Detailed research and solution development documentation",
          type: "PDF",
          size: "8.7 MB",
          updated: "February 2024",
        },
        {
          title: "Robot Design Journal",
          description: "Iterative design process and decision documentation",
          type: "PDF",
          size: "12.1 MB",
          updated: "March 2024",
        },
      ],
    },
    {
      category: "Presentations",
      icon: Presentation,
      color: "from-green-500 to-emerald-500",
      items: [
        {
          title: "Judge Presentation 2024",
          description: "Our championship presentation to competition judges",
          type: "PPTX",
          size: "45.3 MB",
          updated: "March 2024",
        },
        {
          title: "Innovation Project Pitch",
          description: "Community problem solution presentation",
          type: "PPTX",
          size: "28.9 MB",
          updated: "February 2024",
        },
        {
          title: "Robot Design Showcase",
          description: "Technical presentation of our robot's capabilities",
          type: "PPTX",
          size: "35.7 MB",
          updated: "March 2024",
        },
      ],
    },
    {
      category: "Code & Programs",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          title: "Robot Control System",
          description: "Complete Python codebase for autonomous robot control",
          type: "ZIP",
          size: "2.3 MB",
          updated: "March 2024",
        },
        {
          title: "Sensor Calibration Tools",
          description: "Utilities for sensor setup and calibration",
          type: "ZIP",
          size: "856 KB",
          updated: "February 2024",
        },
        {
          title: "Mission Programs",
          description: "Individual mission-specific programs and strategies",
          type: "ZIP",
          size: "1.8 MB",
          updated: "March 2024",
        },
      ],
    },
    {
      category: "Media Gallery",
      icon: Camera,
      color: "from-yellow-500 to-orange-500",
      items: [
        {
          title: "Competition Photos 2024",
          description: "High-resolution photos from regional championship",
          type: "ZIP",
          size: "127 MB",
          updated: "March 2024",
        },
        {
          title: "Robot Action Videos",
          description: "Videos of our robot performing competition missions",
          type: "MP4",
          size: "89.4 MB",
          updated: "March 2024",
        },
        {
          title: "Team Building Process",
          description: "Behind-the-scenes photos of robot construction",
          type: "ZIP",
          size: "76.2 MB",
          updated: "February 2024",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 rounded-full bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <Link href="/">
              <Button variant="outline" className="mb-6 border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl font-bold mb-6">
              Team <span className="text-yellow-300">Resources</span> 📚
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Access our documentation, presentations, code, and media - everything that showcases our engineering
              journey!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: FileText, label: "Documentation", count: "12", color: "from-blue-500 to-cyan-500" },
              { icon: Presentation, label: "Presentations", count: "8", color: "from-green-500 to-emerald-500" },
              { icon: Code, label: "Code Files", count: "15", color: "from-purple-500 to-pink-500" },
              { icon: Camera, label: "Media Files", count: "200+", color: "from-yellow-500 to-orange-500" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources by Category */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Resource{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Library
              </span>{" "}
              📖
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand our engineering process, innovations, and achievements!
            </p>
          </motion.div>

          <div className="space-y-16">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <motion.div
                  variants={stagger}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.items.map((item, itemIndex) => (
                    <motion.div key={itemIndex} variants={fadeIn}>
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                        <CardHeader className="pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <Badge className={`bg-gradient-to-r ${category.color} text-white border-0`}>
                              {item.type}
                            </Badge>
                            <div className="text-xs text-gray-500">{item.size}</div>
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              Updated {item.updated}
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              className={`flex-1 bg-gradient-to-r ${category.color} hover:opacity-90 text-white border-0`}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline" className="px-3">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Additional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Resources
              </span>{" "}
              🔗
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              External links and references that have helped shape our journey!
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "FIRST Official Website",
                description: "Learn more about FIRST LEGO League",
                icon: ExternalLink,
                color: "from-blue-500 to-cyan-500",
                url: "https://www.firstlegoleague.org",
              },
              {
                title: "Our GitHub Repository",
                description: "Open source code and documentation",
                icon: Code,
                color: "from-green-500 to-emerald-500",
                url: "#",
              },
              {
                title: "Competition Schedule",
                description: "Upcoming FLL tournaments and events",
                icon: Calendar,
                color: "from-purple-500 to-pink-500",
                url: "#",
              },
              {
                title: "Team Blog",
                description: "Regular updates on our progress",
                icon: BookOpen,
                color: "from-yellow-500 to-orange-500",
                url: "#",
              },
            ].map((resource, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <resource.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-center text-blue-600 group-hover:text-purple-600 transition-colors">
                      <span className="text-sm font-medium">Visit</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Need Something Specific? 📧</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Get in touch and we'll be happy to share additional resources!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Our Team
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

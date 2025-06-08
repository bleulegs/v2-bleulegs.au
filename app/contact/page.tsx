"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* LEGO Brick Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-500 via-green-500 to-red-500 text-white relative overflow-hidden">
        {/* LEGO Bricks Floating */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-12 h-8 rounded-sm shadow-lg ${
              ["bg-red-600", "bg-blue-600", "bg-yellow-600", "bg-green-600"][i % 4]
            }`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="absolute -top-1 left-1 w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="absolute -top-1 right-1 w-2 h-2 bg-white/30 rounded-full"></div>
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <Link href="/">
              <Button className="mb-6 bg-white/20 border-2 border-white text-white hover:bg-white/30 font-bold">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl font-black mb-6">
              Let's <span className="text-yellow-300">Connect!</span> 🤝
            </h1>
            <p className="text-xl font-medium opacity-90 max-w-3xl mx-auto">
              Want to collaborate, sponsor our FLL team, learn about FIRST LEGO League, or just say hi? We'd love to
              hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Get In <span className="text-red-600">Touch</span> 📧
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Multiple ways to reach our FLL team - choose what works best for you!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                info: "contact@bleulegs.au",
                description: "Best for detailed questions about our FLL journey",
                color: "bg-red-500",
                emoji: "📧",
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+ (07) 3712 6333",
                description: "Quick questions or urgent FLL collaboration",
                color: "bg-blue-500",
                emoji: "📞",
              },
              {
                icon: MapPin,
                title: "Find Us",
                info: "Calamvale Community College",
                description: "Local FLL events and community meetings",
                color: "bg-green-500",
                emoji: "📍",
              },
            ].map((contact, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                  <Card className="h-full border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white text-center">
                    <CardHeader>
                      <div className="text-4xl mb-4">{contact.emoji}</div>
                      <CardTitle className="text-xl font-black text-gray-900 mb-2">{contact.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-black text-lg text-gray-800 mb-3">{contact.info}</p>
                      <p className="text-gray-600 text-sm font-medium">{contact.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Why <span className="text-blue-600">Connect</span> With Us? 🌟
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Here are some great reasons to reach out to our FLL team!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "FLL Collaboration",
                description: "Partner with us on FIRST LEGO League projects and competitions",
                emoji: "🤝",
                color: "bg-red-500",
              },
              {
                title: "Sponsorship",
                description: "Support our team's journey in FLL competitions and community outreach",
                emoji: "💝",
                color: "bg-blue-500",
              },
              {
                title: "Learn About FLL",
                description: "Discover what FIRST LEGO League is all about from student competitors",
                emoji: "📚",
                color: "bg-green-500",
              },
              {
                title: "Community Events",
                description: "Invite us to demonstrate our LEGO robot at schools and events",
                emoji: "🎪",
                color: "bg-yellow-500",
              },
            ].map((reason, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{reason.emoji}</div>
                    <h3 className="font-black text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Before You <span className="text-green-600">Contact</span> Us 📋
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Check out these resources to learn more about our FLL team!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Meet Our Team",
                description: "Get to know the students behind the LEGO robot",
                href: "/team",
                emoji: "👥",
                color: "bg-red-500",
              },
              {
                title: "Our LEGO Robot",
                description: "See our competition robot and technical details",
                href: "/robot",
                emoji: "🤖",
                color: "bg-blue-500",
              },
              {
                title: "FLL Awards",
                description: "Check out our competition achievements and recognition",
                href: "/awards",
                emoji: "🏆",
                color: "bg-green-500",
              },
              {
                title: "Photo Gallery",
                description: "Browse photos from competitions and team activities",
                href: "/gallery",
                emoji: "📸",
                color: "bg-yellow-500",
              },
            ].map((link, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={link.href}>
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="cursor-pointer">
                    <Card className="h-full border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{link.emoji}</div>
                        <h4 className="font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 font-medium">{link.description}</p>
                        <div className="flex items-center justify-center text-red-600 group-hover:text-blue-600 transition-colors">
                          <span className="text-sm font-bold">Explore</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-6">Ready to Connect? 🚀</h2>
            <p className="text-lg font-medium opacity-90 mb-8 max-w-2xl mx-auto">
              We're excited to hear from you and share our passion for FIRST LEGO League!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Us an Email
              </Button>
              <Button className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-bold" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Meeting
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

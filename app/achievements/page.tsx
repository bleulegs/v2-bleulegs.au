"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, Star, Target, Users, Lightbulb, Cog, Calendar, MapPin, Medal } from "lucide-react"
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

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Regional Champions",
      year: "2024",
      event: "Sydney Regional Championship",
      description: "First place overall performance across all judged categories",
      category: "Championship",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      emoji: "🥇",
      details: "Scored 485 points in robot game, excelled in all judged areas",
    },
    {
      title: "Robot Performance Award",
      year: "2024",
      event: "State Competition",
      description: "Highest robot game score in the competition",
      category: "Technical Excellence",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      emoji: "🎯",
      details: "Achieved 94% mission success rate with innovative programming",
    },
    {
      title: "Innovation Project Award",
      year: "2023",
      event: "National Tournament",
      description: "Outstanding community solution for accessibility in public spaces",
      category: "Innovation",
      icon: Lightbulb,
      color: "from-green-500 to-emerald-500",
      emoji: "💡",
      details: "Developed smart navigation system for visually impaired individuals",
    },
    {
      title: "Core Values Award",
      year: "2023",
      event: "Regional Qualifier",
      description: "Exemplary demonstration of FIRST's core values",
      category: "Team Spirit",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      emoji: "❤️",
      details: "Recognized for outstanding teamwork and gracious professionalism",
    },
    {
      title: "Robot Design Award",
      year: "2023",
      event: "State Finals",
      description: "Excellence in mechanical design and engineering process",
      category: "Engineering",
      icon: Cog,
      color: "from-red-500 to-pink-500",
      emoji: "⚙️",
      details: "Innovative modular attachment system and robust construction",
    },
    {
      title: "Rising Star Team",
      year: "2022",
      event: "Rookie Season",
      description: "Outstanding performance for a first-year team",
      category: "Recognition",
      icon: Star,
      color: "from-indigo-500 to-purple-500",
      emoji: "⭐",
      details: "Exceeded expectations in debut season with creative solutions",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 rounded-full bg-white/10"
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
              Our <span className="text-yellow-300">Achievements</span> 🏆
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A showcase of our team's dedication, hard work, and success in FIRST LEGO League competitions!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Stats */}
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
              { icon: Trophy, number: "6", label: "Total Awards", color: "from-yellow-500 to-orange-500" },
              { icon: Medal, number: "3", label: "Championships", color: "from-blue-500 to-cyan-500" },
              { icon: Star, number: "12", label: "Competitions", color: "from-purple-500 to-pink-500" },
              { icon: Target, number: "485", label: "Best Score", color: "from-green-500 to-emerald-500" },
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
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Competition{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>{" "}
              🌟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each award represents countless hours of dedication, innovation, and teamwork!
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeIn}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${achievement.color}`} />

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {achievement.emoji}
                        </motion.div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2">
                            {achievement.year}
                          </Badge>
                          <div className="text-xs text-gray-500 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {achievement.event}
                          </div>
                        </div>
                      </div>

                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0 mb-3`}>
                          {achievement.category}
                        </Badge>
                        <p className="text-sm text-gray-600 leading-relaxed">{achievement.details}</p>
                      </div>

                      <div className="flex items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>
                          {achievement.event} • {achievement.year}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competition Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>{" "}
              📈
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From rookie team to regional champions - see how we've grown!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

              <div className="space-y-8">
                {[
                  {
                    year: "2022",
                    title: "Team Formation & Rookie Season",
                    description: "Four passionate students come together to form Team bleulegs",
                    achievements: ["Rising Star Team Award", "Successful rookie season debut"],
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    year: "2023",
                    title: "Growth & Recognition",
                    description: "Expanding our skills and making our mark in competitions",
                    achievements: ["Innovation Project Award", "Core Values Award", "Robot Design Award"],
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    year: "2024",
                    title: "Championship Success",
                    description: "Reaching the pinnacle of FLL competition with regional championship",
                    achievements: ["Regional Champions", "Robot Performance Award", "International qualification"],
                    color: "from-yellow-500 to-orange-500",
                  },
                ].map((period, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start space-x-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${period.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {period.year.slice(-2)}
                    </motion.div>

                    <div className="flex-1 pb-8">
                      <Card className="border-0 shadow-lg bg-white">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{period.title}</h3>
                          <p className="text-gray-600 mb-4">{period.description}</p>
                          <div className="space-y-2">
                            {period.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className={`w-2 h-2 bg-gradient-to-r ${period.color} rounded-full`} />
                                <span className="text-sm text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Inspired by Our Success? 🚀</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Learn more about our team, see our robot in action, or get in touch to collaborate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                </Button>
              </Link>
              <Link href="/robot">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <Cog className="w-5 h-5 mr-2" />
                  See Our Robot
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

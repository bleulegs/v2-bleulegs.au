"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, Star, Target, Users, Lightbulb, Cog, Calendar, MapPin, Medal } from "lucide-react"
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

export default function AwardsPage() {
  const achievements = [
    {
      title: "FLL Submerged Regionals Innovation Award",
      year: "2024",
      event: "FLL Regionals @ TAFE, Brisbane",
      description: "First place overall against all other regionals teams for our Innovation Project!",
      category: "Innovation Project",
      icon: Trophy,
      color: "bg-yellow-500",
      emoji: "🥇",
    },
    {
      title: "FLL Submerged Regionals Robot Design Award",
      year: "2024",
      event: "FLL Regionals @ TAFE, Brisbane",
      description: "First place overall against all other regionals teams for our Robot Design!",
      category: "Robot Design",
      icon: Trophy,
      color: "bg-yellow-500",
      emoji: "🥇",
    },
    {
      title: "FLL Submerged Regionals Motivation Award",
      year: "2024",
      event: "FLL Regionals @ TAFE, Brisbane",
      description: "First place overall against all other regionals teams for our innovation project!",
      category: "Innovation Project",
      icon: Trophy,
      color: "bg-yellow-500",
      emoji: "🥇",
    },
    {
      title: "FLL Submerged Nationals Innovation Award",
      year: "2024",
      event: "FLL Nationals @ Gladston, QLD",
      description: "First place overall against all other regionals teams for our Innovation Project!",
      category: "Innovation Project",
      icon: Trophy,
      color: "bg-yellow-500",
      emoji: "🥇",
    },
  ]

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
      <section className="py-16 bg-gradient-to-br from-yellow-500 via-red-500 to-blue-500 text-white relative overflow-hidden">
        {/* LEGO Bricks Floating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-12 h-8 rounded-sm shadow-lg ${
              ["bg-red-600", "bg-blue-600", "bg-yellow-600", "bg-green-600"][i % 4]
            }`}
            style={{
              left: `${10 + i * 12}%`,
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
              Our FLL <span className="text-yellow-300">Achievements</span> 🏆
            </h1>
            <p className="text-xl font-medium opacity-90 max-w-3xl mx-auto">
              A showcase of our team's dedication, hard work, and success in FIRST LEGO League competitions!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: Trophy, number: "6", label: "Total Awards", color: "bg-yellow-500", emoji: "🏆" },
              { icon: Medal, number: "3", label: "Championships", color: "bg-red-500", emoji: "🥇" },
              { icon: Star, number: "12", label: "Competitions", color: "bg-blue-500", emoji: "⭐" },
              { icon: Target, number: "485", label: "Best Score", color: "bg-green-500", emoji: "🎯" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-2">{stat.emoji}</div>
                    <div className="text-3xl font-black text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-bold text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              FLL Competition <span className="text-red-600">Awards</span> 🌟
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Each award represents countless hours of LEGO building, programming, and teamwork!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="h-full border-2 border-gray-200 hover:border-gray-400 hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-2 ${achievement.color}`} />

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className="text-4xl"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          {achievement.emoji}
                        </motion.div>
                        <div className="text-right">
                          <Badge className={`${achievement.color} text-white border-0 font-bold mb-2`}>
                            {achievement.year}
                          </Badge>
                          <div className="text-xs text-gray-500 flex items-center font-medium">
                            <MapPin className="w-3 h-3 mr-1" />
                            {achievement.event}
                          </div>
                        </div>
                      </div>

                      <CardTitle className="text-xl font-black text-gray-900 mb-2">{achievement.title}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed font-medium">
                        {achievement.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <Badge className={`${achievement.color} text-white border-0 mb-3 font-bold`}>
                          {achievement.category}
                        </Badge>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{achievement.details}</p>
                      </div>

                      <div className="flex items-center text-xs text-gray-500 pt-2 border-t border-gray-100 font-medium">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Our FLL <span className="text-blue-600">Journey</span> 📈
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              From regional champions to international robotics team representing Australia - see how we've grown in FIRST LEGO League!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-blue-500 to-green-500 rounded-full" />

              <div className="space-y-8">
                {[
                  {
                    year: "2024",
                    title: "Team created",
                    description: "8 passionate students come together to form Team bleulegs for FLL",
                    achievements: [
                      "Started preparing for regionals round of FLL Submerged",
                    ],
                    color: "bg-green-500",
                    emoji: "🚀",
                  },
                  {
                    year: "2024",
                    title: "Attended first FLL competition",
                    description: "We attended our first ever First Lego League Competition. Below are our awards:",
                    achievements: [
                      "Innovation Project Award",
                      "Robot Design Award",
                      "Motivation Award",
                    ],
                    color: "bg-orange-500",
                    emoji: "📈",
                  },
                  {
                    year: "2024",
                    title: "Qualified for Nationals",
                    description: "Our performance from the regionals round qualified us to represent QLD in the nationals tournament!",
                    achievements: [
                      "Start preparing for nationals round",
                      "Invite 2 extra team mates into the team for extra help on preparing: Linus & Charles"
                    ],
                    color: "bg-blue-500",
                    emoji: "🕹️",
                  },
                  {
                    year: "2024",
                    title: "Qualified for Internationals",
                    description: "Reaching the pinnacle of the FLL submerged competition, we managed to qualify for the International Round, representing Australia in Sydney in July!",
                    achievements: [
                      "Innovation Project Award",
                    ],
                    color: "bg-yellow-500",
                    emoji: "🏆",
                  },
                  {
                    year: "2025",
                    title: "Preparing for International Round",
                    description: "As of now, we are working hard to prepare for the Internationals round happening later this July at Macquarie University",
                    achievements: [
                      "Prepare for the internationals round in July",
                    ],
                    color: "bg-purple-500",
                    emoji: "👻",
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
                      className={`w-16 h-16 ${period.color} rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg z-10 border-4 border-white`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-2xl">{period.emoji}</span>
                    </motion.div>

                    <div className="flex-1 pb-8">
                      <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-black text-gray-900">{period.title}</h3>
                            <Badge className={`${period.color} text-white border-0 font-bold`}>{period.year}</Badge>
                          </div>
                          <p className="text-gray-600 mb-4 font-medium">{period.description}</p>
                          <div className="space-y-2">
                            {period.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className={`w-2 h-2 ${period.color} rounded-full`} />
                                <span className="text-sm text-gray-700 font-medium">{achievement}</span>
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
      <section className="py-16 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-6">Inspired by Our FLL Success? 🚀</h2>
            <p className="text-lg font-medium opacity-90 mb-8 max-w-2xl mx-auto">
              Learn more about our team, see our LEGO robot in action, or get in touch to collaborate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                </Button>
              </Link>
              <Link href="/robot">
                <Button className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-bold" size="lg">
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

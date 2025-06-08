"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Cpu, Zap, Cog, Target, Gauge, Settings, Play, Download, Camera, Code, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

export default function RobotPage() {
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
      <section className="py-16 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 text-white relative overflow-hidden">
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
              Our <span className="text-yellow-300">LEGO Robot</span> 🤖
            </h1>
            <p className="text-xl font-medium opacity-90 max-w-3xl mx-auto">
              Meet our FLL competition robot - designed, built, and programmed entirely by our team using LEGO
              Mindstorms for maximum performance and reliability!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Robot Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-black text-gray-800 mb-6">
                Meet <span className="text-red-600">"Brick Crusher"</span> ⚡
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-medium leading-relaxed">
                Our 2024 FLL competition robot, "Brick Crusher," represents months of iterative design, programming, and
                testing. Built entirely with LEGO Mindstorms EV3 components, it features advanced sensor integration,
                modular attachments, and autonomous navigation capabilities for the robot game.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Weight", value: "2.1 kg", icon: "⚖️", color: "bg-red-100 text-red-800" },
                  { label: "Speed", value: "Fast ⚡", icon: "🏃", color: "bg-blue-100 text-blue-800" },
                  { label: "Sensors", value: "6 Types", icon: "👁️", color: "bg-green-100 text-green-800" },
                  { label: "Attachments", value: "8 Modular", icon: "🔧", color: "bg-yellow-100 text-yellow-800" },
                ].map((spec, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg ${spec.color} text-center font-bold border-2 border-gray-200 hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-2xl mb-2">{spec.icon}</div>
                    <div className="text-sm opacity-75 font-black">{spec.label}</div>
                    <div className="font-black">{spec.value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold border-2 border-red-800">
                  <Play className="w-5 h-5 mr-2" />
                  Watch in Action
                </Button>
                <Button variant="outline" size="lg" className="font-bold border-2">
                  <Download className="w-5 h-5 mr-2" />
                  Download Specs
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border-4 border-gray-300">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Team bleulegs Robot - Brick Crusher"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  <motion.div
                    className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-black text-sm shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    FLL 2024 Season
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specs" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black text-gray-800 mb-6">
                Technical <span className="text-blue-600">Deep Dive</span> 🔧
              </h2>
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 bg-white shadow-lg border-2 border-gray-200">
                <TabsTrigger
                  value="specs"
                  className="data-[state=active]:bg-red-500 data-[state=active]:text-white font-bold"
                >
                  🧱 LEGO Parts
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white font-bold"
                >
                  📊 Performance
                </TabsTrigger>
                <TabsTrigger
                  value="programming"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-white font-bold"
                >
                  💻 Programming
                </TabsTrigger>
                <TabsTrigger
                  value="gallery"
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white font-bold"
                >
                  📸 Gallery
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="specs">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    category: "🧠 Brain & Processing",
                    items: [
                      { label: "Main Controller", value: "EV3 Intelligent Brick" },
                      { label: "Memory", value: "64MB RAM, 16MB Flash" },
                      { label: "Processor", value: "ARM9 300MHz" },
                      { label: "Operating System", value: "Linux-based EV3" },
                    ],
                    icon: Cpu,
                    color: "bg-red-500",
                    borderColor: "border-red-200",
                    bgColor: "bg-red-50",
                  },
                  {
                    category: "👁️ Sensors & Detection",
                    items: [
                      { label: "Color Sensors", value: "2x EV3 Color" },
                      { label: "Ultrasonic", value: "1x Distance Sensor" },
                      { label: "Gyro Sensor", value: "1x EV3 Gyro" },
                      { label: "Touch Sensors", value: "2x EV3 Touch" },
                    ],
                    icon: Zap,
                    color: "bg-blue-500",
                    borderColor: "border-blue-200",
                    bgColor: "bg-blue-50",
                  },
                  {
                    category: "⚙️ Motors & Movement",
                    items: [
                      { label: "Drive Motors", value: "2x Large EV3 Motors" },
                      { label: "Attachment Motors", value: "2x Medium EV3 Motors" },
                      { label: "Gear Ratio", value: "3:1 for speed optimization" },
                      { label: "Wheel Type", value: "Custom traction wheels" },
                    ],
                    icon: Cog,
                    color: "bg-green-500",
                    borderColor: "border-green-200",
                    bgColor: "bg-green-50",
                  },
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`h-full border-2 ${section.borderColor} hover:shadow-xl transition-all duration-300 ${section.bgColor}`}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg font-black text-gray-900 flex items-center gap-2">
                          {section.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {section.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                            >
                              <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                              <span className="text-sm font-black text-gray-900">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="performance">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    metric: "Mission Success Rate",
                    value: "94%",
                    description: "Consistent autonomous performance across all FLL missions",
                    icon: Target,
                    color: "bg-red-500",
                    emoji: "🎯",
                  },
                  {
                    metric: "Average Run Time",
                    value: "2.1s",
                    description: "Per mission completion time in robot game",
                    icon: Gauge,
                    color: "bg-blue-500",
                    emoji: "⚡",
                  },
                  {
                    metric: "Precision Accuracy",
                    value: "±2mm",
                    description: "Positioning tolerance for precise FLL tasks",
                    icon: Target,
                    color: "bg-green-500",
                    emoji: "🔧",
                  },
                  {
                    metric: "Competition Score",
                    value: "485 pts",
                    description: "Best robot game score achieved",
                    icon: Target,
                    color: "bg-yellow-500",
                    emoji: "🏆",
                  },
                ].map((perf, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white text-center">
                      <CardContent className="p-6">
                        <div className="text-4xl mb-4">{perf.emoji}</div>
                        <div className="text-3xl font-black text-gray-900 mb-2">{perf.value}</div>
                        <h3 className="font-black text-gray-900 mb-2">{perf.metric}</h3>
                        <p className="text-gray-600 text-sm font-medium">{perf.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="programming">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 font-black">
                        <Code className="w-5 h-5 text-red-600" />
                        <span>Programming Languages</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { lang: "EV3-G", usage: "Visual programming & rapid prototyping", percentage: "60%" },
                          { lang: "Python", usage: "Advanced algorithms & sensor fusion", percentage: "35%" },
                          { lang: "Scratch", usage: "Initial concept development", percentage: "5%" },
                        ].map((item, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-black text-gray-900">{item.lang}</span>
                              <span className="text-sm text-gray-600 font-bold">{item.percentage}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 border border-gray-300">
                              <motion.div
                                className="bg-gradient-to-r from-red-500 to-blue-500 h-3 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: item.percentage }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                viewport={{ once: true }}
                              />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">{item.usage}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 font-black">
                        <Settings className="w-5 h-5 text-blue-600" />
                        <span>Robot Features</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          "🧠 Autonomous navigation with obstacle avoidance",
                          "👀 Real-time sensor data fusion and processing",
                          "🔄 Modular mission-specific programming",
                          "⚡ Error handling and recovery systems",
                          "🎯 Performance optimization algorithms",
                          "📡 Remote debugging and monitoring",
                        ].map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-200"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-lg font-medium text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-2 border-gray-800 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 font-black">
                      <Brain className="w-5 h-5 text-green-400" />
                      <span>FLL Robot Code Architecture</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-gray-600">
                      <pre className="text-green-400">
                        {`# LEGO Mindstorms EV3 Robot Control System
class BrickCrusherRobot:
    def __init__(self):
        self.sensors = SensorManager()
        self.motors = MotorController()
        self.navigation = NavigationSystem()
        
    def autonomous_mission(self, mission_id):
        """Execute FLL autonomous mission with error handling"""
        try:
            mission_plan = self.load_fll_mission(mission_id)
            self.navigation.execute_path(mission_plan)
            return self.validate_mission_completion()
        except Exception as e:
            return self.error_recovery(e)
            
    def sensor_fusion(self):
        """Combine multiple LEGO sensor inputs for accurate positioning"""
        color_data = self.sensors.get_color_reading()
        distance_data = self.sensors.get_ultrasonic_reading()
        gyro_data = self.sensors.get_gyro_reading()
        
        return self.kalman_filter(color_data, distance_data, gyro_data)`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="gallery">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  { title: "Front View", description: "Main robot configuration with sensors", emoji: "🤖" },
                  { title: "Side Profile", description: "Showing LEGO attachment mechanisms", emoji: "🔧" },
                  { title: "Top View", description: "Layout of all LEGO components", emoji: "📐" },
                  { title: "Attachment Close-up", description: "Modular LEGO attachment system", emoji: "🧱" },
                  { title: "In Action", description: "Robot performing FLL mission tasks", emoji: "⚡" },
                  { title: "Build Process", description: "Team working on LEGO construction", emoji: "👥" },
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                      <div className="relative">
                        <Image
                          src={`/placeholder.svg?height=250&width=400&text=${encodeURIComponent(image.title)}`}
                          alt={image.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover"
                        />
                        <motion.div
                          className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          whileHover={{ opacity: 1 }}
                        >
                          <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-bold">
                            <Camera className="w-4 h-4 mr-2" />
                            View Full Size
                          </Button>
                        </motion.div>
                        <div className="absolute top-2 right-2 text-2xl bg-white/90 rounded-full w-10 h-10 flex items-center justify-center">
                          {image.emoji}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-black text-gray-900 mb-1">{image.title}</h3>
                        <p className="text-gray-600 text-sm font-medium">{image.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-6">Impressed by Our LEGO Engineering? 🚀</h2>
            <p className="text-lg font-medium opacity-90 mb-8 max-w-2xl mx-auto">
              See how our robot performs in FLL competition and check out our achievements!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/awards">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                >
                  <Target className="w-5 h-5 mr-2" />
                  View Competition Results
                </Button>
              </Link>
              <Link href="/team">
                <Button className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-bold" size="lg">
                  <Settings className="w-5 h-5 mr-2" />
                  Meet the Builders
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

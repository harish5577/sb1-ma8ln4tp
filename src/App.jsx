import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-6xl font-bold mb-4"
          >
            Rokith S
          </motion.h1>
          <motion.p 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-xl text-gray-300"
          >
            Electronics & Communication Engineer
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen p-8"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-300 mb-4">
          I am an Electronics & Communication Engineer with a strong foundation in regulatory affairs. 
          My goal is to contribute to organizational growth while developing my skills in quality and regulatory domains.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Diploma in ECE</h4>
                <p>Sakthi Polytechnic College</p>
                <p>CGPA: 80.95%</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <ul className="space-y-2">
              <li>Text Processor (Advanced)</li>
              <li>Visual Communication (Advanced)</li>
              <li>Spreadsheet (Beginner)</li>
              <li>Canva Expert</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen p-8"
      >
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Home Automation using IoT</h3>
            <p className="text-gray-300">Smart home automation system using IoT technologies</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Anti Sleep Alarms For Drivers</h3>
            <p className="text-gray-300">Safety system to prevent driver fatigue</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen p-8"
      >
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <div className="flex justify-center space-x-8">
          <motion.a 
            whileHover={{ scale: 1.2 }}
            href="mailto:spcaecrokiths@gmail.com"
            className="text-4xl"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-4xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-4xl"
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Code, Database, Brain, ChevronDown, Award, GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const skills = {
    programming: ['C/C++', 'C#', 'Java', 'Python', 'SQL', 'PL/SQL', 'Dart'],
    web: ['ASP.NET', 'Angular', 'React', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Flutter'],
    databases: ['PostgreSQL', 'SQL Server (SSMS)', 'SQLite', 'MongoDB'],
    dataScience: ['Pandas', 'NumPy', 'Tableau', 'Power BI'],
    ml: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'Neural Networks', 'CNNs', 'RNNs', 'NLP']
  };

  const projects = [
    {
      title: 'ComputerPartsAPP',
      tech: 'Flutter, Dart, Hive',
      description: 'E-commerce mobile app featuring product search, cart management, profile page, and checkout history with local data persistence.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Customer Response Classification',
      tech: 'Python, LightGBM',
      description: 'Implemented a machine learning pipeline with resampling for class imbalance, achieving strong ROC-AUC and generating prediction submissions.',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'MI Tracker & Profile Manager',
      tech: 'C#, .NET WinForms, LINQ',
      description: 'Desktop app to add/manage person profiles; validates input, computes BMI & category, and displays/sorts/filters records in a DataGridView.',
      icon: <Database className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      title: 'Machine Learning Fundamentals in Python',
      provider: 'DataCamp',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/828541466b1de2709e6d7e0c208c0b16cbe728f3'
    },
    {
      title: 'Deep Learning in Python',
      provider: 'DataCamp',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/9fd5a20ab821e1407e35dc342a1ba6bd6287d7a4'
    },
    {
      title: 'Complete Flutter Guide: Build Android, iOS and Web Apps',
      provider: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-325531a6-2816-42da-bafd-21da2037aa84/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-lg border-b border-blue-500/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Karam Alali
            </h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="text-center z-10 px-6">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 p-1 shadow-2xl"
            >
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/karam2.jpg" 
                  alt="Karam Wasfi Alali" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Karam Wasfi Alali
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 font-light mb-6">
              Computer Information Systems Student & Full Stack Developer
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Passionate about machine learning, web development, and creating innovative solutions. 
              Currently pursuing my Bachelor's degree with a perfect 4.0 GPA.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:ikaramwasfi22@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a href="https://github.com/KaramAlali33" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-full transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <ChevronDown 
            className="w-8 h-8 mx-auto animate-bounce text-blue-400 cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a dedicated Computer Information Systems student at Jordan University of Science and Technology, 
                maintaining a perfect 4.0 GPA while exploring the fascinating worlds of machine learning and full-stack development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My passion lies in creating intelligent solutions that bridge the gap between complex data and user-friendly applications. 
                From developing mobile apps with Flutter to implementing machine learning pipelines, I love turning ideas into reality.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300">Jordan University of Science And Technology</h4>
                  <p className="text-gray-400">Bachelor's in Computer Information System</p>
                  <p className="text-sm text-gray-500">2022 - 2026 | GPA: 4.00/4.00 (Distinguished)</p>
                </div>
                <div className="pt-4">
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Relevant Coursework:</h5>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    OOP, Data Structures, Competitive Programming, Theory of Algorithms, Database Management Systems, 
                    Oracle ERP System, Operating Systems, Software Engineering, Data Mining, and Flutter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-900/50 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 capitalize">
                  {category === 'ml' ? 'Machine Learning' : category.replace(/([A-Z])/g, ' $1')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900/50 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="text-blue-300 text-sm font-medium mb-3">{project.tech}</p>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications & Courses
          </h2>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                      <p className="text-blue-300">{cert.provider}</p>
                    </div>
                  </div>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:ikaramwasfi22@gmail.com" className="flex flex-col items-center gap-3 p-6 bg-slate-900/50 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <Mail className="w-8 h-8 text-blue-400" />
              <span className="text-white font-medium">Email</span>
              <span className="text-gray-400 text-sm">ikaramwasfi22@gmail.com</span>
            </a>
            
            <a href="tel:+962797855945" className="flex flex-col items-center gap-3 p-6 bg-slate-900/50 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <Phone className="w-8 h-8 text-blue-400" />
              <span className="text-white font-medium">Phone</span>
              <span className="text-gray-400 text-sm">+962 797855945</span>
            </a>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-slate-900/50 rounded-2xl border border-blue-500/20">
              <MapPin className="w-8 h-8 text-blue-400" />
              <span className="text-white font-medium">Location</span>
              <span className="text-gray-400 text-sm">Amman, Jordan</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <span className="text-gray-400">Languages:</span>
            <span className="text-blue-300 font-medium">Arabic (Native)</span>
            <span className="text-gray-500">•</span>
            <span className="text-blue-300 font-medium">English (Very Good)</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Karam Wasfi Alali. Built with React and passion for technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

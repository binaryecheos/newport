"use client";

import React, { useState, useEffect } from 'react';
import { Particles } from "@/src/components/magicui/particles";
import { BlurFade } from "@/src/components/magicui/blur-fade";
import { TypingAnimation } from "@/src/components/magicui/typing-animation";



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Code, 
  Database, 
  GitBranch, 
  Award, 
  GraduationCap, 
  Briefcase, 
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Download,
  Bot,
  Zap,
  Menu,
  X
} from 'lucide-react';

const SimpleClassyPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // Create a dummy resume download (in real app, link to actual resume)
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Gourav_Sahu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show feedback
    alert('Resume download started! (Actual Resume will be attached soon)');
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:gourav.sahu.1695@gmail.com?subject=Let\'s work together!';
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/binaryecheos', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/binaryecheos', '_blank');
  };

  const skills = {
    programming: ['Python', 'C++'],
    ml: ['Data Analysis', 'Feature Engineering', 'EDA', 'Model Development'],
    frameworks: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'Flask', 'Streamlit'],
    tools: [ 'Hugging Face', 'LangChain', 'Kaggle'],
    devops: ['Git', 'CI/CD'],
    web: ['REST APIs', 'Web Scraping', 'Static Web Development']
  };

  const projects = [
    {
      title: 'Machine Learning Pipeline',
      description: 'Robust ML pipeline for price prediction with MLflow integration and automated deployment for real-time predictions.',
      tech: ['Python', 'MLflow', 'AutoML', 'CI/CD'],
      category: 'MLOps',
      demoUrl: '#',
      githubUrl: 'https://github.com/binaryecheos/Price-Prediction-Model'
    },
    {
      title: 'Career Guidance Platform',
      description: 'Personalized career guidance platform for students and professionals using Streamlit and modern ML techniques.',
      tech: ['Streamlit', 'ML', 'Python', 'Data Science'],
      category: 'Web App',
      demoUrl: 'https://carrer-path-recommender.streamlit.app/',
      githubUrl: 'https://github.com/binaryecheos/Carrer-Path-Recommender'
    },
    {
      title: 'RAGIndia: Legal Chatbot',
      description: 'A multilingual legal assistant chatbot built with Flask, Google Gemini AI, and LangChain for intelligent legal document retrieval and question answering.',
      tech: ['Langchain', 'Gemini API', 'Python', 'Vector DB', 'Flask'],
      category: 'Web App',
      demoUrl: '#',
      githubUrl: 'https://github.com/binaryecheos/HackIndia-Spark-9-2025-SolArise'
    }
  ];

  const achievements = [
    {
      title: '2nd Position at AI Project Showcase',
      organization: 'Google Developers Group, Quantum University',
      type: 'Competition'
    },
    {
      title: 'Intro to Machine Learning Certificate',
      organization: 'Kaggle',
      type: 'Certification'
    },
    {
      title: 'HackIndia Spark 9 Participant',
      organization: 'Hackindia Group & Codex Club',
      type: 'Hackathon'
    }
  ];

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-gray-900">
              Gourav Sahu
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm lg:text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-2 py-2 rounded-md transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-blue-600 bg-blue-50 font-medium' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-2 mb-2 sm:mr-3 sm:mb-0">
              ML Research Engineer
            </span>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              AI Alignment & RLHF
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            <BlurFade delay={0.25} inView>
              <span>Sup, homies?</span>
            </BlurFade>
            
            <BlurFade delay={0.25 * 3} inView>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lemme tell ya about me!
            </span>
            </BlurFade>
          </h1>

          <div className="text-base sm:text-base text-gray-600 mb-8 leading-relaxed max-w-3xl">
            <TypingAnimation 
              delay={0.5} 
              duration={20}
              className="text-lg text-gray-400 font-light"
            >
              just jumping into the deep end of tech, fresh from wrapping up intermediate Machine Learning and now messing with Neural Networks. I’m getting cozy with the basics—think sorting data, playing with models, and cracking the math behind it. I’m pumped to keep leveling up, maybe tackling deep learning or some slick projects down the road, but right now, I’m just stoked to be learning and building cool stuff!
            </TypingAnimation>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">Current Focus</div>
              <div className="text-gray-600">LLMs, Transformers & Multi-Modal</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">Specialization</div>
              <div className="text-gray-600">RLHF & Evaluation Systems</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 sm:col-span-2 lg:col-span-1">
              <div className="font-semibold text-gray-900 mb-1">Research Areas</div>
              <div className="text-gray-600">Model Alignment & Safety</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={handleDownloadResume}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              onClick={handleContactClick}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 font-medium"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleGitHubClick}
              className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleLinkedInClick}
              className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleContactClick}
              className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Technical Skills
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList]) => {
              const icons = {
                programming: Code,
                ml: Brain,
                frameworks: Database,
                tools: Bot,
                devops: GitBranch,
                web: Zap
              };
              const Icon = icons[category as keyof typeof icons];

              return (
                <Card key={category} className="bg-white border-gray-200 hover:shadow-md transition-shadow duration-200 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <Icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <CardTitle className="text-gray-900 text-lg font-semibold capitalize">
                        {category === 'ml' ? 'Machine Learning' : 
                         category === 'devops' ? 'DevOps' : 
                         category.replace(/([A-Z])/g, ' $1').trim()}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Recent work and implementations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 group h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-gray-100 text-gray-700 font-medium">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        className="p-1 rounded hover:bg-gray-100 transition-colors"
                        title="View Demo"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                      </button>
                      <button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="p-1 rounded hover:bg-gray-100 transition-colors"
                        title="View Code"
                      >
                        <Github className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                      </button>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Experience & Education
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Education & Experience */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 mt-1">
                      <GraduationCap className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-gray-900 text-lg">Quantum University</CardTitle>
                      <CardDescription className="text-gray-600">B.Tech in CSE (AI & ML)</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3 font-medium">Aug 2024 – Jun 2028 (Expected)</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Relevant Coursework: Data Analysis & Data Science, Data Visualization, 
                    Data Structure & Programming, DBMS, Probabilistic Modelling
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 mt-1">
                      <Briefcase className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-gray-900 text-lg">UtsavAI</CardTitle>
                      <CardDescription className="text-gray-600">Intern</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-medium">Mar 2025 – Apr 2025</p>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-gray-700" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-white border-gray-200">
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <h4 className="text-gray-900 font-semibold leading-tight">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm">{achievement.organization}</p>
                        <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs">
                          {achievement.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Let&apos;s Work Together </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
            Interested in collaborating on ML projects? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContactClick}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 font-medium"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button 
              variant="outline" 
              onClick={handleGitHubClick}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 font-medium"
            >
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            © 2025 Gourav Sahu. Built with care and attention to detail.
          </p>
        </div>
      </footer>
      

    </div>
  );
};

export default SimpleClassyPortfolio;

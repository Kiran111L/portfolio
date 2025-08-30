import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Github, ExternalLink, Bot, BarChart3, Calendar, BookOpen } from "lucide-react"

const Projects = () => {
  const projects = [
        {
      title: "GenAI Workflow Automation",
      description: "Built a folder-structured AI project using Flowise and LangChain for automating tasks. Integrated OpenAI API and custom prompts to build chatbots and workflow tools with local LLMs.",
      icon: <Bot className="text-primary" size={24} />,
      technologies: ["Flowise", "LangChain", "Ollama", "OpenAI API", "Python"],
      year: "2025",
      github: "https://github.com/Kiran111L/llm-microservices-project",
      demo: ""
    },

    {
      title: "Personal Portfolio Website",
      description: "  Designed and deployed a personal website using HTML, CSS, and JavaScript to showcase resume and contact details. The site improved recruiter engagement through interactive design and better networking opportunities. Additionally, developed a professional portfolio website for a client, Saumya Narayan Behera, a GCP Data Engineer, helping him showcase his skills and experience effectively.",
      icon: <ExternalLink className="text-primary" size={24} />,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      year: "2025",
      github: "https://github.com/Kiran111L/saumya-portfolio",
      demo: "https://saumya-portfolio-pi.vercel.app/"
    },
        {
      title: "JEE Mains Exam Data Analysis & Prediction",
      description: "Created a structured dataset covering 25+ years of JEE Mains with fields like topic, mixed-topic probabilities. Built an ML pipeline using Linear Regression and Random Forest, achieving 77% accuracy in topic trend prediction.",
      icon: <BarChart3 className="text-primary" size={24} />,
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      year: "2025",
      github: "https://github.com/Kiran111L/jee_exam-analysis",
      demo: "https://jee-analysis-dashboard.streamlit.app"
    },
        {
      title: "Medical Inventory Management",
      description: "Designed and implemented a role-based Flask + MySQL backend to manage medicines, stock, and users.Developed secure RESTful APIs with JWT authentication and CRUD operations for inventory workflows.Integrated automated low-stock alerts and demand tracking logic to improve operational efficiency.",
      icon: <BookOpen className="text-primary" size={24} />,
      technologies: ["Python", "Flask", "MySQL", "REST APIs"],
      year: "2023",
      github: "https://github.com/Kiran111L/https---github.com-Kiran111L-Medical_inventory_management",
      demo: "https://library-mgmt-system.netlify.app"
    },


    {
      title: "Online Doctor Appointment & Prescription System",
      description: "Engineered a Flask + MySQL backend for scheduling appointments, managing patients, and generating e-prescriptions.Designed secure REST APIs with role-based access (doctor, patient, admin) and JWT authentication.Optimized database schema for faster query performance and reliable medical record retrieval.",
      icon: <Calendar className="text-primary" size={24} />,
      technologies: ["Python", "Flask", "MySQL", "REST APIs", "Postman"],
      year: "2024",
      github: "https://github.com/Kiran111L/doctor-appointment",
      demo: "https://doctor-appointment-system.herokuapp.com"
    },
    {
      title: "Library Management System",
      description: "Designed a role-based system using MySQL for login, book issuance, and overdue tracking. Automated daily operations and reduced manual errors for college library workflows.",
      icon: <BookOpen className="text-primary" size={24} />,
      technologies: ["Python", "Flask", "MySQL", "REST APIs"],
      year: "2023",
      github: "https://github.com/Kiran111L/library_management",
      demo: "https://library-mgmt-system.netlify.app"
    },

  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Technical <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <span className="text-sm text-primary font-medium">{project.year}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <EnhancedButton variant="portfolio" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </EnhancedButton>
                  <EnhancedButton variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </EnhancedButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
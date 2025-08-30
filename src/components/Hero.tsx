import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.png"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-float">
          <img 
            src={profilePhoto} 
            alt="Laveti Hari Kiran"
            className="w-48 h-48 rounded-full mx-auto border-4 border-primary/30 shadow-2xl object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
          Laveti Hari <span className="text-primary">Kiran</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Computer Science Student & AI Enthusiast
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Backend-focused developer skilled in Python, Flask, MySQL, and REST API development. 
          Passionate about building scalable, production-ready systems and AI-powered solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <EnhancedButton variant="hero" size="hero" asChild>
            <a href="#projects">View Projects</a>
          </EnhancedButton>
          <EnhancedButton variant="portfolio" size="hero" asChild>
            <a href="#contact">Get In Touch</a>
          </EnhancedButton>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a 
            href="mailto:laveti.harikiran@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/lavetiharikiran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/Kiran111L" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://lhk-portfolio.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Portfolio"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background-subtle border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
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
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Laveti Hari Kiran. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of code.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
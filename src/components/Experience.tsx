import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Independent ML Analyst",
      company: "Yash Aircon Project",
      period: "2024",
      description: "Built machine learning models (regression, clustering) to analyze AC installation/service trends. Improved service response time by 15% using predictive analytics. Presented actionable insights to decision-makers for optimization.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Predictive Analytics"]
    },
    {
      title: "Backend Developer",
      company: "Medical Inventory System",
      period: "2024-2025",
      description: "Developed a real-time inventory web app using Flask, MySQL, and responsive HTML/CSS. Automated alert system and data visualization with Plotly. Reduced manual stock errors by 21% and enhanced inventory tracking.",
      technologies: ["Flask", "MySQL", "HTML/CSS", "Plotly", "Python"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Work <span className="text-primary">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-medium mb-3">{exp.company}</h4>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
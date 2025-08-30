import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, Wrench } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" size={24} />,
      skills: ["Python", "SQL"]
    },
    {
      title: "Backend Development",
      icon: <Database className="text-primary" size={24} />,
      skills: ["Flask", "REST APIs", "JWT Authentication", "CRUD Operations", "Deployment", "Postman"]
    },
    {
      title: "ML & GenAI Tools",
      icon: <Brain className="text-primary" size={24} />,
      skills: ["Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Dimensionality Reduction", "Clustering", "LangChain", "Flowise", "Prompt Engineering"]
    },
    {
      title: "CS Fundamentals & Tools",
      icon: <Wrench className="text-primary" size={24} />,
      skills: ["Data Structures", "Algorithms", "OOP", "Git", "GitHub", "Pandas", "NumPy", "Flask", "MySQL", "Excel", "Postman", "REST APIs", "Keras", "OpenCV"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Technical <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-primary/10 text-foreground rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
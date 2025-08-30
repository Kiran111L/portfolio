import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Code, Users } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
            <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-muted-foreground">Indian Institute of Information Technology (IIIT), Kalyani</p>
                    <p className="text-sm text-muted-foreground">2026 • CGPA: 7.0</p>
                    <div className="mt-2">
                      <p className="text-sm"><strong>Intermediate (XII):</strong> Tirumala Junior College - GPA: 9.8</p>
                      <p className="text-sm"><strong>SSC (X):</strong> Sasi Educational Institutes - GPA: 9.5</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Certifications</h3>
            <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Award className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Machine Learning</h4>
                      <p className="text-sm text-muted-foreground">Programiz (June 2025)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Python Programming</h4>
                      <p className="text-sm text-muted-foreground">Programiz (May 2024)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Code className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Technical Skills</h3>
              <p className="text-sm text-muted-foreground">
                Python, SQL, Flask, REST APIs, MySQL, Database Design, Git, GitHub
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <GraduationCap className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">ML & AI Tools</h3>
              <p className="text-sm text-muted-foreground">
                Supervised/Unsupervised Learning, Classification, Regression, LangChain, Flowise
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Soft Skills</h3>
              <p className="text-sm text-muted-foreground">
                Problem Solving, Communication, Teamwork, Quick Learner, Adaptability
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About
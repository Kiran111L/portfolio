"use client"
import { useRef } from "react"
import emailjs from "emailjs-com"
import { Card, CardContent } from "@/components/ui/card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react"

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        "service_4rf3ack",      // 👈 replace with EmailJS service ID
        "template_4dj2h12",     // 👈 replace with EmailJS template ID
        form.current,
        "GV-gARsYC-1GzeCrg"     // 👈 your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!")
          form.current?.reset()
        },
        (error) => {
          alert("❌ Failed to send: " + error.text)
        }
      )
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            <span className="text-primary border-b-2 border-primary pb-2">CONTACT</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="from_name" className="text-muted-foreground">Full name</Label>
                  <Input
                    id="from_name"
                    name="from_name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="from_email" className="text-muted-foreground">E-mail address</Label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    required
                  />
                </div>

                <EnhancedButton
                  type="submit"
                  variant="hero"
                  size="hero"
                  className="w-full"
                >
                  <Send size={20} />
                  Send Message
                </EnhancedButton>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborations, or just chatting about technology. 
                Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:laveti.harikiran@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      laveti.harikiran@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">IIIT Kalyani, West Bengal, India</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="font-medium mb-4">Connect With Me</p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/lavetiharikiran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://github.com/Kiran111L"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <EnhancedButton variant="portfolio" size="lg" asChild>
            <a href="/resume.pdf" download className="inline-flex items-center gap-3">
              <ExternalLink size={20} />
              Download Resume
            </a>
          </EnhancedButton>
        </div>
      </div>
    </section>
  )
}

export default Contact

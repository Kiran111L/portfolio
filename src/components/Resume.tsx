// src/components/Resume.tsx
export default function Resume() {
  return (
    <section id="resume" className="py-20 text-center bg-background">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <p className="mb-6">Download my resume below:</p>
      <a
        href="/resume.pdf"   // ✅ make sure resume.pdf is inside public/
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  )
}

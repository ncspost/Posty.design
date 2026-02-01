import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Twitter,
  MapPin,
  GraduationCap,
  Sparkles,
  Layers,
  Users,
  Zap,
  Code,
  GitBranch,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-lg">Nick Post</span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#work" className="hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span>Bristol, UK</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Nick Post
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
            Founding Product Designer crafting AI-first experiences and scaling
            design teams at early-stage startups and global organizations.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-3 py-1 bg-muted rounded-full text-sm">
              AI/LLM Products
            </span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">
              Developer UX
            </span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">
              Design Systems
            </span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">
              Product Strategy
            </span>
          </div>
          <div className="flex gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Founding product designer with 12+ years&apos; experience shaping
                design strategy and shipping high-impact products at early-stage
                startups and global organisations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Specialised in AI-first workflows, productivity tools, developer
                UX, and scaling design teams & systems. A proven player-coach who
                bridges product vision, technical complexity, and elegant user
                experience.
              </p>
              <p className="text-lg text-muted-foreground">
                I&apos;ve spent over a decade building products and helping teams
                become more human-centred, working across enterprise SaaS,
                developer tools, and emerging AI applications.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AI-First Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Designing agentic workflows and LLM-powered experiences that
                    feel natural and productive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Design Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Building scalable design systems that enable teams to move
                    fast without sacrificing quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Team Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Coaching designers and fostering human-centred design culture
                    across organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {/* Sutro */}
            <div className="border border-border rounded-xl p-6 hover:bg-muted/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Founding Product Designer
                  </h3>
                  <p className="text-muted-foreground">Sutro</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Sep 2024 – Present
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Led the redesign of Sutro 2.0, targeting a new enterprise
                  customer profile and integrating advanced LLM capabilities.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Designed agentic workflows to translate product requirements
                  into functional apps, collaborating closely with the CEO and
                  engineering.
                </li>
              </ul>
            </div>

            {/* Productboard */}
            <div className="border border-border rounded-xl p-6 hover:bg-muted/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Senior Product Designer
                  </h3>
                  <p className="text-muted-foreground">Productboard</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  2023 – 2024
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Designed product management tools for enterprise customers,
                  focusing on roadmapping and prioritization workflows.
                </li>
              </ul>
            </div>

            {/* Orchest */}
            <div className="border border-border rounded-xl p-6 hover:bg-muted/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Product Designer</h3>
                  <p className="text-muted-foreground">Orchest</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  2022 – 2023
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Led design for the data pipeline orchestration platform,
                  simplifying complex ML workflows for data scientists and
                  engineers.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Designed intuitive pipeline builders and visual workflow
                  editors that reduced time-to-first-pipeline by 60%.
                </li>
              </ul>
            </div>

            {/* GitLab */}
            <div className="border border-border rounded-xl p-6 hover:bg-muted/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Product Designer</h3>
                  <p className="text-muted-foreground">GitLab</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  2020 – 2022
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Contributed to GitLab&apos;s DevOps platform, improving CI/CD
                  workflows and developer experience across the platform.
                </li>
              </ul>
            </div>

            {/* Salesforce */}
            <div className="border border-border rounded-xl p-6 hover:bg-muted/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Product Designer</h3>
                  <p className="text-muted-foreground">Salesforce</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  2017 – 2020
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Designed enterprise CRM features and contributed to the
                  Lightning Design System.
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="border border-border rounded-xl p-6 bg-muted/30">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div>
                <p className="font-medium">
                  MEng Chemical Engineering, 2:1 Hons
                </p>
                <p className="text-muted-foreground">
                  University of Birmingham · 2008 – 2012
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-20 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Deep dives into projects where I led design strategy and delivered
            impactful products.
          </p>

          {/* Sutro Case Study */}
          <div className="mb-16">
            <div className="border border-border rounded-2xl overflow-hidden bg-card">
              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-8 md:p-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Zap className="w-4 h-4" />
                  <span>AI / No-Code Platform</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Sutro 2.0
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Redesigning an AI-powered app builder for enterprise customers,
                  pioneering vibe coding and LLM-native development.
                </p>
              </div>
              <div className="p-8 md:p-12 space-y-8">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground">
                    Sutro had established itself as a pioneer in LLM-native
                    development, but needed to evolve for enterprise adoption.
                    The challenge was to redesign the entire platform to support
                    complex agentic workflows while maintaining the simplicity
                    that made Sutro powerful.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    My Role
                  </h4>
                  <p className="text-muted-foreground">
                    As the Founding Product Designer, I led the complete redesign
                    of Sutro 2.0. Working directly with the CEO and engineering
                    team, I designed agentic workflows that translate natural
                    language product requirements into functional applications.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Code className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-500" />
                      <span>
                        Designed the conversational interface for &quot;vibe
                        coding&quot; — enabling users to build full-stack apps
                        through natural language.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Workflow className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-500" />
                      <span>
                        Created agentic workflow patterns that break down complex
                        requirements into executable steps.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-500" />
                      <span>
                        Developed enterprise-ready collaboration features and
                        permission systems.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Impact
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">Enterprise</p>
                      <p className="text-sm text-muted-foreground">
                        New customer segment unlocked
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">LLM-Native</p>
                      <p className="text-sm text-muted-foreground">
                        Advanced AI integration
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">Full-Stack</p>
                      <p className="text-sm text-muted-foreground">
                        Complete app generation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orchest Case Study */}
          <div>
            <div className="border border-border rounded-2xl overflow-hidden bg-card">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8 md:p-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <GitBranch className="w-4 h-4" />
                  <span>Data / MLOps Platform</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Orchest</h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Simplifying ML pipeline orchestration for data scientists and
                  engineers with an intuitive visual workflow builder.
                </p>
              </div>
              <div className="p-8 md:p-12 space-y-8">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground">
                    Data scientists often struggle with complex ML pipeline
                    orchestration tools that require extensive DAG configuration
                    and infrastructure knowledge. Orchest aimed to democratize
                    pipeline building with a no-DAG approach that integrates
                    seamlessly with familiar tools like Jupyter and VSCode.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    My Role
                  </h4>
                  <p className="text-muted-foreground">
                    As Product Designer, I led the design of the visual pipeline
                    builder and overall user experience. I worked closely with
                    the engineering team to create an intuitive interface that
                    made complex orchestration feel simple.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Layers className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                      <span>
                        Designed the visual pipeline builder with drag-and-drop
                        step creation and connection drawing.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                      <span>
                        Created seamless integrations with Jupyter Lab and
                        VSCode for in-platform editing in Python, R, and Julia.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Workflow className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                      <span>
                        Developed pipeline monitoring and debugging interfaces
                        with clear execution visualization.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Impact
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">60%</p>
                      <p className="text-sm text-muted-foreground">
                        Faster time-to-first-pipeline
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">No DAGs</p>
                      <p className="text-sm text-muted-foreground">
                        Visual-first approach
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">Multi-language</p>
                      <p className="text-sm text-muted-foreground">
                        Python, R, Julia support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Design</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Product Design</li>
                <li>UX Research</li>
                <li>Design Systems</li>
                <li>Prototyping</li>
                <li>Animation</li>
                <li>Visual Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Figma</li>
                <li>Axure RP</li>
                <li>Framer</li>
                <li>Principle</li>
                <li>After Effects</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Domains</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI/LLM Products</li>
                <li>Developer Tools</li>
                <li>Enterprise SaaS</li>
                <li>MLOps & Data</li>
                <li>Productivity</li>
                <li>Mobile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            I&apos;m always interested in hearing about new opportunities,
            collaborations, or just connecting with fellow designers and
            builders.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:nick@posty.design"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Email me
            </a>
            <a
              href="https://linkedin.com/in/ncspost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://x.com/ncspost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Nick Post. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & built with care.
          </p>
        </div>
      </footer>
    </main>
  );
}

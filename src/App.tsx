import { useEffect, useState } from "react";

type ProjectKind = "University" | "Creative";

type Project = {
  slug: string;
  kind: ProjectKind;
  title: string;
  description: string;
  role: string;
  tools: string;
  challenge: string;
  concept: string;
  wireframe: string;
  interface: string;
  result: string;
  year?: string;
  className?: string;
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["NoLo", "nolo"],
  ["Projects", "projects"],
  ["Mindset", "mindset"],
  ["Contact", "contact"],
] as const;

const projects: Project[] = [
  {
    slug: "hemnes",
    kind: "University",
    title: "Web Site Hemnes",
    description:
      "A responsive digital experience for IKEA HEMNES, from visual identity and wireframes to Figma and WordPress.",
    role: "Visual & UI Designer · Team of 3",
    tools: "Figma · WordPress",
    challenge:
      "For the Technologies and People on the Web course, our team was asked to create a responsive website around an IKEA product of our choice. We selected HEMNES and designed an experience that could present the collection consistently across desktop, tablet and mobile.",
    concept:
      "My main contribution began with the visual direction: a moodboard inspired by nature, modernity and domestic warmth, a muted green and neutral palette, and a typography system combining Nunito Sans with Inter.",
    wireframe:
      "The team translated the initial content structure into low-fidelity wireframes for the main pages and responsive breakpoints. This stage helped us test hierarchy, product discovery and navigation before moving into visual design.",
    interface:
      "In Figma, I focused primarily on the interface, applying the selected fonts, palette, grid and visual rules across product, promotion, configuration, news and contact pages.",
    result:
      "The final prototype was translated into WordPress as a working responsive website. While I contributed less to development, I supported the team in preserving the visual system and consistency defined in Figma.",
    year: "2026",
    className: "project-card--hemnes",
  },
  {
    slug: "equestrian-identity",
    kind: "Creative",
    title: "Event Posters for Team Soffientini",
    description:
      "Two event posters created to organize information clearly and engage the riding school’s students.",
    role: "Graphic Designer & Copywriter",
    tools: "Canva · Figma",
    challenge:
      "Create two distinctive event posters for Team Soffientini in Cesano Maderno: one presenting a dense competition and riding-licence calendar, the other inviting younger students to an autumn pony club.",
    concept:
      "Each poster follows the tone of its audience. The competition calendar uses an elegant navy system and structured information, while the pony club adopts warm seasonal colors and a more playful composition.",
    wireframe:
      "I organized dates, activities, locations and practical details into clear reading levels, allowing students and families to find the most important information quickly.",
    interface:
      "I created both the visual design and the copy, combining the Team Soffientini identity with icons, photography, typographic contrast and event-specific graphic elements.",
    result:
      "The final posters provided two ready-to-share communication pieces: one informative and structured, the other warm, accessible and designed for children aged three to six.",
    year: "2025",
  },
  {
    slug: "lora-lamm",
    kind: "University",
    title: "Stagioni in mostra — Lora Lamm",
    description:
      "A seasonal visual identity and editorial communication system celebrating Swiss designer Lora Lamm.",
    role: "Visual & Editorial Designer · Group project",
    tools: "Figma · Affinity · Canva",
    challenge:
      "For the Graphic Design course, the group developed the visual identity and editorial communication for an exhibition dedicated to Swiss designer Lora Lamm, translating her expressive language into a contemporary system.",
    concept:
      "The concept organizes Lamm’s work through the four seasons. Each season has its own palette and atmosphere, while cut-out figures, expressive typography and modular color blocks connect the complete identity.",
    wireframe:
      "The communication system was planned across a catalogue, exhibition invitation, poster, three Instagram posts, one story and a Facebook banner, adapting the same narrative to different formats.",
    interface:
      "My contribution was transversal: visual research, concept development, palette and typographic exploration, composition, editorial layout and adaptation of the identity across print and social formats.",
    result:
      "The final system presents Lora Lamm’s creative legacy as a journey from autumn to summer, balancing historical references with a vivid, contemporary exhibition language.",
    year: "2026",
    className: "project-card--wide",
  },
  {
    slug: "another",
    kind: "University",
    title: "Another",
    description:
      "A speculative 2050 service that creates a physical AI avatar to help people reclaim their time.",
    role: "Visual & UX Designer · Group project",
    tools: "Figma",
    challenge:
      "Design a responsive, people-centered website for an organization in 2050 whose offer is made possible by future AI, documenting the system, design decisions and evolution of the work.",
    concept:
      "Another creates a physical avatar from a scan of the user’s body, voice, gestures and micro-expressions. The avatar can perform daily activities autonomously or under guidance, with variable levels of AI control.",
    wireframe:
      "The architecture connects discovery, catalogue, activation, consultation and support, clarifying what the user chooses, provides, delegates and can stop or modify.",
    interface:
      "The visual system combines icy surfaces, night blue, electric purple and holographic blue with Unbounded, IBM Plex Sans and IBM Plex Mono.",
    result:
      "Research, service definition, visual identity and responsive wireframes are complete. High-fidelity interface design and implementation are still in progress.",
    year: "2026 · Work in progress",
  },
  {
    slug: "birthday-invitation",
    kind: "Creative",
    title: "Customized birthday invitation",
    description:
      "Design of a personalized invitation featuring florals, custom visuals and a unique concept tailored for the event.",
    role: "Graphic Designer",
    tools: "Figma · Illustration",
    challenge:
      "Turn a personal celebration into a small but distinctive visual experience across print and digital invitations.",
    concept:
      "A delicate botanical direction combines custom details, warm color and expressive editorial typography.",
    wireframe:
      "The invitation hierarchy was tested to make date, location and RSVP details easy to scan in every format.",
    interface:
      "Print and mobile versions share the same composition while adapting type size and spacing to each medium.",
    result:
      "The finished invitation feels personal, polished and immediately connected to the atmosphere of the event.",
    year: "[Year]",
    className: "project-card--tall",
  },
];

const timeline = [
  {
    year: "2017–2022",
    title: "High School Diploma in Human Sciences",
    text: "A perspective on people and society.",
  },
  {
    year: "2022–2025",
    title: "Bachelor’s in Organization Sciences",
    text: "University of Milano-Bicocca · processes, strategy.",
  },
  {
    year: "2025–present",
    title: "Master’s in Communication Theory and Technology",
    text: "Department of Computer Science and Psychology · Bicocca.",
  },
];

const studySteps = [
  {
    title: "The research question",
    text: "How do digital platforms shape the image of NoLo, and how does that representation contribute to place rebranding and gentrification?",
  },
  {
    title: "The corpus",
    text: "90 selected listings: 30 Airbnb apartments, 30 Booking properties and 30 Tripadvisor restaurants in the NoLo area.",
  },
  {
    title: "The method",
    text: "A qualitative content analysis in NVivo, combining thematic coding with word-frequency analysis across three platform-specific datasets.",
  },
  {
    title: "The critical insight",
    text: "A successful urban brand can coexist with noise, traffic, rising prices and a parallel sense of symbolic loss among local communities.",
  },
];

function Header({ section, dark = false }: { section: number; dark?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${dark ? "site-header--dark" : ""}`}>
      <a className="wordmark" href="#home" aria-label="Back to the homepage">
        Lucrezia Venturini
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls={`menu-${section}`}
        onClick={() => setOpen(!open)}
      >
        {open ? "CLOSE" : "MENU"}
      </button>
      <nav
        className={`main-nav ${open ? "main-nav--open" : ""}`}
        id={`menu-${section}`}
        aria-label="Main navigation"
      >
        {navItems.map(([label, target]) => (
          <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <span className="page-count">0{section} / 06</span>
    </header>
  );
}

function SubpageHeader({
  label,
  backHref = "#projects",
  backLabel = "Back to portfolio",
}: {
  label: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="subpage-header">
      <a className="wordmark" href="#home">
        Lucrezia Venturini
      </a>
      <a className="back-link" href={backHref}>
        ← {backLabel}
      </a>
      <span className="page-count">{label}</span>
    </header>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function Button({
  href,
  children,
  outline = false,
  light = false,
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  outline?: boolean;
  light?: boolean;
  download?: boolean;
}) {
  return (
    <a
      className={`pill-button ${outline ? "pill-button--outline" : ""} ${
        light ? "pill-button--light" : ""
      }`}
      href={href}
      download={download || undefined}
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="section-inner">
        <Header section={1} />
        <Label>PORTFOLIO 2026 · MILAN</Label>
        <div className="hero-orb" aria-hidden="true" />
        <div className="hero-content">
          <h1>
            I am always learning,
            <br />
            connecting and imagining
            <br />
            what comes next.
          </h1>
          <p className="hero-intro">
            I’m Lucrezia Venturini, a Master’s student in Communication Theory and
            <br className="desktop-only" /> Technology. I bring together organization, communication
            and innovation
            <br className="desktop-only" /> to create projects that work and have a soul.
          </p>
          <div className="button-row">
            <Button href="#about">About me</Button>
            <Button href="#contact" outline>
              Let’s talk
            </Button>
          </div>
        </div>
        <a className="scroll-note" href="#about">
          GET TO KNOW ME · SCROLL ↓
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <Header section={2} />
        <Label>01 · ABOUT ME</Label>
        <div className="about-intro">
          <figure className="about-photo">
            <img
              src="/assets/lucrezia-about-2025.jpg"
              alt="Lucrezia smiling with her degree at the graduation ceremony"
              width="1536"
              height="2048"
            />
          </figure>
          <div className="about-copy">
            <h2>
              From people, to processes,
              <br /> to languages.
            </h2>
            <p>
              My journey began with Human Sciences, where I learned to look at people before
              numbers. At Bicocca, I studied how organizations work, and today I explore how they
              tell their stories through a Master’s in Communication Theory and Technology, bridging
              Computer Science and Psychology.
            </p>
            <p>Communicating well is an act of organization. Organizing well is an act of care.</p>
          </div>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-card" key={item.title}>
              <span className="timeline-dot" aria-hidden="true" />
              <p className="eyebrow">{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <aside className="vision">
            <p className="eyebrow">MY VISION</p>
            <p>
              Artificial Intelligence is changing the way we work: the challenge is to use it
              critically and within sustainable working models that put people first.
            </p>
          </aside>
        </div>
        <div className="about-footer">
          <div className="tag-list" aria-label="Skills">
            {[
              "Communication",
              "Organization",
              "Qualitative analysis",
              "AI & new technologies",
              "Sustainability",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Button href="#experience">Explore my field experience →</Button>
        </div>
      </div>
    </section>
  );
}

function Nolo() {
  return (
    <section className="section nolo" id="nolo">
      <div className="section-inner">
        <Header section={3} dark />
        <Label>02 · CASE STUDY / THESIS</Label>
        <h2>
          From reviews to gentrification:
          <br />
          the media construction of NoLo
          <br />
          on digital platforms.
        </h2>
        <p className="nolo-intro">
          A qualitative study of how Airbnb, Booking and Tripadvisor participate in the rebranding
          and transformation of a Milanese neighborhood.
        </p>
        <div className="nolo-meta" aria-label="Thesis information">
          <span>ACADEMIC YEAR · 2024–2025</span>
          <span>SUPERVISOR · PROF. MARIANNA D’OVIDIO</span>
          <span>TOOL · NVIVO</span>
        </div>
        <div className="study-grid">
          {studySteps.map((step) => (
            <article className="study-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="platform-comparison">
          <article>
            <span>AIRBNB</span>
            <h3>Authentic & creative</h3>
            <p>Cultural energy, street art and an emerging creative scene.</p>
          </article>
          <article>
            <span>BOOKING</span>
            <h3>Connected & functional</h3>
            <p>Strategic location and mobility, alongside concerns about traffic and safety.</p>
          </article>
          <article>
            <span>TRIPADVISOR</span>
            <h3>Cosmopolitan & culinary</h3>
            <p>A diverse food culture and lively atmosphere, with growing attention to prices.</p>
          </article>
        </div>
        <blockquote>
          “A desirable digital image can grow alongside tensions that remain visible in everyday
          experience.”
        </blockquote>
        <Button href="#nolo-study" outline light>
          Explore the full case study
        </Button>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectKind>("All");
  const visible = projects.filter((project) => filter === "All" || project.kind === filter);

  return (
    <section className="section projects" id="projects">
      <div className="section-inner">
        <Header section={4} />
        <Label>03 · PROJECTS</Label>
        <h2>Ideas taking shape.</h2>
        <p className="projects-intro">
          University work and creative fragments: two ways of communicating with intention.
        </p>
        <div className="filters" aria-label="Filter projects">
          {(["All", "University", "Creative"] as const).map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <a
              className={`project-card project-card--${project.kind.toLowerCase()} ${
                project.className ?? ""
              }`}
              href={`#project-${project.slug}`}
              key={project.slug}
            >
              <p className="eyebrow">{project.kind.toUpperCase()}</p>
              {project.kind === "Creative" && <span className="flyer">FLYER</span>}
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="card-link">View case study →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mindset() {
  const values = [
    ["Resilience", "Keep going when your legs, or the project, start to feel heavy."],
    ["Focus", "One goal at a time, one kilometer at a time."],
    ["Consistency", "Training even when no one is watching."],
  ];

  return (
    <section className="section mindset" id="mindset">
      <div className="section-inner">
        <Header section={5} />
        <Label>04 · BEYOND THE SCREEN</Label>
        <h2>Discipline is trained.</h2>
        <p className="mindset-intro">
          Outside the studio, my energy turns into movement. I practice Hyrox, which combines
          running and functional fitness, and I run half marathons, including one in Aveiro,
          Portugal. They have taught me that results come one small step at a time, and that
          organization beats improvisation.
        </p>
        <div className="values">
          {values.map(([title, text], index) => (
            <article key={title}>
              <span>{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mindset-visual" aria-label="Running and functional fitness">
          <svg viewBox="0 0 600 700" fill="none" aria-hidden="true">
            <path d="M20 10C120 190 320 110 420 330S320 610 570 690" />
          </svg>
          <img
            className="fitness-photo"
            src="/assets/fitness.jpg"
            alt="Functional fitness training"
            width="3648"
            height="5472"
          />
          <img
            className="running-photo"
            src="/assets/running.jpg"
            alt="A runner during a road race"
            width="4672"
            height="7008"
          />
        </div>
        <blockquote>
          “What running gives me, I bring to my work: rhythm, breath, direction.”
        </blockquote>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-inner">
        <Header section={6} dark />
        <Label>05 · CONTACT</Label>
        <h2>
          Shall we build
          <br />
          something together?
        </h2>
        <p className="contact-intro">
          I’m looking for an international Erasmus internship where I can bring together
          <br className="desktop-only" /> communication, organization, technology and
          sustainability. If you think my
          <br className="desktop-only" /> background could bring value to your team, I’d love to
          meet you.
        </p>
        <div className="button-row">
          <Button href="mailto:lucreziaventurini03@gmail.com">Email me →</Button>
          <Button href="https://www.linkedin.com/" outline light>
            LinkedIn
          </Button>
          <Button href="/cv.txt" outline light download>
            Download my CV
          </Button>
        </div>
        <address>
          <a href="mailto:lucreziaventurini03@gmail.com">lucreziaventurini03@gmail.com</a>
          <br />
          Milan, Italy · Available for Erasmus mobility
          <br />© 2026 | Venturini Lucrezia
        </address>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          ↑
        </a>
      </div>
    </section>
  );
}

function ExperiencePage() {
  const experiences = [
    {
      number: "01",
      theme: "light",
      category: "TEAM SOFFIENTINI · CESANO MADERNO",
      meta: "2019–2026 · RIDERS AGED 3–30",
      title: "Horse-riding instructor and FISE recreational facilitator",
      description:
        "I planned and led riding lessons for children and adults, adapting activities, language and pace to each rider. My attention had to move constantly between people and horses: supporting learning while caring for the animals and ensuring a safe environment for everyone.",
      closing:
        "Through lessons, care routines and games, I learned that leadership begins with observation, trust and responsibility.",
      skills: ["Empathy", "Leadership", "Animal care", "Group safety", "Active listening"],
      image: "/assets/lucrezia-equestrian.jpg",
      alt: "Lucrezia riding a horse outdoors",
    },
    {
      number: "02",
      theme: "dark",
      category: "AU PAIR · DALKEY, DUBLIN",
      meta: "AUG 2026–FEB 2027 · CHILDREN AGED 2, 6 & 9",
      title: "Au Pair in Dublin, Ireland",
      description:
        "For six months, I looked after three children aged two, six and nine, supporting their routines and daily activities. Living with a family in Dalkey meant learning to organize each day with care, flexibility and a growing sense of independence.",
      closing:
        "English was the first challenge. Little by little, every conversation became easier and helped me feel more confident in an international environment.",
      skills: ["Independence", "Flexibility", "Problem-solving", "Intercultural communication"],
      image: "/assets/lucrezia-ireland.jpg",
      alt: "Lucrezia visiting the Irish coast",
    },
  ];

  return (
    <main className="subpage experience-page">
      <div className="subpage-inner">
        <SubpageHeader label="EXPERIENCE" />
        <Label>01A · FIELD EXPERIENCE</Label>
        <div className="subpage-title">
          <h1>
            Skills take shape
            <br />
            when they meet people.
          </h1>
          <p>
            Some of the experiences that shaped my approach to work began outside university.
            Different contexts, connected by the need to observe, listen and adapt.
          </p>
        </div>
        <div className="experience-grid">
          {experiences.map((experience) => (
            <article
              className={`experience-card experience-card--${experience.theme}`}
              key={experience.number}
            >
              <img src={experience.image} alt={experience.alt} width="1350" height="1800" />
              <div className="experience-card__content">
                <span className="experience-number">{experience.number}</span>
                <p className="eyebrow">{experience.category}</p>
                <p className="experience-meta">{experience.meta}</p>
                <h2>{experience.title}</h2>
                <p>{experience.description}</p>
                <p className="experience-closing">{experience.closing}</p>
                <div className="tag-list">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="subpage-footer">
          <a href="#about">← Back to About</a>
          <a href="#projects">Explore my projects →</a>
        </div>
      </div>
    </main>
  );
}

function NoloStudyPage() {
  const platforms = [
    {
      name: "Airbnb",
      focus: "The neighborhood as an authentic experience",
      text: "Hosts and guests describe NoLo through cultural energy, street art, nightlife and an emerging creative scene. Positive language dominates, while references to noise and perceived danger remain secondary.",
      keywords: ["authentic", "creative", "multicultural", "lively"],
    },
    {
      name: "Booking",
      focus: "The functional and tourist dimension",
      text: "Location and transport connections lead the narrative. Reviews value easy access to the city, but mention traffic, urban decline and safety concerns more frequently than Airbnb.",
      keywords: ["connected", "strategic", "metro", "accessible"],
    },
    {
      name: "Tripadvisor",
      focus: "A polarized view from below",
      text: "Restaurants shape a cosmopolitan, varied food identity. Reviews celebrate authenticity and atmosphere while also recording overcrowding and prices perceived as increasingly high.",
      keywords: ["food", "cosmopolitan", "atmosphere", "prices"],
    },
  ];

  return (
    <main className="subpage nolo-study-page">
      <section className="nolo-study-hero">
        <div className="subpage-inner">
          <SubpageHeader label="THESIS · 2025" backHref="#nolo" backLabel="Back to NoLo" />
          <Label>RESEARCH CASE STUDY</Label>
          <div className="nolo-study-heading">
            <h1>
              From reviews
              <br />
              to gentrification.
            </h1>
            <p>
              The media construction of NoLo on digital platforms: a qualitative investigation into
              language, urban branding and the tensions hidden behind a desirable image.
            </p>
          </div>
          <div className="nolo-study-data">
            <div>
              <strong>90</strong>
              <span>SELECTED LISTINGS</span>
            </div>
            <div>
              <strong>3</strong>
              <span>DIGITAL PLATFORMS</span>
            </div>
            <div>
              <strong>10</strong>
              <span>THEMATIC CATEGORIES</span>
            </div>
            <div>
              <strong>NVivo</strong>
              <span>ANALYSIS TOOL</span>
            </div>
          </div>
        </div>
      </section>

      <section className="nolo-study-section nolo-study-question">
        <div className="subpage-inner nolo-study-two-col">
          <div>
            <Label>01 · THE QUESTION</Label>
            <h2>Who creates the identity of a neighborhood?</h2>
          </div>
          <div className="nolo-study-body">
            <p>
              NoLo—North of Loreto—is a neighborhood in north-eastern Milan whose name emerged
              through a bottom-up rebranding process. Once described through stigma and urban
              decline, it is now promoted as lively, creative and multicultural.
            </p>
            <p>
              The research asks how descriptions and reviews on digital platforms participate in
              this change, and whether the image they promote reflects the experience of residents
              and visitors.
            </p>
          </div>
        </div>
      </section>

      <section className="nolo-study-section nolo-study-method">
        <div className="subpage-inner">
          <Label>02 · METHOD</Label>
          <div className="nolo-study-two-col">
            <h2>A systematic reading of everyday language.</h2>
            <div className="nolo-study-body">
              <p>
                The study uses qualitative content analysis to examine descriptions and public
                reviews from 30 Airbnb apartments, 30 Booking properties and 30 Tripadvisor
                restaurants located in NoLo.
              </p>
              <p>
                The texts were organized into three datasets and coded in NVivo across ten themes:
                accessibility, authenticity, atmosphere, dynamism, neighborhood identity,
                rebranding, multiculturalism, services, safety and nightlife.
              </p>
            </div>
          </div>
          <div className="method-flow" aria-label="Research process">
            <span>COLLECT</span>
            <i>→</i>
            <span>FILTER</span>
            <i>→</i>
            <span>CODE IN NVIVO</span>
            <i>→</i>
            <span>COMPARE</span>
          </div>
        </div>
      </section>

      <section className="nolo-study-section nolo-study-results">
        <div className="subpage-inner">
          <Label>03 · PLATFORM COMPARISON</Label>
          <h2>Three platforms, three versions of NoLo.</h2>
          <div className="nolo-platform-grid">
            {platforms.map((platform, index) => (
              <article key={platform.name}>
                <span className="experience-number">0{index + 1}</span>
                <p className="eyebrow">{platform.name.toUpperCase()}</p>
                <h3>{platform.focus}</h3>
                <p>{platform.text}</p>
                <div className="tag-list">
                  {platform.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nolo-study-section nolo-study-critical">
        <div className="subpage-inner nolo-study-two-col">
          <div>
            <Label>04 · CRITICAL READING</Label>
            <h2>A successful brand does not remove conflict.</h2>
          </div>
          <div className="nolo-study-body">
            <p>
              Across the three platforms, NoLo is represented positively: authentic, creative,
              well-connected and cosmopolitan. Yet reviews also reveal a parallel symbolic
              devaluation through recurring references to noise, traffic, urban decline, safety and
              increasing prices.
            </p>
            <p>
              The digital narrative attracts attention and investment, but risks obscuring rising
              living costs, displacement and the distance between the new brand and some
              long-standing communities.
            </p>
          </div>
        </div>
      </section>

      <section className="nolo-study-conclusion">
        <div className="subpage-inner">
          <Label>05 · CONCLUSION</Label>
          <blockquote>
            “Understanding how a place is described also means asking who benefits from that
            story—and who risks being left outside it.”
          </blockquote>
          <p>
            The thesis confirms that Airbnb, Booking and Tripadvisor do not simply reflect NoLo’s
            identity: through recurring language and narratives, they actively participate in its
            construction.
          </p>
          <div className="nolo-study-credits">
            <span>ACADEMIC YEAR · 2024–2025</span>
            <span>SUPERVISOR · PROF. MARIANNA D’OVIDIO</span>
            <span>UNIVERSITY OF MILANO-BICOCCA</span>
          </div>
          <div className="subpage-footer">
            <a href="#nolo">← Back to thesis overview</a>
            <a href="#projects">Explore my projects →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProcessVisual({
  step,
  project,
}: {
  step: "concept" | "wireframe" | "interface" | "result";
  project: Project;
}) {
  if (project.slug === "hemnes") {
    if (step === "concept") {
      return (
        <div
          className="process-visual process-visual--real process-visual--hemnes-concept"
          aria-label="HEMNES moodboard and design system"
        >
          <figure>
            <img
              src="/assets/hemnes/moodboard.png"
              alt="HEMNES moodboard with natural green, wood and neutral interior references"
              width="978"
              height="822"
            />
            <figcaption>MOODBOARD</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/hemnes/design-system.png"
              alt="HEMNES logo, color palette, typography and interface components"
              width="598"
              height="813"
            />
            <figcaption>DESIGN SYSTEM</figcaption>
          </figure>
        </div>
      );
    }

    if (step === "wireframe") {
      return (
        <div
          className="process-visual process-visual--real process-visual--hemnes-wireframe"
          aria-label="HEMNES promotions page wireframe"
        >
          <span className="visual-hint">SCROLL TO EXPLORE THE WIREFRAME ↓</span>
          <figure className="hemnes-wireframe-scroll">
            <img
              src="/assets/hemnes/promotions-wireframe.jpg"
              alt="HEMNES promotions page wireframe"
              width="1440"
              height="2621"
            />
          </figure>
        </div>
      );
    }

    const screens =
      step === "interface"
        ? [
            {
              src: "/assets/hemnes/product-desktop.jpg",
              alt: "HEMNES product page on desktop",
              width: 1440,
              height: 4301,
              label: "PRODUCT · DESKTOP",
              format: "desktop",
            },
            {
              src: "/assets/hemnes/configurator-desktop.jpg",
              alt: "HEMNES custom furniture configurator on desktop",
              width: 1440,
              height: 3505,
              label: "CONFIGURATOR · DESKTOP",
              format: "desktop",
            },
            {
              src: "/assets/hemnes/promotions-desktop.jpg",
              alt: "HEMNES promotions page on desktop",
              width: 1440,
              height: 3336,
              label: "PROMOTIONS · DESKTOP",
              format: "desktop",
            },
            {
              src: "/assets/hemnes/product-mobile.png",
              alt: "HEMNES product page on mobile",
              width: 390,
              height: 4956,
              label: "PRODUCT · MOBILE",
              format: "mobile",
            },
          ]
        : [
            {
              src: "/assets/hemnes/home-desktop.jpg",
              alt: "HEMNES homepage on desktop",
              width: 1440,
              height: 4401,
              label: "HOME · DESKTOP",
              format: "desktop",
            },
            {
              src: "/assets/hemnes/news-ipad.png",
              alt: "HEMNES news page on iPad",
              width: 1024,
              height: 3386,
              label: "NEWS · IPAD",
              format: "tablet",
            },
            {
              src: "/assets/hemnes/home-mobile.png",
              alt: "HEMNES homepage on mobile",
              width: 390,
              height: 4869,
              label: "HOME · MOBILE",
              format: "mobile",
            },
          ];

    return (
      <div
        className={`process-visual process-visual--real process-visual--hemnes-gallery process-visual--hemnes-${step}`}
        aria-label={`${step} visual`}
      >
        <span className="visual-hint">SCROLL SIDEWAYS TO VIEW MORE →</span>
        <div className="hemnes-screen-row">
          {screens.map((screen) => (
            <figure className={`hemnes-screen hemnes-screen--${screen.format}`} key={screen.label}>
              <img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} />
              <figcaption>{screen.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`process-visual process-visual--${step}`} aria-label={`${step} visual`}>
      <span className="mockup-label">{project.title}</span>
      {step === "concept" && (
        <>
          <div className="swatch swatch--one" />
          <div className="swatch swatch--two" />
          <div className="swatch swatch--three" />
          <strong>Aa</strong>
        </>
      )}
      {step === "wireframe" && (
        <>
          <div className="wire wire--header" />
          <div className="wire wire--hero" />
          <div className="wire wire--card-one" />
          <div className="wire wire--card-two" />
        </>
      )}
      {step === "interface" && (
        <>
          <div className="ui-browser">
            <div className="ui-browser__bar" />
            <div className="ui-browser__hero">{project.title}</div>
            <div className="ui-browser__grid" />
          </div>
          <div className="ui-phone" />
        </>
      )}
      {step === "result" && (
        <div className="result-screen">
          <span>FINAL EXPERIENCE</span>
          <strong>{project.title}</strong>
          <i>View · Explore · Connect</i>
        </div>
      )}
    </div>
  );
}

function PosterProjectPage({ project }: { project: Project }) {
  return (
    <main className="subpage poster-case-page">
      <section className="poster-case-hero">
        <div className="subpage-inner">
          <SubpageHeader label="02 / 05" />
          <Label>CREATIVE · EDITORIAL DESIGN</Label>
          <div className="case-study-heading">
            <div>
              <h1>{project.title}</h1>
              <p>
                Two communication pieces designed for the students and families of an equestrian
                school, each shaped around a different event and audience.
              </p>
            </div>
            <dl>
              <div>
                <dt>ROLE</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>TOOLS</dt>
                <dd>{project.tools}</dd>
              </div>
              <div>
                <dt>YEAR</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </div>
          <div className="poster-hero-grid">
            <figure>
              <img
                src="/assets/team-soffientini/competition-calendar-2025.jpg"
                alt="Team Soffientini competition calendar and riding licence program poster"
                width="1024"
                height="1536"
              />
            </figure>
            <figure>
              <img
                src="/assets/team-soffientini/autumn-pony-club-2025.jpg"
                alt="Team Soffientini Autumn Pony Club poster"
                width="1080"
                height="1350"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="poster-overview">
        <div className="subpage-inner overview-grid">
          <Label>PROJECT OVERVIEW</Label>
          <h2>The challenge</h2>
          <p>{project.challenge}</p>
          <div className="overview-note">
            <span>MY CONTRIBUTION</span>
            <p>
              Content writing, information hierarchy, visual concept, typography, composition and
              final artwork.
            </p>
          </div>
        </div>
      </section>

      <section className="poster-breakdown">
        <div className="subpage-inner">
          <Label>01 · TWO EVENTS, TWO LANGUAGES</Label>
          <div className="poster-breakdown-grid">
            <article>
              <div className="poster-image-shell poster-image-shell--navy">
                <img
                  src="/assets/team-soffientini/competition-calendar-2025.jpg"
                  alt="Competition Calendar & Riding Licence Program poster"
                  width="1024"
                  height="1536"
                />
              </div>
              <p className="eyebrow">COMPETITION CALENDAR & RIDING LICENCE PROGRAM</p>
              <h2>Clarity for a complex schedule.</h2>
              <p>
                A structured navy layout organizes competitions, dates and licence activities into
                repeatable modules. Icons, dividers and strong typographic contrast make a dense
                calendar easy to scan.
              </p>
            </article>
            <article>
              <div className="poster-image-shell poster-image-shell--autumn">
                <img
                  src="/assets/team-soffientini/autumn-pony-club-2025.jpg"
                  alt="Autumn Pony Club poster"
                  width="1080"
                  height="1350"
                />
              </div>
              <p className="eyebrow">AUTUMN PONY CLUB</p>
              <h2>A playful invitation for young riders.</h2>
              <p>
                Warm orange, seasonal leaves and expressive lettering create an approachable
                invitation for children aged three to six, while practical information remains
                visible to parents.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="reflection poster-reflection">
        <div className="subpage-inner">
          <Label>02 · WHAT I LEARNED</Label>
          <h2>Design starts with knowing who needs to read.</h2>
          <p>
            These posters taught me to adapt tone, hierarchy and visual rhythm to different
            audiences without losing the identity of the same organization.
          </p>
          <div className="subpage-footer">
            <a href="#projects">← Back to all projects</a>
            <a href="#project-lora-lamm">Exhibition on Lora Lamm →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const seasonalMoodboards = [
  {
    season: "Summer",
    src: "/assets/lora-lamm/moodboard-summer.png",
    width: 370,
    height: 259,
  },
  {
    season: "Spring",
    src: "/assets/lora-lamm/moodboard-spring.png",
    width: 342,
    height: 230,
  },
  {
    season: "Autumn",
    src: "/assets/lora-lamm/moodboard-autumn.png",
    width: 388,
    height: 239,
  },
  {
    season: "Winter",
    src: "/assets/lora-lamm/moodboard-winter.png",
    width: 383,
    height: 231,
  },
];

const loraCatalogSpreads = [
  {
    src: "/assets/lora-lamm/catalog/autumn.png",
    alt: "Autumn chapter opening and Lora Lamm fashion references",
    width: 406,
    height: 202,
  },
  {
    src: "/assets/lora-lamm/catalog/winter-01.png",
    alt: "Winter catalogue spread featuring La moda 1960 and Pirelli borsa per acqua calda",
    width: 406,
    height: 199,
  },
  {
    src: "/assets/lora-lamm/catalog/winter-02.png",
    alt: "Winter catalogue spread featuring Lora Lamm Christmas graphics",
    width: 406,
    height: 203,
  },
  {
    src: "/assets/lora-lamm/catalog/spring-01.png",
    alt: "Spring chapter opening with Lora Lamm floral illustrations",
    width: 407,
    height: 202,
  },
  {
    src: "/assets/lora-lamm/catalog/spring-02.png",
    alt: "Spring catalogue spread with floral editorial compositions",
    width: 408,
    height: 199,
  },
  {
    src: "/assets/lora-lamm/catalog/summer-01.png",
    alt: "Summer chapter opening featuring Tutto in acqua",
    width: 407,
    height: 203,
  },
  {
    src: "/assets/lora-lamm/catalog/summer-03.png",
    alt: "Summer catalogue spread with seaside illustration references",
    width: 409,
    height: 198,
  },
];

function SeasonalMoodboardGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`season-board-grid ${compact ? "season-board-grid--compact" : ""}`}>
      {seasonalMoodboards.map((board) => (
        <figure key={board.season}>
          <img
            src={board.src}
            alt={`${board.season} visual research for Stagioni in mostra`}
            width={board.width}
            height={board.height}
          />
          <span>{board.season}</span>
        </figure>
      ))}
    </div>
  );
}

function LoraLammProjectPage({ project }: { project: Project }) {
  return (
    <main className="subpage lora-case-page">
      <section className="lora-case-hero">
        <div className="subpage-inner">
          <SubpageHeader label="03 / 05" />
          <Label>UNIVERSITY · VISUAL & EDITORIAL DESIGN</Label>
          <div className="case-study-heading">
            <div>
              <h1>Stagioni in mostra</h1>
              <p>
                A visual identity and editorial communication project celebrating Lora Lamm through
                the changing rhythm, colors and atmosphere of the four seasons.
              </p>
            </div>
            <dl>
              <div>
                <dt>ROLE</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>TOOLS</dt>
                <dd>{project.tools}</dd>
              </div>
              <div>
                <dt>YEAR</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </div>
          <div className="lora-hero-composition">
            <figure className="lora-hero-poster">
              <img
                src="/assets/lora-lamm/exhibition-poster.png"
                alt="Stagioni in mostra exhibition poster dedicated to Lora Lamm"
                width="3506"
                height="4960"
              />
            </figure>
            <div className="lora-hero-details">
              <img
                src="/assets/lora-lamm/catalog-cover-spread.png"
                alt="Stagioni in mostra catalogue cover spread"
                width="1083"
                height="297"
              />
              <SeasonalMoodboardGrid compact />
            </div>
          </div>
        </div>
      </section>

      <section className="lora-overview">
        <div className="subpage-inner overview-grid">
          <Label>PROJECT OVERVIEW</Label>
          <h2>The challenge</h2>
          <p>{project.challenge}</p>
          <div className="overview-note">
            <span>MY CONTRIBUTION</span>
            <p>
              Visual research, concept development, seasonal palettes, typography, composition,
              exhibition communication, the catalogue cover and chapter, and adaptation across
              social formats.
            </p>
          </div>
        </div>
      </section>

      <section className="lora-concept">
        <div className="subpage-inner lora-section-grid">
          <div className="lora-section-copy">
            <Label>01 · RESEARCH & CONCEPT</Label>
            <h2>Four seasons, one visual story.</h2>
            <p>
              The research began with Lamm’s expressive figures, playful typography and bold use of
              color. Four moodboards translate these qualities into seasonal worlds: the energy of
              summer, the renewal of spring, the structure of autumn and the intimacy of winter.
            </p>
          </div>
          <div className="lora-moodboard">
            <SeasonalMoodboardGrid />
          </div>
        </div>
      </section>

      <section className="lora-identity">
        <div className="subpage-inner">
          <Label>02 · EXHIBITION IDENTITY</Label>
          <div className="lora-section-heading">
            <h2>A flexible identity built from contrast.</h2>
            <p>
              Cut-out silhouettes, overlapping letters and seasonal color blocks create a visual
              system that feels lively without reproducing Lamm’s work literally.
            </p>
          </div>
          <div className="lora-identity-grid">
            <figure>
              <img
                src="/assets/lora-lamm/exhibition-poster.png"
                alt="Front of the Stagioni in mostra exhibition communication"
                width="3506"
                height="4960"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="lora-editorial">
        <div className="subpage-inner">
          <Label>03 · EDITORIAL DESIGN</Label>
          <div className="lora-section-heading">
            <h2>The exhibition continues on the page.</h2>
            <p>
              The catalogue uses changing palettes, scale and rhythm to guide readers through the
              seasons while keeping the narrative and artworks at the center.
            </p>
          </div>
          <div className="lora-spreads">
            <figure>
              <img
                src="/assets/lora-lamm/catalog-cover-spread.png"
                alt="Catalogue cover and seasonal opening spread"
                width="1083"
                height="297"
              />
            </figure>
            <figure className="lora-catalog-introduction">
              <img
                src="/assets/lora-lamm/catalog/introduction.png"
                alt="Palette di un anno introductory catalogue chapter"
                width="630"
                height="612"
              />
            </figure>
            <div className="lora-catalog-gallery">
              {loraCatalogSpreads.map((spread) => (
                <figure key={spread.src}>
                  <img
                    src={spread.src}
                    alt={spread.alt}
                    width={spread.width}
                    height={spread.height}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lora-campaign">
        <div className="subpage-inner">
          <Label>04 · CAMPAIGN & SOCIAL FORMATS</Label>
          <div className="lora-section-heading">
            <h2>One identity, many points of contact.</h2>
            <p>
              I applied the exhibition language to a coordinated communication set including the
              campaign graphics, invitation, social formats, catalogue cover and a complete
              editorial chapter, adapting composition and information density to each context.
            </p>
          </div>
          <div className="lora-campaign-grid">
            <figure className="lora-campaign-banner">
              <img
                src="/assets/lora-lamm/facebook-banner.png"
                alt="Stagioni in mostra Facebook exhibition banner"
                width="1087"
                height="567"
              />
            </figure>
            <figure className="lora-campaign-invitation">
              <img
                src="/assets/lora-lamm/invitation-spread.png"
                alt="Stagioni in mostra invitation front and back"
                width="557"
                height="538"
              />
            </figure>
            <figure className="lora-campaign-story">
              <img
                src="/assets/lora-lamm/instagram-story.png"
                alt="Stagioni in mostra Instagram story invitation"
                width="186"
                height="792"
              />
            </figure>
            <figure className="lora-campaign-post">
              <img
                src="/assets/lora-lamm/instagram-quote.png"
                alt="Lora Lamm quote social post"
                width="537"
                height="720"
              />
            </figure>
            <figure className="lora-campaign-post">
              <img
                src="/assets/lora-lamm/instagram-exhibition.png"
                alt="Stagioni in mostra exhibition dates social post"
                width="536"
                height="717"
              />
            </figure>
            <figure className="lora-campaign-cover">
              <img
                src="/assets/lora-lamm/catalog-cover.png"
                alt="Stagioni in mostra catalogue cover"
                width="406"
                height="722"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="reflection lora-reflection">
        <div className="subpage-inner">
          <Label>05 · WHAT I LEARNED</Label>
          <h2>Consistency does not mean repetition.</h2>
          <p>
            Working across catalogue, invitation, poster and social formats taught me how one
            concept can remain recognizable while changing scale, rhythm and composition.
          </p>
          <div className="subpage-footer">
            <a href="#projects">← Back to all projects</a>
            <a href="#project-another">Another →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const anotherBenchmarks = [
  {
    src: "/assets/another/benchmark/neo.png",
    alt: "1X NEO humanoid robot benchmark analysis",
  },
  {
    src: "/assets/another/benchmark/figure.png",
    alt: "Figure AI humanoid robot benchmark analysis",
  },
  {
    src: "/assets/another/benchmark/heygen.png",
    alt: "HeyGen digital avatar benchmark analysis",
  },
  {
    src: "/assets/another/benchmark/igloo.png",
    alt: "Igloo Inc visual reference analysis",
  },
  {
    src: "/assets/another/benchmark/lusion.png",
    alt: "Lusion interaction reference analysis",
  },
  {
    src: "/assets/another/benchmark/lando.png",
    alt: "Digital visualization reference analysis",
  },
];

const anotherWireframes = [
  {
    src: "/assets/another/wireframes/home-desktop.png",
    alt: "Another homepage desktop wireframe documentation",
  },
  {
    src: "/assets/another/wireframes/home-mobile.png",
    alt: "Another homepage mobile wireframe documentation",
  },
  {
    src: "/assets/another/wireframes/catalog-desktop.png",
    alt: "Another catalogue desktop wireframe documentation",
  },
  {
    src: "/assets/another/wireframes/catalog-mobile.png",
    alt: "Another catalogue mobile wireframe documentation",
  },
  {
    src: "/assets/another/wireframes/activation-desktop.png",
    alt: "Another activation desktop wireframe documentation",
  },
  {
    src: "/assets/another/wireframes/activation-mobile.png",
    alt: "Another activation mobile wireframe documentation",
  },
];

function AnotherProjectPage({ project }: { project: Project }) {
  return (
    <main className="subpage another-page">
      <section className="another-hero">
        <div className="subpage-inner">
          <SubpageHeader label="04 / 05" />
          <Label>UNIVERSITY · SPECULATIVE SERVICE DESIGN</Label>
          <div className="another-heading">
            <div>
              <span className="another-status">WORK IN PROGRESS · 2050</span>
              <h1>
                Another<span>.</span>
              </h1>
              <p>
                A physical AI avatar designed to take on everyday activities, support people with
                limited time or mobility, and return something increasingly valuable: time.
              </p>
            </div>
            <dl>
              <div>
                <dt>COURSE</dt>
                <dd>Visual Communication & Interface Design</dd>
              </div>
              <div>
                <dt>ROLE</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>TOOLS</dt>
                <dd>{project.tools}</dd>
              </div>
              <div>
                <dt>YEAR</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </div>
          <figure className="another-hero-visual">
            <img
              src="/assets/another/design-system.png"
              alt="Another visual design system with avatar diagram, typography, palette and interface language"
              width="1603"
              height="1242"
            />
          </figure>
        </div>
      </section>

      <section className="another-overview">
        <div className="subpage-inner overview-grid">
          <Label>PROJECT OVERVIEW</Label>
          <h2>The challenge</h2>
          <p>{project.challenge}</p>
          <div className="overview-note">
            <span>MY CONTRIBUTION</span>
            <p>
              Benchmark research, service concept, target definition, visual research, design
              system, information architecture, responsive wireframes and documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="another-concept">
        <div className="subpage-inner">
          <Label>01 · SERVICE CONCEPT</Label>
          <div className="another-section-heading">
            <h2>Delegate tasks. Keep control. Reclaim time.</h2>
            <p>
              Another generates a physical avatar from a scan of the user’s body, voice, gestures
              and micro-expressions. Depending on the selected mode, it can be guided directly or
              act with greater autonomy while remaining configurable and stoppable by the user.
            </p>
          </div>
          <div className="another-pillars">
            <article>
              <span>01</span>
              <h3>Time</h3>
              <p>
                Repetitive and practical tasks can be delegated to create space for what matters.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Control</h3>
              <p>The user chooses the mode, level of autonomy and actions that can be performed.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Trust</h3>
              <p>
                Clear status, permissions and support make delegation understandable and reversible.
              </p>
            </article>
          </div>
          <div className="another-flow" aria-label="Another service flow">
            <span>SCAN</span>
            <i>→</i>
            <span>CONFIGURE</span>
            <i>→</i>
            <span>DELEGATE</span>
            <i>→</i>
            <span>MONITOR</span>
          </div>
        </div>
      </section>

      <section className="another-research">
        <div className="subpage-inner">
          <Label>02 · RESEARCH & BENCHMARK</Label>
          <div className="another-section-heading">
            <h2>Between physical robotics and digital presence.</h2>
            <p>
              The benchmark combines humanoid robotics, synthetic avatars and immersive digital
              references to understand body, expression, trust, interaction and the representation
              of future technology.
            </p>
          </div>
          <div className="another-benchmark-grid">
            {anotherBenchmarks.map((benchmark) => (
              <figure key={benchmark.src}>
                <img src={benchmark.src} alt={benchmark.alt} width="224" height="316" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="another-identity">
        <div className="subpage-inner">
          <Label>03 · VISUAL DIRECTION & SYSTEM</Label>
          <div className="another-section-heading">
            <h2>A calm interface for a radical idea.</h2>
            <p>
              Icy white, night blue, holographic cyan and electric purple create a technological
              language that remains controlled and reassuring. Unbounded leads display typography,
              supported by IBM Plex Sans and IBM Plex Mono.
            </p>
          </div>
          <div className="another-identity-grid">
            <figure>
              <img
                src="/assets/another/moodboard.jpg"
                alt="Another visual moodboard with futuristic imagery, palette and typography"
                width="2608"
                height="1444"
              />
            </figure>
            <figure>
              <img
                src="/assets/another/design-system.png"
                alt="Another design system"
                width="1603"
                height="1242"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="another-wireframes">
        <div className="subpage-inner">
          <Label>04 · INFORMATION ARCHITECTURE & WIREFRAMES</Label>
          <div className="another-section-heading">
            <h2>Making a complex service understandable.</h2>
            <p>
              The site architecture moves from discovery to catalogue, activation, consultation and
              support. Desktop and mobile flows explain what the avatar can do and what the user
              controls at every stage.
            </p>
          </div>
          <figure className="another-sitemap">
            <img
              src="/assets/another/wireframes/sitemap.png"
              alt="Another website page tree"
              width="1920"
              height="1080"
            />
          </figure>
          <div className="another-wireframe-grid">
            {anotherWireframes.map((wireframe) => (
              <figure key={wireframe.src}>
                <img src={wireframe.src} alt={wireframe.alt} width="1920" height="1080" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="another-next">
        <div className="subpage-inner">
          <Label>05 · NEXT STEPS</Label>
          <h2>The system is defined. The interface is taking shape.</h2>
          <p>
            Research, concept, identity and responsive wireframes are complete. The next phase
            focuses on high-fidelity interface design, interaction states, prototyping and the
            responsive website implementation.
          </p>
          <div className="subpage-footer">
            <a href="#projects">← Back to all projects</a>
            <a href="#project-birthday-invitation">Birthday invitation →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectPage({ project }: { project: Project }) {
  if (project.slug === "equestrian-identity") {
    return <PosterProjectPage project={project} />;
  }
  if (project.slug === "lora-lamm") {
    return <LoraLammProjectPage project={project} />;
  }
  if (project.slug === "another") {
    return <AnotherProjectPage project={project} />;
  }

  const steps = [
    {
      key: "concept" as const,
      label: "01 · CONCEPT & VISUAL IDENTITY",
      title: "Before the interface, a direction.",
      text: project.concept,
    },
    {
      key: "wireframe" as const,
      label: "02 · WIREFRAME & INFORMATION ARCHITECTURE",
      title: "Giving content a clear structure.",
      text: project.wireframe,
    },
    {
      key: "interface" as const,
      label: "03 · MOCKUP & UI DESIGN",
      title: "From structure to experience.",
      text: project.interface,
    },
    {
      key: "result" as const,
      label: "04 · DEVELOPMENT & FINAL RESULT",
      title: "A system brought to life.",
      text: project.result,
    },
  ];
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="subpage case-study-page">
      <div className="case-study-hero">
        <div className="subpage-inner">
          <SubpageHeader label={`0${index + 1} / 05`} />
          <Label>{project.kind.toUpperCase()} · CASE STUDY</Label>
          <div className="case-study-heading">
            <div>
              <h1>{project.title}</h1>
              <p>
                {project.slug === "hemnes"
                  ? "A responsive website for IKEA HEMNES, developed by a team of three from visual direction and Figma prototype to WordPress."
                  : "A considered visual experience built to transform ideas, information and functionality into one coherent system."}
              </p>
            </div>
            <dl>
              <div>
                <dt>ROLE</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>TOOLS</dt>
                <dd>{project.tools}</dd>
              </div>
              <div>
                <dt>YEAR</dt>
                <dd>{project.year ?? "[Year]"}</dd>
              </div>
            </dl>
          </div>
          <ProcessVisual step="result" project={project} />
        </div>
      </div>
      <section className="project-overview">
        <div className="subpage-inner overview-grid">
          <Label>PROJECT OVERVIEW</Label>
          <h2>The challenge</h2>
          <p>{project.challenge}</p>
          <div className="overview-note">
            <span>MY CONTRIBUTION</span>
            <p>
              {project.slug === "hemnes"
                ? "Visual research, moodboard, font and color selection, grid definition and high-fidelity interface design in Figma."
                : "Research, concept, information architecture, visual design and final prototype."}
            </p>
          </div>
        </div>
      </section>
      <div className="process-list">
        {steps.map((step, stepIndex) => (
          <section
            className={`process-step ${stepIndex % 2 ? "process-step--reverse" : ""}`}
            key={step.key}
          >
            <div className="subpage-inner process-step__inner">
              <div className="process-copy">
                <Label>{step.label}</Label>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
              <ProcessVisual step={step.key} project={project} />
            </div>
          </section>
        ))}
      </div>
      <section className="reflection">
        <div className="subpage-inner">
          <Label>REFLECTION</Label>
          <h2>What I take with me.</h2>
          <p>
            This project allowed me to follow an idea from its initial direction to the final
            result, connecting strategic thinking, visual sensitivity and attention to the people
            who would use it.
          </p>
          <div className="subpage-footer">
            <a href="#projects">← Back to all projects</a>
            <a href={`#project-${nextProject.slug}`}>{nextProject.title} →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Portfolio() {
  return (
    <main>
      <Hero />
      <About />
      <Nolo />
      <Projects />
      <Mindset />
      <Contact />
    </main>
  );
}

function useRoute() {
  const [route, setRoute] = useState(window.location.hash || "#home");

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash || "#home");
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  useEffect(() => {
    if (route === "#experience" || route === "#nolo-study" || route.startsWith("#project-")) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    window.setTimeout(() => {
      document.querySelector(route)?.scrollIntoView();
    }, 0);
  }, [route]);

  return route;
}

export default function App() {
  const route = useRoute();

  if (route === "#experience") return <ExperiencePage />;
  if (route === "#nolo-study") return <NoloStudyPage />;
  if (route.startsWith("#project-")) {
    const project = projects.find((item) => route === `#project-${item.slug}`);
    if (project) return <ProjectPage project={project} />;
  }
  return <Portfolio />;
}

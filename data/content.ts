// ─────────────────────────────────────────────────────────────
// ALL EDITABLE SITE CONTENT LIVES HERE.
// Replace the [PLACEHOLDER] values with your real info.
// You should not need to touch component files to update copy.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Aziz Kallel",
  role: "Personal Branding Expert",
  tagline: "I turn founders and creators into brands people can't stop watching.",
  subheading:
    "Strategy, content systems, and storytelling for people ready to be known for something.",
  email: "aziz.kallel@esen.tn",
  location: "Based in Tunis · Working with clients worldwide",
  availability: "Booking Q4 2026",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/_azizkallel_/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/azizkallel/]" },
    { label: "TikTok", href: "https://www.tiktok.com/@kallelaziz" },
  ],
  bookingUrl: "https://cal.com/aziz-kallel",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export type TrustedBrand = {
  name: string;
  // Path to a logo/photo in /public, e.g. "/brands/acme.png".
  // Leave empty to show the brand's initials instead.
  logo?: string;
};

export const trustedBy: TrustedBrand[] = [
  { name: "algorithmics.tn", logo: "/brands/algo.png" },
  { name: "MakeWear", logo: "/brands/mw.jpg" },
  { name: "Space Talent", logo: "/brands/spacetalent.jpg" },
  { name: "Malek Ben Achour", logo: "/brands/maleka.jpg" },
  { name: "Sarah Lamine", logo: "/brands/sarah.jpg" },
  { name: "dr fabrice bianchi", logo: "/brands/doc.jpg" },
];

export const ribbonWords = [
  "PERSONAL BRANDING",
  "CONTENT STRATEGY",
  "FILMING",
  "SHORT-FORM VIDEO",
  "STORYTELLING",
  "GROWTH",
];

export const services = [
  {
    title: "Personal Brand Strategy",
    description:
      "Positioning, messaging, and content pillars that give your brand a clear direction and make every piece of content purposeful.",
    tag: "01",
  },
  {
    title: "Content Planning",
    description:
      "Monthly content systems, content calendars, and strategic ideas tailored to your expertise and audience.",
    tag: "02",
  },
  {
    title: "Short-Form Video Direction",
    description:
      "Hooks, scripts, and editing direction built for retention — made for Reels, TikTok, and YouTube Shorts.",
    tag: "03",
  },
  {
    title: "Audience Growth",
    description:
      "Build a loyal audience through strategic content, consistent messaging, and organic growth systems designed for long-term authority.",
    tag: "04",
  },
  {
    title: "Visual Identity",
    description:
      "A visual system — colors, type, templates — so your brand is instantly recognizable across every platform.",
    tag: "05",
  },
  {
    title: "1:1 Coaching",
    description:
      "Ongoing strategy sessions to keep your brand sharp as your audience, offers, and goals evolve.",
    tag: "06",
  },
];

export type Project = {
  slug: string;
  client: string;
  result: string;
  category: string;
  summary: string;
  color: "coral" | "violet" | "yellow";
  year: string;
  details: string[];
  // Path to a video file in /public, e.g. "/work/project-one.mp4".
  // Leave empty until you upload real clips — a placeholder card shows instead.
  video?: string;
  // Optional poster image shown before the video plays / while it loads.
  poster?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    client: "MakeWear",
    result: "Turning ideas into brands",
    category: "PERSONAL BRANDING",
    summary:
      "Rebuilt a founder's public presence from scratch with a new positioning and a daily content system.",
    color: "coral",
    year: "2025",
    details: [
      "Audited existing content and competitors to find an open positioning gap.",
      "Built a content pillar system covering education, opinion, and behind-the-scenes.",
      "Directed 40+ short-form videos over 90 days with a consistent hook framework.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/Makewear.mp4",
    poster: "",
  },
  {
    slug: "project-two",
    client: "Dr fabrice bianchi",
    result: "Building trust through content",
    category: "Short-Form Video",
    summary:
      "Took a technical founder camera-shy and unsure what to post, to a recognizable voice in their niche.",
    color: "violet",
    year: "2024",
    details: [
      "Developed a signature format that made complex topics easy to watch.",
      "Wrote and storyboarded scripts weekly, coached on-camera delivery.",
      "Set up a repurposing pipeline turning one shoot into a week of content.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/Dentiste2.mp4",
    poster: "",
  },
  {
    slug: "project-three",
    client: "Sarah Lamine",
    result: "The face behind the expertise",
    category: "Ghostwriting · Positioning",
    summary:
      "Repositioned a consultant from generalist to category authority through consistent written content.",
    color: "yellow",
    year: "2025",
    details: [
      "Defined a narrow, ownable point of view distinct from competitors.",
      "Ghostwrote 3 posts a week aligned to that positioning for 6 months.",
      "Built a lead magnet funnel directly from top-performing posts.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/Sarah%20Lamine.mp4",
    poster: "",
  },
  {
    slug: "project-four",
    client: "Algorithmics",
    result: "Making education impossible to ignore",
    category: "Launch Strategy",
    summary:
      "Built the brand narrative and content push behind a coach's first cohort-based course launch.",
    color: "coral",
    year: "2025",
    details: [
      "Mapped a 4-week pre-launch content arc to build anticipation.",
      "Directed testimonial and proof-driven content to build trust fast.",
      "Coordinated launch-week content across every platform simultaneously.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/Algorithmics.mp4",
    poster: "",
  },

    {
    slug: "project-five",
    client: "Scalini Agency",
    result: "Scaling a Brand",
    category: "Launch Strategy",
    summary:
      "Built the brand narrative and content push behind a coach's first cohort-based course launch.",
    color: "coral",
    year: "2025",
    details: [
      "Mapped a 4-week pre-launch content arc to build anticipation.",
      "Directed testimonial and proof-driven content to build trust fast.",
      "Coordinated launch-week content across every platform simultaneously.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/Bechir.mp4",
    poster: "",
  },

      {
    slug: "project-six",
    client: "SpaceTalent",
    result: "Preparing Talent for Global Opportunities",
    category: "Launch Strategy",
    summary:
      "Built the brand narrative and content push behind a coach's first cohort-based course launch.",
    color: "coral",
    year: "2025",
    details: [
      "Mapped a 4-week pre-launch content arc to build anticipation.",
      "Directed testimonial and proof-driven content to build trust fast.",
      "Coordinated launch-week content across every platform simultaneously.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/SpaceTalent.mp4",
    poster: "",
  },

        {
    slug: "project-seven",
    client: "Malek Ben Achour",
    result: "The man behind the brand",
    category: "Launch Strategy",
    summary:
      "Built the brand narrative and content push behind a coach's first cohort-based course launch.",
    color: "coral",
    year: "2026",
    details: [
      "Mapped a 4-week pre-launch content arc to build anticipation.",
      "Directed testimonial and proof-driven content to build trust fast.",
      "Coordinated launch-week content across every platform simultaneously.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/malek.mp4",
    poster: "",
  },

  
         {
    slug: "project-eight",
    client: "eng.salah.almarzooqi",
    result: "Knowledge worth sharing",
    category: "Launch Strategy",
    summary:
      "Built the brand narrative and content push behind a coach's first cohort-based course launch.",
    color: "coral",
    year: "2025",
    details: [
      "Mapped a 4-week pre-launch content arc to build anticipation.",
      "Directed testimonial and proof-driven content to build trust fast.",
      "Coordinated launch-week content across every platform simultaneously.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/Eng.mp4",
    poster: "",
  },

         {
    slug: "project-nine",
    client: "Lamis Chebbi ",
    result: "Straight from Google I/O",
    category: "Launch Strategy",
    summary:
      "Built the brand narrative and content push behind a coach's first cohort-based course launch.",
    color: "coral",
    year: "2026",
    details: [
      "Mapped a 4-week pre-launch content arc to build anticipation.",
      "Directed testimonial and proof-driven content to build trust fast.",
      "Coordinated launch-week content across every platform simultaneously.",
    ],
    video: "https://pub-30b255dd2dc34159ba4c8c0ff254a3f4.r2.dev/Google.mp4",
    poster: "",
  },
];

export const process = [
  {
    step: "Discovery",
    description:
      "We dive into your story, goals, audience, and expertise to uncover what makes you worth following.",
  },
  {
    step: "Positioning & Strategy",
    description:
      "We define your positioning, messaging, and content pillars so every piece of content has a purpose.",
  },
  {
    step: "Content Production",
    description:
      "From content planning and scripting to filming and editing, we create content designed to educate, engage, and build trust.",
  },
  {
    step: "Optimization & Growth",
    description:
      "We analyze performance, refine the strategy, and double down on what resonates with your audience.",
  },
];

export const about = {
  photo: "/about/Aziz.jpg",
  bio: "I'm Aziz Kallel, helping founders, coaches, consultants, and professionals turn their expertise into a brand people recognize and trust. By combining strategy, content creation, filming, and storytelling, I help ambitious people build authority online and stand out in their industry.",
  stats: [
    { value: "50+", label: "Videos Edited" },
    { value: "3 yrs", label: "Experience" },
    { value: "30+", label: "Happy clients" },
  ],
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  // Path to a photo in /public, e.g. "/testimonials/foued.jpg".
  // Leave empty to show initials instead.
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Youssef Romdhani",
    role: "Founder",
    quote:
      "Bro you are an artist.",
    avatar: "/testimonials/youssef.jpg",
  },
  {
    name: "MakeWear",
    role: "Brand",
    quote:
      "From planning to filming and editing, the process was smooth and professional. We finally had a content system we could stick to",
    avatar: "/testimonials/mw.jpg",
  },
  {
    name: "Malek Ben Achour",
    role: "Textile Expert",
    quote:
      "Aziz brings a unique combination of creativity and execution. His ability to transform ideas into content and build a clear brand presence makes him a valuable partner for any entrepreneur looking to stand out.",
    avatar: "/testimonials/maleka.jpg",
  },
  {
    name: "Lamis Chebbi",
    role: "Software engineer | Speaker",
    quote:
      "Aziz did an excellent job editing my Google I/O interview content. The final video was engaging, professional, and captured the key moments perfectly while keeping the pacing dynamic and easy to follow.",
    avatar: "/testimonials/Lamis.jpg",
  },
  {
    name: "Algorithmics",
    role: "Academy",
    quote:
      "What stood out about Aziz was his ability to manage every stage of content creation. From content strategy and creative direction to editing and final production, he consistently delivered high-quality videos that reflected our brand.",
    avatar: "/testimonials/algo.png",
  },
];

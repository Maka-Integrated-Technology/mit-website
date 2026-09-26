import {
  Award,
  BarChart2,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle,
  Code2,
  Database,
  Eye,
  GraduationCap,
  Globe,
  Heart,
  Landmark,
  Lightbulb,
  Map,
  Network,
  PackageOpen,
  Palette,
  Rocket,
  Search,
  Settings,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconText = {
  icon: LucideIcon;
  label: string;
};

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceCategory = {
  icon: LucideIcon;
  title: string;
  summary: string;
  items: string[];
};

export type ProcessStep = {
  step: number;
  icon: LucideIcon;
  title: string;
};

export type TalentProgram = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Learning", href: "/learning" },
  { label: "Impact", href: "/impact" },
];

export const CONTACT_HREF = "/#contact";

export const CONTACT_EMAIL = "info@makatechlimited.com";

export const SPECIALTIES: IconText[] = [
  { icon: Code2, label: "Software Development" },
  { icon: Wifi, label: "ICT & Telecommunications" },
  { icon: Database, label: "Data Analytics" },
  { icon: Briefcase, label: "Digital Transformation" },
  { icon: PackageOpen, label: "Product Innovation" },
  { icon: GraduationCap, label: "Technology Education" },
  { icon: Users, label: "Talent Development" },
  { icon: Lightbulb, label: "Business Technology Consulting" },
];

export const VALUES: Value[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and emerging technology to develop solutions that create real, lasting value.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering high-quality services and products across everything we do.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and unwavering professionalism.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, partnerships, and shared success to achieve more.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We foster a culture of growth, development, and lifelong learning within our team.",
  },
  {
    icon: Target,
    title: "Customer Success",
    description:
      "Our clients' success is at the center of every decision, strategy, and solution we create.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "We build solutions that positively transform lives, businesses, and communities worldwide.",
  },
];

export const SERVICES: ServiceCategory[] = [
  {
    icon: Code2,
    title: "Technology Solutions",
    summary:
      "Custom software, enterprise tools, automation, and cloud systems.",
    items: [
      "Software Development",
      "Web Application Development",
      "Mobile Application Development",
      "Custom Enterprise Solutions",
      "System Integration",
      "Business Process Automation",
      "Digital Transformation Services",
      "Cloud-Based Solutions",
    ],
  },
  {
    icon: Wifi,
    title: "ICT & Telecommunications Services",
    summary:
      "Reliable infrastructure, connectivity, communication, and support.",
    items: [
      "ICT Consulting",
      "Network Infrastructure Solutions",
      "Telecommunications Solutions",
      "Internet Connectivity Services",
      "Communication Technology Services",
      "Technology Support and Maintenance",
      "Communication Equipment Installation",
      "Wireless & Satellite Communication Solutions",
    ],
  },
  {
    icon: BarChart2,
    title: "Data & Business Intelligence",
    summary: "Analytics, reporting, warehousing, and performance visibility.",
    items: [
      "Data Analytics",
      "Data Warehousing",
      "Business Intelligence Solutions",
      "Reporting and Dashboard Development",
      "Data Management Services",
      "Performance Monitoring Systems",
    ],
  },
  {
    icon: Briefcase,
    title: "Project Management & Technology Consulting",
    summary: "Digital strategy, advisory, implementation, and change support.",
    items: [
      "ICT Project Management",
      "Technology Advisory Services",
      "Business Systems Consulting",
      "Digital Strategy Development",
      "Technology Implementation Support",
      "Organisational Digital Transformation",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    summary:
      "Professional programs that help teams grow practical digital skills.",
    items: [
      "Technology Training Programs",
      "Corporate ICT Training",
      "Professional Development Workshops",
      "Digital Skills Development Programs",
      "Technical Certification Preparation",
      "Technology Awareness Programs",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, icon: Search, title: "Product Research" },
  { step: 2, icon: Map, title: "Product Strategy" },
  { step: 3, icon: Settings, title: "Product Management" },
  { step: 4, icon: Palette, title: "UI/UX Design" },
  { step: 5, icon: Code2, title: "Software Engineering" },
  { step: 6, icon: CheckCircle, title: "Quality Assurance" },
  { step: 7, icon: Rocket, title: "Product Launch & Growth" },
  { step: 8, icon: Wrench, title: "Maintenance & Support" },
];

export const LEARNING_AREAS = [
  "Product Management",
  "Project Management",
  "Software Development",
  "UI/UX Design",
  "Data Analytics",
  "Cybersecurity",
  "Artificial Intelligence",
  "Digital Marketing",
  "Business Analysis",
  "Technology Entrepreneurship",
  "Mobile Development",
  "Virtual Assistance",
  "Frontend Development",
  "Backend Development",
  "Video Editing",
  "Social Media",
];

export const TALENT_PROGRAMS: TalentProgram[] = [
  {
    icon: Briefcase,
    title: "Internship Programs",
    description: "Hands-on industry experience",
  },
  {
    icon: GraduationCap,
    title: "Graduate Trainee Programs",
    description: "Structured career entry pathways",
  },
  {
    icon: Heart,
    title: "Volunteer Opportunities",
    description: "Give back while you grow",
  },
  {
    icon: Users,
    title: "Tech Mentorship Programs",
    description: "Guidance from industry experts",
  },
  {
    icon: TrendingUp,
    title: "Career Development Programs",
    description: "Accelerate your professional growth",
  },
  {
    icon: Building2,
    title: "Industry Experience Programs",
    description: "Real-world project exposure",
  },
  {
    icon: Star,
    title: "Professional Coaching",
    description: "One-on-one performance coaching",
  },
  {
    icon: Award,
    title: "Leadership Development",
    description: "Building tomorrow's tech leaders",
  },
];

export const AUDIENCES: IconText[] = [
  { icon: Rocket, label: "Startups & Founders" },
  { icon: Building2, label: "Small & Medium Enterprises" },
  { icon: Briefcase, label: "Corporate Organizations" },
  { icon: BookOpen, label: "Educational Institutions" },
  { icon: Landmark, label: "Government Agencies" },
  { icon: Heart, label: "Non-Governmental Organizations" },
  { icon: Globe, label: "Healthcare Providers" },
  { icon: Network, label: "International Organizations" },
  { icon: Lightbulb, label: "Technology Professionals" },
  { icon: GraduationCap, label: "Students & Graduates" },
  { icon: TrendingUp, label: "Investors & Innovation Partners" },
  { icon: Users, label: "Global Business Communities" },
];

export const IMPACT_STATS = [
  { value: "16+", label: "Learning Disciplines" },
  { value: "8", label: "Talent Programs" },
  { value: "5", label: "Service Categories" },
  { value: "12+", label: "Audiences Served" },
];

export const PURPOSE_CARDS = [
  {
    icon: Target,
    kicker: "Mission",
    title: "Our Mission",
    body: "To deliver innovative, reliable, and scalable technology solutions while empowering individuals and organizations through digital transformation, technology education, product innovation, and professional development.",
  },
  {
    icon: Eye,
    kicker: "Vision",
    title: "Our Vision",
    body: "To become a globally recognized technology, innovation, and product development company that builds transformative digital solutions, develops world-class technology talent, and creates lasting impact across industries and communities worldwide.",
  },
];

export const BRAND_POSITIONS = [
  "Technology Solutions Company",
  "Product Development & Innovation Ecosystem",
  "Technology Education & Learning Company",
  "Talent Development Organization",
  "Innovation-Driven Technology Brand",
  "Global Technology Company",
  "Digital Transformation Partner",
  "Future-Focused Technology Brand",
];

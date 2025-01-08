import React, { useState, useEffect } from 'react';

// Custom icon components for project types
const WebIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12h18M12 3v18M12 12a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18.01" />
  </svg>
);

const MLIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const IoTIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 ```javascript
      2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const projects = [
    {
      title: "Catshop App JollyCat",
      role: "Frontend & Backend Developer",
      date: "Nov 2023 - Jun 2024",
      tech: ["Kotlin", "SQLite", "Google Cloud Maps API"],
      points: [
        "Browse and purchase cat-related products.",
        "Google Maps integration to find nearby pet stores.",
        "Local data storage with SQLite for offline access."
      ],
      color: "from-pink-500/20 to-purple-500/20",
      image: "https://picsum.photos/200/300?random=1", // Random image URL
      github: "https://github.com/adamilham-dev/catshop-app" // GitHub link
    },
    {
      title: "Cancer Detection App",
      role: "Frontend & Backend Developer",
      date: "Mar 2024 - Jun 2024",
      tech: ["Kotlin", "TensorFlow", "RoomDB", "Jetpack Compose"],
      points: [
        "Cancer detection using TensorFlow-based image analysis.",
        "Local storage of diagnosis results with RoomDB.",
        "Modern UI with Jetpack Compose for seamless navigation."
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      image: "https://picsum.photos/200/300?random=2", // Random image URL
      github: "https://github.com/adamilham-dev/cancer-detection-app" // GitHub link
    },
    {
      title: "Web-Based Music Platform Willify",
      role: "Fullstack Web Developer",
      date: "Apr 2024 - Jul 2024",
      tech: ["HTML", "CSS", "JavaScript", "Vanilla JS"],
      points: [
        "Create and manage custom music playlists.",
        "Search functionality for exploring tracks.",
        "Clean and responsive UI for seamless browsing across devices."
      ],
      color: "from-green-500/20 to-emerald-500/20",
      image: "https://picsum.photos/200/300?random=3", // Random image URL
      github: "https://github.com/adamilham-dev/willify-music-platform" // GitHub link
    },
    {
      title: "Nutrition App DiaryMacro",
      role: "Project Leader",
      date: "Sep 2024 - Present",
      tech: ["Swift", "SwiftUI", "Machine Learning", "Firebase", "RestAPI"],
      points: [
        "Macronutrient tracking through meal logging.",
        "AI-based food image recognition with Machine Learning.",
        "Real-time data synchronization using Firebase."
      ],
      color: "from-orange-500/20 to-red-500/20",
      image: "https://picsum.photos/200/300?random=4", // Random image URL
      github: "https://github.com/adamilham-dev/diarymacro" // GitHub link
    },
    {
      title: "IoT Smart Digital Lock App Accessio",
      role: "Project Leader",
      date: "Sep 2024 - Present",
      tech: ["Internet of Things", "Flutter", "Python", "Firebase", "RestAPI"],
      points: [
        "Control and monitor smart locks remotely using WiFi or Bluetooth.",
        "Real-time access logs and notifications with Firebase.",
        "Secure communication with IoT devices using REST APIs."
      ],
      color: "from-violet-500/20 to-indigo-500/20",
      image: "https://picsum.photos/200/300?random=5", // Random image URL
      github: "https://github.com/adamilham-dev/accessio" // GitHub link
    },
    {
      title: "Book Store App GRameJia",
      role: "Frontend & Backend Developer",
      date: "Sep 2024 - Present",
      tech: ["Swift", "CoreData"],
      points: [
        "Browse and purchase books from various genres.",
        "Offline access to personal library using CoreData.",
        "Manage and review favorite books."
      ],
      color: "from-yellow-500/20 to-amber-500/20",
      image: "https://picsum.photos/200/300?random=6", // Random image URL
      github: "https://github.com/adamilham-dev/gramejia" // GitHub link
    }
].map(project => ({
  ...project,
  category: project.tech.some(t => t.includes("Machine Learning")) ? "ml" :
           project.tech.some(t => t.includes("IoT")) ? "iot" :
           project.tech.some(t => ["Swift", "Kotlin", "Flutter"].includes(t)) ? "mobile" : "web"
}));

const categories = [
  { id: "all", label: "All Projects", icon: null },
  { id: "web", label: "Web Development", icon: WebIcon },
  { id: "mobile", label: "Mobile Apps", icon: MobileIcon },
  { id: "ml", label: "Machine Learning", icon: MLIcon },
  { id: "iot", label: "IoT", icon: IoTIcon }
];

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(projects);

  useEffect(() => {
    setVisibleProjects(
      activeCategory === "all" 
        ? projects 
        : projects.filter(p => p.category === activeCategory)
    );
  }, [activeCategory]);

  const ProjectCard = ({ project }) => (
    <div 
      className="group bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{ animation: 'fadeIn 0.5s ease-out' }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
      
      <div className="relative p-6 space-y-4">
        {/* Responsive Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-32 object-cover rounded-md mb-4" // Adjust height as needed
        />
        
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="text-purple-400 font-medium">
            {project.role} • {project.date}
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">
            View on GitHub
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-2 text-gray-300">
          {project.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-purple-400">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of recent projects showcasing expertise in mobile and web application development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${activeCategory === id 
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              {Icon && <Icon />}
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{
            '--stagger-delay': '100ms',
          }}
        >
          {visibleProjects.map((project , index) => (
            <ProjectCard 
              key={project.title} 
              project={project}
              style={{
                animationDelay: `calc(var(--stagger-delay) * ${index})`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
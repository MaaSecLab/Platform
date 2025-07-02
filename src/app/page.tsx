import /*useState, useEffect*/ "react";
import {
  Laptop,
  Lightbulb,
  Book,
  Monitor,
  Terminal,
  Users,
  Github,
} from "lucide-react";
import Navbar from "../app/components/Navbar";
import Image from "next/image";
import Footer from "../app/components/Footer";

export default function Home() {
  //const [_isMenuOpen, _setIsMenuOpen] = useState(false);
  //const [_scrolled, _setScrolled] = useState(false);
  //const [_activeSection, _setActiveSection] = useState("");

  /*
  useEffect(() => {
    const handleScroll = () => {
      set_scrolled(window.scrollY > 50);
      
      // Get current section
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 50; // Adjusted for earlier activation
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = sectionElement.getAttribute("id");

        // Ensure active section is updated more promptly when in range, 
        // currently the offset is broken so we'll have to fix it before uncommenting
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          //setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  */

  // Rest of your data constants remain the same

  const activities = [
    {
      icon: <Terminal className="w-12 h-12 mb-4 text-green-600" />,
      title: "Competitive Programming",
      description:
        "Participate in algorithmic problem-solving contests and hackathons",
    },
    {
      icon: <Laptop className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Project Development",
      description:
        "Collaborate on open-source software projects and build innovative solutions",
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-purple-400" />,
      title: "Tech Talks & Seminars",
      description:
        "Attend guest lectures and seminars to explore emerging tech trends",
    },
    {
      icon: <Book className="w-12 h-12 mb-4 text-brown-400" />,
      title: "Study Groups",
      description:
        "Join study sessions to enhance your understanding of computer science topics",
    },
    {
      icon: <Monitor className="w-12 h-12 mb-4 text-red-400" />,
      title: "Hackathons",
      description:
        "Compete in team-based hackathons to develop creative tech solutions",
    },
    {
      icon: <Lightbulb className="w-12 h-12 mb-4 text-yellow-400" />,
      title: "Innovation Challenges",
      description:
        "Collaborate with peers to brainstorm and develop creative solutions to various challenges",
    },
  ];

  return (
    <div className="min-h-screen text-black bg-white flex flex-col">
      <Navbar />

      {/* Main content wrapper */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 text-center relative -mt-32">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-archivo">
              <span className="text-black block">ACM Student Chapter</span>
              <span className="text-black block">MAASEC</span>
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 font-archivo">
              Empowering students through technology and cybersecurity education
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="group bg-white border border-gray-700 px-8 py-3 rounded hover:border-black hover:text-black transition-all duration-300 font-archivo"
              >
                Join Operation
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative -mt-64">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center font-archivo text-black-400">
              About Us
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-black mb-6 font-archivo">
                We are a group of students and professionals united under the
                ACM banner, dedicated to fostering a community of learners and
                innovators. Our mission is to promote hands-on experience,
                collaborative learning, and skill development across various
                fields, empowering everyone to grow and thrive in the
                ever-evolving world of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Operations Section (previously What We Do) */}
        <section id="operations" className="py-20 relative bg-white/100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-archivo text-black">
              Operations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white/100 p-6 rounded-lg border border-black/20 hover:border-black-400 transition-all duration-300 text-center group"
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-archivo text-black-400">
                    {activity.title}
                  </h3>
                  <p className="text-black">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same */}

        {/* Contact Section */}
        <section id="contact" className="py-20 relative bg-white/100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 font-archivo text-black">
              Join The Operation
            </h2>
            <p className="text-xl text-black mb-8 font-archivo">
              Ready to explore the frontiers of technology and innovation?
            </p>

            <div className="flex justify-center items-center gap-4">
              <a
                href="https://github.com/MaaSecLab"
                className="flex items-center justify-center w-12 h-12 hover:bg-gray-200 transition-colors rounded"
              >
                <Image
                  src="/Platform/github.svg"
                  width={40}
                  height={40}
                  className="text-black"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://discord.com/invite/ghpWe7wawV"
                className="flex items-center justify-center w-12 h-12 hover:bg-gray-200 transition-colors rounded"
              >
                <Image
                  src="/Platform/discord.svg"
                  width={40}
                  height={40}
                  alt="Discord"
                />
              </a>
              <a
                href="https://ctftime.org/team/365940"
                className="flex items-center justify-center w-12 h-12 hover:bg-gray-200 transition-colors rounded"
              >
                <Image
                  src="/Platform/ctftime.svg"
                  width={40}
                  height={40}
                  alt="CTFtime"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

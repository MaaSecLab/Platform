
import { /*useState, useEffect*/} from "react";
import { Laptop, Lightbulb, Book, Monitor, Terminal,Users, Github} from "lucide-react";
import Navbar from "../app/components/Navbar";
import Image from "next/image";
import Footer from "../app/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maasec.com",
  description: "Official website of ACM Student chapter MaaSec",
};


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

  const wyd = [
    {
      picture:"/Platform/brightlands_sponsor.jpeg",
      description: "🏆 MaaSec awarded TheBakerz the MaaSec Award at the Brightlands Startup Challenge for their zero-commission platform " +
      "supporting local bakeries. We’re excited to provide security consulting and penetration testing to help them grow securely. "
    },
    {
      picture:"/Platform/workshop.jpeg",
      description: "⚙️ In our recent malware analysis workshop we explored:  Malware stages and detection mechanisms" + 
      " 🔹 Sophisticated obfuscation techniques 🔹 Strategies for prevention, removal, and resilience. Stay tuned for more workshops like this to come!"
    },
    {
      picture:"/Platform/ctf_team.jpeg",
      description: "🧠 Our CTF team placed 16th in the Student Division and 40th overall at UMDCTF 2025, competing against 700+ teams worldwide!"
    },
    {
      picture:"/Platform/hackathon_team.jpeg",
      description: "🚀 MaaSec’s Hackathon Team recently made its debut at the SURF Quantum Hackathon 2025 with a quantum-secure voting kiosk prototype!" + 
      "Built with React, FastAPI, and QKD integration, the project earned great feedback for its technical depth and real-world potential."
    }
  ]


  // Rest of your data constants remain the same

  const activities = [
    {
      icon: <Terminal className="w-12 h-12 mb-4 text-green-600" />,
      title: "Competitive Programming",
      description: "Participate in algorithmic problem-solving contests and hackathons"
    },
    {
      icon: <Laptop className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Project Development",
      description: "Collaborate on open-source software projects and build innovative solutions"
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-purple-400" />,
      title: "Tech Talks & Seminars",
      description: "Attend guest lectures and seminars to explore emerging tech trends"
    },
    {
      icon: <Book className="w-12 h-12 mb-4 text-brown-400" />,
      title: "Study Groups",
      description: "Join study sessions to enhance your understanding of computer science topics"
    },
    {
      icon: <Monitor className="w-12 h-12 mb-4 text-red-400" />,
      title: "Hackathons",
      description: "Compete in team-based hackathons to develop creative tech solutions"
    },
    {
      icon: <Lightbulb className="w-12 h-12 mb-4 text-yellow-400" />,
      title: "Innovation Challenges",
      description: "Collaborate with peers to brainstorm and develop creative solutions to various challenges"
    },
  ];

  const logos = [
    { src: "/Platform/acm_logo.svg",   alt: "acm_logo" },
    { src: "/Platform/brightlands_st_logo.png", alt: "brightlands_st_logo" },
    { src: "/Platform/cei_logo.jpeg",  alt: "cei_logo" },
    { src: "/Platform/maastricht-university-logo.png", alt: "maastricht-university-logo" },
    { src: "/Platform/alice_logo.jpeg", alt: "alice.tech logo", website:"alice.tech"}, 

  ]

  return (
      <div className="min-h-screen text-black bg-white">
        <Navbar />

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
          <h2 className="text-3xl font-bold mb-8 text-center font-archivo text-blue-900">
             About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-black mb-6 font-archivo">
              We are a group of students and professionals united under the ACM banner, 
              dedicated to fostering a community of learners and innovators. 
              Our mission is to promote hands-on experience, collaborative learning, 
              and skill development across various fields, empowering everyone to grow and thrive in the 
              ever-evolving world of technology.
            </p>
          </div>
        </div>
      </section>


<section id="What are we up to" className="py-20 bg-gradient-to-b from-white to-blue-50">
  <div className="container mx-auto px-5">
    <h2 className="text-4xl font-bold mb-16 text-center font-archivo text-blue-900">
      What are we up to?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {wyd.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
        >
          <div className="relative w-full h-80">
            <img
              src={item.picture}
              alt={`What we're up to ${index}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <p className="text-lg font-medium text-gray-800 text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Operations Section (previously What We Do) */}
      <section id="operations" className="py-20 relative bg-white/100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-archivo text-blue-900">
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

        {/* Sponsors section */}
        <section id="sponsors" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-archivo text-blue-900">
              Our Partners
            </h2>
            <div className="grid md:grid-cols-5 gap-4 items-center justify-items-center">
              {logos.map(({src, alt}) => (
                  <div key={src} className="w-full flex justify-center">
                    <Image src={src} alt={alt} width={150} height={75}
                           unoptimized  className="max-h-20 object-contain"
                    />
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same */}

        {/* Contact Section */}
        <section id="contact" className="py-20 relative bg-white/100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 font-archivo text-blue-900">
              Join The Operation
            </h2>
            <p className="text-xl text-black mb-8 font-archivo">
              Ready to explore the frontiers of technology and innovation?
            </p>

            <a href="https://github.com/MaaSecLab" className="hover:animate-pulse px-2">
              <Github className="w-10 h-10 inline text-black"/>
            </a>
            <a href="https://discord.com/invite/ghpWe7wawV" className="hover:animate-pulse px-2">
              <Image src="/Platform/discord.svg" alt="discord" className="w-10 h-10 inline" width={64} height={64}/>
            </a>
            <a href="https://ctftime.org/team/365940" className="hover:animate-pulse px-2">
              <Image src="/Platform/ctftime.svg" alt="ctftime" className="w-10 h-10 inline" width={64} height={64}/>
            </a>
            <a href="https://www.linkedin.com/company/maasec/" className="hover:animate-pulse px-2">
              <Image src="/Platform/linkedin-logo.png" alt="linkedin-logo" unoptimized className="w-10 h-10 inline"
                     width={64} height={64}/>
            </a>
            <a href="https://www.instagram.com/acm.maastricht/" className="hover:animate-pulse px-2">
              <Image src="/Platform/instagram_logo.png" alt="instagram_logo" unoptimized className="w-10 h-10 inline"
                     width={64} height={64}/>
            </a>
          </div>
        </section>

        <Footer/>
      </div>
  );
}

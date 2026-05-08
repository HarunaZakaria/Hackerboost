import Accordion from "./components/Accordion";

const faqs = [
  {
    title: "Fast Performance",
    text: "Our application is optimized for speed and efficiency.",
  },
  {
    title: "Secure System",
    text: "We use advanced security measures to protect user data.",
  },
  {
    title: "Easy to Use",
    text: "The interface is simple and beginner-friendly.",
  },
  {
    title: "Cloud Storage",
    text: "Access your files anytime from anywhere in the world.",
  },
  {
    title: "Real-Time Updates",
    text: "Get instant notifications and live synchronization.",
  },
  {
    title: "Customizable Design",
    text: "Personalize the platform to match your preferences.",
  },
  {
    title: "24/7 Support",
    text: "Our support team is always available to assist you.",
  },
  {
    title: "Cross-Platform",
    text: "Works seamlessly on mobile, tablet, and desktop devices.",
  },
  {
    title: "Data Analytics",
    text: "Track performance and gain insights with detailed reports.",
  },
  {
    title: "Scalable Solution",
    text: "Grow your business without worrying about limitations.",
  },
];

function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

export default App;

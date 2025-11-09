import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, message: "", error: false });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    if (!form.name || !form.email || !form.phone || !form.message)
      return setStatus({ loading: false, message: "All fields are required!", error: true });

    if (!validateEmail(form.email))
      return setStatus({ loading: false, message: "Invalid email format!", error: true });

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if ([200, 201].includes(res.status)) {
        setStatus({ loading: false, message: "Form Submitted ✅", error: false });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          loading: false,
          message: "Unexpected response. Please try again.",
          error: true,
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        message: "Failed to submit. Please try again later.",
        error: true,
      });
      console.log(err);
      
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden bg-[url('/BG.svg')] bg-cover bg-center font-[Poppins]">
  {/* Bottom Left SVG */}
  <img
    src="/svg1.svg"
    alt="Bottom Left Decorative SVG"
    className="absolute bottom-0 left-0 w-[10vw] md:w-[18vw] opacity-90 z-10 pointer-events-none select-none"
  />

  {/* Top Right SVG */}
  <img
    src="/svg2.svg"
    alt="Top Right Decorative SVG"
    className="absolute top-0 right-0 w-[22vw] md:w-[20vw] opacity-90 z-10 pointer-events-none select-none"
  />

  {/* Left Text Content */}
  <div className="flex-1 text-gray-800 relative z-20 flex flex-col justify-center items-start md:pl-10 md:min-h-[80vh]">
    <p className="max-w-md text-base md:text-lg leading-relaxed">
      Whether you have an idea, a question, or simply want to explore how V can
      work together, V’re just a message away. <br />
      Let’s catch up over coffee. <br />
      <span className="font-medium">
        Great stories always begin with a good conversation.
      </span>
    </p>
  </div>

  {/* Right Contact Form */}
  <div className="flex-1 w-full max-w-md relative z-20 flex flex-col justify-center items-center text-center md:min-h-[80vh]">
    <h2 className="text-2xl md:text-3xl font-semibold mb-1 text-gray-800">
      Join the Story
    </h2>
    <p className="mb-6 text-gray-700">
      Ready to bring your vision to life? Let’s talk.
    </p>

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full items-center justify-center"
    >
      <input
        name="name"
        placeholder="Your name*"
        value={form.name}
        onChange={handleChange}
        className="p-3 w-full rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email*"
        value={form.email}
        onChange={handleChange}
        className="p-3 w-full rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="p-3 w-full rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <textarea
        name="message"
        placeholder="Your message*"
        value={form.message}
        onChange={handleChange}
        className="p-3 w-full rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 min-h-[100px]"
      />

      {/* Centered Submit Button */}
      <button
        type="submit"
        disabled={status.loading}
        className="mt-4 bg-orange-500 text-white py-2 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 disabled:opacity-50"
      >
        {status.loading ? "Submitting..." : "Submit"}
      </button>
    </form>

    {/* Contact Info Below */}
    <div className="mt-8 text-sm text-gray-800">
      <p className="text-orange-600 font-medium">
        <a href="mailto:vemita@varnanfilms.co.in">vemita@varnanfilms.co.in</a>
      </p>
      <p className="text-orange-600 font-medium">+91 98736 84567</p>
    </div>
  </div>
</section>


  );
}

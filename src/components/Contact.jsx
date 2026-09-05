import { lazy, Suspense, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useElementVisibility from "../hooks/useElementVisibility";
import useMediaQuery from "../hooks/useMediaQuery";

const Mail = lazy(() => import("./canvas/Mail"));

export default function Contact({ theme }) {
  const form = useRef();
  const [contactRef, isContactVisible] = useElementVisibility("300px");
  const isTwoColumnLayout = useMediaQuery("(min-width: 1024px)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill all values.");
      return;
    }

    setIsSubmitting(true);
    setSuccess(null);
    setError("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    } catch (submissionError) {
      console.error(submissionError);
      setSuccess(false);
      setError("Your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={contactRef} className="contact-container mx-auto max-w-7xl">
      <div className="overlay">
        <h1 className="pb-2">Contact Me</h1>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="name"
              id="floating_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5 text-lg text-white focus:border-dark-green focus:outline-none focus:ring-0"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required=""
            />
            <label
              htmlFor="floating_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-accent-green"
            >
              Name
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5 text-lg text-white focus:border-dark-green focus:outline-none focus:ring-0"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <label
              htmlFor="floating_email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-accent-green"
            >
              Email
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <label
              htmlFor="message"
              className="mb-2 block text-lg font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-lg text-black focus:border-dark-green focus:ring-dark-green dark:border-gray-600 dark:bg-dark-bg  dark:text-white dark:placeholder-gray-400"
              placeholder=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required=""
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mb-4 w-full rounded-lg bg-accent-green px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-dark-green focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
          <br />
          <p className="text-red-500">{error}</p>
          {success && (
            <span className="text-lg text-accent-green">
              {" "}
              Thank you for contacting me. Your message has been sent
              successfully.
            </span>
          )}
        </form>
      </div>
      {isTwoColumnLayout && isContactVisible && (
        <Suspense fallback={null}>
          <Mail theme={theme} />
        </Suspense>
      )}
    </div>
  );
}

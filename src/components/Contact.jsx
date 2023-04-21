import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Mail from "./canvas/Mail";

export default function Contact({ theme }) {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill all values.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(true);
          setError("");
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="overlay">
        <h1 className="pb-2">Contact Me</h1>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="name"
              id="floating_name"
              className="text=lg peer block w-full appearance-none border-0 border-b-2 border-white bg-transparent px-0 py-2.5 text-white focus:border-dark-green focus:outline-none focus:ring-0"
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
            onClick={handleSubmit}
            className="mb-4 w-full rounded-lg bg-accent-green px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-dark-green focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
          >
            Submit
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
      <Mail className="mail" theme={theme} />
    </div>
  );
}

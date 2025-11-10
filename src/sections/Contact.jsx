import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {

  const [status, setStatus] = useState(null); // "success" | "error" | null
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("https://devdiagui.com/contact.php", {
        method: "POST",
        body: new FormData(formRef.current),
      });

      const text = await res.text();

      if (text === "success") {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Let’s Connect"
          sub="💬 Une question ou un projet en tête ? Parlons-en !🚀"
        />
          
        <div className="mt-4">
            {status === "success" && (
              <p className="text-green-500 text-center animate-bounce">
                ✅ Message envoyé avec succès !
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-center animate-pulse">
                ❌ Une erreur s'est produite. Veuillez réessayer.
              </p>
            )}
        </div>
        <div className="grid-12-cols mt-16">

          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Adresse Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Votre adresse email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Votre Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Comment puis-je vous aider ?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading} className={`${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="loader"></span> Envoi...
                        </span>
                      ) : (
                        "Envoyer le message"
                      )}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-blue-500 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              {/* Google maps adresse  */}
              <iframe
                title="My Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Faladié+socoro+Bamako+Mali"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
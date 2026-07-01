import { useState, type FormEvent } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import Magnetic from "@/components/common/Magnetic";
import { socials } from "@/data/navigation";
import styles from "./Contact.module.scss";

const info = [
  {
    icon: <FiMail />,
    label: "Email",
    value: "kaveeshahq@gmail.com",
    href: "mailto:kaveeshahq@gmail.com",
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+94 76 63 65 729",
    href: "tel:+94766365729",
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "https://maps.app.goo.gl/W6tffUmraZZmbotQA",
  },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hi Kaveesha,\n\n${form.message}\n\n— ${form.name} (${form.email})`,
    );
    const subject = encodeURIComponent(form.subject || "Portfolio enquiry");
    window.location.href = `mailto:kaveeshahq@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className={styles.grid}>
          {/* Info */}
          <Reveal stagger={0.12} className={styles.info}>
            <h3 className={styles.infoTitle}>Contact information</h3>
            <p className={styles.infoText}>
              Feel free to reach out through any channel — I usually reply
              within a day.
            </p>

            <div className={styles.cards}>
              {info.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <span className={styles.cardIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.cardLabel}>{item.label}</span>
                    <span className={styles.cardValue}>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socials}>
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className={styles.formWrap} x={40} y={0}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className={styles.field}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>

              <div className={styles.field}>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder=" "
                  value={form.subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className={styles.field}>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder=" "
                  required
                  value={form.message}
                  onChange={handleChange}
                />
                <label htmlFor="message">Your Message</label>
              </div>

              <Magnetic strength={0.25}>
                <button
                  type="submit"
                  className={`${styles.submit} ${sent ? styles.submitSent : ""}`}
                  data-magnetic
                >
                  {sent ? (
                    <>
                      <FiCheck /> Opening mail app…
                    </>
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contact, socialLinks } from "../../constants/data.js";
import Button from "../ui/Button.jsx";

const iconMap = {
  Mail: HiMail,
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Phone: HiPhone,
};

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:amna.hafeez.se@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg space-y-5">
      {contact.formFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-1.5 block text-sm text-text-muted">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={5}
              required={field.required}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className="input-field resize-none"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className="input-field"
            />
          )}
        </div>
      ))}

      <Button type="submit" className="w-full">
        Send Message
      </Button>

      {sent && (
        <p className="text-center text-sm text-accent-blue">
          Opening your email client…
        </p>
      )}
    </form>
  );
}

export function ContactLinks() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.id}
            href={link.url}
            target={link.id === "email" || link.id === "phone" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-blue"
          >
            {Icon && <Icon className="text-lg" />}
            <span className="font-mono text-xs">{link.display}</span>
          </a>
        );
      })}
    </div>
  );
}

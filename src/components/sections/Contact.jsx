import { motion } from "framer-motion";
import { contact } from "../../constants/data.js";
import ContactForm, { ContactLinks } from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-border bg-surface/30">
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-cyan/10 blur-[100px]" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold gradient-text sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-text-muted">
            {contact.subtitle}
          </p>
        </motion.div>

        <ContactForm />
        <ContactLinks />
      </div>
    </section>
  );
}

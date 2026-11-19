import { footer, socialLinks } from "../../constants/data.js";

export default function Footer() {
  const github = socialLinks.find((l) => l.id === "github");
  const linkedin = socialLinks.find((l) => l.id === "linkedin");

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container !py-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-6">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-accent-blue"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-accent-blue"
            >
              LinkedIn
            </a>
          )}
        </div>
        <p className="text-sm text-text-muted">{footer.text}</p>
      </div>
    </footer>
  );
}

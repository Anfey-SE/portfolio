import { footer } from "../../constants/data.js";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container !py-10 text-center">
        <p className="text-sm text-text-muted">{footer.text}</p>
      </div>
    </footer>
  );
}

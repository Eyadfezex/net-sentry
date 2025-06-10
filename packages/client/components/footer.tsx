import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-12 text-center text-slate-500 border-t border-slate-200 pt-6">
      <div className="flex items-center justify-center gap-4 text-sm">
        <p>Powered by NetSentry</p>
        <span>•</span>
        <a
          href="https://github.com/Eyadfezex/net-sentry"
          className="flex items-center gap-1 hover:text-slate-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;

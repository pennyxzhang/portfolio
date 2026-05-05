export default function Footer() {
  return (
    <footer className="border-t-[2.5px] border-ink mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display font-700 text-lg flex items-center gap-2">
            <span className="text-blue">✳</span>
            Penny Zhang
          </p>
          <p className="text-sm text-ink/60 mt-1">Product Designer · Sydney, AU</p>
        </div>
        <div className="flex items-center gap-6 text-sm font-500">
          <a
            href="https://www.linkedin.com/in/xiyuezhang/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.behance.net/pennyzhang95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            Behance ↗
          </a>
          <a
            href="mailto:pennyxzhang@gmail.com"
            className="hover:underline underline-offset-4"
          >
            Email ↗
          </a>
        </div>
      </div>
      <div className="border-t-[1.5px] border-ink/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-xs text-ink/40">© 2026 Penny Zhang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

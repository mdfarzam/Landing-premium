export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* BRAND */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
              B
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
            BigIdeasDB – The only AI-powered platform that analyzes millions of
            user complaints across multiple platforms to show you exactly what
            products people actually want.
          </p>

          <div className="text-sm text-gray-400 space-y-2">
            <p>© 2026 – All rights reserved</p>
            <p>BigIdeasDB is a product of Pavado Technologies Inc.</p>
            <p className="flex items-center gap-2">
              🇨🇦 Proudly built in Canada
            </p>
          </div>
        </div>

        {/* FREE TOOLS */}
        <FooterColumn title="FREE TOOLS">
          <FooterLink>Business Idea Generator</FooterLink>
          <FooterLink>Idea Evaluator</FooterLink>
          <FooterLink>Reddit Keyword Generator</FooterLink>
          <FooterLink>MRR Calculator</FooterLink>
          <FooterLink>Churn Rate Calculator</FooterLink>
          <FooterLink>Break-Even Calculator</FooterLink>
        </FooterColumn>

        {/* LINKS */}
        <FooterColumn title="LINKS">
          <FooterLink>Blog</FooterLink>
          <FooterLink>Support</FooterLink>
          <FooterLink>Demo</FooterLink>
          <FooterLink>Reddit Pipeline Builder</FooterLink>
          <FooterLink>Micro Product Boilerplate</FooterLink>
          <FooterLink>Capterra Analysis</FooterLink>
        </FooterColumn>

        {/* COMPARE */}
        <FooterColumn title="COMPARE">
          <FooterLink>vs. Buildpad</FooterLink>
          <FooterLink>vs. aicofounder</FooterLink>
        </FooterColumn>

        {/* LEGAL */}
        <FooterColumn title="LEGAL">
          <FooterLink>Terms of Service</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterColumn>
      </div>
    </footer>
  );
}

/* ---------- Helpers ---------- */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-semibold tracking-widest text-gray-400">
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a
        href="#"
        className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

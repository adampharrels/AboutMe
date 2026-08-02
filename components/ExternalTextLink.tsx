import { ExternalLink } from "lucide-react";

type ExternalTextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export default function ExternalTextLink({
  href,
  children,
  external = true,
}: ExternalTextLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
    >
      {children}
      {external && <ExternalLink size={15} aria-hidden="true" />}
    </a>
  );
}

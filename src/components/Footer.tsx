const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="container mx-auto text-center">
      <p className="font-mono text-sm text-muted-foreground">
        © {new Date().getFullYear()} — Designed & Built with precision.
      </p>
    </div>
  </footer>
);

export default Footer;

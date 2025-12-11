export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm font-mono">
          Designed & Built by{" "}
          <span className="text-primary">Islam Mohammad</span>
        </p>
        <p className="text-center text-muted-foreground/60 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

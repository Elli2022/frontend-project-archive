import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="label-mono mb-3">404 / not_found</p>
      <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight">
        That page<span className="text-accent">.</span> is not here.
      </h1>
      <p className="mt-4 text-muted-foreground max-w-md">
        The route you followed does not exist here. It may have moved, or it may never have belonged in this project.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        ← Back home
      </Link>
    </div>
  );
};

export default NotFound;

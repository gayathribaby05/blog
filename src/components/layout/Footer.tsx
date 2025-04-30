import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="text-xl font-bold">PawsomeBreeds</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Discover and learn about different dog breeds while enjoying fun
              dog content. Your one-stop destination for all things canine.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/breeds"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  All Breeds
                </Link>
              </li>
              <li>
                <Link
                  to="/funny"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Funny Dogs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Breeds</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/breeds/1"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Labrador Retriever
                </Link>
              </li>
              <li>
                <Link
                  to="/breeds/2"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  German Shepherd
                </Link>
              </li>
              <li>
                <Link
                  to="/breeds/3"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Golden Retriever
                </Link>
              </li>
              <li>
                <Link
                  to="/breeds/6"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Poodle
                </Link>
              </li>
              <li>
                <Link
                  to="/breeds/4"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Bulldog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates on new breeds and funny dog content
              delivered straight to your inbox.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md border bg-background"
                required
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} PawsomeBreeds. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
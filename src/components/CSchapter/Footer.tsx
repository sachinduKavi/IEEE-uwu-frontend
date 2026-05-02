import { Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-12 mt-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

        <div className="space-y-2">
          <h3 className="text-xl font-bold">IEEE Computer Society Student Branch Chapter</h3>
          <p className="text-gray-700">Advancing Technology for Humanity</p>
        </div>

        <div className="flex justify-center space-x-5 mt-4">
          <a
            href="https://www.linkedin.com/company/ieeecsuwusbc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white shadow-sm rounded-full text-gray-700 hover:bg-yellow-200 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>

          <a
            href="https://www.facebook.com/ieeecsuwusbc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white shadow-sm rounded-full text-gray-700 hover:bg-yellow-200 transition-all duration-200"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
        </div>

        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} IEEE Computer Society of Uva Wellassa University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

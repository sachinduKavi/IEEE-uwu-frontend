export default function Footer() {
    return (
      <footer className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-12 mt-20 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-xl font-bold">IEEE Computer Society Student Chapter</h3>
          <p className="text-gray-700">Advancing Technology for Humanity</p>
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} IEEE Computer Society of Uva Wellassa University. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
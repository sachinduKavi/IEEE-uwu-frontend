import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { fadeIn, staggerContainer } from "../utils/motion.tsx";

import projectsData from "../data/projects.json";

export default function ProjectsLookupSection() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setSearched(false);

    // Simulate loading delay (optional, remove if unnecessary)
    setTimeout(() => {
      const filtered = projectsData.filter(
        (d) =>
          d.enrollment &&
          d.enrollment.trim().toLowerCase() === search.trim().toLowerCase()
      );

      setResults(filtered);
      setSearched(true);
      setLoading(false);
    }, 600);
  };

  return (
    <section id="project-lookup" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-3"
        >
          Project <span className="text-[#005596]">Lookup</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-10"
        >
          Enter your Enrollment Number to see your projects.
        </motion.p>

        <div className="flex justify-center mb-10">
          <div className="flex w-full max-w-lg border border-blue-200 rounded-full overflow-hidden bg-white shadow-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. UWU/CST/21/033"
              className="flex-1 px-6 py-3 outline-none text-gray-700"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className={`${
                loading ? "bg-gray-400" : "bg-[#005596] hover:bg-[#003d6b]"
              } text-white px-5 transition flex items-center`}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 mr-1 animate-spin" />
              ) : (
                <Search className="w-5 h-5 mr-1" />
              )}
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {/* Results */}
        {loading && (
          <div className="flex justify-center mt-10">
            <Loader2 className="w-10 h-10 text-[#005596] animate-spin" />
          </div>
        )}

        {!loading && searched && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer()}
          >
            {results.length > 0 ? (
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {results[0].name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {results.map((r, idx) => (
                    <motion.div key={idx} variants={fadeIn("up", "spring", idx * 0.1, 0.8)}>
                      <Card className="border border-blue-100 shadow-md hover:shadow-lg bg-white">
                        <CardContent className="p-6 text-left">
                          <h4 className="text-lg font-bold text-[#005596] mb-2">
                            {r.project}
                          </h4>
                          <p className="text-gray-600">
                            <span className="font-medium">Role:</span> {r.role}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600 text-lg">
                No projects found for this enrollment number.
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

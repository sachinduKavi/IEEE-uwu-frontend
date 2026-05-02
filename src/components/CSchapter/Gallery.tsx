"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ModernGallery() {
  const galleryImages = [
    "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761223744/comming_soon_dmcpma.jpg",
    "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888497/WhatsApp_Image_2025-10-05_at_18.09.35_d1ca3e95_tp3wu2.jpg",
    "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888571/WhatsApp_Image_2025-05-18_at_15.29.55_6f9ecd31_ff7amb.jpg",
    "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888399/WhatsApp_Image_2025-08-07_at_19.06.45_67e55e42_efrxme.jpg",
    "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1761223744/comming_soon_dmcpma.jpg",
    "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888497/WhatsApp_Image_2025-10-05_at_18.09.35_d1ca3e95_tp3wu2.jpg",
    "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888571/WhatsApp_Image_2025-05-18_at_15.29.55_6f9ecd31_ff7amb.jpg",
    "https://res.cloudinary.com/dmue6alcq/image/upload/q_auto/v1760888399/WhatsApp_Image_2025-08-07_at_19.06.45_67e55e42_efrxme.jpg",
  ];

  const BATCH_SIZE = 5;
  const [currentBatch, setCurrentBatch] = useState(0);
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  const startIndex = currentBatch * BATCH_SIZE;
  const endIndex = startIndex + BATCH_SIZE;
  const currentBatchImages = galleryImages.slice(startIndex, endIndex);

  const nextBatch = () => {
    if (endIndex < galleryImages.length) {
      setCurrentBatch((prev) => prev + 1);
      setSelectedImage(galleryImages[endIndex]);
    }
  };

  const prevBatch = () => {
    if (currentBatch > 0) {
      setCurrentBatch((prev) => prev - 1);
      const newStart = (currentBatch - 1) * BATCH_SIZE;
      setSelectedImage(galleryImages[newStart]);
    }
  };

  return (
    <section id="gallery" className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">

        <motion.h2
          className="text-5xl font-extrabold text-yellow-600 text-center mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>

        <motion.p
          className="text-md text-gray-700 text-center mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Explore moments from our events and activities.
        </motion.p>

        {/* Main Image */}
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <img
            src={selectedImage}
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* Thumbnails */}
        <div className="flex items-center justify-center gap-3 mt-6">

          {/* Left arrow */}
          <button
            onClick={prevBatch}
            disabled={currentBatch === 0}
            className={`p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-200 transition ${
              currentBatch === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-3">
            {currentBatchImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                whileHover={{ scale: 1.05 }}
                className={`w-24 h-24 rounded-lg object-cover cursor-pointer border-4 transition ${
                  selectedImage === img
                    ? "border-yellow-500"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={nextBatch}
            disabled={endIndex >= galleryImages.length}
            className={`p-2 rounded-full border-2 border-yellow-500 hover:bg-yellow-200 transition ${
              endIndex >= galleryImages.length
                ? "opacity-40 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

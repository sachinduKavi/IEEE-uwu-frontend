export default function Lightbox({ selectedImage, setSelectedImage }: {
    selectedImage: string | null,
    setSelectedImage: (src: string | null) => void
}) {
    if (!selectedImage) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
        >
            <div className="relative max-w-4xl max-h-full">
                <button
                    className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                    onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(null)
                    }}
                >
                    ×
                </button>
            </div>
        </div>
    )
}
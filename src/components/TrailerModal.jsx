const TrailerModal = ({ trailerUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/70 flex items-center justify-center">
      <div className="bg-[#111] p-4 rounded-lg max-w-3xl w-full relative shadow-2xl border border-violet-700">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-xl hover:text-red-400"
        >
          ✖
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[400px] rounded-lg"
            src={trailerUrl}
            title="Game Trailer"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;

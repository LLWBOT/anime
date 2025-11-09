export default function RecentGenerationCard({ image, prompt }) {
  return (
    <div className="bg-darkcard p-3 rounded-xl flex flex-col items-center">
      <img src={image} alt="generated" className="rounded-lg w-32 h-32 object-cover" />
      <p className="text-gray-400 text-xs mt-2 text-center line-clamp-2">{prompt}</p>
    </div>
  );
}

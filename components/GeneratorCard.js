export default function GeneratorCard({ title, image, desc }) {
  return (
    <div className="bg-darkcard rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition transform cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-accent">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

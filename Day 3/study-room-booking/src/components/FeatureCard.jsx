function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-3xl">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;

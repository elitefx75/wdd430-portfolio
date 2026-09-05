interface HighlightCardProps {
  typeface: string; // required prop
  message: string;
}

export default function HighlightCard({ typeface, message }: HighlightCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-blue-50">
      <h2 className={`text-2xl font-bold mb-2 ${typeface}`}>
        Highlight
      </h2>
      <p className="text-gray-700">{message}</p>
    </div>
  );
}

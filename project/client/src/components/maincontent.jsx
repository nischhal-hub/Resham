
export default function Maincontent() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Metric 1</h2>
          <p>Details about Metric 1...</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Metric 2</h2>
          <p>Details about Metric 2...</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Metric 3</h2>
          <p>Details about Metric 3...</p>
        </div>
      </div>
    </div>
  );
}
  


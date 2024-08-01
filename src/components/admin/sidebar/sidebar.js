export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white shadow-md h-full">
      <div className="p-5">
        <ul className="space-y-4">
          <li className="pb-4">Home</li>
          <li className="pb-4">All Post</li>
          <li className="pb-4">Draft Post</li>
          <li className="pb-4">Generate Post</li>
          <li className="pb-4">Publish Post</li>
        </ul>
      </div>
    </aside>
  );
}

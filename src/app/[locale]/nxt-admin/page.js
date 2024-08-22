import Sidebar from "@/components/admin/sidebar/sidebar";

export default function Page() {
  return (
    <>
      <div className="flex flex-row min-h-screen">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex-1">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Page</h1>
            <p className="mt-4">The page content displayed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <>
      <section class="px-4 py-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold">Technology</h2>
          <a href="#" class="text-blue-600 hover:underline" rel="ugc">
            More in Technology →
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="space-y-4">
            <img
              src="https://images.buzznfinds.com/images/ai-revolution-gpt-4-5525532.webp"
              alt="A Lesson From the Henrietta Lacks Story: Science Needs Your Cells"
              class="w-full h-auto"
              width="400"
              height="300"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <h3 class="text-xl font-semibold">
              A Lesson From the Henrietta Lacks Story: Science Needs Your Cells
            </h3>
            <div class="text-gray-600">
              <span>akbarh</span> <span>•</span> <span>July 7, 2021</span>
            </div>
            <p class="text-gray-700">
              Cursus iaculis etiam in In nullam donec sem sed consequat
              scelerisque nibh ...
            </p>
          </div>
          <div class="space-y-4">
            <img
              src="https://images.buzznfinds.com/images/5g-network-rollout-2024-5896377.webp"
              alt="What Moves Gravel-Size Gypsum Crystals Around the Desert?"
              class="w-full h-auto"
              width="400"
              height="300"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <h3 class="text-xl font-semibold">
              What Moves Gravel-Size Gypsum Crystals Around the Desert?
            </h3>
            <div class="text-gray-600">
              <span>akbarh</span> <span>•</span> <span>July 7, 2021</span>
            </div>
            <p class="text-gray-700">
              Cursus iaculis etiam in In nullam donec sem sed consequat
              scelerisque nibh ...
            </p>
          </div>
          <div class="space-y-4">
            <img
              src="https://images.buzznfinds.com/images/quantum-computing-2024-5644420.webp"
              alt="Scientists, Feeling Under Siege, March Against Trump Policies"
              class="w-full h-auto"
              width="400"
              height="300"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <h3 class="text-xl font-semibold">
              Scientists, Feeling Under Siege, March Against Trump Policies
            </h3>
            <div class="text-gray-600">
              <span>akbarh</span> <span>•</span> <span>July 7, 2021</span>
            </div>
            <p class="text-gray-700">
              Cursus iaculis etiam in In nullam donec sem sed consequat
              scelerisque nibh ...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

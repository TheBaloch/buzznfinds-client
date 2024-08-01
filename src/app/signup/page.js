import Link from "next/link";

export default function Page() {
  return (
    <>
      <div class="mx-auto my-36 flex h-[400px] w-[400px] flex-col border-2 bg-white text-black shadow-xl">
        <div class="mx-8 mt-7 mb-1 flex flex-row justify-center pr-10 space-x-2">
          <div class=" font-sans text-xl font-bold text-center  ">
            <h1>Sign up</h1>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <input
            class="my-2 w-72 border p-2"
            type="text"
            placeholder="Username"
          />
          <input
            class="my-2 w-72 border p-2"
            type="email"
            placeholder="email"
          />
          <input
            class="my-2 w-72 border p-2"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="my-2 flex justify-center">
          <button class="w-72 border bg-gray-200 hover:bg-gray-400 p-2 font-sans">
            Signup
          </button>
        </div>
        <div class=" my-3 flex justify-center text-sm font-semibold">
          <h1 className="px-10">Already have account?</h1>
          <Link href={"/login"}>
            <h1 class="underline underline-offset-2 px-10">login</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

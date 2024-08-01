import Link from "next/link";

export default function Page() {
  return (
    <>
      <div class="mx-auto my-36 flex h-[300px] w-[350px] flex-col border-2 bg-white text-black shadow-xl">
        <div class="mx-8 mt-7 mb-1 flex flex-row justify-center pr-10 space-x-2">
          <div class=" font-sans text-xl font-bold text-center  ">
            <h1>Login</h1>
          </div>
        </div>
        <div class="flex flex-col items-center">
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
            Login
          </button>
        </div>
        <div class="mx-7 my-3 flex justify-between text-sm font-semibold">
          <h1>Forget Password</h1>
          <Link href={"/signup"}>
            <h1 class="underline underline-offset-2">Signup</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

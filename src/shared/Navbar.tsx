import { Login } from "./Login";

export function Navbar() {
  return (
    <>
      <div className="bg-slate-600 w-fill h-36 flex justify-around items-center">
        <h1 className="text-white text-4xl">HealthJournal</h1>
        <Login/>
      </div>
    </>
  )
}
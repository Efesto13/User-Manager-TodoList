import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-black-50 to-gray-100 p-4 overflow-x-hidden">
      <RegisterForm/>
    </main>
    </div>
  );
}
import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 overflow-x-hidden font-sans">
      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-indigo-600/15 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <LoginForm />
      </div>

    </main>
  );
}
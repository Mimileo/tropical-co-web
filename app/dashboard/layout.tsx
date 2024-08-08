// app/dashboard/layout.tsx
import DashNav from '../ui/dashboard/dashnav';     // Top or dashboard navigation

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full md:w-64 flex-none">
        <DashNav /> {/* Top dashboard navigation */}
      </div>
      <div className="flex-grow flex flex-col">
       
        <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}

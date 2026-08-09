"use client";
import { Boot } from "@/components/Boot";
import { Sidebar, MobileBars } from "@/components/dash/Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Boot>
      <div className="min-h-screen bg-cream">
        <Sidebar />
        <MobileBars />
        <div className="lg:pl-64">
          <main className="px-4 pb-24 pt-6 sm:px-6 lg:px-10 lg:pb-12 lg:pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </Boot>
  );
}

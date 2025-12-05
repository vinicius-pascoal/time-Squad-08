import React from "react";
import { APP_NAME } from "@/lib/constants";
import { Heart, Code } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-t border-slate-200/50 dark:border-slate-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Tagline */}
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Code className="w-4 h-4" />
            <span className="text-sm">
              Desenvolvido com{" "}
              <Heart className="w-4 h-4 inline text-red-500 animate-pulse" />
              {" "}pelo{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {APP_NAME}
              </span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} {APP_NAME}. Todos os direitos reservados.
          </div>

          {/* Decorative line */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </div>
      </div>
    </footer>
  );
};

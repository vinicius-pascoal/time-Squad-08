import React from "react";
import { Users, Award, Sparkles, Target } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, gradient }) => {
  return (
    <div className="relative group">
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
      <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${gradient} mb-4 shadow-lg`}>
          {icon}
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-1">
          {value}
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {label}
        </div>
      </div>
    </div>
  );
};

export const TeamStats: React.FC<{ memberCount: number }> = ({ memberCount }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <StatCard
        icon={<Users className="w-6 h-6 text-white" />}
        value={memberCount.toString()}
        label="Membros"
        gradient="bg-gradient-to-br from-blue-600 to-indigo-600"
      />
      <StatCard
        icon={<Award className="w-6 h-6 text-white" />}
        value="100+"
        label="Projetos"
        gradient="bg-gradient-to-br from-purple-600 to-pink-600"
      />
      <StatCard
        icon={<Sparkles className="w-6 h-6 text-white" />}
        value="5+"
        label="Anos de Experiência"
        gradient="bg-gradient-to-br from-orange-600 to-red-600"
      />
      <StatCard
        icon={<Target className="w-6 h-6 text-white" />}
        value="99%"
        label="Satisfação"
        gradient="bg-gradient-to-br from-green-600 to-emerald-600"
      />
    </div>
  );
};

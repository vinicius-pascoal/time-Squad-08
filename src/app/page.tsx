import { TeamMemberCard, TeamStats } from "@/components/ui";
import { Header, Footer } from "@/components/layout";
import { teamMembers } from "@/lib/data/team";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Nossa Equipe
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Conheça os profissionais talentosos que formam o <span className="font-semibold text-blue-600 dark:text-blue-400">Squad 08</span> 🚀
            </p>
            <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
          </div>

          {/* Stats Section */}
          <TeamStats memberCount={teamMembers.length} />

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

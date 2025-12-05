import { TeamMemberCard } from "@/components/ui";
import { Header } from "@/components/layout";
import { teamMembers } from "@/lib/data/team";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-900 opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
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
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { TeamMember } from "@/types";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-slate-900/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-800/50 hover:border-blue-400/50 hover:-translate-y-2">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Foto */}
      <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
        />
        {/* Overlay gradiente na foto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Conteúdo */}
      <div className="relative p-6 bg-gradient-to-b from-transparent to-slate-900/50">
        {/* Nome */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
          {member.name}
        </h3>

        {/* Cargo */}
        <div className="inline-block mb-2">
          <p className="text-sm font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {member.role}
          </p>
        </div>

        {/* Função */}
        <p className="text-sm text-slate-400 mb-5 leading-relaxed">
          {member.position}
        </p>

        {/* Redes Sociais */}
        <div className="flex gap-3 pt-5 border-t border-slate-700/70">
          {member.social.instagram && (
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          )}

          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          )}

          {member.social.whatsapp && (
            <a
              href={`https://wa.me/${member.social.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

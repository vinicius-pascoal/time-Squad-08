export interface TeamMember {
  id: string;
  name: string;
  role: string;
  position: string;
  photo: string;
  social: {
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

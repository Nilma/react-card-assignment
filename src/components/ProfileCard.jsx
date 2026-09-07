import { Mail, UserRound } from "lucide-react";

export default function ProfileCard({ name, role, email }) {
  return (
    <article className="profile-card">
      <div className="avatar"><UserRound size={30} /></div>
      <div>
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="email"><Mail size={16} />{email}</p>
      </div>
    </article>
  );
}

import { useState, useEffect } from "react";
import "../styles/SkillCard.css";

interface SkillCardProps {
  skillName: string;
  percentage: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, percentage }) => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`skill-card ${isShrunk ? "shrink" : ""}`}>
      <div className="skill-circle" style={{ background: `conic-gradient(#6a5acd ${percentage}% , rgba(255, 255, 255, 0.1) ${percentage}% )` }}>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-name">{skillName}</div>
    </div>
  );
};

export default SkillCard;

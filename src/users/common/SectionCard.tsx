import React from "react";

interface SectionCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  icon,
  title,
  children,
}) => (
  <div className="card h-100 mb-3 equal-card">
    <div className="card-header d-flex align-items-center gap-2 py-2 px-2">
      <i className={`bi ${icon}`}></i>
      <h6 className="mb-0">{title}</h6>
    </div>
    <div className="card-body p-2">{children}</div>
  </div>
);

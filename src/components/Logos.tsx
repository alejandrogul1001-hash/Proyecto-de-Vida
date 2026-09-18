import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const EspochLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  }[size];

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-md ${sizeClasses} ${className}`}>
      <img
        src="/espoch-logo.svg"
        alt="Escuela Superior Politécnica de Chimborazo (ESPOCH)"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

export const FadeContabilidadLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  }[size];

  return (
    <div className={`relative overflow-hidden rounded-full shadow-md bg-white p-0.5 ${sizeClasses} ${className}`}>
      <img
        src="/fade-contabilidad-logo.svg"
        alt="Contabilidad y Auditoría - FADE ESPOCH"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

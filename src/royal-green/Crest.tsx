import { CSSProperties } from "react";

export const Crest = ({ className, style }: { className?: string; style?: CSSProperties }) => (
    <svg className={className ?? "rg-crest"} style={style} viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="37" fill="#0a3224" stroke="#c9bb91" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="#78aa83" strokeWidth="1" />
        <path d="M15 47L29 29L40 40L52 22L65 47" fill="none" stroke="#cabb95" strokeWidth="2.2" />
        <path d="M17 49H63M23 53H57" stroke="#98cfa7" strokeWidth="1" />
        <text x="40" y="64" textAnchor="middle" fontFamily="Georgia" fontSize="11" letterSpacing="1" fill="#e4e4c6">
            IWM
        </text>
    </svg>
);

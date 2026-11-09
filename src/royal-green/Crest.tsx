import { CSSProperties } from "react";

export const Crest = ({ className, style }: { className?: string; style?: CSSProperties }) => (
    <img
        className={className ?? "rg-crest"}
        style={{ objectFit: "contain", ...style }}
        src="/royal-green/img/logo-crest.png"
        alt="IWM Academy crest"
    />
);

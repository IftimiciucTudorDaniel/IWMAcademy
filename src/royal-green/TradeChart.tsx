import { TradeExample } from "./data";

export const TradeChart = ({ trade }: { trade: TradeExample }) => {
    const w = 540;
    const h = 323;
    const pad = { left: 29, right: 72, top: 25, bottom: 32 };
    const bottom = h - pad.bottom;
    const top = pad.top;

    const all = [...trade.path, trade.entry, trade.stop, trade.t1, trade.t2];
    let min = Math.min(...all);
    let max = Math.max(...all);
    const buffer = (max - min) * 0.13 || 1;
    min -= buffer;
    max += buffer;

    const y = (v: number) => top + ((max - v) / (max - min)) * (bottom - top);
    const x = (i: number) => pad.left + (i * (w - pad.left - pad.right)) / (trade.path.length - 1);
    const coords = trade.path.map((p, i) => `${x(i).toFixed(1)},${y(p).toFixed(1)}`).join(" ");
    const under = trade.path.map((p, i) => `${x(i).toFixed(1)} ${y(p).toFixed(1)}`).join(" L ");

    const lines = [
        { n: "STOP", v: trade.stop, c: "#ed9b8b" },
        { n: "ENTRY", v: trade.entry, c: "#bfcdb9" },
        { n: "TARGET 1", v: trade.t1, c: "#a3d8af" },
        { n: "TARGET 2", v: trade.t2, c: "#6aaf85" },
    ];

    const gridLines = Array.from({ length: 6 }, (_, i) => top + (i * (bottom - top)) / 5);

    return (
        <svg
            className="rg-chart-svg"
            viewBox={`0 0 ${w} ${h}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Fictional chart with entry, stop loss, targets and sample exit"
        >
            <defs>
                <linearGradient id="rgAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#3f9a6a" stopOpacity=".21" />
                    <stop offset="1" stopColor="#3f9a6a" stopOpacity="0" />
                </linearGradient>
            </defs>
            {gridLines.map((yy, i) => (
                <line
                    key={`grid-${i}`}
                    x1={pad.left}
                    y1={yy}
                    x2={w - pad.right + 2}
                    y2={yy}
                    stroke="#41634e"
                    strokeOpacity=".28"
                />
            ))}
            {lines.map((l) => {
                const yy = y(l.v);
                return (
                    <g key={l.n}>
                        <line
                            x1={pad.left}
                            y1={yy}
                            x2={w - pad.right + 2}
                            y2={yy}
                            stroke={l.c}
                            strokeDasharray="5 6"
                            strokeOpacity=".6"
                        />
                        <text x={w - 65} y={yy + 4} fill={l.c} fontFamily="Arial" fontSize="10" fontWeight="700">
                            {l.n}
                        </text>
                    </g>
                );
            })}
            <path
                d={`M ${x(0)} ${bottom} L ${under} L ${x(trade.path.length - 1)} ${bottom} Z`}
                fill="url(#rgAreaGrad)"
            />
            <polyline
                points={coords}
                fill="none"
                stroke="#c0e8c6"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <circle
                cx={x(trade.path.length - 1)}
                cy={y(trade.exit)}
                r="5.5"
                fill="#e7e8c4"
                stroke="#12442e"
                strokeWidth="2"
            />
            <text x={pad.left} y={h - 10} fontFamily="Arial" fontSize="10" fill="#aacbb5">
                START
            </text>
            <text
                x={w - pad.right - 8}
                y={h - 10}
                fontFamily="Arial"
                fontSize="10"
                textAnchor="end"
                fill="#aacbb5"
            >
                EXAMPLE EXIT
            </text>
        </svg>
    );
};

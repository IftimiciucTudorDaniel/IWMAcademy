const videos = [
    {
        title: "01 / Hypothetical long-side case study",
        file: "/royal-green/videos/long-trade-example.mp4",
        caption: "A hypothetical multi-day scenario walkthrough, used to teach chart-reading.",
        note: "Market Timing Lab · fictional case study",
    },
    {
        title: "02 / Hypothetical short-side case study",
        file: "/royal-green/videos/short-trade-example.mp4",
        caption: "A hypothetical defensive scenario walkthrough for unsettled market conditions.",
        note: "Defensive Lab · fictional case study",
    },
];

export const TradeVideos = () => (
    <section className="rg-section rg-alt" id="trade-videos">
        <div className="rg-container">
            <div className="rg-section-title">
                <h2>Watch a lesson walk through a scenario.</h2>
            </div>
            <div className="rg-videos">
                {videos.map((v) => (
                    <article className="rg-video-card" key={v.file}>
                        <div className="rg-video-card-head">
                            <h4>{v.title}</h4>
                            <span className="rg-demo-flag">Hypothetical case study</span>
                        </div>
                        <video
                            className="rg-video-frame"
                            src={v.file}
                            controls
                            playsInline
                            preload="metadata"
                            aria-label={v.title}
                        />
                        <div className="rg-video-card-foot">
                            <span>{v.caption}</span>
                        </div>
                    </article>
                ))}
            </div>
            <p className="rg-small-note" style={{ textAlign: "center", marginTop: 29 }}>
                Videos use invented scenarios to demonstrate the teaching format only. Nothing shown is live,
                backtested, a recommendation, or investment advice.
            </p>
        </div>
    </section>
);

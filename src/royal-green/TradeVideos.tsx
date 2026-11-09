const videos = [
    {
        title: "01 / Long trade walkthrough",
        file: "/royal-green/videos/long-trade-example.mp4",
        download: "IWM-Academy-Long-Trade-Example.mp4",
        caption: "Buy $124.50 · Stop $118.75 · Target $133.00 · Example sell $133.00",
        note: "Swing Trading Desk · fictional buy example",
    },
    {
        title: "02 / Short trade walkthrough",
        file: "/royal-green/videos/short-trade-example.mp4",
        download: "IWM-Academy-Short-Trade-Example.mp4",
        caption: "Sell short $91.00 · Stop $96.50 · Cover target $82.00 · Cover exit $82.00",
        note: "Tough Market Desk · fictional short example",
    },
];

export const TradeVideos = () => (
    <section className="rg-section rg-alt" id="trade-videos">
        <div className="rg-container">
            <div className="rg-section-title">
                <h2>Watch a trade walk from entry to exit.</h2>
            </div>
            <div className="rg-videos">
                {videos.map((v) => (
                    <article className="rg-video-card" key={v.file}>
                        <div className="rg-video-card-head">
                            <h4>{v.title}</h4>
                            <span className="rg-demo-flag">Synthetic example</span>
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
                            <a className="rg-text-link" href={v.file} download={v.download}>
                                Download MP4 →
                            </a>
                        </div>
                    </article>
                ))}
            </div>
            <p className="rg-small-note" style={{ textAlign: "center", marginTop: 29 }}>
                Videos use invented price paths to demonstrate product presentation only. Nothing shown is live,
                backtested, or investment advice.
            </p>
        </div>
    </section>
);

export type FooterProps = {
    variant: string;
    logoUrl?: string;
    logoText?: string;
    description?: string;
    newsletterTitle?: string;
    emailPlaceholder?: string;
    subscribeButtonText?: string;
    linksTitle?: string;
    links?: Array<{ text: string; href: string }>;
    pagesTitle?: string;
    pages?: Array<{ text: string; href: string }>;
    socialsTitle?: string;
    socials?: Array<{ text: string; href: string }>;
    copyrightLinks?: Array<{ text: string; href: string }>;
    copyrightText?: string;
    highlightedText?: string;
};

export const Footer = (props: FooterProps) => {
    if (props.variant === "copyright") {
        return (
            <div
                name="Copyright"
                className="relative box-border caret-transparent shrink-0 w-full order-[1005]"
            >
                <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <footer
                        name="Copyright"
                        className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-10 md:scroll-m-0 md:scroll-p-[auto] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-neutral-800 after:md:border-t-2 after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif md:gap-x-[60px] md:gap-y-[60px] md:overflow-hidden md:py-[25px]"
                    >
                        <div className="static [align-items:normal] box-content caret-black block shrink h-auto justify-normal min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-min md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:content-center md:items-center md:justify-between">
                            {props.copyrightLinks?.map((link, index) => (
                                <div
                                    key={index}
                                    className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                >
                                    <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-300 md:text-sm md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.28px] md:leading-[16.8px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                        <a
                                            href={link.href}
                                            className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-white hover:border-white"
                                        >
                                            {link.text}
                                            {props.highlightedText && index === 1 && (
                                                <span className="text-black box-content caret-black text-wrap md:text-white md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          {" "}
                                                    {props.highlightedText}
                        </span>
                                            )}
                                        </a>
                                    </p>
                                </div>
                            ))}
                            {props.copyrightText && (
                                <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-300 md:text-sm md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.28px] md:leading-[16.8px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                        {props.copyrightText}
                                    </p>
                                </div>
                            )}
                        </div>
                    </footer>
                </div>
            </div>
        );
    }

    return (
        <div className="relative box-border caret-transparent shrink-0 w-full order-[1004]">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <footer className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-10 md:scroll-m-0 md:scroll-p-[auto] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-neutral-800 after:md:border-t-2 after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif bg-none md:bg-[radial-gradient(50%_50%_at_50%_3.4%,rgba(129,74,200,0.3)_0%,rgba(171,171,171,0)_100%)] md:gap-x-2.5 md:gap-y-2.5 md:py-16">
                    <div className="static [align-items:normal] box-content caret-black block shrink h-auto justify-normal min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-min md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] gap-x-[normal] max-w-none gap-y-[normal] md:content-start md:items-start md:gap-x-5 md:justify-center md:max-w-[1200px] md:gap-y-5">
                        <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] [align-items:normal] gap-x-[normal] basis-auto grow-0 h-auto gap-y-[normal] w-auto md:content-start md:items-start md:gap-x-[15px] md:basis-0 md:grow md:h-min md:justify-center md:gap-y-[15px] md:w-px md:overflow-hidden">
                            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <a
                                    href="./"
                                    className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-1 md:flex md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                >
                                    <div className="static text-black box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="box-content caret-black h-auto w-auto md:aspect-square md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <img
                                                src={props.logoUrl}
                                                alt="Icon"
                                                className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                            />
                                        </div>
                                    </div>
                                    <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-white md:text-3xl md:font-bold md:aspect-auto md:box-border md:caret-transparent md:tracking-[-1.8px] md:leading-9 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                            {props.logoText}
                                        </p>
                                    </div>
                                </a>
                                <div className="static box-content caret-black block flex-row shrink justify-normal max-w-none min-h-0 min-w-0 break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:max-w-[300px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-stone-300 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                        {props.description}
                                    </p>
                                </div>
                            </div>
                            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="static box-content caret-black block flex-row shrink justify-normal max-w-none min-h-0 min-w-0 break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:max-w-[300px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:text-lg md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.36px] md:leading-[27px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                        {props.newsletterTitle}
                                    </p>
                                </div>
                                <div className="static box-content caret-black shrink max-w-none min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:max-w-xs md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="static [align-items:normal] box-content caret-black block h-auto justify-normal max-w-none w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:h-full md:justify-center md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        <form className="static text-black box-content caret-black gap-x-[normal] block min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:text-white md:aspect-auto md:box-border md:caret-transparent md:gap-x-0 md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <input
                                                type="hidden"
                                                name="api_key"
                                                value=""
                                                className="text-black bg-white box-content caret-black inline-block md:appearance-none md:aspect-auto md:bg-transparent md:box-border md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder={props.emailPlaceholder}
                                                value=""
                                                className="text-[13.3333px] font-normal bg-white shadow-none box-content caret-black inline-block leading-[normal] min-h-0 min-w-0 w-auto px-0.5 py-px rounded-none font-arial md:appearance-none md:text-base md:font-medium md:aspect-auto md:bg-stone-950/80 md:shadow-[rgb(34,34,34)_0px_0px_0px_1px_inset] md:box-border md:caret-transparent md:block md:leading-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:pl-[15px] md:pr-[115px] md:py-[15px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:font-figtree"
                                            />
                                            <div className="static box-content caret-black right-auto inset-y-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-[5px] md:inset-y-[5px]">
                                                <input
                                                    type="submit"
                                                    value={props.subscribeButtonText}
                                                    className="text-[13.3333px] font-normal bg-white box-content caret-black h-auto leading-[normal] text-start text-wrap w-auto z-auto px-0.5 py-px rounded-none font-arial md:appearance-none md:text-base md:font-medium md:aspect-auto md:bg-purple-700 md:box-border md:caret-transparent md:h-full md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-[100px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3px] md:font-figtree"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="static box-content caret-black block shrink justify-normal min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] [align-items:normal] gap-x-[normal] basis-auto grow-0 h-auto gap-y-[normal] w-auto md:content-start md:items-start md:gap-x-2.5 md:basis-0 md:grow md:h-min md:justify-center md:gap-y-2.5 md:w-px md:overflow-hidden">
                            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-[7px] md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[7px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-white md:text-lg md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.36px] md:leading-[27px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                        {props.linksTitle}
                                    </p>
                                </div>
                                {props.links?.map((link, index) => (
                                    <div
                                        key={index}
                                        className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    >
                                        <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-300 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                            <a
                                                href={link.href}
                                                className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-white hover:border-white"
                                            >
                                                {link.text}
                                            </a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-[7px] md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[7px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-white md:text-lg md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.36px] md:leading-[27px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                        {props.pagesTitle}
                                    </p>
                                </div>
                                {props.pages?.map((page, index) => (
                                    <div
                                        key={index}
                                        className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    >
                                        <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-300 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                            <a
                                                href={page.href}
                                                className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-white hover:border-white"
                                            >
                                                {page.text}
                                            </a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-[7px] md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[7px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-white md:text-lg md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.36px] md:leading-[27px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                        {props.socialsTitle}
                                    </p>
                                </div>
                                {props.socials?.map((social, index) => (
                                    <div
                                        key={index}
                                        className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    >
                                        <p className="text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-stone-300 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-figtree">
                                            <a
                                                href={social.href}
                                                className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-white hover:border-white"
                                            >
                                                {social.text}
                                            </a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

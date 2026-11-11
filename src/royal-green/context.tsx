import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { DeskKey, Term } from "./data";

export type ModalMode = "checkout" | "terminal" | null;

interface RoyalGreenState {
    selectedDesk: DeskKey;
    setSelectedDesk: (d: DeskKey) => void;
    term: Term;
    setTerm: (t: Term) => void;
    exampleDesk: Exclude<DeskKey, "all">;
    setExampleDesk: (d: Exclude<DeskKey, "all">) => void;
    modalMode: ModalMode;
    openModal: (mode?: ModalMode) => void;
    closeModal: () => void;
    goToMembership: (desk?: DeskKey) => void;
}

const RoyalGreenContext = createContext<RoyalGreenState | null>(null);

export const RoyalGreenProvider = ({ children }: { children: ReactNode }) => {
    const [selectedDesk, setSelectedDeskRaw] = useState<DeskKey>("ai");
    const [term, setTerm] = useState<Term>(1);
    const [exampleDesk, setExampleDesk] = useState<Exclude<DeskKey, "all">>("ai");
    const [modalMode, setModalMode] = useState<ModalMode>(null);

    // The All Labs Bundle is only offered as a 1-year membership, so
    // selecting it always forces the term to 12 months.
    const setSelectedDesk = (d: DeskKey) => {
        setSelectedDeskRaw(d);
        if (d === "all") setTerm(12);
    };

    const value = useMemo<RoyalGreenState>(
        () => ({
            selectedDesk,
            setSelectedDesk,
            term,
            setTerm,
            exampleDesk,
            setExampleDesk,
            modalMode,
            openModal: (mode: ModalMode = "checkout") => setModalMode(mode),
            closeModal: () => setModalMode(null),
            goToMembership: (desk?: DeskKey) => {
                if (desk) setSelectedDesk(desk);
                const el = document.getElementById("membership");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
            },
        }),
        [selectedDesk, term, exampleDesk, modalMode],
    );

    return <RoyalGreenContext.Provider value={value}>{children}</RoyalGreenContext.Provider>;
};

export const useRoyalGreen = () => {
    const ctx = useContext(RoyalGreenContext);
    if (!ctx) throw new Error("useRoyalGreen must be used within RoyalGreenProvider");
    return ctx;
};

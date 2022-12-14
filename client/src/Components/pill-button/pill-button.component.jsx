import './pill-button.styles.css'
const PillButton = ({color, children }) => {
    const primary = color === "p"
    const invertedPrimary = color === "ip"
    const secondary = color === "s"
    const accent = color === "a"

    return (
        primary ? (
            <button data-color={color} className="border-none rounded-full px-6 py-2 text-xl uppercase cursor-pointer text-white outline-none drop-shadow-lg bg-center bg-p ripple">
                {children}
            </button>
        ) : secondary ? (
            <button data-color={color} className="border-none rounded-full px-6 py-2 text-xl uppercase cursor-pointer text-white outline-none drop-shadow-lg bg-center bg-s ripple">
                {children}
            </button>
        ) : accent ? (
            <button data-color={color} className="border-none rounded-full px-6 py-2 text-xl uppercase cursor-pointer text-white outline-none drop-shadow-lg bg-center bg-a ripple text-s">
                {children}
            </button>
        ) : invertedPrimary ? (
            <button data-color={color} className="border-none rounded-full px-6 py-2 text-xl uppercase cursor-pointer text-p outline-none drop-shadow-lg bg-center bg-white ripple text-s">
                {children}
            </button>
        ) : null

    );
}

export default PillButton;
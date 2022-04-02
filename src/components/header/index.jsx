import "./style.css"

export const Header = ({ children, className }) => {
    return (
        <header className={className}>
            <nav>
                {children}
            </nav>
        </header>
    )
}
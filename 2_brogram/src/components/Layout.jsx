export default function Layout(props){

    const{children} = props

    const header = (
        <header>
            <h1 className="text-gradient"> The Brogram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://www.jamesmqle.com" 
            target="_blank">James Le</a><br/>Styled with <a href="https://www.jamesmqle.com"
            target="_blank">FantaCSS</a></p>
        </footer>

        // https://YOUR_USERNAME.netlify.app
    )
    return(
        <>
            {header}
            {children}
            {footer}
        </>
    )
}
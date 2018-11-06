import Link from 'next/link'

const Navigation = () => (
    <header className="global-nav">
        <div className="wrapper">
            <Link href="/"><a className="logo-global"></a></Link>
            <nav>
                <ul>
                    <li><Link href="/verein"><a>Verein</a></Link></li>
                    <li><Link href="/mitglieder"><a>Mitglieder</a></Link></li>
                    <li><Link href="/schuetzenfest"><a>Schützenfest</a></Link></li>
                    <li><Link href="/kontakt"><a>Kontakt</a></Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Navigation
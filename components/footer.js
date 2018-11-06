import Link from 'next/link'

const BrandFoot = () => (
    <footer>
        <section className="home-nav">
            <div className="wrapper">
                <ul>
                    <li><Link href="/verein"><a>Verein</a></Link></li>
                    <li><Link href="/mitglieder"><a>Mitglieder</a></Link></li>
                    <li><Link href="/schuetzenfest"><a>Schützenfest</a></Link></li>
                    <li><Link href="/kontakt"><a>Kontakt</a></Link></li>
                </ul>
            </div>
        </section>
        <section className="legal-nav">
            <div className="wrapper">
                <div className="copyright">©2018 Schützenverein 1980 Hohenfichte e.V.</div>
                <nav>
                    <ul>
                        <li><Link href="/impressum"><a>Impressum</a></Link></li>
                        <li><Link href="/datenschutz"><a>Datenschutz</a></Link></li>
                    </ul>
                </nav>
            </div>
        </section>
    </footer>
)

export default BrandFoot
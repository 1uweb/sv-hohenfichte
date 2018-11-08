import Link from 'next/link'
import NextHead from 'next/head'
import css from '../static/style/css/main.sass'
import Navigation from '../components/header'
import BrandFoot from '../components/footer'

const Index = () => (
    <div className="app-root">
        <NextHead>
            <meta charSet="UTF-8" />
            <title>Mitglieder | Schützenverein Hohenfichte</title>
            <meta name="description" content="Der Schützenverein Hohenfichte schießt mit historischen und modernen Armbrüsten. Informationen über den Verein, das Vereinsleben, Vorstand und Satzung. Höhepunkt ist das alle 2 Jahre stattfindende Schützen- und Brückenfest neben der 400-Jahre alten Holzbrücke in Hohenfichte." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/favicon-128.png" sizes="128x128" />
            <meta name="msapplication-TileColor" content="#D6D6D6" />
            <meta name="msapplication-TileImage" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="https://static.uwe-barthel.net/sv-hohenfichte.de/favicons/mstile-310x310.png" />
            <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>
        </NextHead>
        <Navigation></Navigation>
        <main className="app-root">
            <section className="hero-app-mitglieder"></section>
            <section className="content-container">
                <div className="wrapper">
                    <h1 className="headline-verein fadein-image">Vorstand</h1>
                    <ul class="verein-desc verein-vorstand fadein animation1">
                        <li>Vorsitzender<ul>
                                <li>Arndt Kutzke</li>
                            </ul></li>
                        <li>2. Vorsitzender<ul>
                                <li>Gerald Schmieder</li>
                            </ul></li>
                        <li>Geschäftsführer<ul>
                                <li>Thomas Koch</li>
                            </ul></li>
                        <li>Schriftführer<ul>
                                <li>Ina Kluge</li>
                            </ul></li>
                        <li>Leiter Schützengilde<ul>
                                <li>Dietmar Kluge</li>
                            </ul></li>
                        <li>Öffentlichkeitsarbeit<ul>
                                <li>Thomas Helke</li>
                            </ul></li>
                        <li>Schatzmeisterin<ul>
                                <li>Peggy Kluge</li>
                            </ul></li>
                        <li>Revisionskommision<ul>
                                <li>Helmut Heinze</li>
                                <li>Hoyer Petra</li>
                                <li>Kriegel Wolfgang</li>
                            </ul></li>
                        <li>Waffenmeister<ul>
                                <li>David Kutzke</li>
                            </ul></li>
                        <li>Koopiertes Mitglied<ul>
                                <li>Jens Barthel</li>
                            </ul></li>
                    </ul>
                    <div className="mitgliedschaft verein-desc fadein-image animation2">
                        <h1 className="headline">Mitglidschaft</h1>
                        <ul className="verein-des">
                            <li>Der Schützenverein Hohenfichte 1980 e.V. ruft 2-3 Mal im Jahr eine Mitgliederversammlung ein</li>
                            <li>Vorstandssitzung ist einmal im Monat</li>
                            <li>Die Aufnahme in den Verein ist schriftlich beim Vorstand einzureichen. Der Vorstand entscheidet über den Aufnahmeantrag.</li>
                            <li><Link href="http://downloads.schuetzenverein-hohenfichte.de/satzungen/satzung-09032018.pdf" target="_blank"><a>Satzung des Vereins als pdf-Dokument laden</a></Link> (1,08 KB, Datei öffnet sich in einem externen Fenster. Sie werden zum Verzeichnis auf dem CDN-Server weitergeleitet)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <BrandFoot></BrandFoot>
    </div>
)

export default Index
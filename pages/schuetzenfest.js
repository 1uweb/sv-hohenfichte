import Link from 'next/link'
import NextHead from 'next/head'
import css from '../static/style/css/main.sass'
import Navigation from '../components/header'
import BrandFoot from '../components/footer'

const Index = () => (
    <div className="app-root">
        <NextHead>
            <meta charSet="UTF-8" />
            <title>Schützenfest | Schützenverein Hohenfichte</title>
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
        <main className="app-container">
            <section className="hero-app-fest">
                <div className="wrapper">
                    <h1>20. Schützen- & Brückenfest</h1>
                    <h2>27.07. - 29.07.18</h2>
                </div>
            </section>
            <section className="fest-section">
                <section className="programm content-container">
                    <div className="wrapper">
                        <h1>Programm</h1>
                        <img className="responsive" src="https://sv-hassets.uwe-barthel.net/images/schuetzenfest/flyer-26052018.png"></img>
                    </div>
                </section>
                <section className="regatta content-container">
                    <div className="wrapper">
                        <h1>Holzbrückenregatta</h1>
                        <p>Unterhalb finden sie die Ergebnisse</p>
                        <div className="regatta-info">
                            <h2 className="ergebniss-hl">Ergebnisse von der Regatta</h2>
                            <ul className="ergebniss-list">
                                <li>Platz 1<ul>
                                        <li>Steinhauser, Marcel</li>
                                    </ul></li>
                                <li>Platz 2<ul>
                                        <li>Bruder, Thomas</li>
                                    </ul></li>
                                <li>Platz 3<ul>
                                        <li>Mai, Denny</li>
                                    </ul></li>
                                <li>Platz 4<ul>
                                        <li>Kluge, Jens</li>
                                    </ul></li>
                                <li>Platz 5<ul>
                                        <li>Kluge, Michael</li>
                                    </ul></li>
                                <li>Platz 6<ul>
                                        <li>Voigt, Prisca</li>
                                    </ul></li>
                                <li>Platz 7<ul>
                                        <li>Pöschmann, Martin</li>
                                    </ul></li>
                                <li>Platz 8<ul>
                                        <li>Mai, Ronny</li>
                                    </ul></li>
                                <li>Platz 9<ul>
                                        <li>Gabsch, Nico</li>
                                    </ul></li>
                            </ul>
                            <h2 className="ergebniss-hl">Ergebnisse vom Regatta Sonderpreis</h2>
                            <ul className="ergebniss-list">
                                <li>Platz 1<ul>
                                        <li>Pöschmann, Martin</li>
                                    </ul></li>
                                <li>Platz 2<ul>
                                        <li>Mai, Ronny</li>
                                    </ul></li>
                                <li>Platz 3<ul>
                                        <li>Michael Kluge</li>
                                    </ul></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="film content-container">
                    <div className="wrapper">
                        <h1>40. Vereinsjubiläum</h1>
                        <video className="responsive" poster="https://sv-hassets.uwe-barthel.net/images/hero/4.jpg">
                            <source src="#" type="video/mp4"></source>
                            <source src="#" type="video/webm"></source>
                        </video>
                        <p>Der Film wird erst nach dem Verkauf der DVD's freigestalten</p>
                    </div>
                </section>
                <section className="karte content-container">
                    <div className="wrapper">
                        <h1>Karte</h1>
                        <iframe src="https://www.google.de/maps/embed?pb=!1m18!1m12!1m3!1d1547.4599289695886!2d13.13714349122406!3d50.8205866513202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a75bae1b6d526b%3A0xba5e7251cd72c0f5!2sHolzbr%C3%BCcke+Hohenfichte!5e1!3m2!1sde!2sde!4v1527517815744" allowFullScreen="" width="100%" height="650px" frameBorder="0"></iframe>
                        <p>Hier finden sie das Festgelände</p>
                    </div>
                </section>
            </section>
        </main>
        <BrandFoot></BrandFoot>
    </div>
)

export default Index
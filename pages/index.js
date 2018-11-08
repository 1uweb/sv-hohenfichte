import Link from 'next/link'
import NextHead from 'next/head'
import css from '../static/style/css/main.sass'
import Navigation from '../components/header'
import BrandFoot from '../components/footer'
import HeadTag from '../components/head'

const Index = () => (
    <div className="app-root">
        <NextHead>
            <meta charSet="UTF-8" />
            <title>Home | Schützenverein Hohenfichte</title>
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
            <section className="hero-app"></section>
            <section className="welcome content-container">
                <div className="wrapper">
                    <h1>Verein mit Tradition.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis orci ac sapien fermentum vulputate. Aliquam viverra egestas odio ut feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse cursus pellentesque erat. Proin id lectus auctor augue tincidunt aliquam accumsan id massa. Quisque blandit nisi sed feugiat venenatis. Ut venenatis tempus mauris non ultricies. Phasellus porttitor enim in nibh sagittis ultrices. Quisque erat lacus, auctor vitae odio in, lacinia bibendum nibh. Vivamus dictum et enim id ullamcorper. In interdum, est vitae iaculis efficitur, elit ipsum maximus lorem, a dignissim purus leo sed arcu. </p>
                    <img src="https://static.uwe-barthel.net/sv-hohenfichte.de/body/holzbruecke-hohenfichte-2012.jpg" className="responsive"></img>
                </div>
            </section>
            <section className="fest content-container">
                <div className="wrapper">
                    <h1>Feste die in Erinnerung bleiben!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis orci ac sapien fermentum vulputate. Aliquam viverra egestas odio ut feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse cursus pellentesque erat. Proin id lectus auctor augue tincidunt aliquam accumsan id massa. Quisque blandit nisi sed feugiat venenatis. Ut venenatis tempus mauris non ultricies. Phasellus porttitor enim in nibh sagittis ultrices. Quisque erat lacus, auctor vitae odio in, lacinia bibendum nibh. Vivamus dictum et enim id ullamcorper. In interdum, est vitae iaculis efficitur, elit ipsum maximus lorem, a dignissim purus leo sed arcu. </p>
                    <img src="https://static.uwe-barthel.net/sv-hohenfichte.de/body/5.jpg" className="responsive"></img>
                </div>
            </section>
            <section className="mitglieder-werden content-container">
                <div className="wrapper">
                    <h1>Wollen sie Mitglied werden?</h1>
                    <p>Jetzt Mitgliederantrag einreichen!</p>
                    <Link href="/mitglieder"><a className="button-werben"><button>Jetzt Mitglied werden!</button></a></Link>
                </div>
            </section>
        </main>
        <BrandFoot></BrandFoot>
    </div>
)

export default Index
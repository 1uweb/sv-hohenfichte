import Link from 'next/link'
import NextHead from 'next/head'
import css from '../static/style/css/main.sass'
import Navigation from '../components/header'
import BrandFoot from '../components/footer'

const Index = () => (
    <div className="app-root">
        <NextHead>
            <meta charSet="UTF-8" />
            <title>Verein | Schützenverein Hohenfichte</title>
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
            <section className="hero-app-verein"></section>
            <section id="verein" className="content-container fadein-image animation1">
                <div className="wrapper">
                    <div class="headline-verein">
                        <h1>Vereinsleben</h1>
                    </div>
                    <div className="verein-des">
                        <ul className="verein-desc">
                            <li>pflegt altes Brauchtum und den Schießsport</li>
                            <li>unternimmt mit seinen Mitgliedern Wanderungen, Grillabende (in der eigenen Schützenbaude), Weihnachtsfeiern ... </li>
                        </ul>
                        <p className="verein-desc">
                            Höhepunkt ist das alle 2 Jahre stattfindende und weit über der Region hinaus bekannte Schützen- und Brückenfest neben der 400 Jahre alten Holzbrücke.
                        </p>
                    </div>
                </div>
            </section>
            <section id="waffen" className="content-container fadein animation2">
                <div className="wrapper">
                    <div className="headline-verein">
                        <h1>Waffen</h1>
                    </div>
                    <div className="verein-desc">
                        <p>Geschossen wird mit historischen und modernen Armbrüsten. Geschossen wird im Training auf Zielscheiben, die ca. 10-20 m entfernt stehen. Der Verein organisiert regelmäßig Trainingsschießen.

                            Der Schützenverein hat seine eigenen Armbrüste. Diese werden selbst gewartet.

                            Es gibt keine Unterschiede zwischen Mann und Frau. Kinder dürfen nur unter Aufschicht von Mitgliedern mit den kleinen Armbrüsten schießen. </p>
                    </div>
                </div>
            </section>
            <section id="geschichten" className="content-container regatta geschichte">
                <div className="wrapper">
                    <div className="headline-verein">
                        <h1>Geschichten</h1>
                    </div>
                    <div className="verein-desc">
                        <h2 className="verein-content">Schützenkönige</h2>
                        <ul className="verein-schuetzenkönige">
                            <li>1980<ul>
                                    <li>Köhler, Bernd</li>
                                </ul></li>
                            <li>1982<ul>
                                    <li>Weiß, Dieter</li>
                                </ul></li>
                            <li>1984<ul>
                                    <li>Köhler, Klaus</li>
                                </ul></li>
                            <li>1986<ul>
                                    <li>Werzner, Dietmar</li>
                                </ul></li>
                            <li>1988<ul>
                                    <li>Klemm, Jürgen</li>
                                </ul></li>
                            <li>1990<ul>
                                    <li>Heinze, Helmut</li>
                                </ul></li>
                            <li>1992<ul>
                                    <li>Kesch, Michael</li>
                                </ul></li>
                            <li>1994<ul>
                                    <li>Schönfelder, Petra</li>
                                </ul></li>
                            <li>1996<ul>
                                    <li>Kempe, Klaus</li>
                                </ul></li>
                            <li>1998<ul>
                                    <li>Giesecke, Roland</li>
                                </ul></li>
                            <li>2000<ul>
                                    <li>Koch, Thomas</li>
                                </ul></li>
                            <li>2002<ul>
                                    <li>Richter, Michael</li>
                                </ul></li>
                            <li>2004<ul>
                                    <li>Bluttner, Andre</li>
                                </ul></li>
                            <li>2006<ul>
                                    <li>Schönfelder, Dietmar</li>
                                </ul></li>
                            <li>2008<ul>
                                    <li>Schmieder, Gerald</li>
                                </ul></li>
                            <li>2010<ul>
                                    <li>Helke, Thomas</li>
                                </ul></li>
                            <li>2012<ul>
                                    <li>Kutzke, Arndt</li>
                                </ul></li>
                            <li>2014<ul>
                                    <li>Jacqueline, Schäfer</li>
                                </ul></li>
                            <li>2016<ul>
                                    <li>Kluge, Dietmar</li>
                                </ul></li>
                            <li>2018<ul>
                                    <li>Der Kaiser konnte nicht ermittelt werden!</li>
                                </ul></li>
                        </ul>
                    </div>
                    <div className="verein-desc">
                        <h2 className="verein-content">Das Schießen am Sonntag</h2>
                        <div className="verein-desc">
                            <p>Der Sonntag  morgen beginnt damit, dass der Verein mit seinen Mitgliedern den noch  Amtierenden König mit einer Pferdekutsche und Blasmusik von seinem Sitz abholt.  Dann zieht der Schützenverein Hohenfichte e.V. mit einer Blaskapelle durch das  ganze Dorf. Ende der Route ist der Schützenplatz. Dort hält der noch amtierende  Schützenkönig vor dem Publikum und vor dem Verein eine Ansprache. Danach begibt  sich der Verein in das Festzelt zum Mittagessen.</p>
                            <p>Nachdem der Verein sich gestärkt hat, begibt er sich zum Schießen auf die Wiese. Dann müssen die Zuschauer und die Mitglieder des Schützenverein Hohenfichte 1980 e.V. mit der Armbrust versuchen teile des Hölzernen Vogels abzuschießen. Wem es gelingt der bekommt einen Preis. Der Preis richtet sich danach, welches Teil man vom Vogel herunter geholt hat.</p>
                            <p>Wenn der Vogel komplett abgeräumt wurde, beginnt das Königsschießen. Dazu wird der Mast an dem der Vogel befestigt wurde umgelegt und es wird das Herz befestigt an dem nur die Mitglieder des Schützenverein Hohenfichte 1980 e.V. teilnehmen dürfen. Schießen darf nur der, der noch kein Schützenkönig ist. Die Mitglieder haben die freie Wahl, ob sie bei dem Königsschießen mitmachen oder nicht. Ziel ist es, dass Hölzerne Herz herunter zu schießen. Wenn dieses gelingt der darf sich dann Schützenkönig oder Schützenkönigin nennen und behält diesen Titel für 2 Jahre. Nachdem der Schützenkönig/-in ermittelt wurde zieht sich der Schützenverein in das Festzelt zurück und feiert den neuen König oder die neue Königin.</p>

                        </div>
                    </div>
                    <div className="verein-desc">
                        <h2 className="verein-content">Das Flöhatalorakel</h2>
                        <h4>Flöhatalorakel</h4>
                        <p>Nach dem Schützenfest ist vor dem Königsschießen, so könnte eine fußballerische Redensart auf die bevorstehenden Ereignisse in Hohenfichte umgeschrieben werden.<br></br>
                            <br></br>
                            Kaum ist eine Auflage des aller zwei Jahre organisierten Schützenfestes zu Ende gegangen, können sich unterlegene Teilnehmer bereits auf eine entscheidende Frage für das wieder bevorstehende Spektakel eine Antwort geben: Muss ich mir einen Bart wachsen lassen und wie komme ich zu einem "K" im Namen.</p>
                        <h4>Bart und Buchstabe "K"</h4>
                        <p>Denn seitdem das Armbrustschießen seit 1980 durchgeführt wird, hält eine beeindruckende Serie, derer Kuriosität man sich spätestens nach der vierten und fünften so richtig bewusst wurde.Als das Schützenfest 1980 erstmals organisiert worden ist, gewann mit Bernd Köhler ein Bärtiger und Namensträger "K". Ihn löste nach zwei Jahren Dieter Weiß ab. Der nannte zwei Elemente nicht sein Eigen: Er galt im heutigen Sprachverhältnis der Hohenfichtner als Glattrasierter, weil ohne Haarwuchs im Gesicht und ihm fehlte der elfte Buchstabe im Alphabet. Mit Klaus Köhler stellten sich 1984 das "K" und der Bart wieder ein. Prompt gewann 24 Monate später mit Dietmar Werzner ein Glattrasierter. Als sich schließlich Jürgen Klemm 1988 den Königstitel holte, mehrte sich das scherzhafte Gerücht von einem Orakel im Flöhatal.<br></br>
                            <br></br>
                            Ab jetzt wurden Wetten und Tipps abgegeben, wie wohl die Neuauflage ausgehen würde. 1990 stieg mit Helmut Heinze ein Glattrasierter auf den Thron. In jenem gründete sich die Schützengesellschaft Hohenfichte und wurde zu Cheforganisator des über Kreisgrenzen hinaus bekannten Spektakels. Bis dahin war die Veranstaltung im Rahmen der örtlichen Dorfclubs organisiert worden. 1992 wird Ortsvorsteher Heinze natürlich von Bart- und K-Träger Michael Kesch abgelöst.</p>
                        <h4>Zum 8. eine Frau vorn</h4>
                        <p>Die Gunst der Stunde, keinen Bart tragen zu müssen, nutze 1994 Petra Schönfelder I. Damit schrieb sich mit der achten Veranstaltung erstmals eine Frau als Siegerin des Wettbewerbs ein. Zwei Jahre darauf mussten all jene ihre Hoffnung begraben, die glauben, gut rasiert zum Erfolg zu kommen. Sie hätte der Tradition durchaus Glauben schenken sollen. Denn Klaus Kempe brachte die beiden geforderten Eigenschaften mit. Und siegte.<br></br>
                            <br></br>
                            Diesen Umstand wusste 1998 Roland Giesecke wieder für sich zu nutzen. Der Glattrasierte wurde von seinen Mitstreitern von der Schützenwiese getragen.<br></br>
                            <br></br>
                            Und auch zur 11. Auflage hielt die Regel: Bartträger Thomas Koch wurde der elfte König. In jenem Jahr standen erstmals die Wettermacher weniger auf der Seite der Hohenfichtner. Denn ist hier Brücken-und Schützenfest anberaumt, ist Sonnenschein pur garantiert. Damals begleiteten Regeneinlagen die Entscheidung. Vier Stunden Dramatik unterm hölzernen Vogel erlebten Hunderte Zuschauer. In einem an Spannung kaum zu überbietenden Finale setzte sich Thomas Koch im fünften Durchgang des Königsschießen und bestätigte das ungeschriebene Gesetzt der laut Vereinschef Bernd Köhler "vereinigten Talrepubliken Hohenfichte, Schellenberg und Marbach samt seiner Hauptstadt Leubsdorf".</p>
                        <h4>Weibliche Gegenwehr</h4>
                        <p>Dabei lieferten die Glattrasierten den durch das Flöhatal-Orakel offensichtlich Favorisierten einen erbitterten Widerstand. Allen voran bereiteten ausgerechnet die Frauen um Käthe Kösling, Ursel Brettschneider, Britta Kutzke und Elke Schmieder unter den zwölf Kandidaten des wichtigsten Wettkampfes in der Gemeinde des Herren manche Schrecksekunde. Ihre Pfeile ließen das Objekt der Begierde mächtig wackeln, sogar ein Teilstück des Herzens brachten sie zu Boden. Aber das alles entscheidende Holzstückchen und ein Quäntchen Glück fehlten den Triumph. Dabei hätten die Vorstandsherren einen Damenbart durchaus gelten lassen. Selbst der wieder bestens aufgelegte Vereinschef Bernd Köhler versucht, durch verbalen Psychoterror das Geschehen zu beeinflussen.</p>
                        <h4>Verbale Attacken</h4>
                        <p>Und genau diese verbal-heiteren Attacken machen auch den Charme des Königsschießens auf der Festwiese aus. Glattrasierte wurden vom immer gut gelaunten Chef als Warmduscher abqualifiziert, weniger Treffsicheren machte er mit "ein schöner Schuss, aber eben bissel daneben" weiter Mut. Dem gegenüber motivierte Köhler zum Vergnügen von Zuschauern die K-Männer. Vor allem Arndt Kutzke des gestandenen Tell-Jüngers.<br></br>
                            <br></br>
                            Doch in aussichtsreicher Position fehlte auch dem hoch gehandelten Gärtnermeister die Position Glück. Für einen Kandidaten war sogar ein Spezialspaten herbeigeschafft worden. Gerald Schmieder dürfte damals bei den Schüssen der Frauen gezittert haben. Der hatte nämlich im Vorfeld verkündet, dass er sich eingräbt, wenn das vermeintlich schwächere Geschlecht gewinnt.</p>
                        <h4>Nun kommt Bruno</h4>
                        <p>Die wichtigste Schützenfestentscheidung vollzog sich wie erwartet: Ein Glattrasierter sicherte sich den Königstitel. Michael Richter, eigentlich nur unter den Pseudonym Bruno bekannt, zerschmetterte den Holzvogel mit dem elften Schuss im zweiten Durchgang des Königsschießens. Der seinerzeit 41-Jährige setzte sich gegen zehn Mitbewerber durch, wobei die Zahl der Bärtigen diesmal begrenzt blieb. Getreu dem Flöhatalorakel sahen die für sich diesmal keine Chance. Vor dem Königswettbewerb donnerten 168 Teilnehmer am allgemeinen Vogelschießen in zwei Umläufen den Pfeil auf das Streitobjekt.<br></br>
                            <br></br>
                            Verbale Würze erhielt das Spektakel durch die Moderation von Bernd Köhler. Eine Portion Selbstvertrauen war bei den Schützen gefragt, dann zu fast jeden Kandidaten wusste der Vereinschef ein Sprüchlein zu sagen, was nichts für Schützen mit schwachen Nerven war.</p>
                        <h4>Erst Bus, dann Kutsche</h4>
                        <p>In die Chronik ging der neue Schützenkönig André Bluttner ein, der sich ebenfalls in einem hochdramatischen Finale des Vogelschießens durchsetzte. Kenner der Szene freuten sich mit dem Sieger. Die Tradition das der Buchstabe "K" im Namen aller zwei Jahre eine Rolle spielt, sahen die Einheimischen durchaus gewahrt. Denn der Schützenkönig stammt aus der Familie Kutzke.<br></br>
                            <br></br>
                            Insgesamt zwölf Bewerber um den Thron traten an. Die vermeintlichen Verlierer ohne Bartwuchs zeigten dabei erstklassige Schussleistungen mit der Armbrust und machten es den bevorzugten Konkurrenten schwer. Bluttners Sieg stellt ihn und den Verein vor ein Novum: Der Königsumzug muss neu Organisiert werden. Denn Bluttner ist Braunsdorfer. Und die Regel des Vereins gewährt dem Sieger einen Schützenumzug. Allerdings in der Gemeinde. "Es wird ein PS-getriebener Sonderbus gechartert, mit dem wir André am Ortsausgang seines Heimatortes abholen", erklärt Köhler die Taktik. Am Ortseingang von Hohenfichte werde dann in die obligatorische pferdebespannte Festkutsche umgestiegen.</p>
                        <p>Ausschnitt <Link href="https://www.freiepresse.de/LOKALES/MITTELSACHSEN/FLOEHA/" target="_blank"><a>Freie Presse - Flöhaer Zeitung</a></Link>, Donnerstag 27. Juli 2006</p>
                    </div>
                </div>
            </section>
        </main>
        <BrandFoot></BrandFoot>
    </div>
)

export default Index
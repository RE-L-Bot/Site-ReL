import FOOTER from "@/components/en/footers"
import HEADER from "@/components/en/headers"
import Registrar from "@/components/en/commands/representation/registry/registrar"
import Ticket from "@/components/en/ticketRepresentation"
import {
    redirectInfos,
    redirectInvite,
    redirectLogDash,
    redirectTerms
} from "@/scripts/redirects"

export default function HomeBr() {

    return (
        <div>

            <HEADER />

            <div className="FirstDivIndex">

                <div id="imgCIRE">

                    <img src="/images/RELINTEIRA.webp" alt="RE=L Magica" />

                </div>

                <div>

                    <div>

                        <h3 style={{ margin: 0 }}>Re=L Bot</h3>

                        <h3 style={{ margin: 0 }}>A discord bot to assist your server</h3>

                        <p style={{ margin: 0 }}>Turning the difficult into the easy</p>

                    </div>

                    <div className="DivButtons">

                        <div style={{ margin: "5px" }}>

                            <button className="ButtonAddBot" onClick={redirectInvite}>+Add Me</button>

                            <button className="ButtonDashBoard" onClick={redirectLogDash}>Dashboard</button>

                        </div>

                        <div>

                            <button className="ButtonTerms" onClick={redirectTerms}>Terms of use</button>

                            <button className="ButtonInformation" onClick={redirectInfos}>🌟Informations</button>

                        </div>

                    </div>

                </div>

            </div>

            <div id="about" />

            <div className="SecondDivIndex">

                <div>

                    <h3 style={{ margin: 0 }}>Take your server to the next level</h3>

                    <p>
                        Servers focused on interaction with members are increasingly <br />
                        going through the same things and the same problems. <br />

                        New members like interaction and enjoy roles <br />
                        representative, and because members want positions that's where RE=L <br />
                        In the meantime, RE=L has a great function for these types of servers <br />
                        a function of "registering" members, RE automates the process <br />
                        of having to assign multiple positions at once and better and standard positions <br />
                        And with moderation and ticket functions
                    </p>

                    <h5 style={{ margin: 0 }}>Everything below is customizable, only this one to illustrate</h5>

                </div>

                <img src="/svgs/RELCHIBI.svg" alt="RE=L Chibi" id="RELChibi" className="images" />

            </div>

            <div className="SecondDivIndex">

                <Registrar />

            </div>

            <div className="FourDivIndex">

                <img src="/svgs/RELINTEIRA2.svg" alt="RE=L Espada" style={{ height: "500px" }} id="reLInteira" />

                <div>

                    <h2 style={{ margin: 0 }}>
                        Turn your tickets better than ever and more beautiful
                    </h2>

                    <p>
                        With a great functionality of being able to be using webhooks <br />
                        Your service ticket will be much more beautiful and attractive to members
                    </p>

                    <div>

                        <Ticket />

                    </div>

                </div>

            </div>

            <FOOTER />

        </div>
    )

}
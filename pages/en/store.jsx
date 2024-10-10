import Footer from "@/components/en/footers";
import Header from "@/components/en/headers";
import { configData } from "@/scripts/login";
import { generateRandomString } from "@/scripts/enc";
import RequestApi from "@/scripts/ManagerRequest";
import { calculatePercent } from "@/scripts/outhers";

export default function Store() {

    return (

        <div>

            <Header />

            <div className="SecondDivIndex">

                <div>

                    <h2 style={{ margin: 0 }}>Help me stay awake</h2>

                    <h4 style={{ margin: 0 }}>
                        Did you know that staying online costs a lot?
                    </h4>

                    <p>
                        With new features, hosting, database, dodiv, <br />
                        and every month we are investing in new functionalities <br />
                        and technologies for you, the user.
                    </p>

                    <p>
                        Want to help me stay online? <br />
                        Great! You can buy one of our premium plans <br />
                        or even the famous "Edinhos" (my currency).
                    </p>

                    <p>
                        Don't worry if you can't buy any of these things, <br />
                        you can still use some of my features, though with more limitations. <br />
                    </p>

                    <p className="descriptionOptions">
                        But if you want to make a donation, that would help me a lot <br />
                        and you'd also get a beautiful role in my server.
                    </p>

                </div>

                <img src="/svgs/RELCHIBI.svg" alt="relchibisvg" className="images" />

            </div>

            <div className="SecondDivIndex">

                <div>

                    <h2 style={{ margin: 0 }}>Refund Policy</h2>

                    <p>
                        Since all products sold here are digital products, we do not offer refunds.
                    </p>

                    <h4 style={{ margin: 0 }}>I purchased with a card without permission</h4>

                    <p>
                        Purchasing with someone else's card without their proper permission is considered fraud <br />
                        and is a crime. In addition to not being able to receive a refund, we reserve the right to <br />
                        block your access to use the bot.
                    </p>

                </div>

            </div>

            <div className="SecondDivIndex">

                <div>

                    <h2 style={{ margin: 0 }}>Clearing up some doubts</h2>

                    <ul>
                        <li>
                            I don't have money, what can I do?
                        </li>
                        <ul>
                            <li>
                                We do not offer discounts greater than those available on the website. <br />
                                If you're low on funds, we recommend saving your money <br />
                                and spending it on your needs, as we will not refund your money for user irresponsibility.
                            </li>
                        </ul>
                        <li>
                            Isn't this unfair to other users?
                        </li>
                        <ul>
                            <li>
                                The bot's services are free for everyone, but we offer premium features <br />
                                to benefit those who want to help keep the bot running, and these benefits <br />
                                won't harm other users.
                            </li>
                        </ul>
                    </ul>

                </div>

            </div>

            <h3 style={{ margin: 0 }}>Premium</h3>

            <hr />

            <h3 style={{ textAlign: "center" }}>Premium Basic</h3>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Monthly Basic</h2>

                    <h4 style={{ margin: 0 }}>$ 5.99</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>100,000 Edinhos</p>

                        <p>5 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>10 registration categories</p>

                        <p>10 roles per registration category</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Biannual Basic</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(5.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>100,000 Edinhos + 15% (Total: {calculatePercent(100000, 15, 1, false)})</p>

                        <p>5 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>10 registration categories</p>

                        <p>10 roles per registration category</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Annual Basic</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(5.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>100,000 Edinhos + 25% (Total: {calculatePercent(100000, 25, 1, false)})</p>

                        <p>5 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>10 registration categories</p>

                        <p>10 roles per registration category</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <h3 style={{ textAlign: "center" }}>Premium Medium</h3>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Medium Monthly</h2>

                    <h4 style={{ margin: 0 }}>$ 10.99</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>200,000 Edinhos</p>

                        <p>10 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>15 registration categories</p>

                        <p>15 roles per registration category</p>

                        <p>Open Ticket via thread</p>

                        <p>Early access to bot information</p>

                        <p>1 custom role on the support server</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Medium Biannual</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(10.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>200,000 Edinhos + 15% (Total: {calculatePercent(200000, 15, 1, false)})</p>

                        <p>10 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>15 registration categories</p>

                        <p>15 roles per registration category</p>

                        <p>Open Ticket via thread</p>

                        <p>Early access to bot information</p>

                        <p>1 custom role on the support server</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Medium Annual</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(10.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>200,000 Edinhos + 25% (Total: {calculatePercent(200000, 25, 1, false)})</p>

                        <p>10 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>15 registration categories</p>

                        <p>15 roles per registration category</p>

                        <p>Open Ticket via thread</p>

                        <p>Early access to bot information</p>

                        <p>1 custom role on the support server</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <h3 style={{ textAlign: "center" }}>Premium Master</h3>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Master Monthly</h2>

                    <h4 style={{ margin: 0 }}>$ 20.99</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>300,000 Edinhos</p>

                        <p>20 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>25 registration categories</p>

                        <p>23 roles per registration category</p>

                        <p>Open Ticket via thread</p>

                        <p>Use Webhook for ticket messages</p>

                        <p>Early access to bot information</p>

                        <p>2 custom roles on the support server</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Master Biannual</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(20.99, 10, 6)} (10% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>300,000 Edinhos + 15% (Total: {calculatePercent(300000, 15, 1, false)})</p>

                        <p>20 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>25 registration categories</p>

                        <p>23 roles per registration category</p>

                        <p>Open Ticket via thread</p>

                        <p>Use Webhook for ticket messages</p>

                        <p>Early access to bot information</p>

                        <p>2 custom roles on the support server</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Master Annual</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(20.99, 20, 12)} (20% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>300,000 Edinhos + 25% (Total: {calculatePercent(300000, 25, 1, false)})</p>

                        <p>20 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>25 registration categories</p>

                        <p>23 roles per registration category</p>

                        <p>Open Ticket via thread</p>

                        <p>Use Webhook for ticket messages</p>

                        <p>Early access to bot information</p>

                        <p>2 custom roles on the support server</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>

            <h3 style={{ textAlign: "center" }}>Premiuns LifeTime</h3>

            <div className="DivProductsStore">

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Basic LifeTime</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(5.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>100,000 Edinhos + 35% (Total: {calculatePercent(100000, 35, 1, false)})</p>

                        <p>5 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>10 registration categories</p>

                        <p>10 roles per registration category</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Medium LifeTime</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(10.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>200,000 Edinhos + 35% (Total: {calculatePercent(200000, 35, 1, false)})</p>

                        <p>10 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>15 registration categories</p>

                        <p>15 roles per registration category</p>

                        <p>Open Ticket via thread</p>

                        <p>Early access to bot information</p>

                        <p>1 custom role on the support server</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

                <div className="ProductPremium">

                    <h2 style={{ margin: 0 }}>Master LifeTime</h2>

                    <h4 style={{ margin: 0 }}>$ {calculatePercent(20.99, 30, 60)} (30% OFF)</h4>

                    <div>

                        <h3 style={{ margin: 0 }}>
                            Benefits
                        </h3>

                        <hr />

                        <p>300,000 Edinhos + 35% (Total: {calculatePercent(300000, 35, 1, false)})</p>

                        <p>20 ticket categories</p>

                        <p>Special role on the server</p>

                        <p>25 registration categories</p>

                        <p>23 roles per registration category</p>

                        <p>Open Ticket via thread</p>

                        <p>Use Webhook for ticket messages</p>

                        <p>Early access to bot information</p>

                        <p>2 custom roles on the support server</p>

                        <button onClick={() => {
                            window.alert("To buy contact my creator in support server")
                            window.location = "/serversupportinvite"
                        }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "10px", borderRadius: "5px" }}>

                                <i className="material-symbols-outlined">
                                    store
                                </i>

                                <h4 style={{ margin: 0 }}>
                                    Buy
                                </h4>

                            </div>

                        </button>

                    </div>

                </div>

            </div>


            <Footer />

        </div>
    )
}

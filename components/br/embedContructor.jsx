export default function EmbedContructor(opts) {

    return (

        <div className={opts.className} >

            <div className="contructEmbed">

                <div className="embedColor" id={`embedColor${opts.qnt}`} />

                <div className="bodyEmbed" style={{ backgroundColor: "rgba(55,55,55, .2)", border: "1px solid hsla(0,0%,80%,.3)" }}>

                    <div style={{ margin: "12px" }}>

                        <div className="topEmbed">

                            <div>

                                <div className="authorEmbed">

                                    <div>
                                        <img className="imageAuthor" id={`imageAuthorEmbed${opts.qnt}`} src="" alt="" />
                                    </div>

                                    <div className="nameAuthor">
                                        <a className="" href="" id={`nameAuthorEmbed${opts.qnt}`}></a>
                                    </div>

                                </div>

                                <div>

                                    <div>
                                        <p className="titleEmbed" id={`titleEmbed${opts.qnt}`}></p>
                                    </div>

                                </div>

                                <div>

                                    <div>
                                        <p className="descriptionEmbed" id={`descriptionEmbed${opts.qnt}`}></p>
                                    </div>

                                </div>

                            </div>

                            <div style={{ marginLeft: "5px" }}>
                                <img className="thumbnailEmbed" id={`thumbnailEmbed${opts.qnt}`} src="" alt="" />
                            </div>

                        </div>

                    </div>

                    <div className="divImageEmbed">
                        <img className="imageEmbed hidden max-h-64 w-full rounded-lg" id={`imageEmbed${opts.qnt}`} src="" alt="" />
                    </div>

                    <div className="footerEmbed">

                        <div className="">
                            <img className="imgFooter" id={`imageFooterEmbed${opts.qnt}`} src="" alt="" />
                        </div>

                        <div className="text-white">
                            <p className="textFooter" id={`textFooter${opts.qnt}`}>
                                Powered by RE=L
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
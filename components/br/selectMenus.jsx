import { changeVisibilityOptionsSelectMenu } from "../../scripts/clickMenu";

export default function SelectMenus(opts) {
    return (
        <div className={opts.className} id="selectMenu">

            <div className="selectMenuDc" onClick={changeVisibilityOptionsSelectMenu}>

                <span>Faça uma seleção</span>

                <i className="material-symbols-outlined">
                    expand_more
                </i>

            </div>

            <div className="selectMenuOptionsDc" id="selectMenuOptionsDc">
            </div>

        </div>
    )
}
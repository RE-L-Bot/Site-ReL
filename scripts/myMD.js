export default function (value) {

    const arrayP = []

    let complete = "";

    for (const words of value.split("\n")) {

        for (const w of words.split(" ")) {

            const c = complete.split(/(-)(°)/g)

            const c2 = c[c.length - 1].split("\n")

            if (w.match(/(<#)([0-9]\w+)(>)/g)) {

                complete += "#channel "

            } else if (w.match(/(<@)([0-9]\w+)(>)/g)) {

                complete += "@member "

            } else if (w.match(/(<@&)([0-9]\w+)(>)/g)) {

                complete += "@role "

            } else if (
                w.match("-") &&
                !w.match("--") &&
                !w.match(/[-A-Z]\w+/gi) &&
                !c2[c2.length - 1].match("--") &&
                !w.match(w.match(/([A-Z]\w+)(-)/gi)) &&
                !c2[c2.length - 1].match(/[A-Z]\w+/gi)
            ) {

                complete += "° "

            } else {

                complete += `${w} `

            };

        };

        arrayP.push(complete)

        complete = ""

    };

    return (
        <div>
            {(arrayP.map((value, index) => (
                <div key={index}>
                    {value}
                </div>
            )))}
        </div>
    )
}
export default function (ANO, MES, DIA, HORA, MIN){

    var dateFormated = "";

    for (const d of [ANO, MES, [DIA, 0]]) {

        if (typeof d != "string") {

            if (d[0] != "none") dateFormated += `${d[0]}`;

            else dateFormated += `01`;

        } else {

            if (d != "none") dateFormated += `${d}-`

            else dateFormated += `01-`;

        };

    };

    for (const d of [HORA, [MIN, 0]]) {

        if (dateFormated.indexOf("T") < 0) {

            dateFormated += "T";

        };

        if (typeof d != "string") {

            if (d[0] != "none") dateFormated += `${d[0]}`;

            else dateFormated += `00`;

        } else {

            if (d != "none") dateFormated += `${d}:`;

            else dateFormated += `00:`;

        };

    };

    return dateFormated = (dateFormated.split("-")[0].length < 4) ? ((a) => {

        var valString = "";

        for (var x = dateFormated.split("-")[0].length; x < 4; x++) {

            valString += "0";

        };

        return `${valString}${dateFormated}`;

    })() :
        dateFormated;

};
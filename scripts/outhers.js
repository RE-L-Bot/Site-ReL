import { usePathname } from "next/navigation";

export function range(start, stop, step) {

    if (typeof stop == 'undefined') {

        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;

};

export function calculatePercent(value, percentage, time, sub = true) {

    if (!sub) {
        return `${(value * time + ((value * time) * (percentage / 100))).toFixed(2)}`.replace(".", ",")
    }

    return `${(value * time - ((value * time) * (percentage / 100))).toFixed(2)}`.replace(".", ",")

}

export function actKey(e) {

    const idKey = e.target.id
    const guild_id = location.pathname.match(/[0-9]+/g)

    fetch(
        "/api/activeKey",
        {
            method: "PATCH",
            headers: {
                guild_id,
                idKey
            }
        }
    )
        .then(x => x.json())
        .then(async (response) => {

            if (response.status == 200) {
                document.getElementById(`keyAct${idKey}`).style.display = "none"
            }

        })
        .catch((e) => window.alert(e))
}

export function calculateInlineIndex(fields, currentFieldIndex) {
    
    const startIndex = currentFieldIndex - 1;
  
    for (let i = startIndex; i >= 0; i--) {
      const field = fields[i];
      if (!field) continue;
  
      if (field.inline === false) {
        const amount = startIndex - i;
        return (amount % 3) + 1;
      }
    }
  
    return (currentFieldIndex % 3) + 1;
  }
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
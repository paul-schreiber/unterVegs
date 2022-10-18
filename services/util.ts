import { DateTime } from "luxon";

export function emphasizeText(text: string, searchTerm: string): string {
    return text.replace(new RegExp(searchTerm, 'gi'), (match) => `<b>${match}</b>`)
}

export function replaceSpecialCharacters(originalString: string): string {
    return originalString
        .replace(/\s/g, '')
        .replace(/\u00df/g, 'ss')
        .replace(/\u00e4/g, 'ae')
        .replace(/\u00f6/g, 'oe')
        .replace(/\u00fc/g, 'ue')
        .replace(/\u00c4/g, 'Ae')
        .replace(/\u00d6/g, 'Oe')
        .replace(/\u00dc/g, 'Ue')
        .replace(/[^a-zA-Z ]/g, '')
}

export function timeSince(dateString) {
    const [year, month, day] = dateString.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    const dayInPast = DateTime.fromJSDate(date)
    const diff = DateTime.now().diff(dayInPast, ["years", "months", "days", "hours", "minutes"]).toObject()
    return diff.years != 0 ? `${diff.years} Jahr` : diff.months != 0 ? `${diff.months} Monaten` : diff.days != 0 ? `${diff.days} Tagen` : `${diff.hours} Stunden`
}

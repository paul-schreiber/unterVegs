export default function emphasizeText(text: string, searchTerm: string): string {
    return text.replace(new RegExp(searchTerm, 'gi'), (match) => `<b>${match}</b>`)
}
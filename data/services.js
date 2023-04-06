// const services = [{
//     id: 1,
//     title: "RestorFX Restaurering",
//     shortDesc: "Gjenopprett den rike fargen på bilen uten polering og lakkfjerning, Beskytt karosseriet mot korrosjon, UV-stråler og surt nedbør, Gjenoppliv jevnheten og glansen på overflaten uten riper",
//     longDesc: "RestorFX er en innovativ teknologi som gjenoppretter fabrikkoverflatens glatthet.Hvordan fungerer RestorFX Lakk? Når lakken ser gammel og utslitt ut, oppstår uregelmessigheter, mikrosprekker og mikroskopiske riper på overflaten av lakken. RestorFX struktur gjenoppretter det viktigste gjennomsiktige laget, mens skader på lakken ikke minimeres eller maskeres. RestorFX fyller ut mangler og jevner ut overflaten. Lakken blir tykkere som fører til at fargen blir dypere. Materialet, som samhandler med lakken og etter herding, blir ett med fabrikkbelegget. Etter påføring av RestorFX øker overflatenes hardhet på fabrikklakken, samt motstanden mot riper.",
//     egnetFor: "RestorFX legger til et gjennomsiktig lag og blir ett med fabrikklakk, det gir det originale utseendet til og med gamle biler. Det kan brukes på alle biler, uavhengig av modell og alder."
// }, {
//     id: 2,
//     title: "ClearFX Keramisk lakkbeskyttelse",
//     shortDesc: "Gjenopprett den rike fargen på bilen uten polering og lakkfjerning, Beskytt karosseriet mot korrosjon, UV-stråler og surt nedbør, Gjenoppliv jevnheten og glansen på overflaten uten riper",
//     longDesc: "ClearFX beskytter bilen din mot riper, slitasje. En utmerket løsning for eiere av nye og brukte biler for å ta vare på utsiden av karosseriet og interiøret. Løsningen forsegler og styrker overflatestrukturen, gir en uimotståelig glans til bilen, forbedrer motstanden og holdbarheten til lakken. Dessuten, etterlater den visuell klarhet og fargekontrast med høy intensitet samt gir langvarige og langvarige resultater på alle overflater av kjøretøyet. ClearFX styrker og gjør alle overflater ekstremt hydrofobe og ripebestandige, og tetter og styrker malingstrukturen.",
//     egnetFor: "ClearFX er egnet for alle biler. Denne teknologien anbefales for veldig gamle biler, fordi belegget kommer i kontakt med overflater."
// }, {
//     id: 3,
//     title: "Frontlyktrestaurering",
//     longDesc: "Fabrikkens klarlakk på frontlykter kan oksidere og falme over tid, noe som reduserer førerens synlighet. FX Frontlykt er et gjenopprettende beskyttelsesbelegg som bringer klarheten og glansen til frontlyktene tilbake til sin opprinnelige tilstand, altså den gir mer lysstyrke, forbedrer synet og forhindrer at frontlyktene falmer i årevis.",
// }
// ]
import { MODAL_TYPES } from "../store/Context";

const services = new Map()
services.set(MODAL_TYPES.RESTOR_FX, {
    id: 1,
    title: "RestorFX Restaurering",
    shortDesc: "Gjenoppretter den rike fargen på bilen uten polering og lakkfjerning, beskytter karosseriet mot korrosjon, UV-stråler og surt nedbør, gjenoppliver jevnheten og glansen på overflaten uten riper",
    longDesc: "RestorFX er en innovativ teknologi som gjenoppretter fabrikkoverflatens glatthet.Hvordan fungerer RestorFX Lakk? Når lakken ser gammel og utslitt ut, oppstår uregelmessigheter, mikrosprekker og mikroskopiske riper på overflaten av lakken. RestorFX struktur gjenoppretter det viktigste gjennomsiktige laget, mens skader på lakken ikke minimeres eller maskeres. RestorFX fyller ut mangler og jevner ut overflaten. Lakken blir tykkere som fører til at fargen blir dypere. Materialet, som samhandler med lakken og etter herding, blir ett med fabrikkbelegget. Etter påføring av RestorFX øker overflatenes hardhet på fabrikklakken, samt motstanden mot riper.",
    egnetFor: "RestorFX legger til et gjennomsiktig lag og blir ett med fabrikklakk, det gir det originale utseendet til og med gamle biler. Det kan brukes på alle biler, uavhengig av modell og alder.",
    videoUrl: 'https://www.youtube.com/embed/GrQNCPDhuNc',
    features: []
})

services.set(MODAL_TYPES.CLEAR_FX, {
    id: 2,
    title: "ClearFX Keramisk lakkbeskyttelse",
    shortDesc: "ClearFX er et keramisk belegg som forbedrer beskyttelsesfunksjonen til lakken på bilen",
    longDesc: "ClearFX beskytter bilen din mot riper, slitasje. En utmerket løsning for eiere av nye og brukte biler for å ta vare på utsiden av karosseriet og interiøret. Løsningen forsegler og styrker overflatestrukturen, gir en uimotståelig glans til bilen, forbedrer motstanden og holdbarheten til lakken. Dessuten, etterlater den visuell klarhet og fargekontrast med høy intensitet samt gir langvarige og langvarige resultater på alle overflater av kjøretøyet. ClearFX styrker og gjør alle overflater ekstremt hydrofobe og ripebestandige, og tetter og styrker malingstrukturen.",
    egnetFor: "ClearFX er egnet for alle biler. Denne teknologien anbefales for veldig gamle biler, fordi belegget kommer i kontakt med overflater.",
    videoUrl: 'https://www.youtube.com/embed/oijLoli0ER0',
    features: ["Ekstrem hardhet", "Intens hydofobisitet", "Kraftig beskyttelse", "Blendende glans"]
})

services.set(MODAL_TYPES.HVA_ER_RESTOR_FX, {
    id: 3,
    title: "Hva er RestorFX egentlig?",
    shortDesc: "",
    longDesc: "Etter 6 år med forskning og utvikling ble RestorFX International lansert i 2006. Selskapet er basert i Pacific Northwest, med hundrevis av partnere over hele verden. Over 100 000 kjøretøy har blitt oppdatert med RestorFX, og oppdaterer hundrevis av kjøretøy hver dag. Som et globalt synergistisk merke, er RestorFX dedikert til å skape produkter og systemer som kontinuerlig setter en ny standard for fortreffelighet og gradvis øker toppen av bilrekondisjoneringsteknologier.",
    videoUrl: "https://www.youtube.com/embed/UvqOZHumTr8",
    features: []
})


class Prices {
    constructor(service, price) {
        this.service = service
        this.price = price
    }
}

export const prices = [
    new Prices("Keramisk Lakk system", 8900),
    new Prices("Keramisk Coating Royal med 9 års garanti", 11900),
    new Prices("Keramisk Coating Royal med 5 års garanti", 8900),
    new Prices("Keramisk Coating med 2 års garanti", 6900),
    new Prices("ClearFX Exterior Graphene Coating", 12900),
    new Prices("Steinsprut System", 1400),
    new Prices("Lykt Restaurering", 2500),
    new Prices("1-trinnspolering", 3600),
    new Prices("2-trinnspolering", 4600),
    new Prices("Plast Detailjer Fornying", 2500),
    new Prices("Keramisk Lakk System for en panel", 2900),
    new Prices("Bilglass Keramisk Coating", 3900),
    new Prices("Interior Keramisk Coating", 4000),
    new Prices("Trim Plast Keramisk Coating", 1900),
    new Prices("Keramisk Wheelcoating", 3900)
]

export default services;
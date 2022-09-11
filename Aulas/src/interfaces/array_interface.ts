//interface TecnologiaProps {
//    id: string;
//    nome: string;
//    slug: (string | number)[];
//}
//
//let tecnologia1: TecnologiaProps = {
//    id: "1",
//    nome: "PHP",
//    slug: ["php", "php-dp-zero", "php12", 12]
//}

interface TecnologiaProps {
    id: string;
    nome: string;
    descricao?: string
}

interface NomesProps {
    tecnologia: TecnologiaProps[];
}
let frontend: NomesProps = {
    tecnologia: [
        { id: "12", nome: "ReactJS", descricao: "Biblioteca para criar interfaces" },
        { id: "43", nome: "VueJS"}
    ]
}

console.log(frontend.tecnologia);
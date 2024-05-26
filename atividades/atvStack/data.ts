export type ProdutoDto = {
  id: number;
  title: string;
  details: string;
  modoPreparo: string;
  ingredientes: string[];
  img: any;
};

export const dataProdutos: ProdutoDto[] = [
  {
    id: 0,
    title: "Frango Grelhado",
    details: "Frango grelhado com temperos especiais",
    modoPreparo:
      "Grelhe o frango até dourar. Tempere com sal, pimenta e ervas.",
    ingredientes: ["Frango", "Sal", "Pimenta", "Ervas"],
    img: require("../../assets/frango_grelhado.png"),
  },
  {
    id: 1,
    title: "Arroz com Brócolis",
    details: "Arroz branco com brócolis cozidos no vapor",
    modoPreparo: "Cozinhe o arroz. Adicione os brócolis no vapor e misture.",
    ingredientes: ["Arroz", "Brócolis", "Sal"],
    img: require("../../assets/arroz_brocolis.png"),
  },
  {
    id: 2,
    title: "Suco de Limão",
    details: "Suco de limão gelado e refrescante",
    modoPreparo: "Esprema os limões, adicione água gelada e açúcar a gosto.",
    ingredientes: ["Limão", "Água", "Açúcar"],
    img: require("../../assets/suco_limao.png"),
  },
  {
    id: 3,
    title: "Mousse de Chocolate",
    details: "Mousse de chocolate cremosa e deliciosa",
    modoPreparo:
      "Derreta o chocolate, misture com creme de leite e leve à geladeira.",
    ingredientes: ["Chocolate", "Creme de Leite", "Açúcar"],
    img: require("../../assets/mousse_chocolate.png"),
  },
];

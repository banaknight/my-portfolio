import { nanoid } from "nanoid"

// HEAD DATA
export const headData = {
  title: "", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
}

export const bgImg = {
  imgPaper: "paper-rdr.jpg",
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "goodnature.png",
    title: "協和テクノ ネットショップ",
    info: "最もこだわって作成した商品ページになります。",
    info2: "レスポンシブテーマの作成に取り組み中",
    url: "",
  },
  {
    id: nanoid(),
    img: "goodnature.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "goodnature.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
]

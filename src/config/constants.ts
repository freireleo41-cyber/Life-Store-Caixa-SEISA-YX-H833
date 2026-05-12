import imgMain from '../assets/caixa-main.webp';
import imgFront from '../assets/caixa-front.webp';
import imgControl from '../assets/caixa-control.webp';
import imgHandle from '../assets/caixa-handle.webp';

export const BRAND = {
  name: "Life Store",
  cnpj: "66.110.889/0001-78",
  email: "store@lifedevtech.com.br",
  whatsapp: "5511920559685",
  whatsappDisplay: "(11) 92055-9685",
  signature: "Le Freire",
  signatureFull: "Life Store | Curadoria comercial por Le Freire.",
  colors: {
    primary: "#E6171D",
    primaryDark: "#B80F14",
    primaryLight: "#FF2A30",
    black: "#050303",
    graphite: "#171717",
    darkGray: "#2B2B2B",
    mediumGray: "#8A8A8A",
    lightGray: "#F5F5F5",
    white: "#FFFFFF",
  }
};

export const LINKS = {
  mercadoLivre: "https://produto.mercadolivre.com.br/MLB-4645306467-caixa-bluetooth-seisa-yx-h833-8-usb-sd-led-fm-2000w-pmpo-_JM",
  whatsapp: "https://wa.me/5511920559685",
};

export const PRODUCT = {
  name: "Caixa de Som Portátil Bluetooth SEISA / Seisatek YX-H833",
  shortName: "SEISA YX-H833",
  brand: "Seisa / Seisatek",
  model: "YX-H833",
  priceFrom: 245.90,
  priceTo: 232.90,
  wholesalePrice: 189.90,
  wholesaleMinQuantity: 8,
  stockCount: 100,
  warranty: "3 meses do fabricante contra defeitos de fabricação",
  images: {
    main: imgMain,
    front: imgFront,
    control: imgControl,
    handle: imgHandle,
  },
  specs: {
    type: "Caixa de som portátil ativa",
    woofer: "8 polegadas",
    powerPMPO: "2000W PMPO",
    connections: ["Bluetooth", "USB", "Micro SD / TF", "Auxiliar P2", "Entrada para microfone"],
    radio: "FM integrado",
    display: "Digital",
    lighting: "LED RGB integrada",
    karaoke: "Sim",
    microphone: "Microfone com fio incluso",
    remote: "Incluso",
    battery: "Recarregável",
    autonomy: "Até 3 a 4 horas (variável)",
    chargingTime: "Cerca de 1 hora",
    chargingPort: "Cabo V8 / DC 5V",
    height: "37 cm",
    weight: "2,1 kg",
    color: "Preto"
  }
};
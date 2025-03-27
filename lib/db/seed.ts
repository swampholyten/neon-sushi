import { db } from "@/lib/db";
import { category, product } from "@/lib/db/schema";

import { nanoid } from "nanoid";

// --- Generate IDs ---
// Categories
const cat_speciali_id = nanoid();
const cat_antipasto_id = nanoid();
const cat_insalate_zuppe_id = nanoid();
const cat_bento_tataki_id = nanoid();
const cat_hosomaki_id = nanoid();
const cat_futomaki_id = nanoid();
const cat_temaki_id = nanoid();
const cat_uramaki_id = nanoid();
const cat_uramaki_special_id = nanoid();
const cat_nigiri_id = nanoid();
const cat_gunkan_id = nanoid();
const cat_bigne_id = nanoid();
const cat_crudi_vari_id = nanoid();
const cat_primi_id = nanoid();
const cat_secondi_id = nanoid();
const cat_tempura_fritti_id = nanoid();
const cat_teppan_id = nanoid();

let productCounter = 0;
const generateProductId = () => `prod_${++productCounter}_${nanoid(8)}`;

// --- Queries ---

const main = async () => {
  const now = new Date();

  // --- Insert Categories ---
  await db.insert(category).values([
    {
      id: cat_speciali_id,
      name: "SPECIALI",
      description: "Ordinabile solo un piatto a persona",
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_antipasto_id,
      name: "ANTIPASTO",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_insalate_zuppe_id,
      name: "INSALATE E ZUPPE",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_bento_tataki_id,
      name: "BENTO E TATAKI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_hosomaki_id,
      name: "HOSOMAKI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_futomaki_id,
      name: "FUTOMAKI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_temaki_id,
      name: "TEMAKI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_uramaki_id,
      name: "URAMAKI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_uramaki_special_id,
      name: "URAMAKI SPECIAL",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_nigiri_id,
      name: "NIGIRI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_gunkan_id,
      name: "GUNKAN",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_bigne_id,
      name: "BIGNE",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_crudi_vari_id,
      name: "CRUDI VARI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_primi_id,
      name: "PRIMI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_secondi_id,
      name: "SECONDI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_tempura_fritti_id,
      name: "TEMPURA E FRITTI",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cat_teppan_id,
      name: "TEPPAN",
      description: null,
      createdAt: now,
      updatedAt: now,
    },
  ]);

  // --- Insert Products ---
  await db.insert(product).values([
    // SPECIALI (Page 1 & 2)
    {
      id: generateProductId(),
      name: "SASHIMI ALL BLUE (Circa 20pz)",
      description:
        "sashimi di salmone, tonno, ricciola, branzino scampi, gamberi rossi, ostriche, capasanta",
      price: "30.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SASHIMI GOURMET",
      description:
        "crema lime, pesce crudo misto, aceto balsamico pistacchio, olio vega e sale pepe",
      price: "13.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CAPPESANTA ALASKA",
      description:
        "carpaccio di cappesanta, frutta di stagione scaglio di nocci con due tipi di salse",
      price: "16.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SASHIMI YUNI",
      description:
        "salsa cereali, scamppi, gamberi rossi gamberi argentina, aceto balsamico",
      price: "14.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CARPACCIO VULCANO",
      description:
        "carpaccio di salmone e tonno marinato e affumicato mousse avocado, quinoa soffiato",
      price: "12.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "MIX PICASSO",
      description:
        "mozzarella di buffala, pesce crudo misto frutta mix, 5 tipi di salse e olive nera",
      price: "16.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGHIRI AL HOMAKASE",
      description:
        "nigiri di salmone, tonno, ricciola, branzino, scampi, gamberi rossi, gamberi cotto, anguila, polipo",
      price: "18.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URAMAKI GOLD 24K",
      description: "salmone, erba cipollina, gold 24k, tartufo ikura",
      price: "16.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URAMAKI TRICOLORE",
      description: "gambero fritto, avocado, burratta, gamberi roso, sale pepe",
      price: "18.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "LOBSTER ROLL",
      description: "gamberone fritto, avocado, astice, mionese, tobiko",
      price: "18.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMPURA MIX PRO",
      description:
        "tempura di granchio moleche, gamberone, scampi gambero, capasanta, gambero rosso, verdure misto",
      price: "20.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CRAB ROLL",
      description: "grancchio moleche in tempura, salmone ikura",
      price: "18.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SASHIMI ASTICE",
      description: "sashimi di astice solo su prenotazione",
      price: "25.00",
      categoryId: cat_speciali_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // ANTIPASTO (Page 3, 4, 5)
    {
      id: generateProductId(),
      name: "CRISPY SALMON (2pz)",
      description:
        "algha fritto, salmone, philadelphia salsa spicy e terriyaki",
      price: "4.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CRISPY MAGURO (2pz)",
      description:
        "sfoglia di farina fritto, tonno philadelphia, salsa tartufo e teriyaki",
      price: "5.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TACOS SALMON (2pz)",
      description:
        "tacos di casa, salmone, mango quinoa soffiato, salsa mango e terriyaki",
      price: "5.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TACOS MAGURO (2pz)",
      description:
        "tacos di casa, tonno, avocado, quinoa soffiato, salsa spicy e teriyaki",
      price: "6.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "RISO FLAY (2pz)",
      description:
        "riso fritto con sesamo, tonno marinato foie gras, erba cipollina e salsa teriyaki",
      price: "7.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SANDWICH SALMON (2pz)",
      description:
        "cuor di pane, mozzarella di buffala salmone affumicato, olive nere",
      price: "6.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SANDWICH AMAEBI (2pz)",
      description:
        "cuor di pane, mozzarella di buffala gambero di mazzara e pistacchio",
      price: "8.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BLACK CHIPS (2pz)",
      description:
        "chips di tapioca, pollo fritto, cipolla fritto philadelfia, salsa spicy e terriyaki",
      price: "6.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SHIROI CHIPS (2pz)",
      description:
        "chips di tapioca, gambero fritto granelli di noci, philadelphia salsa yuni e terriyaki",
      price: "6.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "STICK MANGO (2pz)",
      description: "involtino di salmone con insalata mango, salsa mango, noci",
      price: "6.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "STICK FLOWER (2pz)",
      description:
        "involtino salmone con philadelphia fior di zucchina in tempura, salsa miso e teriyaki",
      price: "6.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "INVOLTINO EBI (2pz)",
      description:
        "sfoglia di riso, insalata mista gamberone fritto con salsa yuni",
      price: "7.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "INVOLTINO SALMON (2pz)",
      description:
        "sfoglia di riso, insalata mista salmone crudo con salsa yuni",
      price: "7.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "WAKAME",
      description: "insalata di alga",
      price: "4.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "INVOLTINO PRIMAVERA (2pz)",
      description: "sfoglia con ripieno di verduri",
      price: "4.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GYOZA (3pz)",
      description: "ravioli di carne di maiale",
      price: "4.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GRILED GYOZA (3pz)",
      description: "ravioli gyoza alla piasta",
      price: "5.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SHAOMAI (3pz)",
      description: "dim sum con ripieno di gamberi e carne di maiale",
      price: "4.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "YASAI GYOZA (3pz)",
      description: "dim sum con ripieno di verdure misto",
      price: "4.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CHICKEN BAO (1pz)",
      description:
        "bao al vapore con insalata, pollo fritto salsa maionese e ketchup",
      price: "5.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SALMON BAO (1pz)",
      description:
        "baop al vapore con insalate, salmone frittosalsa maionese e ketchup",
      price: "5.00",
      categoryId: cat_antipasto_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // INSALATE E ZUPPE (Page 5)
    {
      id: generateProductId(),
      name: "INSALATA DI MARE",
      description:
        "insalta con calamaro, gambero, polipo, carota, sedano aglio, alloro, prezzemolo, sale e pepe",
      price: "8.00",
      categoryId: cat_insalate_zuppe_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "YASAI SALAD",
      description:
        "insalata con verdure miste, mais, pomodorino carota salsa bento",
      price: "6.00",
      categoryId: cat_insalate_zuppe_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SASHIMI SALAD",
      description: "insala con verdure misto salmone crudo e salsa bento",
      price: "7.00",
      categoryId: cat_insalate_zuppe_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "ZUPPA DI MISO",
      description: null,
      price: "3.00",
      categoryId: cat_insalate_zuppe_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "ZUPPA AGROPICANTE",
      description: null,
      price: "4.00",
      categoryId: cat_insalate_zuppe_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "ZUPPA DI FRUTTI DI MARE",
      description: null,
      price: "4.00",
      categoryId: cat_insalate_zuppe_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // BENTO E TATAKI (Page 6)
    {
      id: generateProductId(),
      name: "BENTO MIX",
      description: "base di riso, pesce misto e verdure con salsa bento",
      price: "12.00",
      categoryId: cat_bento_tataki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BENTO CHILCKEN",
      description: "bese di riso, pollo fritto e verdure con salsa bento",
      price: "10.00",
      categoryId: cat_bento_tataki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BENTO YASAI",
      description: "base di riso, verdure misto con salsa bento",
      price: "9.00",
      categoryId: cat_bento_tataki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TATAKI SAKE (5pz)",
      description: "salmone con sesamo, olio vega salsa tataki e daikon tobiko",
      price: "8.00",
      categoryId: cat_bento_tataki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TATAKI MAGURO (5pz)",
      description: "tonno con sesamo, olio vega salsa tataki e daikon tobiko",
      price: "10.00",
      categoryId: cat_bento_tataki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TATAKI YUNI SAKE (5pz)",
      description: "salmone con prezzamolo, ikura salsa picante e ponzu",
      price: "8.00",
      categoryId: cat_bento_tataki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TATAKI YUNI MAGURO (5pz)",
      description: "tonno con prezzemolo, ikura salsa picante e ponzu",
      price: "10.00",
      categoryId: cat_bento_tataki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // HOSOMAKI (Page 7)
    {
      id: generateProductId(),
      name: "HOSO SAKE (6pz)",
      description: "hosomaki con salmone",
      price: "5.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "HOSO MAGURO (6pz)",
      description: "hosomaki con tonno",
      price: "6.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "HOSO MANGO (6pz)",
      description: "hosomaki con mango",
      price: "5.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "HOSO CALIFORNIA (6pz)",
      description: "hosomaki con surimi, gambero maionese e tobiko",
      price: "5.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "HOSO TUNA (6pz)",
      description: "hosomaki con tonno cotto e maionese",
      price: "5.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "HOSO MIURA (6pz)",
      description: "hosomaki con miura",
      price: "5.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "HOSO FRITTO MANGO (6pz)",
      description:
        "hosomaki fritto con philadelphia mango in dado, salsa mango e terriyaki",
      price: "7.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "HOSO FRTTO KIWI (6pz)",
      description:
        "hosomaki fritto con philadelphia kiwi a fette, salsa miso e terriyaki",
      price: "7.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIDO SAKE (6pz)",
      description:
        "hosomaki avvolto di kataifi fritto con salmone trittato e salsa teriyaki",
      price: "8.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIDO MAGURO (6pz)",
      description:
        "hosomaki avvolto di kataifio fritto con tonno trittato e salsa teriyaki",
      price: "9.00",
      categoryId: cat_hosomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // FUTOMAKI (Page 8)
    {
      id: generateProductId(),
      name: "FUTO MIX (5pz)",
      description: "pesce misto e avocado",
      price: "7.00",
      categoryId: cat_futomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "FUTO CALIFORNIA (5pz)",
      description: "surimi, gambero, avocado, mango maionese tobiko",
      price: "7.00",
      categoryId: cat_futomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "FUTO TEMPURA MIX (5pz)",
      description:
        "tempura di gamnbero, asparago philadelphia, avocado e teriyaki",
      price: "8.00",
      categoryId: cat_futomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "FUTO YASAI (5pz)",
      description: "sfoglia di soia, insalata, cetriolo avocado, mango",
      price: "6.00",
      categoryId: cat_futomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "FUTO MIURA GOLDEN (5pz)",
      description: "miura, gambero fritto, philadelphia avocado e teriyaki",
      price: "7.00",
      categoryId: cat_futomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "FUTO FRITTO (5pz)",
      description:
        "fotomaki fritto con riso venere salnmone, avocado, philadenphia tobiko, katsuobushi e teriyaki",
      price: "8.00",
      categoryId: cat_futomaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // TEMAKI (Page 9)
    {
      id: generateProductId(),
      name: "TEMAKI SALMON (1pz)",
      description: "temaki con insalata, salmone, avocado",
      price: "4.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMAKI MAGURO (1pz)",
      description: "temaki con insalata, tonno, avocado",
      price: "5.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMAKI TUNA (1pz)",
      description: "temaki con insalata, tonno cotto e cetriolo",
      price: "4.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMAKI EBITEN (1pz)",
      description: "temaki con insalata, ebiten kataifi e salsa teriyaki",
      price: "4.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMAKI CALIFORNIA (1pz)",
      description: "temaki con insalata, california avocado",
      price: "4.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMAKI MIURA (1pz)",
      description: "temaki con insalata, miura avocado",
      price: "4.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMAKI SPICY SAKE (1pz)",
      description: "temaki con insalata, salmone avocado, kataifi, salsa spicy",
      price: "5.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMAKI SPICY MAGURO (1pz)",
      description: "temaki con insalata, tonno, avocado kataifi, salsa spicy",
      price: "5.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TEMAKI YASAI (1pz)",
      description: "temaki con insalata, cetriolo avocado, mango",
      price: "4.00",
      categoryId: cat_temaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // URAMAKI (Page 10 & 11)
    {
      id: generateProductId(),
      name: "URA SAKE (8pz)",
      description: "sake e avocado",
      price: "8.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA MAGURO (8pz)",
      description: "tonno e avocado",
      price: "10.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA MIURA (8pz)",
      description: "salmone cotto, philadelphia avocado e salsa teriyaki",
      price: "8.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA EBITEN (8pz)",
      description: "gambero fritto, kataifi e salsa teriyaki",
      price: "9.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA TUNA (8pz)",
      description: "tonno cotto, cetriolo e maionese",
      price: "8.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA CALIFORNIA (8pz)",
      description: "surimi,gambero cotto, maionese tobiko e avocado",
      price: "9.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA CHICKEN (8pz)",
      description: "pollo fritto, insalata, cipolla fritta e teriyaki",
      price: "9.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA PHILADELPHIA (8pz)",
      description: "salmone e philadelfia",
      price: "8.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA YASAI (8pz)",
      description: "verdure miste, salsa green",
      price: "7.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA TIGER (8pz)",
      description: "gambero fritto, top salmone e teriyaki",
      price: "10.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA DRAGON (8pz)",
      description: "gambero fritto, top avocado e teriyaki",
      price: "11.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA RAINBOW (8pz)",
      description: "gambero fritto, top pesce misto",
      price: "12.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA PAPAYA (8pz)",
      description: "salmone, avocado e top papaya",
      price: "12.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA SPICY SALMONE (8pz)",
      description:
        "philadelfia, avocado, top salmone trittato salsa spicy, katafi e alganori fritto",
      price: "11.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA SPYCE MAGURO (8pz)",
      description:
        "philadelfia, avocado, top tonno trittato salsa spicy, kataifi e alganori fritto",
      price: "12.00",
      categoryId: cat_uramaki_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // URAMAKI SPECIAL (Page 12 & 13)
    {
      id: generateProductId(),
      name: "URA BLACK SAKE (8pz)",
      description: "riso venere, salmone avocado e top salmone",
      price: "10.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA BLACK MIURA (8pz)",
      description:
        "riso venere, salmone cotto philadelphia, avocado top tonno cotto, teriyaki e noci",
      price: "10.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA BLACK TIGER (8pz)",
      description:
        "riso venere, gambero fritto, mango top salmone e salsa mango",
      price: "12.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA BLACK ASPARAGO (8pz)",
      description:
        "riso venere, asparago fritto philadelphia, top tonno e teriyaki",
      price: "13.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA BLACK FLOWER (8pz)",
      description:
        "riso venere, fior di zucchina fritto philadelphia, top branzino flambe teriyaki e alganori",
      price: "13.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA BLACK BEEF (8pz)",
      description:
        "riso venere, avocado, insalata top manzo flambe, salsa miso e teriyaki",
      price: "14.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA LIME (8pz)",
      description: "salmone, avocado, top crema lime",
      price: "12.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA SMOOK (8pz)",
      description: "gambero fritto, top salmone affumicato di casa",
      price: "13.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA EBITEN PLUS (8pz)",
      description: "gambero fritto, top tonno salsa tataki e pistacchio",
      price: "14.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA MAGURO MAX (8pz)",
      description: "tonno, avocado, top tonno cotto katsuobushi e teriyaki",
      price: "15.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA CHICKEN CHEESE (8pz)",
      description:
        "pollo fritto, insalata, top formaggio fuso, salsa spicy e teriyaki",
      price: "12.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA EVERYGREEN (8pz)",
      description: "sfoglia di soia, verdure misto top frutta di stagione",
      price: "10.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SUKANPI ROLL (8pz)",
      description: "salmone, avocado, top scampi schiuma gourmet",
      price: "15.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SCALLOP ROLL (8pz)",
      description: "gamberone fritto, top capesanta e salsa tartufo",
      price: "16.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA HOT (8pz)",
      description:
        "salmpone, avocado, top salmone trittato peperoncino essicato, kataifi salsa spicy e hot",
      price: "12.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "URA YUNI (8pz)",
      description:
        "sfoglia di soia, tonno, papaia ricoperto da surimi e salmone",
      price: "14.00",
      categoryId: cat_uramaki_special_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // NIGIRI (Page 14 & 15)
    {
      id: generateProductId(),
      name: "NIGIRI SAKE (2pz)",
      description: "nigiri di salmone",
      price: "3.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI MAGURO (2pz)",
      description: "nigiri di tonno",
      price: "4.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI SUZUKI (2pz)",
      description: "nigiri di branzino",
      price: "3.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI KANPACHI (2pz)",
      description: "nigiri di ricciola",
      price: "4.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI EBI (2pz)",
      description: "nigiri di gambero cotto",
      price: "3.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI TAKO (2pz)",
      description: "nigiri di polipo",
      price: "4.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI UNAGHI (2pz)",
      description: "nigiri di anguilla",
      price: "4.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI SUKANPI (2pz)",
      description: "nigiri di scampi",
      price: "5.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI ASPARAGUS (2pz)",
      description: "nigiri di asparago fritto",
      price: "4.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI EBITEN (2pz)",
      description: "nigiri di gambero fritto",
      price: "4.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI BEEF (2pz)",
      description:
        "nigiri di manzo flambe, sale, pepe erba cipollina e teriyaki",
      price: "5.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI SAKE FLAMBE (2pz)",
      description:
        "nigiri di salmone flambe, mandorle erba cipolline, salsa spicy e teriyaki",
      price: "5.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI MAGURO FLAMBE (2pz)",
      description:
        "nigiri di tonno flambe, mandorle erba cipolline, salsa spicy e teriyaki",
      price: "6.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI SUZUKI PASSION (2pz)",
      description:
        "nigiri di branzino flambe, neve di tempura tobiko, salsa mago e teriyaki",
      price: "5.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI YUNI SAKE (2pz)",
      description:
        "nigiri di salmone flambe, pistacchio kataifi, salsa green e teriyaki",
      price: "5.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "NIGIRI EBI LIME (2pz)",
      description: "nigiri di gambero flambe, crema lime noci e teriyaki",
      price: "5.00",
      categoryId: cat_nigiri_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // GUNKAN (Page 16)
    {
      id: generateProductId(),
      name: "GUNKAN SAKE (2pz)",
      description: "gunkan con salmone",
      price: "4.00",
      categoryId: cat_gunkan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GUNKAN MAGURO (2pz)",
      description: "gunkan con tonno",
      price: "5.00",
      categoryId: cat_gunkan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GUNKAN TOBIKO (2pz)",
      description: "gunkan con uova di pesce",
      price: "4.00",
      categoryId: cat_gunkan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GUNKAN IKURA (2pz)",
      description: "gunkan con uova di salmone",
      price: "5.00",
      categoryId: cat_gunkan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GUNKAN CALIFORNIA (2pz)",
      description: "gunkan con surimi, gambero maionese, tobiko",
      price: "4.00",
      categoryId: cat_gunkan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GUNKAN CHICKEN (2pz)",
      description: "gunkan con pollo fritto salsa tartufo e teriyaki",
      price: "4.00",
      categoryId: cat_gunkan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GUNKAN SPICY SAKE (2pz)",
      description:
        "gunkan con salmone trittato mandorle in polvere e salsa spicy",
      price: "4.00",
      categoryId: cat_gunkan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GUNKAN SPICY MAGURO (2pz)",
      description:
        "gunkan con tonno trittato mandorle in polvere e salsa spicy",
      price: "5.00",
      categoryId: cat_gunkan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // BIGNE (Page 17)
    {
      id: generateProductId(),
      name: "BIGNE SAKE (2pz)",
      description: "bigne con salmone",
      price: "4.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE MAGURO (2pz)",
      description: "bigne con tonno",
      price: "5.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE PHILADELFIA (2pz)",
      description: "bigne di salmone con philadelphia e pistacchio",
      price: "4.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE TRUFFLE (2pz)",
      description: "bigne di salmone con salsa tartufo",
      price: "5.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE ZUKKINI (2pz)",
      description: "bigne di zucchina con composto di california",
      price: "5.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE EGG (2pz)",
      description: "bigne di salmone con tuorlo di uova di quaglia",
      price: "6.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE SUKAMPI (2pz)",
      description: "bigne di ricciola con scampi",
      price: "6.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE TEMPURA (2pz)",
      description: "bigne di salmone con gambero in tempura",
      price: "5.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE SAKE FLAMBE (2pz)",
      description: "bigne sake flambe, salsa cereali e oliva nera",
      price: "5.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BIGNE MAGURO FLAMBE (2pz)",
      description: "bigne maguro flambe, salsa cereali e oliva nera",
      price: "6.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CREAM FLAMBE (2pz)",
      description: "bigne di salmone con crema di latte flambe e noci",
      price: "5.00",
      categoryId: cat_bigne_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // CRUDI VARI (Page 18 & 19)
    {
      id: generateProductId(),
      name: "CEVICE SALMON (5pz)",
      description:
        "fette di salmone sottili, mousse avocado, frutta di stazione arachidi, salsa ponzu",
      price: "8.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CEVICE MAGURO (5pz)",
      description:
        "fette di tonno sottili, mousse avocado, frutta di stazione arachidi, salsa arachide sesamo",
      price: "10.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CEVICE KANPACHI (5pz)",
      description:
        "fette di ricciola, daikon a julliane, quinoa soffiato salsa dress wasabi",
      price: "10.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CEVICE MIX (5pz)",
      description:
        "fette di pesce misto, mousse avocado, frutta di stagione salsa ponzu e fruit di passion",
      price: "10.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TARTARE SALMON",
      description: "dadini di salmone, kataifi, salsa ponzu",
      price: "10.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TARTARE MAGURO",
      description: "dadini di tonno, kataifi, salsa arachide sesamo",
      price: "12.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TARTARE SHIROI",
      description:
        "dadini di pesce bianco, daikon a julliane quinoa soffiato, salsa dress wasabi",
      price: "10.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TARTARE YUNI",
      description:
        "dadini di salmone, biscotto di pistacchio schiuma gourmet, polvere alganori tre tipi di salse",
      price: "12.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "TARTARE PRIME",
      description:
        "dadini di tonno, biscotto di pistacchio schiuma gourmet, polvere alganori tre tipi di salse",
      price: "13.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SASHIMI SAKE (6pz)",
      description: "sashimi di salmone",
      price: "7.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SASHIMI MAGURO (6pz)",
      description: "sashimi di tonno",
      price: "9.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SASHIMI SHIROI (6pz)",
      description: "sashimi di ricciola, branzino, orata",
      price: "9.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SASHIMI MIKKUSU (10pz)",
      description: "sashimi di salmone, tonno, branzino, orata, scampi",
      price: "12.00",
      categoryId: cat_crudi_vari_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // PRIMI (Page 20)
    {
      id: generateProductId(),
      name: "RISO ALLA CANTONESE",
      description: "riso saltato con uova, piselli e prosciutto cotto",
      price: "4.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "RISO CON FRUTTI AL MARE",
      description: "riso saltato con uova, verdure miste e frutti di mare",
      price: "6.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "YASAI SOBA",
      description: "soba saltato con uova e verdure miste",
      price: "5.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "YASAI YUNI MESHI",
      description: "riso venere saltato con uova verdure miste e manzo",
      price: "6.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "YAKI UDON",
      description: "yaki udon saltato con uova verdure miste e frutti di mare",
      price: "6.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GNOCCHI DI RISO CON VERDURE",
      description: "gnocchi di riso saltato con verdure miste",
      price: "6.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SPAGHETTI DI RISO CON GAMBERI",
      description: "spaghetti di riso saltato con uova verdure miste e gamberi",
      price: "6.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SPAGHETTI DI SOIA PICCANTI CON MANZO",
      description: "spaghetti di soia saltato con piccante e manzo",
      price: "6.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SPAGHETTI DI SOIA CON FRUTTI DI MARE",
      description:
        "spaghetti di soia saltato con verdure miste e frtti di mare",
      price: "5.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "RAMEN YUNI",
      description:
        'ramen in brodo di carne con uova "cuore morbido" manzo, verdure miste',
      price: "8.00",
      categoryId: cat_primi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // SECONDI (Page 21 & 22)
    {
      id: generateProductId(),
      name: "POLLO AL GONGBAO",
      description: null,
      price: "5.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "POLLO AL CURRY CON PATATE",
      description: null,
      price: "5.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "POLLO IN AGRODOLCE",
      description: null,
      price: "5.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "POLLO CON MANDORLE",
      description: null,
      price: "5.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    }, // 164A
    {
      id: generateProductId(),
      name: "MANZO CON FUNGHI E BAMBU",
      description: null,
      price: "6.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "MANZO TAI",
      description: null,
      price: "6.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "MANZO CON PATATE",
      description: null,
      price: "6.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GAMBERI SALE E PEPE",
      description: null,
      price: "6.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GAMBERI AL LIMONE",
      description: null,
      price: "6.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    }, // 168A
    {
      id: generateProductId(),
      name: "GAMBERI TAI",
      description: null,
      price: "6.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GAMBERI CON PISELLI E MAIS",
      description: null,
      price: "6.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CALAMARI",
      description: null,
      price: "6.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "FRUTTI DI MARE AL WOK",
      description: null,
      price: "8.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "MANZO AL WOK",
      description: null,
      price: "8.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "ANATRA FRITTO CON SALSA PECHINESE",
      description: null,
      price: "8.00",
      categoryId: cat_secondi_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },

    // TEMPURA E FRITTI (Page 23)
    {
      id: generateProductId(),
      name: "NUVOLE DI DRAGO",
      description: null,
      price: "3.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "PATATINE FRITTE",
      description: null,
      price: "3.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "ALI DI POLLO FRITTO (2pz)",
      description: null,
      price: "5.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GAMBERI FRITTI (3pz)",
      description: null,
      price: "6.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "YASAI TEMPURA (3pz)",
      description: null,
      price: "5.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "EBI TEMPURA (3pz)",
      description: null,
      price: "8.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "COTTOLETTA NIHON (circa 8pz)",
      description: null,
      price: "8.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "STICK GAMBERI (2pz)",
      description: null,
      price: "4.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BISCOTTO CON PATATE E CIPOLLE (3pz)",
      description: null,
      price: "4.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "INVOLTINI DI MARE (2pz)",
      description: null,
      price: "5.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "IKA FRITTO (3pz)",
      description: null,
      price: "5.00",
      categoryId: cat_tempura_fritti_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    }, // 184A

    // TEPPAN (Page 24)
    {
      id: generateProductId(),
      name: "SPIEDINI DI POLLO (2pz)",
      description: null,
      price: "5.00",
      categoryId: cat_teppan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SPIEDINI DI GAMBERI (2pz)",
      description: null,
      price: "6.00",
      categoryId: cat_teppan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "GAMBERONI ALLA GRIGLIA (3pz)",
      description: null,
      price: "8.00",
      categoryId: cat_teppan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SALMONE TEPPANYAKI (1pz)",
      description: null,
      price: "6.00",
      categoryId: cat_teppan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "BRANZINO TEPPANYAKI (1pz)",
      description: null,
      price: "6.00",
      categoryId: cat_teppan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CALAMARO ALLA PIASTRA (2pz)",
      description: null,
      price: "6.00",
      categoryId: cat_teppan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "CAMPASANTA AL FORNO (1pz)",
      description: null,
      price: "5.00",
      categoryId: cat_teppan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
    {
      id: generateProductId(),
      name: "SPIEDINI DI MANZO (2pz)",
      description: null,
      price: "6.00",
      categoryId: cat_teppan_id,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
      image:
        "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c2hpfGVufDB8fDB8fHww",
    },
  ]);

  console.log("Database populated successfully!");
};

main();

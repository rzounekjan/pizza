// Generated menu data from https://pizzapastacaffe.com/

export type LanguageCode = "cs" | "en" | "de" | "it" | "fr" | "es" | "pl" | "kr" | "cn" | "jp" | "ua" | "hu" | "pt";

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  flag: string;
  file?: string;
}

export const LANGUAGES: LanguageInfo[] = [
  {
    "code": "cs",
    "name": "Čeština",
    "flag": "https://flagpedia.net/data/flags/w580/cz.webp",
    "file": "cz.html"
  },
  {
    "code": "en",
    "name": "English",
    "flag": "https://flagpedia.net/data/flags/w580/gb.webp",
    "file": "index.html"
  },
  {
    "code": "de",
    "name": "Deutsch",
    "flag": "https://flagpedia.net/data/flags/w580/de.webp",
    "file": "de.html"
  },
  {
    "code": "it",
    "name": "Italiano",
    "flag": "https://flagpedia.net/data/flags/w580/it.webp",
    "file": "it.html"
  },
  {
    "code": "fr",
    "name": "Français",
    "flag": "https://flagpedia.net/data/flags/w580/fr.webp",
    "file": "fr.html"
  },
  {
    "code": "es",
    "name": "Español",
    "flag": "https://flagpedia.net/data/flags/w580/es.webp",
    "file": "es.html"
  },
  {
    "code": "pl",
    "name": "Polski",
    "flag": "https://flagpedia.net/data/flags/w580/pl.webp",
    "file": "pl.html"
  },
  {
    "code": "kr",
    "name": "한국어",
    "flag": "https://flagpedia.net/data/flags/w580/kr.webp",
    "file": "kr.html"
  },
  {
    "code": "cn",
    "name": "中文",
    "flag": "https://flagpedia.net/data/flags/w580/cn.webp",
    "file": "cn.html"
  },
  {
    "code": "jp",
    "name": "日本語",
    "flag": "https://flagpedia.net/data/flags/w580/jp.webp",
    "file": "jp.html"
  },
  {
    "code": "ua",
    "name": "Українська",
    "flag": "https://flagcdn.com/ua.svg",
    "file": "ua.html"
  },
  {
    "code": "hu",
    "name": "Magyar",
    "flag": "https://flagpedia.net/data/flags/w580/hu.webp",
    "file": "hu.html"
  },
  {
    "code": "pt",
    "name": "Português",
    "flag": "https://flagpedia.net/data/flags/w580/pt.webp",
    "file": "pt.html"
  }
];

export interface CategoryInfo {
  id: string;
  icons: string;
  names: Record<LanguageCode, string>;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    "id": "all",
    "icons": "Utensils",
    "names": {
      "cs": "Vše",
      "en": "All",
      "de": "Alle",
      "it": "Tutti",
      "fr": "Tout",
      "es": "Todo",
      "pl": "Wszystko",
      "kr": "전체",
      "cn": "全部",
      "jp": "すべて",
      "ua": "Все",
      "hu": "Mind",
      "pt": "Tudo"
    }
  },
  {
    "id": "starters",
    "icons": "Soup",
    "names": {
      "cs": "Předkrmy & Polévky",
      "en": "Starters & Soups",
      "de": "Vorspeisen & Suppen",
      "it": "Antipasti & Zuppe",
      "fr": "Entrées & Soupes",
      "es": "Entrantes y Sopas",
      "pl": "Przystawki i Zupy",
      "kr": "에피타이저 & 수프",
      "cn": "开胃菜和汤",
      "jp": "前菜・スープ",
      "ua": "Закуски та супи",
      "hu": "Előételek és levesek",
      "pt": "Entradas e Sopas"
    }
  },
  {
    "id": "pasta",
    "icons": "UtensilsCrossed",
    "names": {
      "cs": "Těstoviny",
      "en": "Pasta",
      "de": "Pasta",
      "it": "Pasta",
      "fr": "Pâtes",
      "es": "Pastas",
      "pl": "Makarony",
      "kr": "파스타",
      "cn": "意面",
      "jp": "パスタ",
      "ua": "Паста",
      "hu": "Tészták",
      "pt": "Massas"
    }
  },
  {
    "id": "pizza",
    "icons": "Pizza",
    "names": {
      "cs": "Pizzy (Ø 28 cm)",
      "en": "Pizza (Ø 28 cm)",
      "de": "Pizza (Ø 28 cm)",
      "it": "Pizze (Ø 28 cm)",
      "fr": "Pizzas (Ø 28 cm)",
      "es": "Pizzas (Ø 28 cm)",
      "pl": "Pizza (Ø 28 cm)",
      "kr": "피자 (Ø 28 cm)",
      "cn": "披萨 (Ø 28 cm)",
      "jp": "ピザ (Ø 28 cm)",
      "ua": "Піца (Ø 28 см)",
      "hu": "Pizzák (Ø 28 cm)",
      "pt": "Pizzas (Ø 28 cm)"
    }
  },
  {
    "id": "salads",
    "icons": "Salad",
    "names": {
      "cs": "Saláty",
      "en": "Salads",
      "de": "Salate",
      "it": "Insalate",
      "fr": "Salades",
      "es": "Ensaladas",
      "pl": "Sałatki",
      "kr": "샐러드",
      "cn": "沙拉",
      "jp": "サラダ",
      "ua": "Салати",
      "hu": "Saláták",
      "pt": "Saladas"
    }
  },
  {
    "id": "desserts",
    "icons": "Cake",
    "names": {
      "cs": "Dezerty",
      "en": "Desserts",
      "de": "Desserts",
      "it": "Dolci",
      "fr": "Desserts",
      "es": "Postres",
      "pl": "Desery",
      "kr": "디저트",
      "cn": "甜点",
      "jp": "デザート",
      "ua": "Десерти",
      "hu": "Desszertek",
      "pt": "Sobremesas"
    }
  },
  {
    "id": "wine",
    "icons": "Wine",
    "names": {
      "cs": "Vína & Prosecco",
      "en": "Wines & Prosecco",
      "de": "Weine & Prosecco",
      "it": "Vini & Prosecco",
      "fr": "Vins & Prosecco",
      "es": "Vinos y Prosecco",
      "pl": "Wina i Prosecco",
      "kr": "와인 & 프로세코",
      "cn": "葡萄酒与普罗塞克",
      "jp": "ワイン＆プロセッコ",
      "ua": "Вина та просекко",
      "hu": "Borok és prosecco",
      "pt": "Vinhos e Prosecco"
    }
  },
  {
    "id": "beer",
    "icons": "Beer",
    "names": {
      "cs": "České Pivo",
      "en": "Czech Beer",
      "de": "Tschechisches Bier",
      "it": "Birra Ceca",
      "fr": "Bière Tchèque",
      "es": "Cerveza Checa",
      "pl": "Czeskie Piwo",
      "kr": "체코 맥주",
      "cn": "捷克啤酒",
      "jp": "チェコビール",
      "ua": "Чеське пиво",
      "hu": "Cseh sör",
      "pt": "Cerveja Checa"
    }
  },
  {
    "id": "hot-drinks",
    "icons": "Coffee",
    "names": {
      "cs": "Káva & Horké nápoje",
      "en": "Coffee & Hot Drinks",
      "de": "Kaffee & Heißgetränke",
      "it": "Caffè & Bevande Calde",
      "fr": "Café & Boissons Chaudes",
      "es": "Café y Bebidas Calientes",
      "pl": "Kawa i Gorące Napoje",
      "kr": "커피 & 핫 드링크",
      "cn": "咖啡与热饮",
      "jp": "コーヒー・温かいお飲み物",
      "ua": "Кава та гарячі напої",
      "hu": "Kávé és forró italok",
      "pt": "Café e Bebidas Quentes"
    }
  },
  {
    "id": "soft-drinks",
    "icons": "GlassWater",
    "names": {
      "cs": "Nealkoholické nápoje",
      "en": "Soft Drinks",
      "de": "Alkoholfreie Getränke",
      "it": "Bevande Analcoliche",
      "fr": "Boissons Sans Alcool",
      "es": "Bebidas no alcohólicas",
      "pl": "Napoje bezalkoholowe",
      "kr": "음료수",
      "cn": "软饮汽水",
      "jp": "ソフトドリンク",
      "ua": "Безалкогольні напої",
      "hu": "Üdítők",
      "pt": "Bebidas Não Alcoólicas"
    }
  },
  {
    "id": "spirits",
    "icons": "Flame",
    "names": {
      "cs": "Destiláty & Aperitivy",
      "en": "Spirits & Aperitifs",
      "de": "Spirituosen & Aperitifs",
      "it": "Distillati & Aperitivi",
      "fr": "Spiritueux & Apéritifs",
      "es": "Licores y Aperitivos",
      "pl": "Alkohole i Aperitify",
      "kr": "독주 & 아페리티프",
      "cn": "烈酒与开胃酒",
      "jp": "スピリッツ・アペリティフ",
      "ua": "Міцні напої та аперитиви",
      "hu": "Párlatok és aperitifek",
      "pt": "Destilados e Aperitivos"
    }
  }
];

export interface MenuItem {
  id: string;
  key: string;
  category: string;
  prices: {
    czk: number;
    eur: number;
  };
  image: string;
  translations: Record<LanguageCode, {
    name: string;
    description: string;
  }>;
}

export const EUR_RATE = 23;

export const MENU_ITEMS: MenuItem[] = [
  {
    "id": "caprese",
    "key": "caprese",
    "category": "starters",
    "prices": {
      "czk": 171,
      "eur": 7.43
    },
    "image": "https://pizzapastacaffe.com/caprese.jpg",
    "translations": {
      "cs": {
        "name": "Caprese",
        "description": "rajčata, mozzarella, bazalka"
      },
      "en": {
        "name": "Caprese",
        "description": "fresh tomatoes, mozzarella, basil"
      },
      "de": {
        "name": "Caprese",
        "description": "frische Tomaten, Mozzarella, Basilikum"
      },
      "it": {
        "name": "Caprese",
        "description": "pomodori freschi, mozzarella, basilico"
      },
      "fr": {
        "name": "Caprese",
        "description": "tomates fraîches, mozzarella, basilic"
      },
      "es": {
        "name": "Caprese",
        "description": "tomates frescos, mozzarella, albahaca"
      },
      "pl": {
        "name": "Caprese",
        "description": "świeże pomidory, mozzarella, bazylia"
      },
      "kr": {
        "name": "Caprese",
        "description": "신선한 토마토, 모짜렐라, 바질"
      },
      "cn": {
        "name": "Caprese",
        "description": "新鲜番茄、马苏里拉奶酪、罗勒"
      },
      "jp": {
        "name": "Caprese",
        "description": "新鮮なトマト、モッツァレラ、バジル"
      },
      "ua": {
        "name": "Caprese",
        "description": "помідори, моцарела, базилік"
      },
      "hu": {
        "name": "Caprese",
        "description": "paradicsom, mozzarella, bazsalikom"
      },
      "pt": {
        "name": "Caprese",
        "description": "tomates frescos, mozarela, manjericão"
      }
    }
  },
  {
    "id": "bruschetta",
    "key": "bruschetta",
    "category": "starters",
    "prices": {
      "czk": 171,
      "eur": 7.43
    },
    "image": "https://pizzapastacaffe.com/brus.jpg",
    "translations": {
      "cs": {
        "name": "Bruschetta Emma",
        "description": "rajčata, parmazán, česnek, bazalka, oregano"
      },
      "en": {
        "name": "Bruschetta Emma",
        "description": "tomatoes, parmesan, garlic, basil, oregano"
      },
      "de": {
        "name": "Bruschetta Emma",
        "description": "Tomaten, Parmesan, Knoblauch, Basilikum, Oregano"
      },
      "it": {
        "name": "Bruschetta Emma",
        "description": "pomodori, parmigiano, aglio, basilico, origano"
      },
      "fr": {
        "name": "Bruschetta Emma",
        "description": "tomates, parmesan, ail, basilic, origan"
      },
      "es": {
        "name": "Bruschetta Emma",
        "description": "tomates, parmesano, ajo, albahaca, orégano"
      },
      "pl": {
        "name": "Bruschetta Emma",
        "description": "pomidory, parmezan, czosnek, bazylia, oregano"
      },
      "kr": {
        "name": "Bruschetta Emma",
        "description": "토마토, 파마산, 마늘, 바질, 오레가노"
      },
      "cn": {
        "name": "Bruschetta Emma",
        "description": "番茄、帕玛森奶酪、大蒜、罗勒、牛至"
      },
      "jp": {
        "name": "Bruschetta Emma",
        "description": "トマト、パルメザンチーズ、ニンニク、バジル、オレガノ"
      },
      "ua": {
        "name": "Bruschetta Emma",
        "description": "помідори, пармезан, часник, базилік, орегано"
      },
      "hu": {
        "name": "Bruschetta Emma",
        "description": "paradicsom, parmezán, fokhagyma, bazsalikom, oregánó"
      },
      "pt": {
        "name": "Bruschetta Emma",
        "description": "tomate, parmesão, alho, manjericão, orégãos"
      }
    }
  },
  {
    "id": "pizza-polstarky",
    "key": "pizza-polstarky",
    "category": "starters",
    "prices": {
      "czk": 152,
      "eur": 6.61
    },
    "image": "https://pizzapastacaffe.com/polstarky.jpg",
    "translations": {
      "cs": {
        "name": "Pizza polštářky",
        "description": "česnek, olivový olej"
      },
      "en": {
        "name": "Pizza Pillows",
        "description": "garlic, olive oil"
      },
      "de": {
        "name": "Pizza Pillows",
        "description": "Knoblauch, Olivenöl"
      },
      "it": {
        "name": "Pizza Pillows",
        "description": "aglio, olio d'oliva"
      },
      "fr": {
        "name": "Pizza Pillows",
        "description": "ail, huile d'olive"
      },
      "es": {
        "name": "Pizza Pillows",
        "description": "ajo, aceite de oliva"
      },
      "pl": {
        "name": "Pizza Pillows",
        "description": "czosnek, oliwa z oliwek"
      },
      "kr": {
        "name": "Pizza Pillows",
        "description": "마늘, 올리브 오일"
      },
      "cn": {
        "name": "Pizza Pillows",
        "description": "大蒜、橄榄油"
      },
      "jp": {
        "name": "Pizza Pillows",
        "description": "ニンニク、オリーブオイル"
      },
      "ua": {
        "name": "Pizza Pillows",
        "description": "часник, оливкова олія"
      },
      "hu": {
        "name": "Pizza Pillows",
        "description": "fokhagyma, olívaolaj"
      },
      "pt": {
        "name": "Pizza Pillows",
        "description": "alho, azeite"
      }
    }
  },
  {
    "id": "baked-mushrooms",
    "key": "baked-mushrooms",
    "category": "starters",
    "prices": {
      "czk": 199,
      "eur": 8.65
    },
    "image": "https://pizzapastacaffe.com/grillzamp.jpg",
    "translations": {
      "cs": {
        "name": "Zapečené žampiony",
        "description": "žampiony, vejce, mozzarella"
      },
      "en": {
        "name": "Baked Mushrooms",
        "description": "mushrooms, egg, mozzarella"
      },
      "de": {
        "name": "Baked Mushrooms",
        "description": "Pilze, Ei, Käse"
      },
      "it": {
        "name": "Baked Mushrooms",
        "description": "funghi, uovo, mozzarella"
      },
      "fr": {
        "name": "Baked Mushrooms",
        "description": "champignons, œuf, mozzarella"
      },
      "es": {
        "name": "Baked Mushrooms",
        "description": "champiñones, huevo, mozzarella"
      },
      "pl": {
        "name": "Baked Mushrooms",
        "description": "pieczarki, jajko, mozzarella"
      },
      "kr": {
        "name": "Baked Mushrooms",
        "description": "버섯, 달걀, 모짜렐라"
      },
      "cn": {
        "name": "Baked Mushrooms",
        "description": "蘑菇、鸡蛋、马苏里拉奶酪"
      },
      "jp": {
        "name": "Baked Mushrooms",
        "description": "マッシュルーム、卵、モッツァレラ"
      },
      "ua": {
        "name": "Baked Mushrooms",
        "description": "печериці, яйця, моцарела"
      },
      "hu": {
        "name": "Baked Mushrooms",
        "description": "csiperke, tojás, mozzarella"
      },
      "pt": {
        "name": "Baked Mushrooms",
        "description": "cogumelos, ovo, mozarela"
      }
    }
  },
  {
    "id": "tomato-soup",
    "key": "tomato-soup",
    "category": "starters",
    "prices": {
      "czk": 137,
      "eur": 5.96
    },
    "image": "https://pizzapastacaffe.com/polevka.jpg",
    "translations": {
      "cs": {
        "name": "Rajčatová polévka",
        "description": "drcená rajčata, smetana, bazalka"
      },
      "en": {
        "name": "Tomato Soup",
        "description": "crushed tomatoes, cream, basil"
      },
      "de": {
        "name": "Tomato Soup",
        "description": "passierte Tomaten, Sahne, Basilikum"
      },
      "it": {
        "name": "Tomato Soup",
        "description": "pomodori schiacciati, panna, basilico"
      },
      "fr": {
        "name": "Tomato Soup",
        "description": "tomates concassées, crème, basilic"
      },
      "es": {
        "name": "Tomato Soup",
        "description": "tomates triturados, crema, albahaca"
      },
      "pl": {
        "name": "Tomato Soup",
        "description": "krojone pomidory, śmietana, bazylia"
      },
      "kr": {
        "name": "Tomato Soup",
        "description": "으깬 토마토, 크림, 바질"
      },
      "cn": {
        "name": "Tomato Soup",
        "description": "番茄碎、奶油、罗勒"
      },
      "jp": {
        "name": "Tomato Soup",
        "description": "砕いたトマト、クリーム、バジル"
      },
      "ua": {
        "name": "Tomato Soup",
        "description": "подрібнені помідори, вершки, базилік"
      },
      "hu": {
        "name": "Tomato Soup",
        "description": "zúzott paradicsom, tejszín, bazsalikom"
      },
      "pt": {
        "name": "Tomato Soup",
        "description": "tomates esmagados, natas, manjericão"
      }
    }
  },
  {
    "id": "Aglio-olio",
    "key": "aglio-olio",
    "category": "pasta",
    "prices": {
      "czk": 298,
      "eur": 12.96
    },
    "image": "https://pizzapastacaffe.com/alio.jpg",
    "translations": {
      "cs": {
        "name": "Linguine Aglio-olio",
        "description": "česnek, olivový olej, chilli paprička"
      },
      "en": {
        "name": "Linguine Aglio-olio",
        "description": "garlic, olive oil, chilli"
      },
      "de": {
        "name": "Linguine Aglio-olio",
        "description": "Knoblauch, Olivenöl, Chili"
      },
      "it": {
        "name": "Linguine Aglio-olio",
        "description": "aglio, olio d'oliva, peperoncino"
      },
      "fr": {
        "name": "Linguine Aglio-olio",
        "description": "ail, huile d'olive, piment fort"
      },
      "es": {
        "name": "Linguine Aglio-olio",
        "description": "ajo, aceite de oliva, chile"
      },
      "pl": {
        "name": "Linguine Aglio-olio",
        "description": "czosnek, oliwa z oliwek, chilli"
      },
      "kr": {
        "name": "Linguine Aglio-olio",
        "description": "마늘, 올리브 오일, 고추"
      },
      "cn": {
        "name": "Linguine Aglio-olio",
        "description": "大蒜、橄榄油、辣椒"
      },
      "jp": {
        "name": "Linguine Aglio-olio",
        "description": "ニンニク、オリーブオイル、唐辛子"
      },
      "ua": {
        "name": "Linguine Aglio-olio",
        "description": "часник, оливкова олія, перець чилі"
      },
      "hu": {
        "name": "Linguine Aglio-olio",
        "description": "fokhagyma, olívaolaj, chili paprika"
      },
      "pt": {
        "name": "Linguine Aglio-olio",
        "description": "alho, azeite, pimenta"
      }
    }
  },
  {
    "id": "Pomodoro",
    "key": "pomodoro",
    "category": "pasta",
    "prices": {
      "czk": 298,
      "eur": 12.96
    },
    "image": "https://pizzapastacaffe.com/pomo.jpg",
    "translations": {
      "cs": {
        "name": "Linguine alla Pomodoro",
        "description": "drcená rajčata, česnek, bazalka"
      },
      "en": {
        "name": "Linguine alla Pomodoro",
        "description": "tomatoes, garlic, basil"
      },
      "de": {
        "name": "Linguine alla Pomodoro",
        "description": "Tomaten, Knoblauch, Basilikum"
      },
      "it": {
        "name": "Linguine alla Pomodoro",
        "description": "pomodori, aglio, basilico"
      },
      "fr": {
        "name": "Linguine alla Pomodoro",
        "description": "tomates, ail, basilic"
      },
      "es": {
        "name": "Linguine alla Pomodoro",
        "description": "tomates, ajo, albahaca"
      },
      "pl": {
        "name": "Linguine alla Pomodoro",
        "description": "pomidory, czosnek, bazylia"
      },
      "kr": {
        "name": "Linguine alla Pomodoro",
        "description": "토마토, 마늘, 바질"
      },
      "cn": {
        "name": "Linguine alla Pomodoro",
        "description": "西红柿、大蒜、罗勒"
      },
      "jp": {
        "name": "Linguine alla Pomodoro",
        "description": "トマト、ニンニク、バジル"
      },
      "ua": {
        "name": "Linguine alla Pomodoro",
        "description": "подрібнені помідори, часник, базилік"
      },
      "hu": {
        "name": "Linguine alla Pomodoro",
        "description": "zúzott paradicsom, fokhagyma, bazsalikom"
      },
      "pt": {
        "name": "Linguine alla Pomodoro",
        "description": "tomates, alho, manjericão"
      }
    }
  },
  {
    "id": "Spinach",
    "key": "spinach",
    "category": "pasta",
    "prices": {
      "czk": 319,
      "eur": 13.87
    },
    "image": "https://pizzapastacaffe.com/spenatpasta.jpg",
    "translations": {
      "cs": {
        "name": "Linguine se špenátem",
        "description": "špenát, česnek, smetana"
      },
      "en": {
        "name": "Linguine with spinach",
        "description": "spinach, garlic, cream"
      },
      "de": {
        "name": "Linguine with spinach",
        "description": "Spinat, Knoblauch, Sahne"
      },
      "it": {
        "name": "Linguine with spinach",
        "description": "spinaci, aglio, panna"
      },
      "fr": {
        "name": "Linguine with spinach",
        "description": "épinards, ail, crème"
      },
      "es": {
        "name": "Linguine with spinach",
        "description": "espinaca, ajo, crema"
      },
      "pl": {
        "name": "Linguine with spinach",
        "description": "szpinak, czosnek, śmietana"
      },
      "kr": {
        "name": "Linguine with spinach",
        "description": "시금치, 마늘, 크림"
      },
      "cn": {
        "name": "Linguine with spinach",
        "description": "菠菜、大蒜、奶油"
      },
      "jp": {
        "name": "Linguine with spinach",
        "description": "ホウレンソウ、ニンニク、クリーム"
      },
      "ua": {
        "name": "Linguine with spinach",
        "description": "шпинат, часник, вершки"
      },
      "hu": {
        "name": "Linguine with spinach",
        "description": "spenót, fokhagyma, tejszín"
      },
      "pt": {
        "name": "Linguine with spinach",
        "description": "espinafres, alho, natas"
      }
    }
  },
  {
    "id": "Amatriciana",
    "key": "amatriciana",
    "category": "pasta",
    "prices": {
      "czk": 337,
      "eur": 14.65
    },
    "image": "https://pizzapastacaffe.com/amat2.jpg",
    "translations": {
      "cs": {
        "name": "Linguine all' Amatriciana",
        "description": "prosciutto crudo, drcená rajčata, česnek, bazalka"
      },
      "en": {
        "name": "Linguine all' Amatriciana",
        "description": "prosciutto crudo, crushed tomatoes, garlic, basil"
      },
      "de": {
        "name": "Linguine all' Amatriciana",
        "description": "Prosciutto crudo, passierte Tomaten, Knoblauch, Basilikum"
      },
      "it": {
        "name": "Linguine all' Amatriciana",
        "description": "prosciutto crudo, pomodori schiacciati, aglio, basilico"
      },
      "fr": {
        "name": "Linguine all' Amatriciana",
        "description": "prosciutto crudo, tomates concassées, ail, basilic"
      },
      "es": {
        "name": "Linguine all' Amatriciana",
        "description": "prosciutto crudo, tomates triturados, ajo, albahaca"
      },
      "pl": {
        "name": "Linguine all' Amatriciana",
        "description": "prosciutto crudo, krojone pomidory, czosnek, bazylia"
      },
      "kr": {
        "name": "Linguine all' Amatriciana",
        "description": "프로슈토 크루도, 으깬 토마토, 마늘, 바질"
      },
      "cn": {
        "name": "Linguine all' Amatriciana",
        "description": "生火腿、碎番茄、大蒜、罗勒"
      },
      "jp": {
        "name": "Linguine all' Amatriciana",
        "description": "生ハム、砕いたトマト、ニンニク、バジル"
      },
      "ua": {
        "name": "Linguine all' Amatriciana",
        "description": "прошуто крудо, подрібнені помідори, часник, базилік"
      },
      "hu": {
        "name": "Linguine all' Amatriciana",
        "description": "prosciutto crudo, zúzott paradicsom, fokhagyma, bazsalikom"
      },
      "pt": {
        "name": "Linguine all' Amatriciana",
        "description": "presunto cru, tomates esmagados, alho, manjericão"
      }
    }
  },
  {
    "id": "Emiliana",
    "key": "emiliana",
    "category": "pasta",
    "prices": {
      "czk": 337,
      "eur": 14.65
    },
    "image": "https://pizzapastacaffe.com/emiliana.jpg",
    "translations": {
      "cs": {
        "name": "Linguine Emiliana",
        "description": "šunka, hrášek, kukuřice, drcená rajčata, smetana"
      },
      "en": {
        "name": "Linguine Emiliana",
        "description": "ham, peas, corn, crushed tomatoes, cream"
      },
      "de": {
        "name": "Linguine alla Pompeo",
        "description": "Schinken, Pilze, Salami, passierte Tomaten, grüner Pfeffer"
      },
      "it": {
        "name": "Linguine Emiliana",
        "description": "prosciutto cotto, piselli, mais, pomodori schiacciati, panna"
      },
      "fr": {
        "name": "Linguine Emiliana",
        "description": "jambon, petits pois, maïs, tomates concassées, crème"
      },
      "es": {
        "name": "Linguine Emiliana",
        "description": "jamón cocido, guisantes, maíz, tomates triturados, crema"
      },
      "pl": {
        "name": "Linguine Emiliana",
        "description": "szynka, groszek, kukurydza, krojone pomidory, śmietana"
      },
      "kr": {
        "name": "Linguine Emiliana",
        "description": "햄, 완두콩, 옥수수, 으깬 토마토, 크림"
      },
      "cn": {
        "name": "Linguine Emiliana",
        "description": "火腿、豌豆、玉米、碎番茄、奶油"
      },
      "jp": {
        "name": "Linguine Emiliana",
        "description": "ハム、エンドウ豆、コーン、砕いたトマト、クリーム"
      },
      "ua": {
        "name": "Linguine Emiliana",
        "description": "шинка, горошок, кукурудза, подрібнені помідори, вершки"
      },
      "hu": {
        "name": "Linguine Emiliana",
        "description": "sonka, borsó, kukorica, zúzott paradicsom, tejszín"
      },
      "pt": {
        "name": "Linguine Emiliana",
        "description": "fiambre, ervilhas, milho, tomates esmagados, natas"
      }
    }
  },
  {
    "id": "Pompeo",
    "key": "pompeo",
    "category": "pasta",
    "prices": {
      "czk": 346,
      "eur": 15.04
    },
    "image": "https://pizzapastacaffe.com/pompeo.jpg",
    "translations": {
      "cs": {
        "name": "Linguine alla Pompeo",
        "description": "šunka, žampiony, salám, drcená rajčata, zelený pepř"
      },
      "en": {
        "name": "Linguine alla Pompeo",
        "description": "ham, mushrooms, salami, crushed tomatoes, green pepper"
      },
      "de": {
        "name": "Pompeo",
        "description": ""
      },
      "it": {
        "name": "Linguine alla Pompeo",
        "description": "prosciutto cotto, funghi, salame, pomodori schiacciati, pepe verde"
      },
      "fr": {
        "name": "Linguine alla Pompeo",
        "description": "jambon, champignons, salami, tomates concassées, poivron vert"
      },
      "es": {
        "name": "Linguine alla Pompeo",
        "description": "jamón cocido, champiñones, salami, tomates triturados, pimiento verde"
      },
      "pl": {
        "name": "Linguine alla Pompeo",
        "description": "szynka, pieczarki, salami, krojone pomidory, zielony pieprz"
      },
      "kr": {
        "name": "Linguine alla Pompeo",
        "description": "햄, 버섯, 살라미, 으깬 토마토, 피망"
      },
      "cn": {
        "name": "Linguine alla Pompeo",
        "description": "火腿、蘑菇、萨拉米香肠、番茄碎、青椒"
      },
      "jp": {
        "name": "Linguine alla Pompeo",
        "description": "ハム、マッシュルーム、サラミ、砕いたトマト、コショウ"
      },
      "ua": {
        "name": "Linguine alla Pompeo",
        "description": "шинка, печериці, салямі, подрібнені помідори, зелений перець"
      },
      "hu": {
        "name": "Linguine alla Pompeo",
        "description": "sonka, csiperke, szalámi, zúzott paradicsom, zöldbors"
      },
      "pt": {
        "name": "Linguine alla Pompeo",
        "description": "fiambre, cogumelos, salame, tomates esmagados, pimento verde"
      }
    }
  },
  {
    "id": "Carbonara",
    "key": "carbonara",
    "category": "pasta",
    "prices": {
      "czk": 373,
      "eur": 16.22
    },
    "image": "https://pizzapastacaffe.com/carbonara3.jpg",
    "translations": {
      "cs": {
        "name": "Linguine alla Carbonara",
        "description": "prosciutto crudo, cibule, vejce, smetana"
      },
      "en": {
        "name": "Linguine alla Carbonara",
        "description": "prosciutto crudo, onion, egg, cream"
      },
      "de": {
        "name": "Linguine alla Carbonara",
        "description": "Prosciutto crudo, Zwiebeln, Ei, Sahne"
      },
      "it": {
        "name": "Linguine alla Carbonara",
        "description": "prosciutto crudo, cipolla, uovo, panna"
      },
      "fr": {
        "name": "Linguine alla Carbonara",
        "description": "prosciutto crudo, oignon, œuf, crème"
      },
      "es": {
        "name": "Linguine alla Carbonara",
        "description": "prosciutto crudo, cebolla, huevo, crema"
      },
      "pl": {
        "name": "Linguine alla Carbonara",
        "description": "prosciutto crudo, cebula, jajko, śmietana"
      },
      "kr": {
        "name": "Linguine alla Carbonara",
        "description": "프로슈토 크루도, 양파, 달걀, 크림"
      },
      "cn": {
        "name": "Linguine alla Carbonara",
        "description": "生火腿、洋葱、鸡蛋、奶油"
      },
      "jp": {
        "name": "Linguine alla Carbonara",
        "description": "生ハム、玉ねぎ、卵、クリーム"
      },
      "ua": {
        "name": "Linguine alla Carbonara",
        "description": "прошуто крудо, цибуля, яйця, вершки"
      },
      "hu": {
        "name": "Linguine alla Carbonara",
        "description": "prosciutto crudo, hagyma, tojás, tejszín"
      },
      "pt": {
        "name": "Linguine alla Carbonara",
        "description": "presunto crudo, cebola, ovo, natas"
      }
    }
  },
  {
    "id": "Bolognese",
    "key": "bolognese",
    "category": "pasta",
    "prices": {
      "czk": 390,
      "eur": 16.96
    },
    "image": "https://pizzapastacaffe.com/bolopasta.jpg",
    "translations": {
      "cs": {
        "name": "Linguine Boloňské",
        "description": "hovězí mleté maso, drcená rajčata, víno"
      },
      "en": {
        "name": "Linguine Bolognese",
        "description": "minced beef, crushed tomatoes, wine"
      },
      "de": {
        "name": "Linguine Bolognese",
        "description": "Hackfleisch vom Rind, passierte Tomaten, Wein"
      },
      "it": {
        "name": "Linguine Bolognese",
        "description": "carne macinata di manzo, pomodori schiacciati, vino"
      },
      "fr": {
        "name": "Linguine Bolognese",
        "description": "bœuf haché, tomates concassées, vin"
      },
      "es": {
        "name": "Linguine Bolognese",
        "description": "carne picada de res, tomates triturados, vino"
      },
      "pl": {
        "name": "Linguine Bolognese",
        "description": "mielona wołowina, krojone pomidory, wino"
      },
      "kr": {
        "name": "Linguine Bolognese",
        "description": "다진 소고기, 으깬 토마토, 와인"
      },
      "cn": {
        "name": "Linguine Bolognese",
        "description": "牛肉末、番茄碎、葡萄酒"
      },
      "jp": {
        "name": "Linguine Bolognese",
        "description": "牛ひき肉、砕いたトマト、ワイン"
      },
      "ua": {
        "name": "Linguine Bolognese",
        "description": "яловичий фарш, подрібнені помідори, вино"
      },
      "hu": {
        "name": "Linguine Bolognese",
        "description": "darálthús (marha), zúzott paradicsom, bor"
      },
      "pt": {
        "name": "Linguine Bolognese",
        "description": "carne picada, tomates esmagados, vinho"
      }
    }
  },
  {
    "id": "Bridge",
    "key": "bridge",
    "category": "pasta",
    "prices": {
      "czk": 392,
      "eur": 17.04
    },
    "image": "https://pizzapastacaffe.com/ponte.jpg",
    "translations": {
      "cs": {
        "name": "Linguine Karlův most",
        "description": "prosciutto crudo, niva, celý zelený pepř, žampiony, smetana"
      },
      "en": {
        "name": "Linguine Charles Bridge",
        "description": "prosciutto crudo, blue cheese, whole green pepper, mushrooms, cream"
      },
      "de": {
        "name": "Linguine Charles Bridge",
        "description": "Prosciutto crudo, Blauschimmelkäse, ganzer grüner Pfeffer, Pilze, Sahne"
      },
      "it": {
        "name": "Linguine Charles Bridge",
        "description": "prosciutto crudo, formaggio erborinato, pepe verde intero, funghi, panna"
      },
      "fr": {
        "name": "Linguine Charles Bridge",
        "description": "prosciutto crudo, fromage bleu, poivre vert entier, champignons, crème"
      },
      "es": {
        "name": "Linguine Charles Bridge",
        "description": "prosciutto crudo, queso azul, pimienta verde entera, champiñones, crema"
      },
      "pl": {
        "name": "Linguine Charles Bridge",
        "description": "prosciutto crudo, ser pleśniowy, cały zielony pieprz, pieczarki, śmietana"
      },
      "kr": {
        "name": "Linguine Charles Bridge",
        "description": "프로슈토 크루도, 블루 치즈, 통 그린 페퍼, 버섯, 크림"
      },
      "cn": {
        "name": "Linguine Charles Bridge",
        "description": "生火腿、蓝纹奶酪、整颗青椒、蘑菇、奶油"
      },
      "jp": {
        "name": "Linguine Charles Bridge",
        "description": "生ハム、ゴルゴンゾーラ、コショウ、マッシュルーム、クリーム"
      },
      "ua": {
        "name": "Linguine Charles Bridge",
        "description": "прошуто крудо, горгонзола, цілий зелений перець, печериці, вершки"
      },
      "hu": {
        "name": "Linguine Charles Bridge",
        "description": "prosciutto crudo, gorgonzola, egész zöldbors, csiperke, tejszín"
      },
      "pt": {
        "name": "Linguine Charles Bridge",
        "description": "presunto cru, queijo azul, pimento verde inteiro, cogumelos, natas"
      }
    }
  },
  {
    "id": "Maranello",
    "key": "maranello",
    "category": "pasta",
    "prices": {
      "czk": 449,
      "eur": 19.52
    },
    "image": "https://pizzapastacaffe.com/maranello.jpg",
    "translations": {
      "cs": {
        "name": "Linguine Maranello",
        "description": "kuřecí prsa, cibule, žampiony, drcená rajčata, smetana, mozzarella"
      },
      "en": {
        "name": "Linguine Maranello",
        "description": "chicken breast, onion, mushrooms, crushed tomatoes, cream, mozzarella"
      },
      "de": {
        "name": "Linguine Maranello",
        "description": "Hähnchenbrust, Zwiebel, Pilze, passierte Tomaten, Sahne, Käse"
      },
      "it": {
        "name": "Linguine Maranello",
        "description": "petto di pollo, cipolla, funghi, pomodori schiacciati, panna, mozzarella"
      },
      "fr": {
        "name": "Linguine Maranello",
        "description": "poitrine de poulet, oignon, champignons, tomates concassées, crème, mozzarella"
      },
      "es": {
        "name": "Linguine Maranello",
        "description": "pechuga de pollo, cebolla, champiñones, tomates triturados, crema, mozzarella"
      },
      "pl": {
        "name": "Linguine Maranello",
        "description": "pierś z kurczaka, cebula, pieczarki, krojone pomidory, śmietana, mozzarella"
      },
      "kr": {
        "name": "Linguine Maranello",
        "description": "닭 가슴살, 양파, 버섯, 으깬 토마토, 크림, 모짜렐라"
      },
      "cn": {
        "name": "Linguine Maranello",
        "description": "鸡胸肉、洋葱、蘑菇、番茄碎、奶油、马苏里拉奶酪"
      },
      "jp": {
        "name": "Linguine Maranello",
        "description": "鶏むね肉、玉ねぎ、マッシュルーム、砕いたトマト、クリーム、モッツァレラ"
      },
      "ua": {
        "name": "Linguine Maranello",
        "description": "куряче, цибуля, печериці, подрібнені помідори, вершки, моцарела"
      },
      "hu": {
        "name": "Linguine Maranello",
        "description": "csirkemell, hagyma, csiperke, zúzott paradicsom, tejszín, mozzarella"
      },
      "pt": {
        "name": "Linguine Maranello",
        "description": "peito de frango, cebola, cogumelos, tomates esmagados, natas, mozarela"
      }
    }
  },
  {
    "id": "Shrimps",
    "key": "shrimps",
    "category": "pasta",
    "prices": {
      "czk": 469,
      "eur": 20.39
    },
    "image": "https://pizzapastacaffe.com/krevety.jpg",
    "translations": {
      "cs": {
        "name": "Linguine s krevetami",
        "description": "krevety, česnek, olivový olej, bazalka"
      },
      "en": {
        "name": "Linguine with shrimps",
        "description": "shrimps, garlic, olive oil, basil"
      },
      "de": {
        "name": "Linguine with shrimps",
        "description": "Garnelen, Knoblauch, Olivenöl, Basilikum"
      },
      "it": {
        "name": "Linguine with shrimps",
        "description": "gamberetti, aglio, olio d'oliva, basilico"
      },
      "fr": {
        "name": "Linguine with shrimps",
        "description": "crevettes, ail, huile d'olive, basilic"
      },
      "es": {
        "name": "Linguine with shrimps",
        "description": "camarones, ajo, aceite de oliva, albahaca"
      },
      "pl": {
        "name": "Linguine with shrimps",
        "description": "krewetki, czosnek, oliwa z oliwek, bazylia"
      },
      "kr": {
        "name": "Linguine with shrimps",
        "description": "새우, 마늘, 올리브 오일, 바질"
      },
      "cn": {
        "name": "Linguine with shrimps",
        "description": "虾仁、大蒜、橄榄油、罗勒"
      },
      "jp": {
        "name": "Linguine with shrimps",
        "description": "海老、ニンニク、オリーブオイル、バジル"
      },
      "ua": {
        "name": "Linguine with shrimps",
        "description": "креветки, часник, оливкова олія, базилік"
      },
      "hu": {
        "name": "Linguine with shrimps",
        "description": "garnéla, fokhagyma, olívaolaj, bazsalikom"
      },
      "pt": {
        "name": "Linguine with shrimps",
        "description": "camarões, alho, azeite, manjericão"
      }
    }
  },
  {
    "id": "Margherita",
    "key": "margherita",
    "category": "pizza",
    "prices": {
      "czk": 298,
      "eur": 12.96
    },
    "image": "https://pizzapastacaffe.com/margarita.jpg",
    "translations": {
      "cs": {
        "name": "Margherita",
        "description": "mozzarella, drcená rajčata, bazalka"
      },
      "en": {
        "name": "Margherita",
        "description": "mozzarella, crushed tomatoes, basil"
      },
      "de": {
        "name": "Margherita",
        "description": "Mozzarella, passierte Tomaten, Basilikum"
      },
      "it": {
        "name": "Margherita",
        "description": "mozzarella, pomodori schiacciati, basilico"
      },
      "fr": {
        "name": "Margherita",
        "description": "mozzarella, tomates concassées, basilic"
      },
      "es": {
        "name": "Margherita",
        "description": "mozzarella, tomates triturados, albahaca"
      },
      "pl": {
        "name": "Margherita",
        "description": "mozzarella, krojone pomidory, bazylia"
      },
      "kr": {
        "name": "Margherita",
        "description": "모짜렐라, 으깬 토마토, 바질"
      },
      "cn": {
        "name": "Margherita",
        "description": "马苏里拉奶酪、碎番茄、罗勒"
      },
      "jp": {
        "name": "Margherita",
        "description": "モッツァレラ、砕いたトマト、バジル"
      },
      "ua": {
        "name": "Margherita",
        "description": "моцарела, подрібнені помідори, базилік"
      },
      "hu": {
        "name": "Margherita",
        "description": "mozzarella, zúzott paradicsom, bazsalikom"
      },
      "pt": {
        "name": "Margherita",
        "description": "mozarela, tomates esmagados, manjericão"
      }
    }
  },
  {
    "id": "Hawaii",
    "key": "hawaii",
    "category": "pizza",
    "prices": {
      "czk": 338,
      "eur": 14.70
    },
    "image": "https://pizzapastacaffe.com/hawai.jpg",
    "translations": {
      "cs": {
        "name": "Hawaii",
        "description": "šunka, ananas, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Hawaii",
        "description": "ham, pineapple, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Hawaii",
        "description": "Schinken, Ananas, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Hawaii",
        "description": "prosciutto cotto, ananas, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Hawaii",
        "description": "jambon, ananas, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Hawaii",
        "description": "jamón, piña, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Hawaii",
        "description": "szynka, ananas, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Hawaii",
        "description": "햄, 파인애플, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Hawaii",
        "description": "火腿、菠萝、马苏里拉奶酪、碎番茄"
      },
      "jp": {
        "name": "Hawaii",
        "description": "ハム、パイナップル、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Hawaii",
        "description": "шинка, ананас, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Hawaii",
        "description": "sonka, ananász, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Hawaii",
        "description": "fiambre, ananás, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Mushroom",
    "key": "mushroom",
    "category": "pizza",
    "prices": {
      "czk": 338,
      "eur": 14.70
    },
    "image": "https://pizzapastacaffe.com/zampizza.jpg",
    "translations": {
      "cs": {
        "name": "Žampiónová",
        "description": "žampiony, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Mushroom",
        "description": "mushrooms, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Mushroom",
        "description": "Pilze, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Mushroom",
        "description": "funghi, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Mushroom",
        "description": "champignons, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Mushroom",
        "description": "champiñones, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Mushroom",
        "description": "pieczarki, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Mushroom",
        "description": "버섯, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Mushroom",
        "description": "蘑菇、马苏里拉奶酪、番茄碎"
      },
      "jp": {
        "name": "Mushroom",
        "description": "マッシュルーム、モッツァレラ、砕いたトマトp> \r\n               CZK:  \r\n        | €:"
      },
      "ua": {
        "name": "Mushroom",
        "description": "печериці, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Mushroom",
        "description": "csiperke, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Mushroom",
        "description": "cogumelos, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Ham",
    "key": "ham",
    "category": "pizza",
    "prices": {
      "czk": 332,
      "eur": 14.43
    },
    "image": "https://pizzapastacaffe.com/sunka.jpg",
    "translations": {
      "cs": {
        "name": "Šunková",
        "description": "šunka, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Ham",
        "description": "ham, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Ham",
        "description": "Schinken, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Ham",
        "description": "prosciutto cotto, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Ham",
        "description": "jambon, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Ham",
        "description": "jamón, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Ham",
        "description": "szynka, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Ham",
        "description": "햄, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Ham",
        "description": "火腿、马苏里拉奶酪、番茄碎"
      },
      "jp": {
        "name": "Ham",
        "description": "ハム、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Ham",
        "description": "шинка, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Ham",
        "description": "sonka, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Ham",
        "description": "fiambre, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Salami",
    "key": "salami",
    "category": "pizza",
    "prices": {
      "czk": 339,
      "eur": 14.74
    },
    "image": "https://pizzapastacaffe.com/salam.jpg",
    "translations": {
      "cs": {
        "name": "Salámová",
        "description": "salám, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Salami",
        "description": "salami, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Salami",
        "description": "Salami, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Salami",
        "description": "salame, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Salami",
        "description": "salami, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Salami",
        "description": "salami, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Salami",
        "description": "salami, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Salami",
        "description": "살라미, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Salami",
        "description": "萨拉米香肠、马苏里拉奶酪、番茄碎"
      },
      "jp": {
        "name": "Salami",
        "description": "サラミ、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Salami",
        "description": "салямі, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Salami",
        "description": "szalámi, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Salami",
        "description": "salame, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Broccoli",
    "key": "broccoli",
    "category": "pizza",
    "prices": {
      "czk": 339,
      "eur": 14.74
    },
    "image": "https://pizzapastacaffe.com/brokol.jpg",
    "translations": {
      "cs": {
        "name": "Brokolicová",
        "description": "brokolice, mozzarella, drcená rajčata, česnek"
      },
      "en": {
        "name": "Broccoli",
        "description": "broccoli, mozzarella, crushed tomatoes, garlic"
      },
      "de": {
        "name": "Broccoli",
        "description": "Brokkoli, Mozzarella, passierte Tomaten, Knoblauch"
      },
      "it": {
        "name": "Broccoli",
        "description": "broccoli, mozzarella, pomodori schiacciati, aglio"
      },
      "fr": {
        "name": "Broccoli",
        "description": "brocoli, mozzarella, tomates concassées, ail"
      },
      "es": {
        "name": "Broccoli",
        "description": "brócoli, mozzarella, tomates triturados, ajo"
      },
      "pl": {
        "name": "Broccoli",
        "description": "brokuły, mozzarella, krojone pomidory, czosnek"
      },
      "kr": {
        "name": "Broccoli",
        "description": "브로콜리, 모짜렐라, 으깬 토마토, 마늘"
      },
      "cn": {
        "name": "Broccoli",
        "description": "西兰花、马苏里拉奶酪、番茄碎、大蒜"
      },
      "jp": {
        "name": "Broccoli",
        "description": "ブロッコリー、モッツァレラ、砕いたトマト、ニンニク"
      },
      "ua": {
        "name": "Broccoli",
        "description": "броколі, моцарела, подрібнені помідори, часник"
      },
      "hu": {
        "name": "Broccoli",
        "description": "brokkoli, mozzarella, zúzott paradicsom, fokhagyma"
      },
      "pt": {
        "name": "Broccoli",
        "description": "brócolos, mozarela, tomates esmagados, alho"
      }
    }
  },
  {
    "id": "Vegetariana",
    "key": "vegetariana",
    "category": "pizza",
    "prices": {
      "czk": 349,
      "eur": 15.17
    },
    "image": "https://pizzapastacaffe.com/vegetariana.jpg",
    "translations": {
      "cs": {
        "name": "Vegetariana",
        "description": "hrášek, kukuřice, brokolice, černé olivy, mozzarella, drcená rajčata, česnek"
      },
      "en": {
        "name": "Vegetariana",
        "description": "peas, corn, broccoli, black olives, mozzarella, crushed tomatoes, garlic"
      },
      "de": {
        "name": "Vegetariana",
        "description": "Erbsen, Mais, Brokkoli, schwarze Oliven, Mozzarella, passierte Tomaten, Knoblauch"
      },
      "it": {
        "name": "Vegetariana",
        "description": "piselli, mais, broccoli, olive nere, mozzarella, pomodori schiacciati, aglio"
      },
      "fr": {
        "name": "Vegetariana",
        "description": "petits pois, maïs, brocoli, olives noires, mozzarella, tomates concassées, ail"
      },
      "es": {
        "name": "Vegetariana",
        "description": "guisantes, maíz, brócoli, aceitunas negras, mozzarella, tomates triturados, ajo"
      },
      "pl": {
        "name": "Vegetariana",
        "description": "groszek, kukurydza, brokuły, czarne oliwki, mozzarella, krojone pomidory, czosnek"
      },
      "kr": {
        "name": "Vegetariana",
        "description": "완두콩, 옥수수, 브로콜리, 블랙 올리브, 모짜렐라, 으깬 토마토, 마늘"
      },
      "cn": {
        "name": "Vegetariana",
        "description": "豌豆、玉米、西兰花、黑橄榄、马苏里拉奶酪、碎番茄、大蒜"
      },
      "jp": {
        "name": "Vegetariana",
        "description": "エンドウ豆、コーン、ブロッコリー、ブラックオリーブ、モッツァレラ、砕いたトマト、ニンニク"
      },
      "ua": {
        "name": "Vegetariana",
        "description": "горошок, кукурудза, броколі, чорні оливки, моцарела, подрібнені помідори, часник"
      },
      "hu": {
        "name": "Vegetariana",
        "description": "borsó, kukorica, brokkoli, fekete olívabogyó, mozzarella, zúzott paradicsom, fokhagyma"
      },
      "pt": {
        "name": "Vegetariana",
        "description": "ervilhas, milho, brócolos, azeitonas pretas, mozarela, tomates esmagados, alho"
      }
    }
  },
  {
    "id": "SpinachPizza",
    "key": "spinachpizza",
    "category": "pizza",
    "prices": {
      "czk": 367,
      "eur": 15.96
    },
    "image": "https://pizzapastacaffe.com/spenatp.jpg",
    "translations": {
      "cs": {
        "name": "Špenátová",
        "description": "špenát, vejce, česnek, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Spinach",
        "description": "spinach, egg, garlic, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Spinach",
        "description": "Spinat, Ei, Knoblauch, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Spinach",
        "description": "spinaci, uovo, aglio, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Spinach",
        "description": "épinards, œuf, ail, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Spinach",
        "description": "espinacas, huevo, ajo, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Spinach",
        "description": "szpinak, jajko, czosnek, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Spinach",
        "description": "시금치, 달걀, 마늘, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Spinach",
        "description": "菠菜、鸡蛋、大蒜、马苏里拉奶酪、番茄碎"
      },
      "jp": {
        "name": "Spinach",
        "description": "ホウレンソウ、卵、ニンニク、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Spinach",
        "description": "шпинат, яйця, часник, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Spinach",
        "description": "spenót, tojás, fokhagyma, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Spinach",
        "description": "espinafres, ovo, alho, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Milanese",
    "key": "milanese",
    "category": "pizza",
    "prices": {
      "czk": 373,
      "eur": 16.22
    },
    "image": "https://pizzapastacaffe.com/milanska.jpg",
    "translations": {
      "cs": {
        "name": "Milánská",
        "description": "salám, balkánský sýr, chřest, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Milanese",
        "description": "salami, balkan cheese, asparagus, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Milanese",
        "description": "Salami, Balkankäse, Spargel, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Milanese",
        "description": "salame, formaggio balcanico, asparagi, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Milanese",
        "description": "salami, fromage balkan, asperges, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Milanese",
        "description": "salami, queso balcánico, espárragos, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Milanese",
        "description": "salami, ser bałkański, szparagi, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Milanese",
        "description": "살라미, 발칸 치즈, 아스파라거스, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Milanese",
        "description": "萨拉米香肠、巴尔干奶酪、芦笋、马苏里拉奶酪、碎番茄"
      },
      "jp": {
        "name": "Milanese",
        "description": "サラミ、バルカンチーズ、アスパラガス、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Milanese",
        "description": "салямі, балканський сир, спаржа, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Milanese",
        "description": "szalámi, balkáni sajt, spárga, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Milanese",
        "description": "salame, queijo balcânico, espargos, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Braschi",
    "key": "braschi",
    "category": "pizza",
    "prices": {
      "czk": 375,
      "eur": 16.30
    },
    "image": "https://pizzapastacaffe.com/luca.jpg",
    "translations": {
      "cs": {
        "name": "Luca Braschi",
        "description": "feferonky, beraní rohy, salám, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Luca Braschi",
        "description": "chilli peppers, swett peppers, salami, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Luca Braschi",
        "description": "Chilischoten, Paprika, Salami, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Luca Braschi",
        "description": "peperoncini piccanti, peperoni, salame, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Luca Braschi",
        "description": "piments, poivrons doux, salami, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Luca Braschi",
        "description": "chiles picantes, pimientos dulces, salami, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Luca Braschi",
        "description": "papryczki chilli, słodka papryka, salami, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Luca Braschi",
        "description": "고추, 스위트 페퍼, 살라미, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Luca Braschi",
        "description": "辣椒、甜椒、萨拉米香肠、马苏里拉奶酪、碎番茄"
      },
      "jp": {
        "name": "Luca Braschi",
        "description": "唐辛子、パプリカ、サラミ、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Luca Braschi",
        "description": "гострий перець, паприка, салямі, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Luca Braschi",
        "description": "csípős paprika, paprika, szalámi, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Luca Braschi",
        "description": "malaguetas, pimentos doces, salame, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "BolognesePizza",
    "key": "bolognesepizza",
    "category": "pizza",
    "prices": {
      "czk": 399,
      "eur": 17.35
    },
    "image": "https://pizzapastacaffe.com/bolonska.jpg",
    "translations": {
      "cs": {
        "name": "Boloňská",
        "description": "hovězí mleté maso, cibule, česnek, černé olivy, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Bolognese",
        "description": "minced beef, onion, garlic, black olives, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Bolognese",
        "description": "Hackfleisch vom Rind, Zwiebeln, Knoblauch, schwarze Oliven, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Bolognese",
        "description": "carne macinata di manzo, cipolle, aglio, olive nere, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Bolognese",
        "description": "bœuf haché, oignon, ail, olives noires, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Bolognese",
        "description": "carne picada de res, cebolla, ajo, aceitunas negras, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Bolognese",
        "description": "mielona wołowina, cebula, czosnek, czarne oliwki, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Bolognese",
        "description": "다진 소고기, 양파, 마늘, 블랙 올리브, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Bolognese",
        "description": "牛肉末、洋葱、大蒜、黑橄榄、马苏里拉奶酪、番茄碎"
      },
      "jp": {
        "name": "Bolognese",
        "description": "牛ひき肉、玉ねぎ、ニンニク、ブラックオリーブ、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Bolognese",
        "description": "яловичий фарш, цибуля, часник, чорні оливки, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Bolognese",
        "description": "darálthús (marha), hagyma, fokhagyma, fekete olívabogyó, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Bolognese",
        "description": "carne picada, cebola, alho, azeitonas pretas, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Formaggi",
    "key": "formaggi",
    "category": "pizza",
    "prices": {
      "czk": 399,
      "eur": 17.35
    },
    "image": "https://pizzapastacaffe.com/4.jpg",
    "translations": {
      "cs": {
        "name": "4 druhy sýra",
        "description": "camembert, gorgonzola, uzený sýr, mozzarella, drcená rajčata, černé olivy"
      },
      "en": {
        "name": "4 Formaggi",
        "description": "camembert cheese, blue cheese, smoked cheese, mozzarella, crushed tomatoes, black olives"
      },
      "de": {
        "name": "4 Formaggi",
        "description": "Camembert, Blauschimmelkäse, geräucherter Käse, Mozzarella, passierte Tomaten, schwarze Oliven"
      },
      "it": {
        "name": "4 Formaggi",
        "description": "Camembert, formaggio erborinato, formaggio affumicato, mozzarella, pomodori schiacciati, olive nere"
      },
      "fr": {
        "name": "4 Formaggi",
        "description": "camembert, fromage bleu, fromage fumé, mozzarella, tomates concassées, olives noires"
      },
      "es": {
        "name": "4 Formaggi",
        "description": "queso camembert, queso azul, queso ahumado, mozzarella, tomates triturados, aceitunas negras"
      },
      "pl": {
        "name": "4 Formaggi",
        "description": "ser camembert, ser pleśniowy, ser wędzony, mozzarella, krojone pomidory, czarne oliwki"
      },
      "kr": {
        "name": "4 Formaggi",
        "description": "까망베르 치즈, 블루 치즈, 훈제 치즈, 모짜렐라, 으깬 토마토, 블랙 올리브"
      },
      "cn": {
        "name": "4 Formaggi",
        "description": "卡门贝尔奶酪、蓝纹奶酪、烟熏奶酪、马苏里拉奶酪、碎番茄、黑橄榄"
      },
      "jp": {
        "name": "4 Formaggi",
        "description": "カマンベール、ゴルゴンゾーラ、スモークチーズ、モッツァレラ、砕いたトマト、ブラックオリーブ"
      },
      "ua": {
        "name": "4 Formaggi",
        "description": "камамбер, горгонзола, копчений сир, моцарела, подрібнені помідори, чорні оливки"
      },
      "hu": {
        "name": "4 Formaggi",
        "description": "camembert, gorgonzola, füstölt sajt, mozzarella, zúzott paradicsom, fekete olívabogyó"
      },
      "pt": {
        "name": "4 Formaggi",
        "description": "Queijo camembert, queijo azul, queijo fumado, mozarela, tomates esmagados, azeitonas pretas"
      }
    }
  },
  {
    "id": "Capricciosa",
    "key": "capricciosa",
    "category": "pizza",
    "prices": {
      "czk": 411,
      "eur": 17.87
    },
    "image": "https://pizzapastacaffe.com/capri.jpg",
    "translations": {
      "cs": {
        "name": "Capricciosa",
        "description": "šunka, salám, žampiony, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Capricciosa",
        "description": "ham, salami, mushrooms, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Capricciosa",
        "description": "Schinken, Salami, Pilze, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Capricciosa",
        "description": "prosciutto cotto, salame, funghi, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Capricciosa",
        "description": "jambon, salami, champignons, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Capricciosa",
        "description": "jamón, salami, champiñones, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Capricciosa",
        "description": "szynka, salami, pieczarki, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Capricciosa",
        "description": "햄, 살라미, 버섯, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Capricciosa",
        "description": "火腿、萨拉米香肠、蘑菇、马苏里拉奶酪、碎番茄"
      },
      "jp": {
        "name": "Capricciosa",
        "description": "ハム、サラミ、マッシュルーム、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Capricciosa",
        "description": "шинка, салямі, печериці, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Capricciosa",
        "description": "sonka, szalámi, csiperke, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Capricciosa",
        "description": "fiambre, salame, cogumelos, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Siciliana",
    "key": "siciliana",
    "category": "pizza",
    "prices": {
      "czk": 428,
      "eur": 18.61
    },
    "image": "https://pizzapastacaffe.com/sici.jpg",
    "translations": {
      "cs": {
        "name": "Siciliana",
        "description": "tuňák, sardinky, kapary, cibule, černé olivy, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Siciliana",
        "description": "tuna, sardines, capers, onion, black olives, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Siciliana",
        "description": "Thunfisch, Sardinen, Kapern, Zwiebeln, schwarze Oliven, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Siciliana",
        "description": "tonno, sardine, capperi, cipolle, olive nere, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Siciliana",
        "description": "thon, sardines, câpres, oignon, olives noires, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Siciliana",
        "description": "atún, sardinas, alcaparras, cebolla, aceitunas negras, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Siciliana",
        "description": "tuńczyk, sardynki, kapary, cebula, czarne oliwki, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Siciliana",
        "description": "참치, 정어리, 케이퍼, 양파, 블랙 올리브, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Siciliana",
        "description": "金枪鱼、沙丁鱼、刺山柑、洋葱、黑橄榄、马苏里拉奶酪、碎番茄"
      },
      "jp": {
        "name": "Siciliana",
        "description": "ツナ、アンチョビ、ケッパー、玉ねぎ、ブラックオリーブ、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Siciliana",
        "description": "тунець, сардини, каперси, цибуля, чорні оливки, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Siciliana",
        "description": "tonhal, szardella, kapribogyó, hagyma, fekete olívabogyó, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Siciliana",
        "description": "atum, sardinhas, alcaparras, cebola, azeitonas pretas, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Pollame",
    "key": "pollame",
    "category": "pizza",
    "prices": {
      "czk": 428,
      "eur": 18.61
    },
    "image": "https://pizzapastacaffe.com/pollame.jpg",
    "translations": {
      "cs": {
        "name": "Pollame",
        "description": "kuřecí prsa, mozzarella, paprika, cibule, drcená rajčata, uzený sýr, kari"
      },
      "en": {
        "name": "Pollame",
        "description": "chicken breast, mozzarella, sweet pepper, onion, crushed tomatoes, smoked cheese, curry"
      },
      "de": {
        "name": "Pollame",
        "description": "Hähnchenbrust, Mozzarella, Paprika, Zwiebeln, passierte Tomaten, geräucherter Käse, Curry"
      },
      "it": {
        "name": "Pollame",
        "description": "petto di pollo, mozzarella, peperoni, cipolle, pomodori schiacciati, formaggio affumicato, curry"
      },
      "fr": {
        "name": "Pollame",
        "description": "poitrine de poulet, mozzarella, poivron doux, oignon, tomates concassées, fromage fumé, curry"
      },
      "es": {
        "name": "Pollame",
        "description": "pechuga de pollo, mozzarella, pimiento dulce, cebolla, tomates triturados, queso ahumado, curry"
      },
      "pl": {
        "name": "Pollame",
        "description": "pierś z kurczaka, mozzarella, słodka papryka, cebula, krojone pomidory, ser wędzony, curry"
      },
      "kr": {
        "name": "Pollame",
        "description": "닭 가슴살, 모짜렐라, 스위트 페퍼, 양파, 으깬 토마토, 훈제 치즈, 카레"
      },
      "cn": {
        "name": "Pollame",
        "description": "鸡胸肉、马苏里拉奶酪、甜椒、洋葱、番茄碎、烟熏奶酪、咖喱"
      },
      "jp": {
        "name": "Pollame",
        "description": "鶏むね肉、モッツァレラ、パプリカ、玉ねぎ、砕いたトマト、スモークチーズ、カレー"
      },
      "ua": {
        "name": "Pollame",
        "description": "куряче, моцарела, паприка, цибуля, подрібнені помідори, копчений сир, карі"
      },
      "hu": {
        "name": "Pollame",
        "description": "csirkemell, mozzarella, paprika, hagyma, zúzott paradicsom, füstölt sajt, curry"
      },
      "pt": {
        "name": "Pollame",
        "description": "peito de frango, mozarela, pimento doce, cebola, tomates esmagados, queijo fumado, caril"
      }
    }
  },
  {
    "id": "Castle",
    "key": "castle",
    "category": "pizza",
    "prices": {
      "czk": 466,
      "eur": 20.26
    },
    "image": "https://pizzapastacaffe.com/castle.jpg",
    "translations": {
      "cs": {
        "name": "Pizza Pražský hrad",
        "description": "prosciutto crudo, cibule, česnek, pálivá paprika, mozzarella, drcená rajčata"
      },
      "en": {
        "name": "Castle Pizza",
        "description": "prosciutto crudo, onion, garlic, hot pepper, mozzarella, crushed tomatoes"
      },
      "de": {
        "name": "Castle Pizza",
        "description": "Prosciutto crudo, Zwiebeln, Knoblauch, scharfer Pfeffer, Mozzarella, passierte Tomaten"
      },
      "it": {
        "name": "Castle Pizza",
        "description": "prosciutto crudo, cipolle, aglio, pepe piccante, mozzarella, pomodori schiacciati"
      },
      "fr": {
        "name": "Castle Pizza",
        "description": "prosciutto crudo, oignon, ail, piment fort, mozzarella, tomates concassées"
      },
      "es": {
        "name": "Castle Pizza",
        "description": "prosciutto crudo, cebolla, ajo, pimiento picante, mozzarella, tomates triturados"
      },
      "pl": {
        "name": "Castle Pizza",
        "description": "prosciutto crudo, cebula, czosnek, ostra papryka, mozzarella, krojone pomidory"
      },
      "kr": {
        "name": "Castle Pizza",
        "description": "프로슈토 크루도, 양파, 마늘, 매운 고추, 모짜렐라, 으깬 토마토"
      },
      "cn": {
        "name": "Castle Pizza",
        "description": "生火腿、洋葱、大蒜、辣椒、马苏里拉奶酪、碎番茄"
      },
      "jp": {
        "name": "Castle Pizza",
        "description": "生ハム、玉ねぎ、ニンニク、唐辛子、モッツァレラ、砕いたトマト"
      },
      "ua": {
        "name": "Castle Pizza",
        "description": "прошуто крудо, цибуля, часник, гострий перець, моцарела, подрібнені помідори"
      },
      "hu": {
        "name": "Castle Pizza",
        "description": "prosciutto crudo, hagyma, fokhagyma, csípős paprika, mozzarella, zúzott paradicsom"
      },
      "pt": {
        "name": "Castle Pizza",
        "description": "fiambre cru, cebola, alho, pimento, mozarela, tomates esmagados"
      }
    }
  },
  {
    "id": "Greek",
    "key": "greek",
    "category": "salads",
    "prices": {
      "czk": 395,
      "eur": 17.17
    },
    "image": "https://pizzapastacaffe.com/greek.jpg",
    "translations": {
      "cs": {
        "name": "Řecký salát",
        "description": "balkánský sýr, rajčata, paprika, okurka, cibule, černé olivy"
      },
      "en": {
        "name": "Greek Salad",
        "description": "balkan cheese, tomatoes, paprika, cucumbers, onion, black olives"
      },
      "de": {
        "name": "Greek Salad",
        "description": "Balkankäse, Tomaten, Paprika, Gurken, Zwiebeln, schwarze Oliven"
      },
      "it": {
        "name": "Greek Salad",
        "description": "formaggio balcanico, pomodori, peperoni, cetrioli, cipolle, olive nere"
      },
      "fr": {
        "name": "Greek Salad",
        "description": "fromage balkan, tomates, paprika, concombres, oignon, olives noires"
      },
      "es": {
        "name": "Greek Salad",
        "description": "queso balcánico, tomates, pimentón, pepinos, cebolla, aceitunas negras"
      },
      "pl": {
        "name": "Greek Salad",
        "description": "ser bałkański, pomidory, papryka, ogórki, cebula, czarne oliwki"
      },
      "kr": {
        "name": "Greek Salad",
        "description": "발칸 치즈, 토마토, 파프리카, 오이, 양파, 블랙 올리브"
      },
      "cn": {
        "name": "Greek Salad",
        "description": "巴尔干奶酪、西红柿、辣椒粉、黄瓜、洋葱、黑橄榄"
      },
      "jp": {
        "name": "Greek Salad",
        "description": "バルカンチーズ、トマト、パプリカ、キュウリ、玉ねぎ、ブラックオリーブ"
      },
      "ua": {
        "name": "Greek Salad",
        "description": "балканський сир, помідори, паприка, огірок, цибуля, чорні оливки"
      },
      "hu": {
        "name": "Greek Salad",
        "description": "balkáni sajt, paradicsom, paprika, uborka, hagyma, fekete olívabogyó"
      },
      "pt": {
        "name": "Greek Salad",
        "description": "Queijo balcânico, tomate, pimentão doce, pepinos, cebola, azeitonas pretas"
      }
    }
  },
  {
    "id": "Fresh",
    "key": "fresh",
    "category": "salads",
    "prices": {
      "czk": 395,
      "eur": 17.17
    },
    "image": "https://pizzapastacaffe.com/fresh.jpg",
    "translations": {
      "cs": {
        "name": "Salát z čerstvé zeleniny",
        "description": "tuňák, rajčata, paprika, okurka, ledový salát, černé olivy, vejce"
      },
      "en": {
        "name": "Fresh Vegetable Salad",
        "description": "tuna, tomatoes, paprika, cucumbers, iceberg lettuce, black olives, egg"
      },
      "de": {
        "name": "Fresh Vegetable Salad",
        "description": "Thunfisch, Tomaten, Paprika, Gurken, Eisbergsalat, schwarze Oliven, Ei"
      },
      "it": {
        "name": "Fresh Vegetable Salad",
        "description": "tonno, pomodori, peperoni, cetrioli, lattuga iceberg, olive nere, uovo"
      },
      "fr": {
        "name": "Fresh Vegetable Salad",
        "description": "thon, tomates, paprika, concombres, laitue iceberg, olives noires, œuf"
      },
      "es": {
        "name": "Fresh Vegetable Salad",
        "description": "atún, tomates, pimentón, pepinos, lechuga iceberg, aceitunas negras, huevo"
      },
      "pl": {
        "name": "Fresh Vegetable Salad",
        "description": "tuńczyk, pomidory, papryka, ogórki, sałata lodowa, czarne oliwki, jajko"
      },
      "kr": {
        "name": "Fresh Vegetable Salad",
        "description": "참치, 토마토, 파프리카, 오이, 양상추, 블랙 올리브, 달걀"
      },
      "cn": {
        "name": "Fresh Vegetable Salad",
        "description": "金枪鱼、西红柿、辣椒粉、黄瓜、卷心莴苣、黑橄榄、鸡蛋"
      },
      "jp": {
        "name": "Fresh Vegetable Salad",
        "description": "ツナ、トマト、パプリカ、キュウリ、レタス、ブラックオリーブ、卵"
      },
      "ua": {
        "name": "Fresh Vegetable Salad",
        "description": "тунець, помідори, паприка, огірок, салат айсберг, чорні оливки, яйця"
      },
      "hu": {
        "name": "Fresh Vegetable Salad",
        "description": "tonhal, paradicsom, paprika, uborka, jégsaláta, fekete olívabogyó, tojás"
      },
      "pt": {
        "name": "Fresh Vegetable Salad",
        "description": "atum, tomate, pimentão doce, pepinos, alface iceberg, azeitonas pretas, ovo"
      }
    }
  },
  {
    "id": "Mix",
    "key": "mix",
    "category": "salads",
    "prices": {
      "czk": 258,
      "eur": 11.22
    },
    "image": "https://pizzapastacaffe.com/mix.jpg",
    "translations": {
      "cs": {
        "name": "Míchaný salát",
        "description": "rajčata, paprika, okurka, ledový salát"
      },
      "en": {
        "name": "Mix Salad",
        "description": "tomatoes, paprika, cucumber, iceberg lettuce"
      },
      "de": {
        "name": "Mix Salad",
        "description": "Tomaten, Paprika, Gurken, Eisbergsalat"
      },
      "it": {
        "name": "Mix Salad",
        "description": "pomodori, peperoni, cetrioli, lattuga iceberg"
      },
      "fr": {
        "name": "Mix Salad",
        "description": "tomates, paprika, concombre, laitue iceberg"
      },
      "es": {
        "name": "Mix Salad",
        "description": "tomates, pimentón, pepino, lechuga iceberg"
      },
      "pl": {
        "name": "Mix Salad",
        "description": "pomidory, papryka, ogórek, sałata lodowa"
      },
      "kr": {
        "name": "Mix Salad",
        "description": "토마토, 파프리카, 오이, 양상추"
      },
      "cn": {
        "name": "Mix Salad",
        "description": "西红柿、甜椒粉、黄瓜、卷心莴苣"
      },
      "jp": {
        "name": "Mix Salad",
        "description": "トマト、パプリカ、キュウリ、レタス"
      },
      "ua": {
        "name": "Mix Salad",
        "description": "помідори, паприка, огірок, салат айсберг"
      },
      "hu": {
        "name": "Mix Salad",
        "description": "paradicsom, paprika, uborka, jégsaláta"
      },
      "pt": {
        "name": "Mix Salad",
        "description": "tomates, pimentão doce, pepino, alface americana"
      }
    }
  },
  {
    "id": "Tiramisu",
    "key": "tiramisu",
    "category": "desserts",
    "prices": {
      "czk": 149,
      "eur": 6.48
    },
    "image": "https://pizzapastacaffe.com/tira.jpg",
    "translations": {
      "cs": {
        "name": "Tiramisu",
        "description": ""
      },
      "en": {
        "name": "Tiramisu",
        "description": ""
      },
      "de": {
        "name": "Tiramisu",
        "description": ""
      },
      "it": {
        "name": "Tiramisu",
        "description": ""
      },
      "fr": {
        "name": "Tiramisu",
        "description": ""
      },
      "es": {
        "name": "Tiramisu",
        "description": ""
      },
      "pl": {
        "name": "Tiramisu",
        "description": ""
      },
      "kr": {
        "name": "Tiramisu",
        "description": ""
      },
      "cn": {
        "name": "Tiramisu",
        "description": ""
      },
      "jp": {
        "name": "Tiramisu",
        "description": ""
      },
      "ua": {
        "name": "Tiramisu",
        "description": ""
      },
      "hu": {
        "name": "Tiramisu",
        "description": ""
      },
      "pt": {
        "name": "Tiramisu",
        "description": ""
      }
    }
  },
  {
    "id": "strudel",
    "key": "strudel",
    "category": "desserts",
    "prices": {
      "czk": 169,
      "eur": 7.35
    },
    "image": "https://pizzapastacaffe.com/strudl.jpg",
    "translations": {
      "cs": {
        "name": "Jablečný závin",
        "description": ""
      },
      "en": {
        "name": "Apple strudel",
        "description": ""
      },
      "de": {
        "name": "Apple strudel",
        "description": ""
      },
      "it": {
        "name": "Apple strudel",
        "description": ""
      },
      "fr": {
        "name": "Apple strudel",
        "description": ""
      },
      "es": {
        "name": "Apple strudel",
        "description": ""
      },
      "pl": {
        "name": "Apple strudel",
        "description": ""
      },
      "kr": {
        "name": "Apple strudel",
        "description": ""
      },
      "cn": {
        "name": "Apple strudel",
        "description": ""
      },
      "jp": {
        "name": "Apple strudel",
        "description": ""
      },
      "ua": {
        "name": "Apple strudel",
        "description": ""
      },
      "hu": {
        "name": "Apple strudel",
        "description": ""
      },
      "pt": {
        "name": "Apple strudel",
        "description": ""
      }
    }
  },
  {
    "id": "fondant",
    "key": "fondant",
    "category": "desserts",
    "prices": {
      "czk": 169,
      "eur": 7.35
    },
    "image": "https://pizzapastacaffe.com/fondan.jpg",
    "translations": {
      "cs": {
        "name": "Čokoládový fondant",
        "description": ""
      },
      "en": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "de": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "it": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "fr": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "es": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "pl": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "kr": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "cn": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "jp": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "ua": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "hu": {
        "name": "Chocolate fondant",
        "description": ""
      },
      "pt": {
        "name": "Chocolate fondant",
        "description": ""
      }
    }
  },
  {
    "id": "bread",
    "key": "bread",
    "category": "desserts",
    "prices": {
      "czk": 95,
      "eur": 4.13
    },
    "image": "https://pizzapastacaffe.com/chleba2.jpg",
    "translations": {
      "cs": {
        "name": "Domácí bílý chléb",
        "description": ""
      },
      "en": {
        "name": "Homemade white bread",
        "description": ""
      },
      "de": {
        "name": "Homemade white bread",
        "description": ""
      },
      "it": {
        "name": "Homemade white bread",
        "description": ""
      },
      "fr": {
        "name": "Homemade white bread",
        "description": ""
      },
      "es": {
        "name": "Homemade white bread",
        "description": ""
      },
      "pl": {
        "name": "Homemade white bread",
        "description": ""
      },
      "kr": {
        "name": "Homemade white bread",
        "description": ""
      },
      "cn": {
        "name": "Homemade white bread",
        "description": ""
      },
      "jp": {
        "name": "Homemade white bread",
        "description": ""
      },
      "ua": {
        "name": "Homemade white bread",
        "description": ""
      },
      "hu": {
        "name": "Homemade white bread",
        "description": ""
      },
      "pt": {
        "name": "Homemade white bread",
        "description": ""
      }
    }
  },
  {
    "id": "Campari",
    "key": "campari",
    "category": "spirits",
    "prices": {
      "czk": 90,
      "eur": 3.91
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "en": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "de": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "it": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "fr": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "es": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "pl": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "kr": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "cn": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "jp": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "ua": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "hu": {
        "name": "Campari",
        "description": "0,05 l"
      },
      "pt": {
        "name": "Campari",
        "description": "0,05 l"
      }
    }
  },
    {
        "id": "Martini-Bianco",
        "key": "martini-bianco",
        "category": "spirits",
        "prices": {
            "czk": 105,
            "eur": 4.57
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Martini Bianco",
                "description": "0.1 l / bílé"
            },
            "en": {
                "name": "Martini Bianco",
                "description": "0.1 l / white"
            },
            "de": {
                "name": "Martini Bianco",
                "description": "0.1 l / weiß"
            },
            "it": {
                "name": "Martini Bianco",
                "description": "0.1 l"
            },
            "fr": {
                "name": "Martini Bianco",
                "description": "0.1 l / blanc"
            },
            "es": {
                "name": "Martini Bianco",
                "description": "0.1 l / blanco"
            },
            "pl": {
                "name": "Martini Bianco",
                "description": "0.1 l / białe"
            },
            "kr": {
                "name": "마티니 비앙코 (Martini Bianco)",
                "description": "0.1 l"
            },
            "cn": {
                "name": "白马天尼 (Martini Bianco)",
                "description": "0.1 l"
            },
            "jp": {
                "name": "マルティーニ・ビアンコ (Martini Bianco)",
                "description": "0.1 l"
            },
            "ua": {
                "name": "Мартіні Бʼянко (Martini Bianco)",
                "description": "0.1 l"
            },
            "hu": {
                "name": "Martini Bianco",
                "description": "0.1 l / fehér"
            },
            "pt": {
                "name": "Martini Bianco",
                "description": "0.1 l / branco"
            }
        }
    },
  {
        "id": "Martini-Rosso",
        "key": "martini-rosso",
        "category": "spirits",
        "prices": {
            "czk": 105,
            "eur": 4.57
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Martini Rosso",
                "description": "0.1 l / červené"
            },
            "en": {
                "name": "Martini Rosso",
                "description": "0.1 l / red"
            },
            "de": {
                "name": "Martini Rosso",
                "description": "0.1 l / rot"
            },
            "it": {
                "name": "Martini Rosso",
                "description": "0.1 l"
            },
            "fr": {
                "name": "Martini Rosso",
                "description": "0.1 l / rouge"
            },
            "es": {
                "name": "Martini Rosso",
                "description": "0.1 l / rojo"
            },
            "pl": {
                "name": "Martini Rosso",
                "description": "0.1 l / czerwone"
            },
            "kr": {
                "name": "마티니 로소 (Martini Rosso)",
                "description": "0.1 l"
            },
            "cn": {
                "name": "红马天尼 (Martini Rosso)",
                "description": "0.1 l"
            },
            "jp": {
                "name": "マルティーニ・ロッソ (Martini Rosso)",
                "description": "0.1 l"
            },
            "ua": {
                "name": "Мартіні Россо (Martini Rosso)",
                "description": "0.1 l"
            },
            "hu": {
                "name": "Martini Rosso",
                "description": "0.1 l / vörös"
            },
            "pt": {
                "name": "Martini Rosso",
                "description": "0.1 l / tinto"
            }
        }
    },
  {
        "id": "Martini-Dry",
        "key": "martini-dry",
        "category": "spirits",
        "prices": {
            "czk": 105,
            "eur": 4.57
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / suché"
            },
            "en": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / dry"
            },
            "de": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / trocken"
            },
            "it": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / dry"
            },
            "fr": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / sec"
            },
            "es": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / seco"
            },
            "pl": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / wytrawne"
            },
            "kr": {
                "name": "마티니 엑스트라 드라이 (Martini Extra Dry)",
                "description": "0.1 l"
            },
            "cn": {
                "name": "干马天尼 (Martini Extra Dry)",
                "description": "0.1 l"
            },
            "jp": {
                "name": "マルティーニ・エクストラ・ドライ (Martini Extra Dry)",
                "description": "0.1 l"
            },
            "ua": {
                "name": "Мартіні Екстра Драй (Martini Extra Dry)",
                "description": "0.1 l"
            },
            "hu": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / száraz"
            },
            "pt": {
                "name": "Martini Extra Dry",
                "description": "0.1 l / seco"
            }
        }
    },
  {
    "id": "Thurgau",
    "key": "thurgau",
    "category": "wine",
    "prices": {
      "czk": 478,
      "eur": 20.78
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Müller Thurgau",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Müller Thurgau",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Müller Thurgau",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Müller Thurgau",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Thurgau015",
    "key": "thurgau015",
    "category": "wine",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Müller Thurgau sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Müller Thurgau one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Müller Thurgau ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Müller Thurgau un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Müller Thurgau un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Müller Thurgau una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Müller Thurgau kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Müller Thurgau유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Müller Thurgau一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Müller Thurgauグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Müller Thurgauкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Müller Thurgauüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Müller Thurgau um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Veltlinske",
    "key": "veltlinske",
    "category": "wine",
    "prices": {
      "czk": 478,
      "eur": 20.78
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Veltlínské zelené",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Veltlinske015",
    "key": "veltlinske015",
    "category": "wine",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Veltlínské zelené sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Veltlínské zelené one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Veltlínské zelené ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Veltlínské zelené un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Veltlínské zelené un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Veltlínské zelené una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Veltlínské zelené kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Veltlínské zelené유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Veltlínské zelené一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Veltlínské zelenéグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Veltlínské zelenéкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Veltlínské zelenéüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Veltlínské zelené um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Chardonnay",
    "key": "chardonnay",
    "category": "wine",
    "prices": {
      "czk": 478,
      "eur": 20.78
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Chardonnay",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Chardonnay",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Chardonnay",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Chardonnay",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Chardonnay",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Chardonnay",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Chardonnay",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Chardonnay",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Chardonnay",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Chardonnay",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Chardonnay",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Chardonnay",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Chardonnay",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Chardonnay015",
    "key": "chardonnay015",
    "category": "wine",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Chardonnay sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Chardonnay one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Chardonnay ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Chardonnay un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Chardonnay un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Chardonnay una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Chardonnay kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Chardonnay유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Chardonnay一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Chardonnayグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Chardonnayкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Chardonnayüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Chardonnay um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Sauvignon",
    "key": "sauvignon",
    "category": "wine",
    "prices": {
      "czk": 478,
      "eur": 20.78
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Sauvignon",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Sauvignon",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Sauvignon",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Sauvignon",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Sauvignon",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Sauvignon",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Sauvignon",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Sauvignon",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Sauvignon",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Sauvignon",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Sauvignon",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Sauvignon",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Sauvignon",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Sauvignon015",
    "key": "sauvignon015",
    "category": "wine",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Sauvignon sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Sauvignon one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Sauvignon ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Sauvignon un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Sauvignon un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Sauvignon una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Sauvignon kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Sauvignon유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Sauvignon一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Sauvignonグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Sauvignonкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Sauvignonüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Sauvignon um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Palava",
    "key": "palava",
    "category": "wine",
    "prices": {
      "czk": 695,
      "eur": 30.22
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Pálava polosladké",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Pálava semi-sweet",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Pálava halbsüß",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Pálavadolce",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Pálavadoux",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Pálavadulce",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Pálavasłodkie",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Pálava달콤한",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Pálava甜的",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Pálavaセミスイート",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Pálavaнапівсолодке",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Pálava félédes bor",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Pálavadoce",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Palava015",
    "key": "palava015",
    "category": "wine",
    "prices": {
      "czk": 176,
      "eur": 7.65
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Pálava sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Pálava one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Pálava ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Pálava un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Pálava un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Pálava una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Pálava kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Pálava유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Pálava一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Pálavaグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Pálavaкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Pálavaüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Pálava um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Grigio",
    "key": "grigio",
    "category": "wine",
    "prices": {
      "czk": 695,
      "eur": 30.22
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Itálie"
      },
      "en": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Italy"
      },
      "de": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Italy"
      },
      "it": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Italy"
      },
      "fr": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Italie"
      },
      "es": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Italia"
      },
      "pl": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Włochy"
      },
      "kr": {
        "name": "Pinot Grigio",
        "description": "0.75 l / 이탈리아"
      },
      "cn": {
        "name": "Pinot Grigio",
        "description": "0.75 l / 意大利"
      },
      "jp": {
        "name": "Pinot Grigio",
        "description": "0.75 l / イタリア産"
      },
      "ua": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Італія"
      },
      "hu": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Olaszország"
      },
      "pt": {
        "name": "Pinot Grigio",
        "description": "0.75 l / Itália"
      }
    }
  },
  {
    "id": "Grigio015",
    "key": "grigio015",
    "category": "wine",
    "prices": {
      "czk": 176,
      "eur": 7.65
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Pinot Grigio sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Pinot Grigio one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Pinot Grigio ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Pinot Grigio un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Pinot Grigio un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Pinot Grigio una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Pinot Grigio kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Pinot Grigio유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Pinot Grigio一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Pinot Grigioグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Pinot Grigioкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Pinot Grigioüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Pinot Grigio um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Prosecco",
    "key": "prosecco",
    "category": "wine",
    "prices": {
      "czk": 478,
      "eur": 20.78
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Prosecco",
        "description": "0.75 l / Itálie"
      },
      "en": {
        "name": "Prosecco",
        "description": "0.75 l / Italy"
      },
      "de": {
        "name": "Prosecco",
        "description": "0.75 l / Italy"
      },
      "it": {
        "name": "Prosecco",
        "description": "0.75 l / Italy"
      },
      "fr": {
        "name": "Prosecco",
        "description": "0.75 l / Italie"
      },
      "es": {
        "name": "Prosecco",
        "description": "0.75 l / Italia"
      },
      "pl": {
        "name": "Prosecco",
        "description": "0.75 l / Włochy"
      },
      "kr": {
        "name": "Prosecco",
        "description": "0.75 l / 이탈리아"
      },
      "cn": {
        "name": "Prosecco",
        "description": "0.75 l / 意大利"
      },
      "jp": {
        "name": "Prosecco",
        "description": "0.75 l / イタリア産"
      },
      "ua": {
        "name": "Prosecco",
        "description": "0.75 l / Італія"
      },
      "hu": {
        "name": "Prosecco",
        "description": "0.75 l / Olaszország"
      },
      "pt": {
        "name": "Prosecco",
        "description": "0.75 l / Itália"
      }
    }
  },
  {
    "id": "Prosecco015",
    "key": "prosecco015",
    "category": "wine",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Prosecco sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Prosecco one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Prosecco ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Prosecco un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Prosecco un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Prosecco una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Prosecco kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Prosecco유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Prosecco一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Proseccoグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Proseccoкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Proseccoüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Prosecco um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Frankovka",
    "key": "frankovka",
    "category": "wine",
    "prices": {
      "czk": 482,
      "eur": 20.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Frankovka",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Frankovka",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Frankovka",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Frankovka",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Frankovka",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Frankovka",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Frankovka",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Frankovka",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Frankovka",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Frankovka",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Frankovka",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Frankovka",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Frankovka",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Frankovka015",
    "key": "frankovka015",
    "category": "wine",
    "prices": {
      "czk": 118,
      "eur": 5.13
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Frankovka sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Frankovka one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Frankovka ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Frankovka un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Frankovka un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Frankovka una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Frankovka kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Frankovka유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Frankovka一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Frankovkaグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Frankovkaкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Frankovkaüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Frankovka um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Svatovavrinecke",
    "key": "svatovavrinecke",
    "category": "wine",
    "prices": {
      "czk": 482,
      "eur": 20.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Svatovavřinecké",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Svatovavrinecke015",
    "key": "svatovavrinecke015",
    "category": "wine",
    "prices": {
      "czk": 118,
      "eur": 5.13
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Svatovavřinecké sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Svatovavřinecké one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Svatovavřinecké ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Svatovavřinecké un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Svatovavřinecké un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Svatovavřinecké una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Svatovavřinecké kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Svatovavřinecké유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Svatovavřinecké一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Svatovavřineckéグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Svatovavřineckéкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Svatovavřineckéüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Svatovavřinecké um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Cabernet",
    "key": "cabernet",
    "category": "wine",
    "prices": {
      "czk": 482,
      "eur": 20.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Cabernet Sauvignon",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Cabernet015",
    "key": "cabernet015",
    "category": "wine",
    "prices": {
      "czk": 118,
      "eur": 5.13
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Cabernet Sauvignon sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Cabernet Sauvignon one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Cabernet Sauvignon ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Cabernet Sauvignon un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Cabernet Sauvignon un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Cabernet Sauvignon una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Cabernet Sauvignon kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Cabernet Sauvignon유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Cabernet Sauvignon一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Cabernet Sauvignonグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Cabernet Sauvignonкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Cabernet Sauvignonüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Cabernet Sauvignon um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Merlot",
    "key": "merlot",
    "category": "wine",
    "prices": {
      "czk": 482,
      "eur": 20.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Merlot",
        "description": "0.75 l / Česko"
      },
      "en": {
        "name": "Merlot",
        "description": "0.75 l / Czech Rep."
      },
      "de": {
        "name": "Merlot",
        "description": "0.75 l / Czech Rep."
      },
      "it": {
        "name": "Merlot",
        "description": "0.75 l / Czech Rep."
      },
      "fr": {
        "name": "Merlot",
        "description": "0.75 l / Rép. Tchèque"
      },
      "es": {
        "name": "Merlot",
        "description": "0.75 l / Rep. Checa"
      },
      "pl": {
        "name": "Merlot",
        "description": "0.75 l / Czechy"
      },
      "kr": {
        "name": "Merlot",
        "description": "0.75 l / 체코 공화국"
      },
      "cn": {
        "name": "Merlot",
        "description": "0.75 l / 捷克共和国"
      },
      "jp": {
        "name": "Merlot",
        "description": "0.75 l / チェコ産"
      },
      "ua": {
        "name": "Merlot",
        "description": "0.75 l / Чехія"
      },
      "hu": {
        "name": "Merlot",
        "description": "0.75 l / Csehország"
      },
      "pt": {
        "name": "Merlot",
        "description": "0.75 l / Rep. Checa."
      }
    }
  },
  {
    "id": "Merlot015",
    "key": "merlot015",
    "category": "wine",
    "prices": {
      "czk": 118,
      "eur": 5.13
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Merlot sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Merlot one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Merlot ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Merlot un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Merlot un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Merlot una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Merlot kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Merlot유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Merlot一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Merlotグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Merlotкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Merlotüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Merlot um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Chianti",
    "key": "chianti",
    "category": "wine",
    "prices": {
      "czk": 514,
      "eur": 22.35
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Chianti",
        "description": "0.75 l / Itálie"
      },
      "en": {
        "name": "Chianti",
        "description": "0.75 l / Italy"
      },
      "de": {
        "name": "Chianti",
        "description": "0.75 l / Italy"
      },
      "it": {
        "name": "Chianti",
        "description": "0.75 l / Italy"
      },
      "fr": {
        "name": "Chianti",
        "description": "0.75 l / Italie"
      },
      "es": {
        "name": "Chianti",
        "description": "0.75 l / Italia"
      },
      "pl": {
        "name": "Chianti",
        "description": "0.75 l / Włochy"
      },
      "kr": {
        "name": "Chianti",
        "description": "0.75 l / 이탈리아"
      },
      "cn": {
        "name": "Chianti",
        "description": "0.75 l / 意大利"
      },
      "jp": {
        "name": "Chianti",
        "description": "0.75 l / イタリア産"
      },
      "ua": {
        "name": "Chianti",
        "description": "0.75 l / Італія"
      },
      "hu": {
        "name": "Chianti",
        "description": "0.75 l / Olaszország"
      },
      "pt": {
        "name": "Chianti",
        "description": "0.75 l / Itália"
      }
    }
  },
  {
    "id": "Chianti015",
    "key": "chianti015",
    "category": "wine",
    "prices": {
      "czk": 152,
      "eur": 6.61
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Chianti sklenka",
        "description": "0.15 l"
      },
      "en": {
        "name": "Chianti one glass",
        "description": "0.15 l"
      },
      "de": {
        "name": "Chianti ein Glas",
        "description": "0.15 l"
      },
      "it": {
        "name": "Chianti un bicchiere",
        "description": "0.15 l"
      },
      "fr": {
        "name": "Chianti un verre",
        "description": "0.15 l"
      },
      "es": {
        "name": "Chianti una copa",
        "description": "0.15 l"
      },
      "pl": {
        "name": "Chianti kieliszek",
        "description": "0.15 l"
      },
      "kr": {
        "name": "Chianti유리 한 개",
        "description": "0.15 l"
      },
      "cn": {
        "name": "Chianti一个杯子",
        "description": "0.15 l"
      },
      "jp": {
        "name": "Chiantiグラス",
        "description": "0.15 l"
      },
      "ua": {
        "name": "Chiantiкелих",
        "description": "0.15 l"
      },
      "hu": {
        "name": "Chiantiüveg",
        "description": "0.15 l"
      },
      "pt": {
        "name": "Chianti um copo",
        "description": "0.15 l"
      }
    }
  },
  {
    "id": "Almonds",
    "key": "almonds",
    "category": "spirits",
    "prices": {
      "czk": 98,
      "eur": 4.26
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Slané mandle",
        "description": "100 g"
      },
      "en": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "de": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "it": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "fr": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "es": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "pl": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "kr": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "cn": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "jp": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "ua": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "hu": {
        "name": "Salted Almonds",
        "description": "100 g"
      },
      "pt": {
        "name": "Salted Almonds",
        "description": "100 g"
      }
    }
  },
  {
    "id": "Sekt375",
    "key": "sekt375",
    "category": "wine",
    "prices": {
      "czk": 229,
      "eur": 9.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / sec / brut"
      },
      "en": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / demi sec / dry"
      },
      "de": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / halbtrocken / trocken"
      },
      "it": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / secco / brut"
      },
      "fr": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / demi sec / sec"
      },
      "es": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / semi seco / seco"
      },
      "pl": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / półwytrawne / wytrawne"
      },
      "kr": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / demi sec / dry"
      },
      "cn": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / demi sec / dry"
      },
      "jp": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / demi sec / dry"
      },
      "ua": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / demi sec / dry"
      },
      "hu": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / demi sec / dry"
      },
      "pt": {
        "name": "Bohemia Sekt",
        "description": "0.375 l / demi sec / dry"
      }
    }
  },
  {
    "id": "Sekt075",
    "key": "sekt075",
    "category": "wine",
    "prices": {
      "czk": 435,
      "eur": 18.91
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / sec / brut"
      },
      "en": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / demi sec / dry"
      },
      "de": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / halbtrocken / trocken"
      },
      "it": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / secco / brut"
      },
      "fr": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / demi sec / sec"
      },
      "es": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / semi seco / seco"
      },
      "pl": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / półwytrawne / wytrawne"
      },
      "kr": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / demi sec / dry"
      },
      "cn": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / demi sec / dry"
      },
      "jp": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / demi sec / dry"
      },
      "ua": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / demi sec / dry"
      },
      "hu": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / demi sec / dry"
      },
      "pt": {
        "name": "Bohemia Sekt",
        "description": "0.75 l / demi sec / dry"
      }
    }
  },
  {
    "id": "Becherovka",
    "key": "becherovka",
    "category": "spirits",
    "prices": {
      "czk": 99,
      "eur": 4.30
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Becherovka",
        "description": ""
      },
      "en": {
        "name": "Becherovka",
        "description": ""
      },
      "de": {
        "name": "Becherovka",
        "description": ""
      },
      "it": {
        "name": "Becherovka",
        "description": ""
      },
      "fr": {
        "name": "Becherovka",
        "description": ""
      },
      "es": {
        "name": "Becherovka",
        "description": ""
      },
      "pl": {
        "name": "Becherovka",
        "description": ""
      },
      "kr": {
        "name": "Becherovka",
        "description": ""
      },
      "cn": {
        "name": "Becherovka",
        "description": ""
      },
      "jp": {
        "name": "Becherovka",
        "description": ""
      },
      "ua": {
        "name": "Becherovka",
        "description": ""
      },
      "hu": {
        "name": "Becherovka",
        "description": ""
      },
      "pt": {
        "name": "Becherovka",
        "description": ""
      }
    }
  },
  {
    "id": "Rum",
    "key": "rum",
    "category": "spirits",
    "prices": {
      "czk": 90,
      "eur": 3.91
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Tuzemák",
        "description": ""
      },
      "en": {
        "name": "Tuzemák(Czech Rum)",
        "description": ""
      },
      "de": {
        "name": "Tuzemák(Tschechischer Rum)",
        "description": ""
      },
      "it": {
        "name": "Tuzemák(Rum Ceco)",
        "description": ""
      },
      "fr": {
        "name": "Tuzemák(Rhum Tchèque)",
        "description": ""
      },
      "es": {
        "name": "Tuzemák(Ron Checo)",
        "description": ""
      },
      "pl": {
        "name": "Tuzemák(Czeski Rum)",
        "description": ""
      },
      "kr": {
        "name": "Tuzemák(체코 럼)",
        "description": ""
      },
      "cn": {
        "name": "Tuzemák(捷克朗姆酒)",
        "description": ""
      },
      "jp": {
        "name": "Tuzemák(チェコ風ラム)",
        "description": ""
      },
      "ua": {
        "name": "Tuzemák(Czech Rum)",
        "description": ""
      },
      "hu": {
        "name": "Tuzemák(Czech Rum)",
        "description": ""
      },
      "pt": {
        "name": "Tuzemák(Rum Tcheco)",
        "description": ""
      }
    }
  },
  {
    "id": "Limoncello",
    "key": "limoncello",
    "category": "spirits",
    "prices": {
      "czk": 105,
      "eur": 4.57
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Limoncello",
        "description": ""
      },
      "en": {
        "name": "Limoncello",
        "description": ""
      },
      "de": {
        "name": "Limoncello",
        "description": ""
      },
      "it": {
        "name": "Limoncello",
        "description": ""
      },
      "fr": {
        "name": "Limoncello",
        "description": ""
      },
      "es": {
        "name": "Limoncello",
        "description": ""
      },
      "pl": {
        "name": "Limoncello",
        "description": ""
      },
      "kr": {
        "name": "Limoncello",
        "description": ""
      },
      "cn": {
        "name": "Limoncello",
        "description": ""
      },
      "jp": {
        "name": "Limoncello",
        "description": ""
      },
      "ua": {
        "name": "Limoncello",
        "description": ""
      },
      "hu": {
        "name": "Limoncello",
        "description": ""
      },
      "pt": {
        "name": "Limoncello",
        "description": ""
      }
    }
  },
  {
    "id": "Sambuca",
    "key": "sambuca",
    "category": "spirits",
    "prices": {
      "czk": 115,
      "eur": 5.00
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Sambuca",
        "description": ""
      },
      "en": {
        "name": "Sambuca",
        "description": ""
      },
      "de": {
        "name": "Sambuca",
        "description": ""
      },
      "it": {
        "name": "Sambuca",
        "description": ""
      },
      "fr": {
        "name": "Sambuca",
        "description": ""
      },
      "es": {
        "name": "Sambuca",
        "description": ""
      },
      "pl": {
        "name": "Sambuca",
        "description": ""
      },
      "kr": {
        "name": "Sambuca",
        "description": ""
      },
      "cn": {
        "name": "Sambuca",
        "description": ""
      },
      "jp": {
        "name": "Sambuca",
        "description": ""
      },
      "ua": {
        "name": "Sambuca",
        "description": ""
      },
      "hu": {
        "name": "Sambuca",
        "description": ""
      },
      "pt": {
        "name": "Sambuca",
        "description": ""
      }
    }
  },
  {
    "id": "Baileys",
    "key": "baileys",
    "category": "spirits",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Baileys",
        "description": ""
      },
      "en": {
        "name": "Baileys",
        "description": ""
      },
      "de": {
        "name": "Baileys",
        "description": ""
      },
      "it": {
        "name": "Baileys",
        "description": ""
      },
      "fr": {
        "name": "Baileys",
        "description": ""
      },
      "es": {
        "name": "Baileys",
        "description": ""
      },
      "pl": {
        "name": "Baileys",
        "description": ""
      },
      "kr": {
        "name": "Baileys",
        "description": ""
      },
      "cn": {
        "name": "Baileys",
        "description": ""
      },
      "jp": {
        "name": "Baileys",
        "description": ""
      },
      "ua": {
        "name": "Baileys",
        "description": ""
      },
      "hu": {
        "name": "Baileys",
        "description": ""
      },
      "pt": {
        "name": "Baileys",
        "description": ""
      }
    }
  },
  {
    "id": "Jagermeister",
    "key": "jagermeister",
    "category": "spirits",
    "prices": {
      "czk": 119,
      "eur": 5.17
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Jägermeister",
        "description": ""
      },
      "en": {
        "name": "Jägermeister",
        "description": ""
      },
      "de": {
        "name": "Jägermeister",
        "description": ""
      },
      "it": {
        "name": "Jägermeister",
        "description": ""
      },
      "fr": {
        "name": "Jägermeister",
        "description": ""
      },
      "es": {
        "name": "Jägermeister",
        "description": ""
      },
      "pl": {
        "name": "Jägermeister",
        "description": ""
      },
      "kr": {
        "name": "Jägermeister",
        "description": ""
      },
      "cn": {
        "name": "Jägermeister",
        "description": ""
      },
      "jp": {
        "name": "Jägermeister",
        "description": ""
      },
      "ua": {
        "name": "Jägermeister",
        "description": ""
      },
      "hu": {
        "name": "Jägermeister",
        "description": ""
      },
      "pt": {
        "name": "Jägermeister",
        "description": ""
      }
    }
  },
  {
    "id": "Gin",
    "key": "gin",
    "category": "spirits",
    "prices": {
      "czk": 109,
      "eur": 4.74
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Gin",
        "description": ""
      },
      "en": {
        "name": "Gin",
        "description": ""
      },
      "de": {
        "name": "Gin",
        "description": ""
      },
      "it": {
        "name": "Gin",
        "description": ""
      },
      "fr": {
        "name": "Gin",
        "description": ""
      },
      "es": {
        "name": "Ginebra",
        "description": ""
      },
      "pl": {
        "name": "Gin",
        "description": ""
      },
      "kr": {
        "name": "Gin",
        "description": ""
      },
      "cn": {
        "name": "Gin",
        "description": ""
      },
      "jp": {
        "name": "Gin",
        "description": ""
      },
      "ua": {
        "name": "Gin",
        "description": ""
      },
      "hu": {
        "name": "Gin",
        "description": ""
      },
      "pt": {
        "name": "Gin",
        "description": ""
      }
    }
  },
  {
    "id": "Grappa",
    "key": "grappa",
    "category": "spirits",
    "prices": {
      "czk": 119,
      "eur": 5.17
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Grappa",
        "description": ""
      },
      "en": {
        "name": "Grappa",
        "description": ""
      },
      "de": {
        "name": "Grappa",
        "description": ""
      },
      "it": {
        "name": "Grappa",
        "description": ""
      },
      "fr": {
        "name": "Grappa",
        "description": ""
      },
      "es": {
        "name": "Grappa",
        "description": ""
      },
      "pl": {
        "name": "Grappa",
        "description": ""
      },
      "kr": {
        "name": "Grappa",
        "description": ""
      },
      "cn": {
        "name": "Grappa",
        "description": ""
      },
      "jp": {
        "name": "Grappa",
        "description": ""
      },
      "ua": {
        "name": "Grappa",
        "description": ""
      },
      "hu": {
        "name": "Grappa",
        "description": ""
      },
      "pt": {
        "name": "Grappa",
        "description": ""
      }
    }
  },
  {
    "id": "Tequila",
    "key": "tequila",
    "category": "spirits",
    "prices": {
      "czk": 131,
      "eur": 5.70
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Tequila",
        "description": ""
      },
      "en": {
        "name": "Tequila",
        "description": ""
      },
      "de": {
        "name": "Tequila",
        "description": ""
      },
      "it": {
        "name": "Tequila",
        "description": ""
      },
      "fr": {
        "name": "Tequila",
        "description": ""
      },
      "es": {
        "name": "Tequila",
        "description": ""
      },
      "pl": {
        "name": "Tequila",
        "description": ""
      },
      "kr": {
        "name": "Tequila",
        "description": ""
      },
      "cn": {
        "name": "Tequila",
        "description": ""
      },
      "jp": {
        "name": "Tequila",
        "description": ""
      },
      "ua": {
        "name": "Tequila",
        "description": ""
      },
      "hu": {
        "name": "Tequila",
        "description": ""
      },
      "pt": {
        "name": "Tequila",
        "description": ""
      }
    }
  },
  {
    "id": "Slivovice",
    "key": "slivovice",
    "category": "spirits",
    "prices": {
      "czk": 119,
      "eur": 5.17
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Slivovice",
        "description": ""
      },
      "en": {
        "name": "Slivovice(Plum Brandy)",
        "description": ""
      },
      "de": {
        "name": "Slivovice(Pflaumenbrand)",
        "description": ""
      },
      "it": {
        "name": "Slivovice(Acquavite di Prugne)",
        "description": ""
      },
      "fr": {
        "name": "Slivovice(Eau-de-vie de Prune)",
        "description": ""
      },
      "es": {
        "name": "Slivovice(Aguardiente de Ciruela)",
        "description": ""
      },
      "pl": {
        "name": "Slivovice(Wódka Śliwowa)",
        "description": ""
      },
      "kr": {
        "name": "Slivovice(자두 브랜디)",
        "description": ""
      },
      "cn": {
        "name": "Slivovice(梅子白兰地)",
        "description": ""
      },
      "jp": {
        "name": "Slivovice(プラムブランデー)",
        "description": ""
      },
      "ua": {
        "name": "Slivovice(Plum Brandy)",
        "description": ""
      },
      "hu": {
        "name": "Slivovice(Plum Brandy)",
        "description": ""
      },
      "pt": {
        "name": "Slivovice(Conhaque de ameixa)",
        "description": ""
      }
    }
  },
  {
    "id": "Vodka",
    "key": "vodka",
    "category": "spirits",
    "prices": {
      "czk": 119,
      "eur": 5.17
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Vodka",
        "description": ""
      },
      "en": {
        "name": "Vodka",
        "description": ""
      },
      "de": {
        "name": "Vodka",
        "description": ""
      },
      "it": {
        "name": "Vodka",
        "description": ""
      },
      "fr": {
        "name": "Vodka",
        "description": ""
      },
      "es": {
        "name": "Vodka",
        "description": ""
      },
      "pl": {
        "name": "Vodka",
        "description": ""
      },
      "kr": {
        "name": "Vodka",
        "description": ""
      },
      "cn": {
        "name": "Vodka",
        "description": ""
      },
      "jp": {
        "name": "Vodka",
        "description": ""
      },
      "ua": {
        "name": "Vodka",
        "description": ""
      },
      "hu": {
        "name": "Vodka",
        "description": ""
      },
      "pt": {
        "name": "Vodka",
        "description": ""
      }
    }
  },
  {
    "id": "Absinth",
    "key": "absinth",
    "category": "spirits",
    "prices": {
      "czk": 166,
      "eur": 7.22
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Absinth",
        "description": "70 %"
      },
      "en": {
        "name": "Absinth",
        "description": "70 %"
      },
      "de": {
        "name": "Absinth",
        "description": "70 %"
      },
      "it": {
        "name": "Absinth",
        "description": "70 %"
      },
      "fr": {
        "name": "Absinthe",
        "description": "70 %"
      },
      "es": {
        "name": "Absinth",
        "description": "70 %"
      },
      "pl": {
        "name": "Absinth",
        "description": "70 %"
      },
      "kr": {
        "name": "Absinth",
        "description": "70 %"
      },
      "cn": {
        "name": "Absinth",
        "description": "70 %"
      },
      "jp": {
        "name": "Absinth",
        "description": "70 %"
      },
      "ua": {
        "name": "Absinth",
        "description": "70 %"
      },
      "hu": {
        "name": "Absinth",
        "description": "70 %"
      },
      "pt": {
        "name": "Absinth",
        "description": "70 %"
      }
    }
  },
  {
    "id": "Whisky",
    "key": "whisky",
    "category": "spirits",
    "prices": {
      "czk": 127,
      "eur": 5.52
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Whisky",
        "description": ""
      },
      "en": {
        "name": "Whisky",
        "description": ""
      },
      "de": {
        "name": "Whisky",
        "description": ""
      },
      "it": {
        "name": "Whisky",
        "description": ""
      },
      "fr": {
        "name": "Whisky",
        "description": ""
      },
      "es": {
        "name": "Whisky",
        "description": ""
      },
      "pl": {
        "name": "Whisky",
        "description": ""
      },
      "kr": {
        "name": "Whisky",
        "description": ""
      },
      "cn": {
        "name": "Whisky",
        "description": ""
      },
      "jp": {
        "name": "Whisky",
        "description": ""
      },
      "ua": {
        "name": "Whisky",
        "description": ""
      },
      "hu": {
        "name": "Whisky",
        "description": ""
      },
      "pt": {
        "name": "Whisky",
        "description": ""
      }
    }
  },
  {
    "id": "Single-Malt",
    "key": "single-malt",
    "category": "spirits",
    "prices": {
      "czk": 265,
      "eur": 11.52
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "en": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "de": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "it": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "fr": {
        "name": "Whisky Single Malt",
        "description": ""
      },
      "es": {
        "name": "Whisky Single Malt",
        "description": ""
      },
      "pl": {
        "name": "Whisky Single Malt",
        "description": ""
      },
      "kr": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "cn": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "jp": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "ua": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "hu": {
        "name": "Single Malt Whisky",
        "description": ""
      },
      "pt": {
        "name": "Single Malt Whisky",
        "description": ""
      }
    }
  },
  {
    "id": "Hildprandt",
    "key": "hildprandt",
    "category": "spirits",
    "prices": {
      "czk": 139,
      "eur": 6.04
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "en": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "de": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "it": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "fr": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "es": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "pl": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "kr": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "cn": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "jp": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "ua": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "hu": {
        "name": "Baron Hildprandt",
        "description": ""
      },
      "pt": {
        "name": "Baron Hildprandt",
        "description": ""
      }
    }
  },
  {
    "id": "Jack",
    "key": "jack",
    "category": "spirits",
    "prices": {
      "czk": 139,
      "eur": 6.04
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "en": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "de": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "it": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "fr": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "es": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "pl": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "kr": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "cn": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "jp": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "ua": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "hu": {
        "name": "Jack Daniel's",
        "description": ""
      },
      "pt": {
        "name": "Jack Daniel's",
        "description": ""
      }
    }
  },
  {
    "id": "COGNAC",
    "key": "cognac",
    "category": "spirits",
    "prices": {
      "czk": 275,
      "eur": 11.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "en": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "de": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "it": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "fr": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "es": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "pl": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "kr": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "cn": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "jp": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "ua": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "hu": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      },
      "pt": {
        "name": "COGNAC V.S.O.P.",
        "description": ""
      }
    }
  },
    {
        "id": "Tonic-Original",
        "key": "tonic-original",
        "category": "soft-drinks",
        "prices": {
            "czk": 89,
            "eur": 3.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Tonic Original",
                "description": "0.25 l / klasický"
            },
            "en": {
                "name": "Original Tonic",
                "description": "0.25 l / classic"
            },
            "de": {
                "name": "Original Tonic",
                "description": "0.25 l / klassisch"
            },
            "it": {
                "name": "Tonic Originale",
                "description": "0.25 l / classico"
            },
            "fr": {
                "name": "Tonic Original",
                "description": "0.25 l / classique"
            },
            "es": {
                "name": "Tónica Original",
                "description": "0.25 l / clásica"
            },
            "pl": {
                "name": "Tonic Original",
                "description": "0.25 l / klasyczny"
            },
            "kr": {
                "name": "오리지널 토닉워터 (Original Tonic)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "原味汤力水 (Original Tonic)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "トニックウォーター（オリジナル）",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Тонік класичний (Original Tonic)",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Eredeti Tonic",
                "description": "0.25 l / klasszikus"
            },
            "pt": {
                "name": "Água Tónica Original",
                "description": "0.25 l / clássica"
            }
        }
    },
  {
        "id": "Tonic-Ginger",
        "key": "tonic-ginger",
        "category": "soft-drinks",
        "prices": {
            "czk": 89,
            "eur": 3.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Zázvorový Tonic",
                "description": "0.25 l / ginger tonic"
            },
            "en": {
                "name": "Ginger Tonic",
                "description": "0.25 l"
            },
            "de": {
                "name": "Ingwer Tonic",
                "description": "0.25 l"
            },
            "it": {
                "name": "Tonic allo zenzero",
                "description": "0.25 l"
            },
            "fr": {
                "name": "Tonic au gingembre",
                "description": "0.25 l"
            },
            "es": {
                "name": "Tónica de jengibre",
                "description": "0.25 l"
            },
            "pl": {
                "name": "Tonic imbirowy",
                "description": "0.25 l"
            },
            "kr": {
                "name": "진저 토닉워터 (Ginger Tonic)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "姜汁汤力水 (Ginger Tonic)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "ジンジャートニック",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Імбирний тонік (Ginger Tonic)",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Gyömbéres Tonic",
                "description": "0.25 l"
            },
            "pt": {
                "name": "Água Tónica de Gengibre",
                "description": "0.25 l"
            }
        }
    },
    {
        "id": "Juice-Orange",
        "key": "juice-orange",
        "category": "soft-drinks",
        "prices": {
            "czk": 91,
            "eur": 3.96
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Pomerančový džus",
                "description": "0.25 l"
            },
            "en": {
                "name": "Orange Juice",
                "description": "0.25 l"
            },
            "de": {
                "name": "Orangensaft",
                "description": "0.25 l"
            },
            "it": {
                "name": "Succo d'arancia",
                "description": "0.25 l"
            },
            "fr": {
                "name": "Jus d'orange",
                "description": "0.25 l"
            },
            "es": {
                "name": "Zumo de naranja",
                "description": "0.25 l"
            },
            "pl": {
                "name": "Sok pomarańczowy",
                "description": "0.25 l"
            },
            "kr": {
                "name": "오렌지 주스 (Orange Juice)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "橙汁 (Orange Juice)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "オレンジジュース",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Апельсиновий сік",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Narancslé",
                "description": "0.25 l"
            },
            "pt": {
                "name": "Sumo de laranja",
                "description": "0.25 l"
            }
        }
    },
  {
        "id": "Juice-Apple",
        "key": "juice-apple",
        "category": "soft-drinks",
        "prices": {
            "czk": 91,
            "eur": 3.96
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Jablečný džus",
                "description": "0.25 l"
            },
            "en": {
                "name": "Apple Juice",
                "description": "0.25 l"
            },
            "de": {
                "name": "Apfelsaft",
                "description": "0.25 l"
            },
            "it": {
                "name": "Succo di mela",
                "description": "0.25 l"
            },
            "fr": {
                "name": "Jus de pomme",
                "description": "0.25 l"
            },
            "es": {
                "name": "Zumo de manzana",
                "description": "0.25 l"
            },
            "pl": {
                "name": "Sok jabłkowy",
                "description": "0.25 l"
            },
            "kr": {
                "name": "사과 주스 (Apple Juice)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "苹果汁 (Apple Juice)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "アップルジュース",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Яблучний сік",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Almalé",
                "description": "0.25 l"
            },
            "pt": {
                "name": "Sumo de maçã",
                "description": "0.25 l"
            }
        }
    },
  {
        "id": "Juice-Pear",
        "key": "juice-pear",
        "category": "soft-drinks",
        "prices": {
            "czk": 91,
            "eur": 3.96
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Hruškový džus",
                "description": "0.25 l"
            },
            "en": {
                "name": "Pear Juice",
                "description": "0.25 l"
            },
            "de": {
                "name": "Birnensaft",
                "description": "0.25 l"
            },
            "it": {
                "name": "Succo di pera",
                "description": "0.25 l"
            },
            "fr": {
                "name": "Jus de poire",
                "description": "0.25 l"
            },
            "es": {
                "name": "Zumo de pera",
                "description": "0.25 l"
            },
            "pl": {
                "name": "Sok gruszkowy",
                "description": "0.25 l"
            },
            "kr": {
                "name": "배 주스 (Pear Juice)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "梨汁 (Pear Juice)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "洋梨ジュース",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Грушевий сік",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Körtelé",
                "description": "0.25 l"
            },
            "pt": {
                "name": "Sumo de pêra",
                "description": "0.25 l"
            }
        }
    },
  {
        "id": "Juice-Cactus",
        "key": "juice-cactus",
        "category": "soft-drinks",
        "prices": {
            "czk": 91,
            "eur": 3.96
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Kaktusový džus",
                "description": "0.25 l"
            },
            "en": {
                "name": "Cactus Juice",
                "description": "0.25 l"
            },
            "de": {
                "name": "Kaktussaft",
                "description": "0.25 l"
            },
            "it": {
                "name": "Succo di cactus",
                "description": "0.25 l"
            },
            "fr": {
                "name": "Jus de cactus",
                "description": "0.25 l"
            },
            "es": {
                "name": "Zumo de cactus",
                "description": "0.25 l"
            },
            "pl": {
                "name": "Sok kaktusowy",
                "description": "0.25 l"
            },
            "kr": {
                "name": "선인장 주스 (Cactus Juice)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "仙人掌果汁 (Cactus Juice)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "カクタスジュース",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Кактусовий сік",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Kaktuszlé",
                "description": "0.25 l"
            },
            "pt": {
                "name": "Sumo de cacto",
                "description": "0.25 l"
            }
        }
    },
  {
        "id": "Juice-Melon",
        "key": "juice-melon",
        "category": "soft-drinks",
        "prices": {
            "czk": 91,
            "eur": 3.96
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Melounový džus",
                "description": "0.25 l"
            },
            "en": {
                "name": "Watermelon Juice",
                "description": "0.25 l"
            },
            "de": {
                "name": "Wassermelonensaft",
                "description": "0.25 l"
            },
            "it": {
                "name": "Succo di anguria",
                "description": "0.25 l"
            },
            "fr": {
                "name": "Jus de pastèque",
                "description": "0.25 l"
            },
            "es": {
                "name": "Zumo de sandía",
                "description": "0.25 l"
            },
            "pl": {
                "name": "Sok arbuzowy",
                "description": "0.25 l"
            },
            "kr": {
                "name": "수박 주스 (Watermelon Juice)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "西瓜汁 (Watermelon Juice)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "スイカジュース",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Кавуновий сік",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Görögdinnyelé",
                "description": "0.25 l"
            },
            "pt": {
                "name": "Sumo de melancia",
                "description": "0.25 l"
            }
        }
    },
  {
        "id": "Juice-Lychee",
        "key": "juice-lychee",
        "category": "soft-drinks",
        "prices": {
            "czk": 91,
            "eur": 3.96
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Liči džus",
                "description": "0.25 l"
            },
            "en": {
                "name": "Lychee Juice",
                "description": "0.25 l"
            },
            "de": {
                "name": "Litschisaft",
                "description": "0.25 l"
            },
            "it": {
                "name": "Succo di litchi",
                "description": "0.25 l"
            },
            "fr": {
                "name": "Jus de litchi",
                "description": "0.25 l"
            },
            "es": {
                "name": "Zumo de lichi",
                "description": "0.25 l"
            },
            "pl": {
                "name": "Sok z liczi",
                "description": "0.25 l"
            },
            "kr": {
                "name": "리치 주스 (Lychee Juice)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "荔枝汁 (Lychee Juice)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "ライチジュース",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Сік лічі",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Licsilé",
                "description": "0.25 l"
            },
            "pt": {
                "name": "Sumo de líchia",
                "description": "0.25 l"
            }
        }
    },
  {
        "id": "Juice-Multivitamin",
        "key": "juice-multivitamin",
        "category": "soft-drinks",
        "prices": {
            "czk": 91,
            "eur": 3.96
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Multivitamínový džus",
                "description": "0.25 l"
            },
            "en": {
                "name": "Multivitamin Juice",
                "description": "0.25 l"
            },
            "de": {
                "name": "Multivitaminsaft",
                "description": "0.25 l"
            },
            "it": {
                "name": "Succo multivitaminico",
                "description": "0.25 l"
            },
            "fr": {
                "name": "Jus multivitaminé",
                "description": "0.25 l"
            },
            "es": {
                "name": "Zumo multivitamínico",
                "description": "0.25 l"
            },
            "pl": {
                "name": "Sok multiwitamina",
                "description": "0.25 l"
            },
            "kr": {
                "name": "멀티비타민 주스 (Multivitamin Juice)",
                "description": "0.25 l"
            },
            "cn": {
                "name": "复合维生素果汁 (Multivitamin Juice)",
                "description": "0.25 l"
            },
            "jp": {
                "name": "マルチビタミンジュース",
                "description": "0.25 l"
            },
            "ua": {
                "name": "Мультивітамінний сік",
                "description": "0.25 l"
            },
            "hu": {
                "name": "Multivitamin gyümölcslé",
                "description": "0.25 l"
            },
            "pt": {
                "name": "Sumo multivitamínico",
                "description": "0.25 l"
            }
        }
    },
    {
        "id": "Coca-Cola",
        "key": "coca-cola",
        "category": "soft-drinks",
        "prices": {
            "czk": 112,
            "eur": 4.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            },
            "en": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            },
            "de": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            },
            "it": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            },
            "fr": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            },
            "es": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            },
            "pl": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            },
            "kr": {
                "name": "코카콜라 (Coca-Cola)",
                "description": "0.5 l"
            },
            "cn": {
                "name": "可口可乐 (Coca-Cola)",
                "description": "0.5 l"
            },
            "jp": {
                "name": "コカ・コーラ (Coca-Cola)",
                "description": "0.5 l"
            },
            "ua": {
                "name": "Кока-Кола (Coca-Cola)",
                "description": "0.5 l"
            },
            "hu": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            },
            "pt": {
                "name": "Coca-Cola",
                "description": "0.5 l"
            }
        }
    },
  {
        "id": "Fanta",
        "key": "fanta",
        "category": "soft-drinks",
        "prices": {
            "czk": 112,
            "eur": 4.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Fanta",
                "description": "0.5 l / pomeranč"
            },
            "en": {
                "name": "Fanta",
                "description": "0.5 l / orange"
            },
            "de": {
                "name": "Fanta",
                "description": "0.5 l / Orange"
            },
            "it": {
                "name": "Fanta",
                "description": "0.5 l / arancia"
            },
            "fr": {
                "name": "Fanta",
                "description": "0.5 l / orange"
            },
            "es": {
                "name": "Fanta",
                "description": "0.5 l / naranja"
            },
            "pl": {
                "name": "Fanta",
                "description": "0.5 l / pomarańczowa"
            },
            "kr": {
                "name": "환타 (Fanta)",
                "description": "0.5 l / 오렌지"
            },
            "cn": {
                "name": "芬达 (Fanta)",
                "description": "0.5 l / 橙味"
            },
            "jp": {
                "name": "ファンタ (Fanta)",
                "description": "0.5 l / オレンジ"
            },
            "ua": {
                "name": "Фанта (Fanta)",
                "description": "0.5 l / апельсин"
            },
            "hu": {
                "name": "Fanta",
                "description": "0.5 l / narancs"
            },
            "pt": {
                "name": "Fanta",
                "description": "0.5 l / laranja"
            }
        }
    },
  {
        "id": "Sprite",
        "key": "sprite",
        "category": "soft-drinks",
        "prices": {
            "czk": 112,
            "eur": 4.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Sprite",
                "description": "0.5 l / citron a limetka"
            },
            "en": {
                "name": "Sprite",
                "description": "0.5 l / lemon & lime"
            },
            "de": {
                "name": "Sprite",
                "description": "0.5 l / Zitrone & Limette"
            },
            "it": {
                "name": "Sprite",
                "description": "0.5 l / limone e lime"
            },
            "fr": {
                "name": "Sprite",
                "description": "0.5 l / citron et lime"
            },
            "es": {
                "name": "Sprite",
                "description": "0.5 l / limón y lima"
            },
            "pl": {
                "name": "Sprite",
                "description": "0.5 l / cytryna i limonka"
            },
            "kr": {
                "name": "스프라이트 (Sprite)",
                "description": "0.5 l / 레몬 라임"
            },
            "cn": {
                "name": "雪碧 (Sprite)",
                "description": "0.5 l / 柠檬青柠"
            },
            "jp": {
                "name": "スプライト (Sprite)",
                "description": "0.5 l / レモン＆ライム"
            },
            "ua": {
                "name": "Спрайт (Sprite)",
                "description": "0.5 l / лимон та лайм"
            },
            "hu": {
                "name": "Sprite",
                "description": "0.5 l / citrom és lime"
            },
            "pt": {
                "name": "Sprite",
                "description": "0.5 l / limão e lima"
            }
        }
    },
  {
        "id": "IceTea-Peach",
        "key": "icetea-peach",
        "category": "soft-drinks",
        "prices": {
            "czk": 112,
            "eur": 4.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Ledový čaj broskev",
                "description": "0.5 l"
            },
            "en": {
                "name": "Peach Ice Tea",
                "description": "0.5 l"
            },
            "de": {
                "name": "Eistee Pfirsich",
                "description": "0.5 l"
            },
            "it": {
                "name": "Tè freddo alla pesca",
                "description": "0.5 l"
            },
            "fr": {
                "name": "Thé glacé pêche",
                "description": "0.5 l"
            },
            "es": {
                "name": "Té helado de melocotón",
                "description": "0.5 l"
            },
            "pl": {
                "name": "Herbata mrożona brzoskwinia",
                "description": "0.5 l"
            },
            "kr": {
                "name": "복숭아 아이스티 (Peach Ice Tea)",
                "description": "0.5 l"
            },
            "cn": {
                "name": "桃味冰红茶 (Peach Ice Tea)",
                "description": "0.5 l"
            },
            "jp": {
                "name": "アイスティー（ピーチ）",
                "description": "0.5 l"
            },
            "ua": {
                "name": "Холодний чай персик",
                "description": "0.5 l"
            },
            "hu": {
                "name": "Őszibarackos jegestea",
                "description": "0.5 l"
            },
            "pt": {
                "name": "Chá gelado de pêssego",
                "description": "0.5 l"
            }
        }
    },
  {
        "id": "IceTea-Lemon",
        "key": "icetea-lemon",
        "category": "soft-drinks",
        "prices": {
            "czk": 112,
            "eur": 4.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Ledový čaj citron",
                "description": "0.5 l"
            },
            "en": {
                "name": "Lemon Ice Tea",
                "description": "0.5 l"
            },
            "de": {
                "name": "Eistee Zitrone",
                "description": "0.5 l"
            },
            "it": {
                "name": "Tè freddo al limone",
                "description": "0.5 l"
            },
            "fr": {
                "name": "Thé glacé citron",
                "description": "0.5 l"
            },
            "es": {
                "name": "Té helado de limón",
                "description": "0.5 l"
            },
            "pl": {
                "name": "Herbata mrożona cytryna",
                "description": "0.5 l"
            },
            "kr": {
                "name": "레몬 아이스티 (Lemon Ice Tea)",
                "description": "0.5 l"
            },
            "cn": {
                "name": "柠檬冰红茶 (Lemon Ice Tea)",
                "description": "0.5 l"
            },
            "jp": {
                "name": "アイスティー（レモン）",
                "description": "0.5 l"
            },
            "ua": {
                "name": "Холодний чай лимон",
                "description": "0.5 l"
            },
            "hu": {
                "name": "Citromos jegestea",
                "description": "0.5 l"
            },
            "pt": {
                "name": "Chá gelado de limão",
                "description": "0.5 l"
            }
        }
    },
    {
        "id": "Water-Still",
        "key": "water-still",
        "category": "soft-drinks",
        "prices": {
            "czk": 89,
            "eur": 3.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Láhvová voda neperlivá",
                "description": "0.5 l"
            },
            "en": {
                "name": "Still Bottled Water",
                "description": "0.5 l"
            },
            "de": {
                "name": "Stilles Wasser",
                "description": "0.5 l"
            },
            "it": {
                "name": "Acqua naturale in bottiglia",
                "description": "0.5 l"
            },
            "fr": {
                "name": "Eau plate en bouteille",
                "description": "0.5 l"
            },
            "es": {
                "name": "Agua mineral sin gas",
                "description": "0.5 l"
            },
            "pl": {
                "name": "Woda butelkowana niegazowana",
                "description": "0.5 l"
            },
            "kr": {
                "name": "생수 (스틸 워터)",
                "description": "0.5 l"
            },
            "cn": {
                "name": "瓶装纯净水 (不含气)",
                "description": "0.5 l"
            },
            "jp": {
                "name": "ミネラルウォーター（ノンガス）",
                "description": "0.5 l"
            },
            "ua": {
                "name": "Негазована пляшкова вода",
                "description": "0.5 l"
            },
            "hu": {
                "name": "Szénsavmentes palackozott víz",
                "description": "0.5 l"
            },
            "pt": {
                "name": "Água mineral sem gás",
                "description": "0.5 l"
            }
        }
    },
  {
        "id": "Water-Sparkling",
        "key": "water-sparkling",
        "category": "soft-drinks",
        "prices": {
            "czk": 89,
            "eur": 3.87
        },
        "image": "",
        "translations": {
            "cs": {
                "name": "Láhvová voda perlivá",
                "description": "0.5 l"
            },
            "en": {
                "name": "Sparkling Bottled Water",
                "description": "0.5 l"
            },
            "de": {
                "name": "Sprudelwasser",
                "description": "0.5 l"
            },
            "it": {
                "name": "Acqua frizzante in bottiglia",
                "description": "0.5 l"
            },
            "fr": {
                "name": "Eau gazeuse en bouteille",
                "description": "0.5 l"
            },
            "es": {
                "name": "Agua mineral con gas",
                "description": "0.5 l"
            },
            "pl": {
                "name": "Woda butelkowana gazowana",
                "description": "0.5 l"
            },
            "kr": {
                "name": "탄산수 (스파클링 워터)",
                "description": "0.5 l"
            },
            "cn": {
                "name": "瓶装气泡水 (含气)",
                "description": "0.5 l"
            },
            "jp": {
                "name": "ミネラルウォーター（炭酸入り）",
                "description": "0.5 l"
            },
            "ua": {
                "name": "Газована пляшкова вода",
                "description": "0.5 l"
            },
            "hu": {
                "name": "Szénsavas palackozott víz",
                "description": "0.5 l"
            },
            "pt": {
                "name": "Água mineral com gás",
                "description": "0.5 l"
            }
        }
    },
  {
    "id": "Mineral075",
    "key": "mineral075",
    "category": "soft-drinks",
    "prices": {
      "czk": 169,
      "eur": 7.35
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Minerální voda",
        "description": "0.75 l"
      },
      "en": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "de": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "it": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "fr": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "es": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "pl": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "kr": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "cn": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "jp": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "ua": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "hu": {
        "name": "Mineral Water",
        "description": "0.75 l"
      },
      "pt": {
        "name": "Mineral Water",
        "description": "0.75 l"
      }
    }
  },
  {
    "id": "Tap",
    "key": "tap",
    "category": "soft-drinks",
    "prices": {
      "czk": 85,
      "eur": 3.70
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Voda z kohoutku",
        "description": "1 l"
      },
      "en": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "de": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "it": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "fr": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "es": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "pl": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "kr": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "cn": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "jp": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "ua": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "hu": {
        "name": "Tap Water",
        "description": "1 l"
      },
      "pt": {
        "name": "Tap Water",
        "description": "1 l"
      }
    }
  },
  {
    "id": "Kozel-Light030",
    "key": "kozel-light030",
    "category": "beer",
    "prices": {
      "czk": 75,
      "eur": 3.26
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Velkopopovický Kozel Světlé Pivo",
        "description": "0.3 l"
      },
      "en": {
        "name": "Velkopopovický Kozel Light Beer",
        "description": "0.3 l"
      },
      "de": {
        "name": "Velkopopovický Kozel Helles Bier",
        "description": "0.3 l"
      },
      "it": {
        "name": "Velkopopovický Kozel Light Beer",
        "description": "0.3 l"
      },
      "fr": {
        "name": "Velkopopovický Kozel Bière Blonde",
        "description": "0.3 l"
      },
      "es": {
        "name": "Velkopopovický Kozel Cerveza Clara",
        "description": "0.3 l"
      },
      "pl": {
        "name": "Velkopopovický Kozel Piwo Jasne",
        "description": "0.3 l"
      },
      "kr": {
        "name": "Velkopopovický Kozel라이트 맥주",
        "description": "0.3 l"
      },
      "cn": {
        "name": "Velkopopovický Kozel淡啤酒",
        "description": "0.3 l"
      },
      "jp": {
        "name": "Velkopopovický Kozelライトビール",
        "description": "0.3 l"
      },
      "ua": {
        "name": "Velkopopovický KozelСвітле Пиво",
        "description": "0.3 l"
      },
      "hu": {
        "name": "Velkopopovický Kozel Világos Sör",
        "description": "0.3 l"
      },
      "pt": {
        "name": "Velkopopovický Kozel Cerveja light",
        "description": "0.3 l"
      }
    }
  },
  {
    "id": "Kozel-Dark030",
    "key": "kozel-dark030",
    "category": "beer",
    "prices": {
      "czk": 75,
      "eur": 3.26
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Velkopopovický Kozel Tmavé Pivo",
        "description": "0.3 l"
      },
      "en": {
        "name": "Velkopopovický Kozel Dark Beer",
        "description": "0.3 l"
      },
      "de": {
        "name": "Velkopopovický Kozel Dunkles Bier",
        "description": "0.3 l"
      },
      "it": {
        "name": "Velkopopovický Kozel Dark Beer",
        "description": "0.3 l"
      },
      "fr": {
        "name": "Velkopopovický Kozel Bière Brune",
        "description": "0.3 l"
      },
      "es": {
        "name": "Velkopopovický Kozel Cerveza Oscura",
        "description": "0.3 l"
      },
      "pl": {
        "name": "Velkopopovický Kozel Piwo Ciemne",
        "description": "0.3 l"
      },
      "kr": {
        "name": "Velkopopovický Kozel흑맥주",
        "description": "0.3 l"
      },
      "cn": {
        "name": "Velkopopovický Kozel黑啤酒",
        "description": "0.3 l"
      },
      "jp": {
        "name": "Velkopopovický Kozel黒ビール",
        "description": "0.3 l"
      },
      "ua": {
        "name": "Velkopopovický KozelТемне Пиво",
        "description": "0.3 l"
      },
      "hu": {
        "name": "Velkopopovický Kozel Barna Sör",
        "description": "0.3 l"
      },
      "pt": {
        "name": "Velkopopovický Kozel Cerveja escura",
        "description": "0.3 l"
      }
    }
  },
  {
    "id": "Free-Beer030",
    "key": "free-beer030",
    "category": "beer",
    "prices": {
      "czk": 75,
      "eur": 3.26
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Nealkoholické Pivo",
        "description": "0.3 l"
      },
      "en": {
        "name": "Alcohol-Free Beer",
        "description": "0.3 l"
      },
      "de": {
        "name": "Alkoholfreies Bier",
        "description": "0.3 l"
      },
      "it": {
        "name": "Birra Analcolica",
        "description": "0.3 l"
      },
      "fr": {
        "name": "Bière sans alcool",
        "description": "0.3 l"
      },
      "es": {
        "name": "Cerveza Sin Alcohol",
        "description": "0.3 l"
      },
      "pl": {
        "name": "Piwo Bezalkoholowe",
        "description": "0.3 l"
      },
      "kr": {
        "name": "Alcohol-Free Beer",
        "description": "0.3 l"
      },
      "cn": {
        "name": "Alcohol-Free Beer",
        "description": "0.3 l"
      },
      "jp": {
        "name": "Alcohol-Free Beer",
        "description": "0.3 l"
      },
      "ua": {
        "name": "Alcohol-Free Beer",
        "description": "0.3 l"
      },
      "hu": {
        "name": "Alcohol-Free Beer",
        "description": "0.3 l"
      },
      "pt": {
        "name": "Alcohol-Free Beer",
        "description": "0.3 l"
      }
    }
  },
  {
    "id": "Kozel-Light050",
    "key": "kozel-light050",
    "category": "beer",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Velkopopovický Kozel Světlé Pivo",
        "description": "0.5 l"
      },
      "en": {
        "name": "Velkopopovický Kozel Light Beer",
        "description": "0.5 l"
      },
      "de": {
        "name": "Velkopopovický Kozel Helles Bier",
        "description": "0.5 l"
      },
      "it": {
        "name": "Velkopopovický Kozel Light Beer",
        "description": "0.5 l"
      },
      "fr": {
        "name": "Velkopopovický Kozel Bière Blonde",
        "description": "0.5 l"
      },
      "es": {
        "name": "Velkopopovický Kozel Cerveza Clara",
        "description": "0.5 l"
      },
      "pl": {
        "name": "Velkopopovický Kozel Piwo Jasne",
        "description": "0.5 l"
      },
      "kr": {
        "name": "Velkopopovický Kozel라이트 맥주",
        "description": "0.5 l"
      },
      "cn": {
        "name": "Velkopopovický Kozel淡啤酒",
        "description": "0.5 l"
      },
      "jp": {
        "name": "Velkopopovický Kozelライトビール",
        "description": "0.5 l"
      },
      "ua": {
        "name": "Velkopopovický KozelСвітле Пиво",
        "description": "0.5 l"
      },
      "hu": {
        "name": "Velkopopovický Kozel Világos Sör",
        "description": "0.5 l"
      },
      "pt": {
        "name": "Velkopopovický Kozel Cerveja light",
        "description": "0.5 l"
      }
    }
  },
  {
    "id": "Kozel-Dark050",
    "key": "kozel-dark050",
    "category": "beer",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Velkopopovický Kozel Tmavé Pivo",
        "description": "0.5 l"
      },
      "en": {
        "name": "Velkopopovický Kozel Dark Beer",
        "description": "0.5 l"
      },
      "de": {
        "name": "Velkopopovický Kozel Dunkles Bier",
        "description": "0.5 l"
      },
      "it": {
        "name": "Velkopopovický Kozel Dark Beer",
        "description": "0.5 l"
      },
      "fr": {
        "name": "Velkopopovický Kozel Bière Brune",
        "description": "0.5 l"
      },
      "es": {
        "name": "Velkopopovický Kozel Cerveza Oscura",
        "description": "0.5 l"
      },
      "pl": {
        "name": "Velkopopovický Kozel Piwo Ciemne",
        "description": "0.5 l"
      },
      "kr": {
        "name": "Velkopopovický Kozel흑맥주",
        "description": "0.5 l"
      },
      "cn": {
        "name": "Velkopopovický Kozel黑啤酒",
        "description": "0.5 l"
      },
      "jp": {
        "name": "Velkopopovický Kozel黒ビール",
        "description": "0.5 l"
      },
      "ua": {
        "name": "Velkopopovický KozelТемне Пиво",
        "description": "0.5 l"
      },
      "hu": {
        "name": "Velkopopovický Kozel Barna Sör",
        "description": "0.5 l"
      },
      "pt": {
        "name": "Velkopopovický Kozel Cerveja escura",
        "description": "0.5 l"
      }
    }
  },
  {
    "id": "Free-Beer050",
    "key": "free-beer050",
    "category": "beer",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Nealkoholické Pivo",
        "description": "0.5 l"
      },
      "en": {
        "name": "Alcohol-Free Beer",
        "description": "0.5 l"
      },
      "de": {
        "name": "Alkoholfreies Bier",
        "description": "0.5 l"
      },
      "it": {
        "name": "Birra Analcolica",
        "description": "0.5 l"
      },
      "fr": {
        "name": "Bière sans alcool",
        "description": "0.5 l"
      },
      "es": {
        "name": "Cerveza Sin Alcohol",
        "description": "0.5 l"
      },
      "pl": {
        "name": "Piwo Bezalkoholowe",
        "description": "0.5 l"
      },
      "kr": {
        "name": "Alcohol-Free Beer",
        "description": "0.5 l"
      },
      "cn": {
        "name": "Alcohol-Free Beer",
        "description": "0.5 l"
      },
      "jp": {
        "name": "Alcohol-Free Beer",
        "description": "0.5 l"
      },
      "ua": {
        "name": "Alcohol-Free Beer",
        "description": "0.5 l"
      },
      "hu": {
        "name": "Alcohol-Free Beer",
        "description": "0.5 l"
      },
      "pt": {
        "name": "Alcohol-Free Beer",
        "description": "0.5 l"
      }
    }
  },
  {
    "id": "Cider",
    "key": "cider",
    "category": "beer",
    "prices": {
      "czk": 114,
      "eur": 4.96
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "en": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "de": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "it": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "fr": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "es": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "pl": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "kr": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "cn": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "jp": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "ua": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "hu": {
        "name": "Cider",
        "description": "0.4 l"
      },
      "pt": {
        "name": "Cider",
        "description": "0.4 l"
      }
    }
  },
  {
    "id": "Espresso",
    "key": "espresso",
    "category": "hot-drinks",
    "prices": {
      "czk": 88,
      "eur": 3.83
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Espresso",
        "description": "7g káva"
      },
      "en": {
        "name": "Espresso",
        "description": "7g coffee"
      },
      "de": {
        "name": "Espresso",
        "description": "7g coffee"
      },
      "it": {
        "name": "Espresso",
        "description": "7g coffee"
      },
      "fr": {
        "name": "Espresso",
        "description": "7g coffee"
      },
      "es": {
        "name": "Espresso",
        "description": "7g coffee"
      },
      "pl": {
        "name": "Espresso",
        "description": "7g coffee"
      },
      "kr": {
        "name": "Espresso",
        "description": "7g 커피"
      },
      "cn": {
        "name": "Espresso",
        "description": "7g 咖啡"
      },
      "jp": {
        "name": "Espresso",
        "description": "7g コーヒー豆"
      },
      "ua": {
        "name": "Espresso",
        "description": "7g кави"
      },
      "hu": {
        "name": "Espresso",
        "description": "7g kávé"
      },
      "pt": {
        "name": "Espresso",
        "description": "7g café"
      }
    }
  },
  {
    "id": "DOPIO",
    "key": "dopio",
    "category": "hot-drinks",
    "prices": {
      "czk": 148,
      "eur": 6.43
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Espresso DOUBLE",
        "description": "14g káva"
      },
      "en": {
        "name": "Espresso DOPIO",
        "description": "14g coffee"
      },
      "de": {
        "name": "Espresso DOPIO",
        "description": "14g coffee"
      },
      "it": {
        "name": "Espresso DOPIO",
        "description": "14g coffee"
      },
      "fr": {
        "name": "Espresso DOPIO",
        "description": "14g coffee"
      },
      "es": {
        "name": "Espresso DOPIO",
        "description": "14g coffee"
      },
      "pl": {
        "name": "Espresso DOPIO",
        "description": "14g coffee"
      },
      "kr": {
        "name": "Espresso DOPIO",
        "description": "14g 커피"
      },
      "cn": {
        "name": "Espresso DOPIO",
        "description": "14g 咖啡"
      },
      "jp": {
        "name": "Espresso DOPIO",
        "description": "14g コーヒー豆"
      },
      "ua": {
        "name": "Espresso DOPIO",
        "description": "14g кави"
      },
      "hu": {
        "name": "Espresso DOPIO",
        "description": "14g kávé"
      },
      "pt": {
        "name": "Espresso DOPIO",
        "description": "14g café"
      }
    }
  },
  {
    "id": "Cappuccino",
    "key": "cappuccino",
    "category": "hot-drinks",
    "prices": {
      "czk": 102,
      "eur": 4.43
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Cappuccino",
        "description": ""
      },
      "en": {
        "name": "Cappuccino",
        "description": ""
      },
      "de": {
        "name": "Cappuccino",
        "description": ""
      },
      "it": {
        "name": "Cappuccino",
        "description": ""
      },
      "fr": {
        "name": "Cappuccino",
        "description": ""
      },
      "es": {
        "name": "Cappuccino",
        "description": ""
      },
      "pl": {
        "name": "Cappuccino",
        "description": ""
      },
      "kr": {
        "name": "Cappuccino",
        "description": ""
      },
      "cn": {
        "name": "Cappuccino",
        "description": ""
      },
      "jp": {
        "name": "Cappuccino",
        "description": ""
      },
      "ua": {
        "name": "Cappuccino",
        "description": ""
      },
      "hu": {
        "name": "Cappuccino",
        "description": ""
      },
      "pt": {
        "name": "Cappuccino",
        "description": ""
      }
    }
  },
  {
    "id": "Senza",
    "key": "senza",
    "category": "hot-drinks",
    "prices": {
      "czk": 89,
      "eur": 3.87
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Káva Bez Kofeinu",
        "description": "7g / 0.1 % kofeinu"
      },
      "en": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % caffeine"
      },
      "de": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % caffeine"
      },
      "it": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % caffeine"
      },
      "fr": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % caffeine"
      },
      "es": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % caffeine"
      },
      "pl": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % caffeine"
      },
      "kr": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % 커피"
      },
      "cn": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % 咖啡因"
      },
      "jp": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % カフェイン"
      },
      "ua": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % кофеїну"
      },
      "hu": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % koffein"
      },
      "pt": {
        "name": "Decaffeinated Coffee",
        "description": "7g / 0.1 % cafeína"
      }
    }
  },
  {
    "id": "Wiener",
    "key": "wiener",
    "category": "hot-drinks",
    "prices": {
      "czk": 124,
      "eur": 5.39
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Vídeňská Káva",
        "description": ""
      },
      "en": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "de": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "it": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "fr": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "es": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "pl": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "kr": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "cn": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "jp": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "ua": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "hu": {
        "name": "Wiener Coffee",
        "description": ""
      },
      "pt": {
        "name": "Wiener Coffee",
        "description": ""
      }
    }
  },
  {
    "id": "Latte",
    "key": "latte",
    "category": "hot-drinks",
    "prices": {
      "czk": 119,
      "eur": 5.17
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Café Latte",
        "description": ""
      },
      "en": {
        "name": "Caffé Latte",
        "description": ""
      },
      "de": {
        "name": "Caffé Latte",
        "description": ""
      },
      "it": {
        "name": "Caffé Latte",
        "description": ""
      },
      "fr": {
        "name": "Caffé Latte",
        "description": ""
      },
      "es": {
        "name": "Caffé Latte",
        "description": ""
      },
      "pl": {
        "name": "Caffé Latte",
        "description": ""
      },
      "kr": {
        "name": "Caffé Latte",
        "description": ""
      },
      "cn": {
        "name": "Caffé Latte",
        "description": ""
      },
      "jp": {
        "name": "Caffé Latte",
        "description": ""
      },
      "ua": {
        "name": "Caffé Latte",
        "description": ""
      },
      "hu": {
        "name": "Caffé Latte",
        "description": ""
      },
      "pt": {
        "name": "Caffé Latte",
        "description": ""
      }
    }
  },
  {
    "id": "Irish",
    "key": "irish",
    "category": "hot-drinks",
    "prices": {
      "czk": 175,
      "eur": 7.61
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Irish Coffee",
        "description": "7g káva / 2 cl Whisky"
      },
      "en": {
        "name": "Irish Coffee",
        "description": "7g coffee / 2 cl whisky"
      },
      "de": {
        "name": "Irish Coffee",
        "description": "7g coffee / 2 cl whisky"
      },
      "it": {
        "name": "Irish Coffee",
        "description": "7g coffee / 2 cl whisky"
      },
      "fr": {
        "name": "Irish Coffee",
        "description": "7g coffee / 2 cl whisky"
      },
      "es": {
        "name": "Irish Coffee",
        "description": "7g coffee / 2 cl whisky"
      },
      "pl": {
        "name": "Irish Coffee",
        "description": "7g coffee / 2 cl whisky"
      },
      "kr": {
        "name": "Irish Coffee",
        "description": "7g 커피 / 2 cl 위스키"
      },
      "cn": {
        "name": "Irish Coffee",
        "description": "7g 咖啡 / 2 cl 威士忌酒"
      },
      "jp": {
        "name": "Irish Coffee",
        "description": "7g コーヒー豆 / 2 cl ウイスキー"
      },
      "ua": {
        "name": "Irish Coffee",
        "description": "7g кави / 2 cl Віскі"
      },
      "hu": {
        "name": "Irish Coffee",
        "description": "7g kávé / 2 cl Whiskey"
      },
      "pt": {
        "name": "Irish Coffee",
        "description": "7g coffee / 2 cl uísque"
      }
    }
  },
  {
    "id": "Chocolate",
    "key": "chocolate",
    "category": "hot-drinks",
    "prices": {
      "czk": 125,
      "eur": 5.43
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Čokoláda",
        "description": ""
      },
      "en": {
        "name": "Chocolate",
        "description": ""
      },
      "de": {
        "name": "Chocolate",
        "description": ""
      },
      "it": {
        "name": "Chocolate",
        "description": ""
      },
      "fr": {
        "name": "Chocolate",
        "description": ""
      },
      "es": {
        "name": "Chocolate",
        "description": ""
      },
      "pl": {
        "name": "Chocolate",
        "description": ""
      },
      "kr": {
        "name": "Chocolate",
        "description": ""
      },
      "cn": {
        "name": "Chocolate",
        "description": ""
      },
      "jp": {
        "name": "Chocolate",
        "description": ""
      },
      "ua": {
        "name": "Chocolate",
        "description": ""
      },
      "hu": {
        "name": "Chocolate",
        "description": ""
      },
      "pt": {
        "name": "Chocolate",
        "description": ""
      }
    }
  },
  {
    "id": "Tea",
    "key": "tea",
    "category": "hot-drinks",
    "prices": {
      "czk": 97,
      "eur": 4.22
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Čaj",
        "description": ""
      },
      "en": {
        "name": "Tea",
        "description": ""
      },
      "de": {
        "name": "Tea",
        "description": ""
      },
      "it": {
        "name": "Tea",
        "description": ""
      },
      "fr": {
        "name": "Tea",
        "description": ""
      },
      "es": {
        "name": "Tea",
        "description": ""
      },
      "pl": {
        "name": "Tea",
        "description": ""
      },
      "kr": {
        "name": "Tea",
        "description": ""
      },
      "cn": {
        "name": "Tea",
        "description": ""
      },
      "jp": {
        "name": "Tea",
        "description": ""
      },
      "ua": {
        "name": "Tea",
        "description": ""
      },
      "hu": {
        "name": "Tea",
        "description": ""
      },
      "pt": {
        "name": "Tea",
        "description": ""
      }
    }
  },
  {
    "id": "Grog",
    "key": "grog",
    "category": "hot-drinks",
    "prices": {
      "czk": 132,
      "eur": 5.74
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Grog s Citronem",
        "description": "4 cl Rum"
      },
      "en": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      },
      "de": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      },
      "it": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      },
      "fr": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      },
      "es": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      },
      "pl": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      },
      "kr": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      },
      "cn": {
        "name": "Grog with Lemon",
        "description": "4 cl 朗姆酒"
      },
      "jp": {
        "name": "Grog with Lemon",
        "description": "4 cl ラム"
      },
      "ua": {
        "name": "Grog with Lemon",
        "description": "4 cl Ром"
      },
      "hu": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      },
      "pt": {
        "name": "Grog with Lemon",
        "description": "4 cl rum"
      }
    }
  },
  {
    "id": "Hot-Wine",
    "key": "hot-wine",
    "category": "hot-drinks",
    "prices": {
      "czk": 115,
      "eur": 5.00
    },
    "image": "",
    "translations": {
      "cs": {
        "name": "Svařené Víno",
        "description": "1.5 dl"
      },
      "en": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "de": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "it": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "fr": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "es": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "pl": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "kr": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "cn": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "jp": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "ua": {
        "name": "Hot Wine",
        "description": "1.5 дл"
      },
      "hu": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      },
      "pt": {
        "name": "Hot Wine",
        "description": "1.5 dl"
      }
    }
  }
];

export const UI_TRANSLATIONS = {
  "cs": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Autentická italská pizzerie a restaurace v Nerudově ulici u Pražského hradu",
    "searchPlaceholder": "Hledat v jídelním lístku (např. Margherita, Carbonara, Pivo)...",
    "allCategories": "Všechny kategorie",
    "wishlist": "Můj Wishlist",
    "wishlistEmpty": "Váš wishlist je zatím prázdný",
    "wishlistEmptyHint": "Klikněte na ikonu srdce nebo tlačítko u kterékoliv položky níže a sestavte si svou objednávku!",
    "addToWishlist": "Přidat do wishlistu",
    "inWishlist": "Ve wishlistu",
    "removeFromWishlist": "Odebrat z wishlistu",
    "totalSum": "Celkový součet",
    "itemsCount": "položek",
    "itemCountSingle": "položka",
    "clearWishlist": "Vysypat wishlist",
    "copySummary": "Zkopírovat seznam",
    "copied": "Zkopírováno do schránky!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Měna",
    "viewWishlist": "Zobrazit wishlist",
    "close": "Zavřít",
    "dishesFound": "nalezených položek",
    "noDishesFound": "Nebyly nalezeny žádné položky odpovídající filtru",
    "resetFilters": "Obnovit filtry",
    "contactInfo": "Nerudova 238/37, 118 00 Malá Strana, Praha",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Denně: 11:00 – 23:00",
    "orderNote": "Položky z wishlistu můžete předložit obsluze nebo si předem spočítat útratu.",
    "shareWishlist": "Sdílet výběr",
    "volume": "Objem / Gramáž",
    "italianSpecialties": "Tradiční italské receptury a čerstvé suroviny",
    "callToOrder": "Zavolat do restaurace",
    "exploreMenu": "Prohlédnout menu"
  },
  "en": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Authentic Italian pizzeria and restaurant in Nerudova Street near Prague Castle",
    "searchPlaceholder": "Search the menu (e.g., Margherita, Carbonara, Beer)...",
    "allCategories": "All Categories",
    "wishlist": "My Wishlist",
    "wishlistEmpty": "Your wishlist is currently empty",
    "wishlistEmptyHint": "Click the heart icon or add button on any dish below to build your dining selection!",
    "addToWishlist": "Add to Wishlist",
    "inWishlist": "In Wishlist",
    "removeFromWishlist": "Remove from wishlist",
    "totalSum": "Total Sum",
    "itemsCount": "items",
    "itemCountSingle": "item",
    "clearWishlist": "Clear Wishlist",
    "copySummary": "Copy Summary",
    "copied": "Copied to clipboard!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Currency",
    "viewWishlist": "View Wishlist",
    "close": "Close",
    "dishesFound": "items found",
    "noDishesFound": "No items match your filter",
    "resetFilters": "Reset filters",
    "contactInfo": "Nerudova 238/37, 118 00 Lesser Town, Prague",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Daily: 11:00 AM – 11:00 PM",
    "orderNote": "Show your wishlist directly to the staff or plan your group order beforehand.",
    "shareWishlist": "Share Selection",
    "volume": "Serving / Size",
    "italianSpecialties": "Traditional Italian recipes & fresh ingredients",
    "callToOrder": "Call Restaurant",
    "exploreMenu": "Explore Menu"
  },
  "de": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Authentische italienische Pizzeria & Restaurant in der Nerudova-Straße an der Prager Burg",
    "searchPlaceholder": "Menü durchsuchen (z.B. Margherita, Bier)...",
    "allCategories": "Alle Kategorien",
    "wishlist": "Meine Wunschliste",
    "wishlistEmpty": "Ihre Wunschliste ist noch leer",
    "wishlistEmptyHint": "Klicken Sie auf das Herzsymbol, um Gerichte zu Ihrer Auswahl hinzuzufügen!",
    "addToWishlist": "Zur Wunschliste hinzufügen",
    "inWishlist": "In der Wunschliste",
    "removeFromWishlist": "Entfernen",
    "totalSum": "Gesamtsumme",
    "itemsCount": "Artikel",
    "itemCountSingle": "Artikel",
    "clearWishlist": "Wunschliste leeren",
    "copySummary": "Zusammenfassung kopieren",
    "copied": "In die Zwischenablage kopiert!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Währung",
    "viewWishlist": "Wunschliste ansehen",
    "close": "Schließen",
    "dishesFound": "Artikel gefunden",
    "noDishesFound": "Keine Artikel entsprechen Ihrem Filter",
    "resetFilters": "Filter zurücksetzen",
    "contactInfo": "Nerudova 238/37, 118 00 Kleinseite, Prag",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Täglich: 11:00 – 23:00 Uhr",
    "orderNote": "Zeigen Sie Ihre Wunschliste dem Personal oder berechnen Sie Ihre Gesamtrechnung.",
    "shareWishlist": "Auswahl teilen",
    "volume": "Menge / Größe",
    "italianSpecialties": "Traditionelle italienische Küche & frische Zutaten",
    "callToOrder": "Restaurant anrufen",
    "exploreMenu": "Menü ansehen"
  },
  "it": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Autentica pizzeria e ristorante italiano in via Nerudova sotto il Castello di Praga",
    "searchPlaceholder": "Cerca nel menu (es. Margherita, Carbonara, Birra)...",
    "allCategories": "Tutte le categorie",
    "wishlist": "La Mia Wishlist",
    "wishlistEmpty": "La tua wishlist è vuota",
    "wishlistEmptyHint": "Fai clic sul cuore per aggiungere piatti alla tua selezione e calcolare il totale!",
    "addToWishlist": "Aggiungi alla wishlist",
    "inWishlist": "Nella wishlist",
    "removeFromWishlist": "Rimuovi",
    "totalSum": "Totale complessivo",
    "itemsCount": "piatti",
    "itemCountSingle": "piatto",
    "clearWishlist": "Svuota wishlist",
    "copySummary": "Copia riepilogo",
    "copied": "Copiato negli appunti!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Valuta",
    "viewWishlist": "Vedi Wishlist",
    "close": "Chiudi",
    "dishesFound": "piatti trovati",
    "noDishesFound": "Nessun piatto corrisponde al filtro",
    "resetFilters": "Reimposta filtri",
    "contactInfo": "Nerudova 238/37, 118 00 Malá Strana, Praga",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Tutti i giorni: 11:00 – 23:00",
    "orderNote": "Mostra la tua lista al cameriere o pianifica il conto per il tuo tavolo.",
    "shareWishlist": "Condividi selezione",
    "volume": "Porzione / Volume",
    "italianSpecialties": "Ricette tradizionali italiane e ingredienti freschi",
    "callToOrder": "Chiama il ristorante",
    "exploreMenu": "Esplora il Menu"
  },
  "fr": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Pizzeria et restaurant italien authentique rue Nerudova près du Château de Prague",
    "searchPlaceholder": "Rechercher dans le menu (ex: Margherita, Carbonara)...",
    "allCategories": "Toutes les catégories",
    "wishlist": "Ma Wishlist",
    "wishlistEmpty": "Votre wishlist est vide",
    "wishlistEmptyHint": "Cliquez sur le cœur pour ajouter des plats à votre sélection et calculer le total !",
    "addToWishlist": "Ajouter à la wishlist",
    "inWishlist": "Dans la wishlist",
    "removeFromWishlist": "Supprimer",
    "totalSum": "Total global",
    "itemsCount": "articles",
    "itemCountSingle": "article",
    "clearWishlist": "Vider la wishlist",
    "copySummary": "Copier la sélection",
    "copied": "Copié dans le presse-papier !",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Devise",
    "viewWishlist": "Voir la wishlist",
    "close": "Fermer",
    "dishesFound": "articles trouvés",
    "noDishesFound": "Aucun article ne correspond à votre recherche",
    "resetFilters": "Réinitialiser",
    "contactInfo": "Nerudova 238/37, 118 00 Malá Strana, Prague",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Tous les jours : 11h00 – 23h00",
    "orderNote": "Montrez votre sélection à notre serveur pour commander facilement.",
    "shareWishlist": "Partager la sélection",
    "volume": "Portion / Volume",
    "italianSpecialties": "Recettes italiennes traditionnelles et ingrédients frais",
    "callToOrder": "Appeler le restaurant",
    "exploreMenu": "Découvrir le Menu"
  },
  "es": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Auténtica pizzería y restaurante italiano en la calle Nerudova junto al Castillo de Praga",
    "searchPlaceholder": "Buscar en el menú (ej. Margherita, Cerveza)...",
    "allCategories": "Todas las categorías",
    "wishlist": "Mi Lista de Deseos",
    "wishlistEmpty": "Tu lista de deseos está vacía",
    "wishlistEmptyHint": "¡Haz clic en el corazón para agregar platos y ver el total en vivo!",
    "addToWishlist": "Agregar a la lista",
    "inWishlist": "En la lista",
    "removeFromWishlist": "Eliminar",
    "totalSum": "Suma total",
    "itemsCount": "artículos",
    "itemCountSingle": "artículo",
    "clearWishlist": "Vaciar lista",
    "copySummary": "Copiar resumen",
    "copied": "¡Copiado al portapapeles!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Moneda",
    "viewWishlist": "Ver lista",
    "close": "Cerrar",
    "dishesFound": "artículos encontrados",
    "noDishesFound": "No se encontraron platos para este filtro",
    "resetFilters": "Restablecer filtros",
    "contactInfo": "Nerudova 238/37, 118 00 Malá Strana, Praga",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Todos los días: 11:00 – 23:00",
    "orderNote": "Muestra tu lista al camarero o calcula la cuenta con anticipación.",
    "shareWishlist": "Compartir lista",
    "volume": "Tamaño / Volumen",
    "italianSpecialties": "Recetas italianas tradicionales e ingredientes frescos",
    "callToOrder": "Llamar al restaurante",
    "exploreMenu": "Ver menú"
  },
  "pl": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Autentyczna włoska pizzeria i restauracja przy ulicy Nerudovej koło Zamku na Hradczanach",
    "searchPlaceholder": "Szukaj w menu (np. Margherita, Piwo, Kawa)...",
    "allCategories": "Wszystkie kategorie",
    "wishlist": "Moja Lista Życzeń",
    "wishlistEmpty": "Twoja lista życzeń jest pusta",
    "wishlistEmptyHint": "Kliknij ikonę serca przy dowolnej pozycji, aby dodać ją do listy i zsumować ceny!",
    "addToWishlist": "Dodaj do listy życzeń",
    "inWishlist": "Na liście życzeń",
    "removeFromWishlist": "Usuń z listy",
    "totalSum": "Łączna suma",
    "itemsCount": "pozycji",
    "itemCountSingle": "pozycja",
    "clearWishlist": "Wyczyść listę",
    "copySummary": "Kopiuj podsumowanie",
    "copied": "Skopiowano do schowka!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Waluta",
    "viewWishlist": "Pokaż listę życzeń",
    "close": "Zamknij",
    "dishesFound": "znalezionych pozycji",
    "noDishesFound": "Brak pozycji pasujących do wyszukiwania",
    "resetFilters": "Resetuj filtry",
    "contactInfo": "Nerudova 238/37, 118 00 Malá Strana, Praga",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Codziennie: 11:00 – 23:00",
    "orderNote": "Pokaż wybrane pozycje obsłudze lub sprawdź łączny koszt zamówienia.",
    "shareWishlist": "Udostępnij wybór",
    "volume": "Wielkość / Objętość",
    "italianSpecialties": "Tradycyjne włoskie receptury i świeże składniki",
    "callToOrder": "Zadzwoń do restauracji",
    "exploreMenu": "Przeglądaj menu"
  },
  "kr": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "프라하 성 근처 네루도바 거리의 정통 이탈리아 레스토랑 & 피제리아",
    "searchPlaceholder": "메뉴 검색 (예: 마르게리타, 파스타, 맥주)...",
    "allCategories": "전체 카테고리",
    "wishlist": "내 위시리스트",
    "wishlistEmpty": "위시리스트가 비어 있습니다",
    "wishlistEmptyHint": "원하는 메뉴의 하트 버튼을 눌러 위시리스트에 담고 총 금액을 계산해보세요!",
    "addToWishlist": "위시리스트에 추가",
    "inWishlist": "위시리스트 담김",
    "removeFromWishlist": "목록에서 삭제",
    "totalSum": "총 합계 금액",
    "itemsCount": "개 항목",
    "itemCountSingle": "개 항목",
    "clearWishlist": "위시리스트 비우기",
    "copySummary": "목록 복사하기",
    "copied": "클립보드에 복사되었습니다!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "통화",
    "viewWishlist": "위시리스트 보기",
    "close": "닫기",
    "dishesFound": "개의 메뉴",
    "noDishesFound": "검색 결과가 없습니다",
    "resetFilters": "필터 초기화",
    "contactInfo": "Nerudova 238/37, 118 00 프라하",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "매일: 11:00 – 23:00",
    "orderNote": "위시리스트 목록을 직원에게 보여주어 손쉽게 주문하세요.",
    "shareWishlist": "선택 항목 공유",
    "volume": "용량 / 제공량",
    "italianSpecialties": "정통 이탈리안 레시피와 신선한 식재료",
    "callToOrder": "레스토랑에 전화하기",
    "exploreMenu": "메뉴 탐색하기"
  },
  "cn": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "布拉格城堡脚下涅鲁多瓦街的地道意大利披萨与意面餐厅",
    "searchPlaceholder": "搜索菜单（例如：玛格丽特披萨、意面、啤酒）...",
    "allCategories": "所有分类",
    "wishlist": "心愿清单 / 预选菜单",
    "wishlistEmpty": "您的心愿单目前是空的",
    "wishlistEmptyHint": "点击菜品上的爱心或添加按钮加入清单，实时计算总价！",
    "addToWishlist": "加入心愿单",
    "inWishlist": "已在清单中",
    "removeFromWishlist": "移除",
    "totalSum": "总计金额",
    "itemsCount": "件商品",
    "itemCountSingle": "件商品",
    "clearWishlist": "清空清单",
    "copySummary": "复制菜单总览",
    "copied": "已复制到剪贴板！",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "货币",
    "viewWishlist": "查看心愿单",
    "close": "关闭",
    "dishesFound": "项菜品",
    "noDishesFound": "未找到符合条件的菜品",
    "resetFilters": "重置筛选",
    "contactInfo": "Nerudova 238/37, 118 00 布拉格小城区",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "每日营业：11:00 – 23:00",
    "orderNote": "到店时可直接向服务员出示此心愿清单进行点单。",
    "shareWishlist": "分享清单",
    "volume": "分量 / 规格",
    "italianSpecialties": "正宗意式烹饪工艺与新鲜食材",
    "callToOrder": "致电餐厅",
    "exploreMenu": "浏览菜单"
  },
  "jp": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "プラハ城近くネルドヴァ通りにある本格イタリアンピッツェリア＆レストラン",
    "searchPlaceholder": "メニューを検索（例: マルゲリータ、ビール、パスタ）...",
    "allCategories": "すべてのカテゴリー",
    "wishlist": "ウィッシュリスト（お気に入り・注文リスト）",
    "wishlistEmpty": "ウィッシュリストは空です",
    "wishlistEmptyHint": "お好きな料理のハートボタンを押してリストに追加し、合計金額を確認できます！",
    "addToWishlist": "ウィッシュリストに追加",
    "inWishlist": "リスト追加済み",
    "removeFromWishlist": "リストから削除",
    "totalSum": "合計金額",
    "itemsCount": "品",
    "itemCountSingle": "品",
    "clearWishlist": "リストをクリア",
    "copySummary": "リストをコピー",
    "copied": "クリップボードにコピーしました！",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "通貨",
    "viewWishlist": "リストを見る",
    "close": "閉じる",
    "dishesFound": "品見つかりました",
    "noDishesFound": "該当するメニューがありません",
    "resetFilters": "フィルターをリセット",
    "contactInfo": "Nerudova 238/37, 118 00 プラハ マラー・ストラナ",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "毎日営業: 11:00 – 23:00",
    "orderNote": "注文時にスタッフにこのリストをお見せいただくことでスムーズにご注文いただけます。",
    "shareWishlist": "選択を共有",
    "volume": "分量 / サイズ",
    "italianSpecialties": "伝統的なイタリアンレシピと新鮮な食材",
    "callToOrder": "レストランに電話する",
    "exploreMenu": "メニューを見る"
  },
  "ua": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Автентична італійська піцерія та ресторан на вулиці Нерудова біля Празького граду",
    "searchPlaceholder": "Шукати в меню (наприклад: Маргарита, Карбонара, Пиво)...",
    "allCategories": "Всі категорії",
    "wishlist": "Мій Список Бажань",
    "wishlistEmpty": "Ваш список бажань порожній",
    "wishlistEmptyHint": "Натисніть на серденько біля будь-якої страви, щоб додати її та підрахувати загальну суму!",
    "addToWishlist": "Додати до списку",
    "inWishlist": "У списку",
    "removeFromWishlist": "Видалити",
    "totalSum": "Загальна сума",
    "itemsCount": "страв",
    "itemCountSingle": "страва",
    "clearWishlist": "Очистити список",
    "copySummary": "Копіювати список",
    "copied": "Скопійовано в буфер обміну!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Валюта",
    "viewWishlist": "Переглянути список",
    "close": "Закрити",
    "dishesFound": "страв знайдено",
    "noDishesFound": "Не знайдено страв за вашим запитом",
    "resetFilters": "Скинути фільтри",
    "contactInfo": "Nerudova 238/37, 118 00 Мала Страна, Прага",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Щодня: 11:00 – 23:00",
    "orderNote": "Ви можете показати цей список офіціанту або заздалегідь підрахувати вартість.",
    "shareWishlist": "Поділитися вибором",
    "volume": "Обʼєм / Порція",
    "italianSpecialties": "Традиційні італійські рецепти та свіжі інгредієнти",
    "callToOrder": "Зателефонувати в ресторан",
    "exploreMenu": "Переглянути меню"
  },
  "hu": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Autentikus olasz pizzéria és étterem a Nerudova utcában a Prágai Vár lábánál",
    "searchPlaceholder": "Keresés az étlapon (pl. Margherita, Tészta, Sör)...",
    "allCategories": "Minden kategória",
    "wishlist": "Kívánságlistám",
    "wishlistEmpty": "A kívánságlistája még üres",
    "wishlistEmptyHint": "Kattintson a szív ikonra az ételeknél a kiválasztáshoz és az összeg kiszámításához!",
    "addToWishlist": "Hozzáadás a listához",
    "inWishlist": "A listán",
    "removeFromWishlist": "Eltávolítás",
    "totalSum": "Végösszeg",
    "itemsCount": "tétel",
    "itemCountSingle": "tétel",
    "clearWishlist": "Lista ürítése",
    "copySummary": "Összegzés másolása",
    "copied": "Vágólapra másolva!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Pénznem",
    "viewWishlist": "Kívánságlista megtekintése",
    "close": "Bezárás",
    "dishesFound": "találat",
    "noDishesFound": "Nincs a szűrésnek megfelelő tétel",
    "resetFilters": "Szűrők törlése",
    "contactInfo": "Nerudova 238/37, 118 00 Kisoldal, Prága",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Naponta: 11:00 – 23:00",
    "orderNote": "Mutassa meg ezt a listát a felszolgálónak, vagy számolja ki előre a számlát.",
    "shareWishlist": "Kiválasztás megosztása",
    "volume": "Adag / Méret",
    "italianSpecialties": "Hagyományos olasz receptek és friss alapanyagok",
    "callToOrder": "Étterem felhívása",
    "exploreMenu": "Étlap böngészése"
  },
  "pt": {
    "siteTitle": "Pizza Pasta Caffè",
    "siteSubtitle": "Pizzaria e restaurante italiano autêntico na rua Nerudova, perto do Castelo de Praga",
    "searchPlaceholder": "Procurar no cardápio (ex: Margherita, Cerveja, Massa)...",
    "allCategories": "Todas as categorias",
    "wishlist": "Minha Lista de Desejos",
    "wishlistEmpty": "Sua lista de desejos está vazia",
    "wishlistEmptyHint": "Clique no ícone de coração para adicionar itens à sua seleção e calcular o total!",
    "addToWishlist": "Adicionar à lista",
    "inWishlist": "Na lista",
    "removeFromWishlist": "Remover",
    "totalSum": "Soma total",
    "itemsCount": "itens",
    "itemCountSingle": "item",
    "clearWishlist": "Limpar lista",
    "copySummary": "Copiar resumo",
    "copied": "Copiado para a área de transferência!",
    "priceCzk": "CZK",
    "priceEur": "EUR",
    "currency": "Moeda",
    "viewWishlist": "Ver lista",
    "close": "Fechar",
    "dishesFound": "itens encontrados",
    "noDishesFound": "Nenhum item corresponde ao seu filtro",
    "resetFilters": "Redefinir filtros",
    "contactInfo": "Nerudova 238/37, 118 00 Malá Strana, Praga",
    "phone": "+420 739 854 474",
    "email": "marek23837@gmail.com",
    "openingHours": "Todos os dias: 11:00 – 23:00",
    "orderNote": "Mostre sua seleção ao garçom ou planeje a conta com facilidade.",
    "shareWishlist": "Compartilhar seleção",
    "volume": "Tamanho / Volume",
    "italianSpecialties": "Receitas tradicionais italianas e ingredientes frescos",
    "callToOrder": "Ligar para o restaurante",
    "exploreMenu": "Explorar o Cardápio"
  }
};

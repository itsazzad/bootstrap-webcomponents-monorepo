export type supportedTheme = "bootstrap";
export type CssValueType = "color" | "string" | "htmlsize" | "number";
export type CssPart = {
  name: string;
  description?: string;
};
export type HtmlSlot = {
  name: string;
  description?: string;
};
export type CssVar = {
  defaultValue?: string;
  valueType: CssValueType;
  name: string;
  description?: string;
  theme?: supportedTheme;
};
export type StyleSetup = {
  parts: CssPart[];
  // themes: supportedTheme[];
  vars: CssVar[];
};
export type i18nLang = {
  language: string;
  lang: string;
};
export type ComponentSetup = {
  storybookArgs: any;
  styleSetup: StyleSetup;
  htmlSlots: HtmlSlot[];
  i18n: i18nLang[];
  examples: [];
  name: "";
  category: "";
  tags: [];
  size: {};
};
export function getChildStyleToPass(
  parsedStyle: { [x: string]: string },
  vars: CssVar[]
) {
  let toreturn = "";
  if (
    parsedStyle &&
    vars?.length &&
    Object.keys(parsedStyle)?.length &&
    vars?.filter((f) => Object.keys(parsedStyle).includes(f.name))?.length
  ) {
    for (const k of Object.keys(parsedStyle)) {
      const isPresent = vars?.filter(
        (f) => f.name === k && f.defaultValue !== parsedStyle[k]
      );
      if (isPresent) {
        toreturn += `${k}:${parsedStyle[k]};`;
      }
    }
  }
  return toreturn;
}

export function addComponent(
  componentName: string,
  version: string,
  allowLocal?: boolean
) {
  if (!document.getElementById("hb-" + componentName + "-script")) {
    const script = document.createElement("script");
    script.id = "hb-" + componentName + "-script";
    script.src = `https://cdn.jsdelivr.net/npm/@htmlbricks/hb-${componentName}@${version}/release/release.js`;
    if (allowLocal && location.href.includes("localhost")) {
      script.src = `http://localhost:6006/${componentName}/dist/release.js`;
    }

    document.head.appendChild(script);
  }
}

export class LanguageTranslator {
  dictionary: { [x: string]: { [x: string]: string } };
  lang: string;
  constructor(opts: {
    lang?: string;
    dictionary: { [x: string]: { [x: string]: string } };
  }) {
    if (!opts?.dictionary) throw new Error("no dictionary provided");
    this.dictionary = opts.dictionary;
    this.setLang(opts?.lang);
  }
  setLang(lang?: string) {
    if (!lang) lang = LanguageTranslator.getDefaultLang();
    this.lang = lang;
  }

  translateWord(wordKey: string, lang?: string) {
    return LanguageTranslator.getDictionaryWord(
      wordKey,
      this.dictionary,
      lang || this.lang
    );
  }
  translateDate(
    dateISOString: Date,
    timeOptions: Intl.DateTimeFormatOptions,
    lang?: string
  ) {
    return LanguageTranslator.formatDate(
      dateISOString,
      timeOptions,
      lang || this.lang
    );
  }
  static getDefaultLang() {
    let browserLang = "en";
    if (
      navigator?.languages &&
      navigator.languages[0]?.split("-")[0]?.toLowerCase()?.length
    ) {
      browserLang = navigator.languages[0]?.split("-")[0]?.toLowerCase();
    }
    return browserLang;
  }
  static getDictionaryWord(
    wordKey: string,
    dictionary: { [x: string]: { [x: string]: string } },
    lang?: string
  ) {
    if (!wordKey) throw new Error("no wordKey provided");
    if (!dictionary) throw new Error("no dictionary provided");

    if (lang && dictionary[lang]?.[wordKey]) return dictionary[lang][wordKey];

    let w: string = "";
    const defLng = LanguageTranslator.getDefaultLang();
    if (!lang || defLng !== lang) {
      const defaultLng = dictionary?.[defLng];
      if (defaultLng?.[wordKey]) {
        w = defaultLng[wordKey];
      }
    }

    return w;
  }
  static formatDate(
    dateISOString: Date,
    timeOptions: Intl.DateTimeFormatOptions,
    lang?: string
  ) {
    if (!dateISOString) throw new Error("no date provided");
    if (typeof dateISOString.getMonth !== "function") {
      throw new Error("wrong date format");
    }
    const dayDateFormat = new Intl.DateTimeFormat(
      lang || LanguageTranslator.getDefaultLang(),
      timeOptions
    );
    return dayDateFormat.format(dateISOString);
  }
}

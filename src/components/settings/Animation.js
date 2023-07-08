//* ----------[ Settings Bar ]---------- *//
// animation1
export const openPointingIn = {
  "0%": {
    transform: "translateX(100%)",
    opacity: "0",
  },
  "20%": {
    opacity: "1",
  },

  "100%": {
    visibility: "visible",
  },
};
export const closePointingIn = {
  "80%": { opacity: "1" },
  "100%": {
    opacity: "0",
    visibility: "hidden",
    transform: "translateX(100%)",
  },
};

// animation2
export const openPointingOut = {
  "0%": {
    transform: "translateX(210%)",
    opacity: "0",
  },
  "20%": {
    opacity: "1",
  },
  "100%": {
    visibility: "visible",
  },
};
export const closePointingOut = {
  "80%": { opacity: "1" },
  "100%": {
    opacity: "0",
    visibility: "hidden",
    transform: "translateX(210%)",
  },
};

// animation3
export const openTranslateBtn = {
  "0%": {
    transform: "translateX(320%)",
    opacity: "0",
  },
  "20%": {
    opacity: "1",
  },
  "100%": {
    visibility: "visible",
  },
};
export const closeTranslateBtn = {
  "80%": { opacity: "1" },
  "100%": {
    opacity: "0",
    visibility: "hidden",
    transform: "translateX(320%)",
  },
};

// animation4
export const openLikePostBtn = {
  "0%": {
    transform: "translateX(430%)",
    opacity: "0",
  },
  "20%": {
    opacity: "1",
  },
  "100%": {
    visibility: "visible",
  },
};
export const closeLikePostBtn = {
  "80%": { opacity: "1" },
  "100%": {
    opacity: "0",
    visibility: "hidden",
    transform: "translateX(430%)",
  },
};
//* ---------- ---------- *//

export const openLang = {
  "0%": {
    opacity: "0",
  },

  "100%": {
    opacity: "1",
    transform: "translateY(0%)",
  },
};

export const closeLang = {
  "0%": {
    opacity: "0",
  },

  "100%": {
    opacity: "1",
    transform: "translateY(0%)",
  },
};

export const openLangContainer = {
  "0%": {
    transform: "scaleY(0)",
  },
  "100%": {
    transform: "scaleY(1)",
  },
};

export const closeLangContainer = {
  "100%": {
    transform: "scaleY(0)",
  },
};

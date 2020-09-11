export const getLangugeTransform = (i18n, language) =>
  Object.fromEntries(
    Object.keys(i18n).map((obj) => {
      return getTranslationObjectOrCollection(i18n, obj, language);
    })
  );

const getTranslationObjectOrCollection = (i18n, obj, language) => {
  if (i18n[obj] instanceof Array) {
    return [
      obj,
      i18n[obj].map((o) => {
        return getLangugeTransform(o, language);
      }),
    ];
  }
  return [obj, i18n[obj][language]];
};

const methods = {
  textUnEncoder: text => text.replace(/&apos;/g, "'").replace(/&amp;/g, "&")
};
export default methods
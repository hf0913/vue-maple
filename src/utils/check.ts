export const getType = (v: any) =>
    Object.prototype.toString.call(v).slice(8, -1).toLocaleLowerCase();

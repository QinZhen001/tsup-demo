export default {
  entries: ["./src/perform/web/index.ts", "./src/perform/hippy/index.ts"],
  rollup: {
    emitCJS: true
  },
  declaration: true,
};

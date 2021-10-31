function classes(...names: (string | undefined)[]) {
  // hack：如果写了重复的 class 值，这里合并应该需要过滤
  return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [key: string]: boolean
}

const scopedClassMaker = (prefix: string) =>
  (name: string | ClassToggles, options?: Options) =>
    Object
      .entries(name instanceof Object ? name : {[name]: name})
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ');

export {scopedClassMaker};

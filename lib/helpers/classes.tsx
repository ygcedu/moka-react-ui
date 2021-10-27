function classes(...names: (string | undefined)[]) {
  // v => v 是什么就是什么（常用）
  return names.filter(v => v).join(' ');
}

export default classes;

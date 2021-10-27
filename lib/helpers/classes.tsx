function classes(...names: (string | undefined)[]) {
  // hack：如果写了重复的 class 值，这里合并应该需要过滤
  return names.filter(Boolean).join(' ');
}

export default classes;

const isTrusy = (value: any) => value;

function classes(...names: (string | undefined)[]) {
  // v => v 是什么就是什么（常用）
  return names.filter(isTrusy).join(' ');
}

export default classes;

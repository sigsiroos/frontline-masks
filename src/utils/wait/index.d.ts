type ArrayElement<ArrayType> = ArrayType extends (infer ElementType)[] ? ElementType : never;
type ResolveType<T> = T extends Promise<infer R> ? R : T;

type Wait = <T>(
  promises:
    T extends number ? T :
    T extends ArrayElement<T>[] ? (Promise<ArrayElement<T>> | ArrayElement<T>)[] :
    T | Promise<T>,
  minimumWaitTime?: T extends number ? never : number
) => Promise<
  T extends number ? void :
  T extends ArrayElement<T>[] ? ResolveType<ArrayElement<T>>[] :
  ResolveType<T>
>;

declare const wait: Wait;

export default wait;

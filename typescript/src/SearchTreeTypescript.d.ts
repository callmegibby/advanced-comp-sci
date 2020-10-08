declare const chalk: any;
declare const list: number[];
declare const head: node;
declare type node = {
    value: number;
    left: node | null;
    right: node | null;
};
declare function SearchTreeTypescript(current: node, goal: number): boolean;
declare function SearchListTypescript(array: number[], goal: number): number;
//# sourceMappingURL=SearchTreeTypescript.d.ts.map
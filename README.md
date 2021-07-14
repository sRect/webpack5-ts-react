## ts的编译方式

1. ts-laoder 编译的时候可以进行类型检查，适合新项目，编译比较慢
```
npm i ts-loader -D
```
2. babel-loader @babel/preset-typescript等 编译的时候不可以进行类型检查，适合老项目
3. awesome-typescript-loader 性能比ts-loader高一些，可以把类型检查放在单独的进程中检查，效率高一些
4. fork-ts-checker-webpack-plugin+ts-loader  fork是开启子进程



## lint
- tslint 逐渐废弃
- eslint 社区通用

```
npm i eslint @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint-plugin-react@latest -D
```
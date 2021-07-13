## ts的编译方式

1. ts-laoder 编译的时候可以进行类型检查，适合新项目
```
npm i ts-loader -D
```
2. babel-loader @babel/preset-typescript等 编译的时候不可以进行类型检查，适合老项目



## lint
- tslint 逐渐废弃
- eslint 社区通用

```
npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```
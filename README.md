# scroll-component

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 注意
组件总共三个参数：scroll-data, speed, len
  * scroll-data: 数据源
    ```
    可以通过<template slot-scope="scope"></template> 自定义每条数据的内容，通过scope.item获取这条数据
    ```
  * speed: 滚动速度 默认300毫秒且不小于100
  * len: 切换项数 默认1个且最少1个

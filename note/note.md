## Vue知识点

主要是以下几个方面：
- vue-cli
- vue-router
- vuex
- axios
- some framework

### Vue-CLI（1）  
Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统,能够帮助开发者快速构建开发环境。主要由三部分构成：
1. CLI
    CLI（@vue/cli）是一个全局安装的npm包，支持在终端里使用vue的命令:  
    `vue create //命令快速搭建一个新项目`  
    `vue serve //构建新想法的原型`  
    `vue ui  //通过图形化界面管理你的所有项目`  
    
2. CLI服务  
    CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中。  
    基于webpack和webpack-dev-server构建，它包含了：  
    - 加载其它 CLI 插件的核心服务  
    - 一个针对绝大部分应用优化过的内部的 webpack 配置；  
    - 项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令。  
    
3. CLI插件  
    为你的项目提供可选功能的npm包。比如 Babel/TypeScript 转译，ESLint 集成、单元测试和 end-to-end 测试等。  
    插件名以@vue/cli-plugin-或vue-cli-plugin-开头，使用简单。  
    当你在项目内部运行 vue-cli-service 命令时，它会自动解析并加载 package.json 中列出的所有 CLI 插件。  

    Vue-cli官网: https://cli.vuejs.org/zh/guide/   
    安装vue-cli:  
    ```
    npm install -g @vue/cli
    ```

### Vue-Router（2）  

### Vuex（3）  

### Axios（4）  

### Some Framework（5）  



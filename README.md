## 使用React完成简书的一些小的功能点

### 1.styledComponents（3.3.2）

+ 1.1由于React并不能像Vue中的组件一样，每一个组件使用.vue后缀的文件写到一起。并且每一个组件还有style标签以及scoped来控制每一个组件中的样式范围。
  在React中任意一个组件中引入css样式，则该样式会全局生效，所以此时产生了中解决的办法：
  + 1.在webpack配置文件中进行配置:
    ```javascript
    			{
                    test: /\.less$/,
                    use: [
                            'style-loader', 
                            'css-loader?modules', 
                            'less-loader'
                    	]
                }
    ```
    在css加载器配置的后面配置一个 ‘modules’参数，这个配置能简单的把css进行模块化，我们在组件中引入的时候则需要用一个变量接受css `import CSS from '../css/style.css'`在组件某个元素中引入该样式的时候则需要用className来接受上面的CSS变量以达到控制CSS作用范围的目的。

  + 2.使用styledComponents: 
    > Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier! 

    总的来说styled-components能帮助我们创建自定义的组件，组件的样式能够写在一个JS文件中，能很好控制每一个组件的样式的范围，做到没有个组件和每一个样式都是独立的多个组件与样式之间没有污染。同时也很契合React中 ‘一切皆组件’的开发思想。

    ```javascript
    import styled from 'styled-component'
    
    // 这样创建了一个自定义组件
    export const Example = styled.div`
    
    	// 这里可以直接写样式，该样式为组件的单独样式，并且还支持类似scss、less之类的格式
    
    	width: 300px;
    	height: 200px;
        a {
    		display: block;
        }
        &:active {
    		background-color: #ccc;
        }
    `
    ```

    ```javascript
    // 还可以引入injectGlobal来设置全局样式
    import { injectGlobal } from 'styled-components'
    
    injectGlobal`
    	...
    `
    ```
  
###   2. Redux（配合immutable.js）

  > Redux对于JavaScript应用而言是一个可预测状态的容器。换言之，它是一个应用数据流框架，而不是传统的像underscore.js或者AngularJs那样的库或者框架。
  >
  > Redux最主要是用作应用状态的管理。简言之，Redux用一个单独的常量状态树（对象）保存这一整个应用的状态，这个对象不能直接被改变。当一些数据变化了，一个新的对象就会被创建（使用actions和reducers）。

  React配合Redux来用主要是从来解决，不同组件之间的传值的问题。毕竟React本身只是一个视图层的框架，如果两个组件之间相隔的层级过深，或是两个非父子组件之间要进行数据的沟通实现起来会非常的复杂。此时便可以使用Redux来构建一个公共的仓储，以方便各个组件之间的数据交互。

  ##### 注意：

  Redux中state是不能更改的，这个是因为如果state的数据更改中一旦发生了错误，因为组件中都有各自自己的reducer文件，所以一旦项目非常庞大之后，错误将会及其难找。所以redux官方建议是不让改state中的数据的。

  正确的操作是：将state复制出一个副本，然后操作副本中的数据，最后返回这个副本。而immutable.js正好为我们提供了一个不可修改的对象。正如这个库的名字一样，将普通的对象通过immutable.js中提供的'fromJS'方法能够将一个普通的对象加工成一个immutable对象，此时这个对象只能通过immutable提供的API进行修改或是其他操作。

### 3. Redux中间件——React-thunk 

> 一句话比较浅显的话来概括他的作用之一就是：在redux的action中原本只能返回一个对象，因为action本身仅仅只是负责数据的搬运工作，而用了redux-thunk这个中间件之后，能让action不仅仅只能返回一个对象还能返回一个函数

我们在使用这个中间件之后可以可以把异步操作的代码写到action中，来减少组件代码中的逻辑代码的数量



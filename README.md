# 代码说明  

## index.js  
1. **canvas 和 c 的获取：**  
   - 通过 document.querySelector 获取 canvas 元素并设置其2D上下文。将画布的宽度设置为浏览器窗口的宽高，以便画布填满整个屏幕。

2. **Boundary类：**
   - 该类用于创建边界块对象
   - static width 和 static height: 表示边界块的宽和高（20x20像素）
   - constructor: 接收一个对象 { position } 作为参数，用于设置边界块的位置
   - draw 方法：使用浅蓝色在指定位置绘制一个20x20的矩形，表示边界块

3. **地图数组（map）：**
   - map 是一个二维数组，使用 '-' 表示边界，空格 ' ' 表示空区域
   - 通过它可以决定哪里需要绘制边界块

4. **创建边界块对象（boundaries）：**
   - 使用 forEach 遍历 map 数组
   - 当遇到 '-' 符号时，使用 Boundary 类创建一个边界块对象并添加到 boundaries 数组中
   - 通过 Boundary.width * j 和 Boundary.height * i 计算边界块的 x 和 y 坐标

5. **绘制所有边界块：**
   - 遍历 boundaries 数组中的每个边界块对象，调用 draw 方法将它们绘制在画布上  

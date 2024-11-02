// 获取画布元素并设置其上下文为2D
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// 设置画布的宽度和高度为窗口的宽度和高度
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// 定义一个Boundary类，表示边界块
class Boundary {
    // 设置边界块的宽度和高度为20
    static width = 20
    static height = 20
    // 构造函数，接收position参数，用于设置边界块的位置
    constructor({ position }) {
        this.position = position    // 保存位置
        this.width = 20    // 边界块的宽度
        this.height = 20    // 边界块的高度
    }

    // 绘制边界块的函数
    draw() {
        c.fillStyle = 'lightblue'    // 设置填充颜色为浅蓝色
        c.fillRect(this.position.x, this.position.y, this.width, this.height)    // 在指定位置绘制矩形
    }
}

// 定义地图数组，用来表示边界的位置
const map =
    [
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', ' ', ' ', ' ', ' ', ' ', '-'],
        ['-', ' ', '-', '-', '-', ' ', '-'],
        ['-', ' ', ' ', ' ', ' ', ' ', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
    ]

// 创建一个数组，用于存储所有的边界块对象
const boundaries = []

// 遍历地图数组，为每个符号创建边界块
map.forEach((row, i) => {    // 遍历行，i为当前行的索引
    row.forEach((symbol, j) =>    {    // 遍历列，j为当前列的索引
        switch (symbol) {
            case '-':    // 如果符号是'-'，表示需要创建一个边界块
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,    // 计算边界块的x坐标
                            y: Boundary.height * i    // 计算边界块的y坐标
                        }
                    })
                )
                break
        }
    })
})

// 遍历所有的边界块对象并绘制它们
boundaries.forEach((boundary) => { boundary.draw() })

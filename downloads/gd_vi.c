#include <stdio.h>
#include <gd.h>
#include <math.h>

#define WIDTH 600
#define HEIGHT 400
#define RED 0xDC143C  // Crimson color
#define YELLOW 0xFFFF00

// 函数：绘制五角星
void drawStar(gdImagePtr im, int x, int y, int outerRadius, int innerRadius, int color) {
    double angle = -M_PI / 2.0;  // 五角星的起始角度

    gdPoint starPoints[10];

    // 计算五角星的十个顶点坐标
    for (int i = 0; i < 10; i++) {
        int radius = i % 2 == 0 ? outerRadius : innerRadius;
        starPoints[i].x = x + radius * cos(angle);
        starPoints[i].y = y + radius * sin(angle);
        angle += M_PI / 5.0;  // 两个相邻顶点之间的夹角
    }

    // 用指定颜色填充五角星
    gdImageFilledPolygon(im, starPoints, 10, color);
}

// 函数：绘制越南国旗
void drawVietnamFlag() {
    gdImagePtr im;
    FILE *output;

    im = gdImageCreateTrueColor(WIDTH, HEIGHT);
    output = fopen("./../images/vietnam_flag.png", "wb");

    // 绘制红色背景
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, RED);

    // 在中心位置绘制黄色五角星
    int starSize = 60;
    int starX = WIDTH / 2;
    int starY = HEIGHT / 2;

    drawStar(im, starX, starY, starSize, starSize / 2, YELLOW);

    // 将图像保存为PNG文件
    gdImagePng(im, output);
    fclose(output);
    gdImageDestroy(im);
}

// 主函数
int main() {
    // 调用绘制越南国旗的函数
    drawVietnamFlag();
    return 0;
}

#include <stdio.h>
#include <gd.h>

#define WIDTH 810  // 俄罗斯国旗的长度
#define HEIGHT 540  // 俄罗斯国旗的高度
#define WHITE 0xFFFFFF  // 白色
#define BLUE 0x0033A0  // 蓝色
#define RED 0xD52B1E  // 红色

void drawRussiaFlag() {
    gdImagePtr im;
    FILE *output;

    im = gdImageCreateTrueColor(WIDTH, HEIGHT);
    output = fopen("./../images/russia_flag.png", "wb");

    // 绘制白色背景
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, WHITE);

    // 计算横向条纹的高度
    int stripeHeight = HEIGHT / 3;

    // 绘制蓝色横向条纹
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, stripeHeight - 1, BLUE);

    // 绘制白色横向条纹
    gdImageFilledRectangle(im, 0, stripeHeight, WIDTH - 1, 2 * stripeHeight - 1, WHITE);

    // 绘制红色横向条纹
    gdImageFilledRectangle(im, 0, 2 * stripeHeight, WIDTH - 1, HEIGHT - 1, RED);

    // 将图像保存为PNG文件
    gdImagePng(im, output);
    fclose(output);
    gdImageDestroy(im);
}

int main() {
    // 调用绘制俄罗斯国旗的函数
    drawRussiaFlag();
    return 0;
}

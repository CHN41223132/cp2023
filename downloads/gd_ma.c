#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_us_flag(gdImagePtr img);

int main() {
    // 美國國旗的寬度和高度
    int width = 810;
    int height = (int)(width * 2.0 / 3.0);

    // 創建 GD 圖片物件
    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    // 呼叫繪圖函數
    draw_us_flag(img);

    // 開啟輸出檔案
    FILE *outputFile = fopen("us_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }

    // 將圖片寫入檔案
    gdImagePng(img, outputFile);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}

void draw_us_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    int white = gdImageColorAllocate(img, 255, 255, 255);
    int red = gdImageColorAllocate(img, 191, 10, 48);
    int blue = gdImageColorAllocate(img, 0, 40, 104);

    // 畫出13條水平紅白相間的條紋
    int stripeHeight = height / 13;
    for (int i = 0; i < 13; i++) {
        int color = (i % 2 == 0) ? red : white;
        gdImageFilledRectangle(img, 0, i * stripeHeight, width - 1, (i + 1) * stripeHeight - 1, color);
    }

    // 藍色方形區域
    int blueWidth = (int)(width * 2.0 / 5.0);
    gdImageFilledRectangle(img, 0, 0, blueWidth - 1, stripeHeight * 7 - 1, blue);

    // 繪製50顆星星
    int starRadius = stripeHeight * 4 / 5;
    int starSpacing = stripeHeight * 2;
    for (int row = 0; row < 9; row++) {
        for (int col = 0; col < 6; col++) {
            if ((row % 2 == 0 && col % 2 == 0) || (row % 2 == 1 && col % 2 == 1)) {
                int x = blueWidth + col * starSpacing;
                int y = row * starSpacing;
                gdImageFilledEllipse(img, x, y, starRadius, starRadius, white);
            }
        }
    }

    // 調整星星位置
    for (int row = 0; row < 5; row++) {
        for (int col = 0; col < 6; col++) {
            if ((row % 2 == 0 && col % 2 == 1) || (row % 2 == 1 && col % 2 == 0)) {
                int x = blueWidth + col * starSpacing - starSpacing / 2;
                int y = stripeHeight + row * starSpacing;
                gdImageFilledEllipse(img, x, y, starRadius, starRadius, white);
            }
        }
    }
}

#include <stdio.h>
#include <gd.h>

void draw_germany_flag(gdImagePtr img);

int main() {
    // 德國國旗的寬度和高度
    int width = 900;
    int height = 600;

    // 創建 GD 圖片物件
    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    // 呼叫繪圖函數
    draw_germany_flag(img);

    // 開啟輸出檔案
    FILE *outputFile = fopen("germany_flag.png", "wb");
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

void draw_germany_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    int black = gdImageColorAllocate(img, 0, 0, 0);
    int red = gdImageColorAllocate(img, 255, 0, 0);
    int yellow = gdImageColorAllocate(img, 255, 204, 0);

    // 上方橫條 - 黑色
    gdImageFilledRectangle(img, 0, 0, width, height / 3, black);
    // 中間橫條 - 紅色
    gdImageFilledRectangle(img, 0, height / 3, width, 2 * height / 3, red);
    // 下方橫條 - 黃色
    gdImageFilledRectangle(img, 0, 2 * height / 3, width, height, yellow);
}

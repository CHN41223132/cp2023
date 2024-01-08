#include <stdio.h>
#include <gd.h>

void draw_france_flag(gdImagePtr img);

int main() {
    // 烏克蘭國旗的寬度和高度
    int width = 510;
    int height = (int)(width * 2.0 / 3.0);

    // 創建 GD 圖片物件
    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    // 呼叫繪圖函數
    draw_france_flag(img);

    // 開啟輸出檔案
    FILE *outputFile = fopen("france_flag.png", "wb");
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

void draw_france_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    int blue = gdImageColorAllocate(img, 0, 85, 164);
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int red = gdImageColorAllocate(img, 239, 65, 53);

    // 畫出三個垂直條紋
    int stripeWidth = width / 3;
    gdImageFilledRectangle(img, 0, 0, stripeWidth - 1, height - 1, blue);
    gdImageFilledRectangle(img, stripeWidth, 0, 2 * stripeWidth - 1, height - 1, white);
    gdImageFilledRectangle(img, 2 * stripeWidth, 0, width - 1, height - 1, red);
}

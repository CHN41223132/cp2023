#include <stdio.h>
#include <gd.h>

void draw_Ukraine_flag(gdImagePtr img);

int main() {
    // 烏克蘭國旗的寬度和高度
    int width = 510;
    int height = (int)(width * 2.0 / 3.0);

    // 創建 GD 圖片物件
    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    // 呼叫繪圖函數
    draw_Ukraine_flag(img);

    // 開啟輸出檔案
    FILE *outputFile = fopen("Ukraine   _flag.png", "wb");
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

void draw_Ukraine_flag(gdImagePtr img) {
    int width = gdImageSX(img);// 取得圖像的寬度
    int height = gdImageSY(img);// 取得圖像的高度

    int blue = gdImageColorAllocate(img, 0, 85, 164);
    int yellow = gdImageColorAllocate(img, 255, 255, 0);
  // 將整個畫布填充為藍色
  gdImageFilledRectangle(img, 0, 0, width, height, blue);

    // 畫出兩個橫向條紋
  int stripeWidth = width / 2;
  // 上方橫條 - 黃色
  gdImageFilledRectangle(img, 0, 0, width, height / 2, yellow);
}

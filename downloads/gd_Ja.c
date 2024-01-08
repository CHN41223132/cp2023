#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_japan_flag(gdImagePtr img);
void draw_red_sun(gdImagePtr img, int x, int y, int size, int color);

int main() {
    // 旗幟原始寬度
    int originalWidth = 1200;
    // 旗幟原始高度
    int originalHeight = (int)(originalWidth * 2.0 / 3.0);

    // 創建原始尺寸的圖像
    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);
    gdImageAlphaBlending(img, 0);

    // 繪製日本國旗
    draw_japan_flag(img);

    // 新的寬度和高度以符合 "images" 資料夾
    int newWidth = 510; // 新的旗幟寬度
    int newHeight = (int)(newWidth * 2.0 / 3.0); // 新的旗幟高度

    // 創建新尺寸的圖像並進行縮放
    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);
    gdImageAlphaBlending(resizedImage, 0);
    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);

    // 開啟輸出檔案
    FILE *outputFile = fopen("./../images/japan_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }

    // 將新尺寸的圖像寫入檔案
    gdImagePng(resizedImage, outputFile);
    fclose(outputFile);

    // 釋放記憶體
    gdImageDestroy(img);
    gdImageDestroy(resizedImage);

    return 0;
}

void draw_japan_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    // 創建一個白色背景
    int white = gdImageColorAllocate(img, 255, 255, 255);
    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);

    // 繪製紅色圓圈（太陽）
    int red = gdImageColorAllocate(img, 255, 0, 0);
    int center_x = width / 2;
    int center_y = height / 2;
    int radius = (int)((width * 2) / 3);
    draw_red_sun(img, center_x, center_y, radius, red);
}

void draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {
    // 減小 size 的值，例如將其值減半
    size = size / 2;
    gdImageArc(img, x, y, size, size, 0, 360, color);
    gdImageFillToBorder(img, x, y, color, color);
}

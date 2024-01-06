#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_usa_flag(gdImagePtr img);  // 定義繪製美國國旗的函數
void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);  // 定義繪製星星的函數

int main() {
    int width = 800;
    int height = (int)(width / 1.9);

    // 創建 GD 圖片物件
    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    // 呼叫繪圖函數
    draw_usa_flag(img);

    // 開啟輸出檔案
    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "打開輸出文件時出錯。\n");
        return 1;
    }

    // 將圖片寫入檔案
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}

// 繪製美國國旗
void draw_usa_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, white, blue;
    // 定義三種顏色值
    red = gdImageColorAllocate(img, 178, 34, 52);  // 紅色條紋
    white = gdImageColorAllocate(img, 255, 255, 255);  // 白色條紋
    blue = gdImageColorAllocate(img, 60, 59, 110);  // 藍色矩形

    int stripe_height = height / 13;  // 條紋高度
    int stripe_width = width;
    int star_size = (int)(0.0308 * height);  // 星星大小

    // 繪製13條水平紅白相間的條紋
    for (int y = 0; y < height; y += stripe_height) {
        if (y / stripe_height % 2 == 0) {
            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);
        } else {
            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);
        }
    }

    // 繪製藍色矩形區域
    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);

    int star_spacing_x = (int)(0.129 * height);  // 横向星星之间的间距
    int star_spacing_y = (int)(0.054 * height);  // 纵向星星之间的间距
    int star_start_x = (int)(0.125 * height);  // 星星的起始X位置
    int star_start_y = (int)(0.0485 * height);  // 星星的起始Y位置

    // 繪製50顆星星
    for (int row = 0; row < 9; row++) {
        int starsPerRow = (row % 2 == 0) ? 6 : 5;

        // 計算2、4、6和8排星星的偏移量
        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;

        for (int star = 0; star < starsPerRow; star++) {
            int x = star_start_x + star * star_spacing_x + offset_x;

            // 旋轉角度（以弧度為單位）
            double rotation_angle = M_PI / 5; // 五角星的旋轉角度

            int y = star_start_y + row * star_spacing_y;
            draw_star(img, x, y, star_size, white, rotation_angle);
        }
    }
}

// 繪製星星
void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {
    gdPoint points[10];

    for (int i = 0; i < 10; i++) {
        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;
        int radius = (i % 2 == 0) ? size : size / 2;
        points[i].x = x + radius * cos(angle);
        points[i].y = y + radius * sin(angle);
    }

    // 用指定的顏色填充星星
    gdImageFilledPolygon(img, points, 10, color);
}

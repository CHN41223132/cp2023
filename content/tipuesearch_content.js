var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://github.com/CHN41223132/cp2023.git (個人倉儲) \n https://github.com/41223133/cp2023_ag3.git (群組倉儲) \n', 'tags': '', 'url': 'About.html'}, {'title': 'w3', 'text': '有關電腦輔助設計室網路設定說明 \n 處理 .replit 與 replit.nix 中的舊 Python 設定問題 \n 說明如何為 site-個人github帳號 倉儲設定 Github Pages \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '建立線上考試帳號 \n 依據\xa0 112 學年度第一學期教師授課表 中的學員修課名單, 利用 Teams 中的 Excel 取學員 Github 帳號. \n 各學員自行建立 Github 評分倉儲 cp2023, 並設定 Github Pages \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w7', 'text': '學習gd線條繪製 \n 如何建立各組協同網站說明影片 \n 如何將協同網站設定協同者後, import 進入 Replit 說明影片 \n 說明如何進行基本的 gd 繪圖 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '學習遠端與倉儲帳號連接 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w11', 'text': '這星期教更改網路為IPV6，並存到隨身碟以便後續使用。 \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w13', 'text': '這星期教學 如何使用近端編輯網站，這是我覺得是這堂課最難的地方，沒有成功地學會如何使用近端。 \n', 'tags': '', 'url': 'w13.html'}, {'title': '心得', 'text': '這堂課我剛開始看到的時候我就不是很明白這堂課要學甚麼，第一堂課開始我努力地去消化老師所教的課程內容，但到後面我開始分心，進而導致跟不上老師所教學的內容，但我後來清醒了，利用假日去找汶哲，一步步向他學習上課教的內容，雖然說我沒有學到很徹底，但我目前學會了如何利用Replit和Github建立網站，在Replit上畫國旗，不會時利用GPT來解答。總而言之這堂課我學到了很多未知的知識。 \n \n ↑此為叫GPT寫出俄國國旗截圖 \n \n ↑嘗試自己畫烏國國旗 \n \n ↑畫出來顏色有異 \n \n ↑尋找錯誤點 \n \n ↑詢問GTP為何會這樣 \n \n ↑嘗試除錯 \n \n ↑嘗試無果，用替代方法:把底鋪藍色 \n', 'tags': '', 'url': '心得.html'}, {'title': '畫烏克蘭國旗心得', 'text': '之前老師要我們畫國旗時，我不當一回事，只是拿別人的成果來抄。今天我才嘗試畫一個簡單的烏克蘭國旗，我就很費腦袋了，我不敢想像能畫出美國、韓國、甚至是老師w15出的作業的同學是花費了多大的努力才完成的。我為我之前的行為感到羞愧，我會繼續努力的摸索程式。今天上課才發現我顏色上下畫反了，緊急訂正。 \n (希望不會被當) \n \n', 'tags': '', 'url': '畫烏克蘭國旗心得.html'}, {'title': 'w15', 'text': '老師叫我們畫出他指定的圖形並錄影，但我沒有完全了解程式，所以我不會畫。 \n', 'tags': '', 'url': 'w15.html'}, {'title': 'homework', 'text': '', 'tags': '', 'url': 'homework.html'}, {'title': '烏克蘭(自己利用之前程式和GTP寫出來的)', 'text': '#include <stdio.h> #include <gd.h> \n void draw_Ukraine_flag(gdImagePtr img); \n int main() {  // 烏克蘭國旗的寬度和高度  int width = 510;  int height = (int)(width * 2.0 / 3.0); \n // 創建 GD 圖片物件  gdImagePtr img = gdImageCreateTrueColor(width, height);  gdImageAlphaBlending(img, 0); \n // 呼叫繪圖函數  draw_Ukraine_flag(img); \n // 開啟輸出檔案  FILE *outputFile = fopen("Ukraine _flag.png", "wb");  if (outputFile == NULL) {  fprintf(stderr, "Error opening the output file.\\n");  return 1;  } \n // 將圖片寫入檔案  gdImagePng(img, outputFile);  fclose(outputFile);  gdImageDestroy(img); \n return 0; } \n void draw_Ukraine_flag(gdImagePtr img) {  int width = gdImageSX(img);// 取得圖像的寬度  int height = gdImageSY(img);// 取得圖像的高度 \n int blue = gdImageColorAllocate(img, 0, 85, 164);  int yellow = gdImageColorAllocate(img, 255, 255, 0);  // 將整個畫布填充為藍色  gdImageFilledRectangle(img, 0, 0, width, height, yellow); \n // 畫出兩個橫向條紋  int stripeWidth = width / 2;  // 上方橫條 - 黃色  gdImageFilledRectangle(img, 0, 0, width, height / 2, blue); } \n \n \n', 'tags': '', 'url': '烏克蘭(自己利用之前程式和GTP寫出來的).html'}, {'title': '台灣', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_roc_flag(img);\n \n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n   \n}\n \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n}\n \n \n', 'tags': '', 'url': '台灣.html'}, {'title': '美國', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);  // 定義繪製美國國旗的函數\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);  // 定義繪製星星的函數\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    // 創建 GD 圖片物件\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    // 呼叫繪圖函數\n    draw_usa_flag(img);\n\n    // 開啟輸出檔案\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打開輸出文件時出錯。\\n");\n        return 1;\n    }\n\n    // 將圖片寫入檔案\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\n// 繪製美國國旗\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 定義三種顏色值\n    red = gdImageColorAllocate(img, 178, 34, 52);  // 紅色條紋\n    white = gdImageColorAllocate(img, 255, 255, 255);  // 白色條紋\n    blue = gdImageColorAllocate(img, 60, 59, 110);  // 藍色矩形\n\n    int stripe_height = height / 13;  // 條紋高度\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height);  // 星星大小\n\n    // 繪製13條水平紅白相間的條紋\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height);  // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height);  // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height);  // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height);  // 星星的起始Y位置\n\n    // 繪製50顆星星\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 計算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋轉角度（以弧度為單位）\n            double rotation_angle = M_PI / 5; // 五角星的旋轉角度\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\n// 繪製星星\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的顏色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n}\n \n \n', 'tags': '', 'url': '美國.html'}, {'title': '中國', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n// 聲明 draw_star 函數\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\n// 聲明 draw_chinese_flag 函數\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\n    int width = 510; // 國旗寬度\n    int height = (int)(width * 2.0 / 3.0); // 國旗高度\n\n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n\n    // 呼叫繪圖函數\n    draw_chinese_flag(im);\n\n    FILE *outputFile = fopen("./../images/669.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打開輸出文件時出錯。\\n");\n        return 1;\n    }\n\n    // 將圖片寫入檔案\n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n\n    return 0;\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    // 計算星形的五個外點和五個內點\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n\n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n\n    // 使用 gdImageFilledPolygon 繪製星形\n    gdImageFilledPolygon(img, points, 10, color);\n}\n\nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n\n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n\n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n\n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n \n \n \n', 'tags': '', 'url': '中國.html'}, {'title': '日本', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // 旗幟原始寬度\n    int originalWidth = 1200;\n    // 旗幟原始高度\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    \n    // 創建原始尺寸的圖像\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n\n    // 繪製日本國旗\n    draw_japan_flag(img);\n\n    // 新的寬度和高度以符合 "images" 資料夾\n    int newWidth = 510; // 新的旗幟寬度\n    int newHeight = (int)(newWidth * 2.0 / 3.0); // 新的旗幟高度\n\n    // 創建新尺寸的圖像並進行縮放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\n    // 開啟輸出檔案\n    FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    // 將新尺寸的圖像寫入檔案\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n\n    // 釋放記憶體\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 創建一個白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n    // 繪製紅色圓圈（太陽）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n    // 減小 size 的值，例如將其值減半\n    size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n}\n \n \n \n \n', 'tags': '', 'url': '日本.html'}, {'title': '義大利', 'text': '#include <stdio.h>\n#include <gd.h>\n \nint main() {\n    int width = 300;  // 宽度\n    int height = 200; // 高度\n \n    gdImagePtr image = gdImageCreateTrueColor(width, height);\n \n    if (image == NULL) {\n        printf("Failed to create image.\\n");\n        return 1;\n    }\n \n    // 确定颜色索引\n    int green = gdImageColorAllocate(image, 0, 128, 0);\n    int white = gdImageColorAllocate(image, 255, 255, 255);\n    int red = gdImageColorAllocate(image, 255, 0, 0);\n \n    // 填充颜色\n    gdImageFilledRectangle(image, 0, 0, width / 3, height, green);\n    gdImageFilledRectangle(image, width / 3, 0, (width / 3) * 2, height, white);\n    gdImageFilledRectangle(image, (width / 3) * 2, 0, width, height, red);\n \n    FILE *outputFile;\n    outputFile = fopen("./../images/italian_flag.png", "wb");\n \n    if (outputFile == NULL) {\n        printf("Failed to open file for writing.\\n");\n        return 1;\n    }\n \n    gdImagePng(image, outputFile);\n    fclose(outputFile);\n \n    gdImageDestroy(image);\n \n    return 0;\n} \n \n', 'tags': '', 'url': '義大利.html'}, {'title': '越南', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n#define WIDTH 600\n#define HEIGHT 400\n#define RED 0xDC143C  // Crimson color\n#define YELLOW 0xFFFF00\n\n// 函数：绘制五角星\nvoid drawStar(gdImagePtr im, int x, int y, int outerRadius, int innerRadius, int color) {\n    double angle = -M_PI / 2.0;  // 五角星的起始角度\n\n    gdPoint starPoints[10];\n\n    // 计算五角星的十个顶点坐标\n    for (int i = 0; i < 10; i++) {\n        int radius = i % 2 == 0 ? outerRadius : innerRadius;\n        starPoints[i].x = x + radius * cos(angle);\n        starPoints[i].y = y + radius * sin(angle);\n        angle += M_PI / 5.0;  // 两个相邻顶点之间的夹角\n    }\n\n    // 用指定颜色填充五角星\n    gdImageFilledPolygon(im, starPoints, 10, color);\n}\n\n// 函数：绘制越南国旗\nvoid drawVietnamFlag() {\n    gdImagePtr im;\n    FILE *output;\n\n    im = gdImageCreateTrueColor(WIDTH, HEIGHT);\n    output = fopen("./../images/vietnam_flag.png", "wb");\n\n    // 绘制红色背景\n    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, RED);\n\n    // 在中心位置绘制黄色五角星\n    int starSize = 60;\n    int starX = WIDTH / 2;\n    int starY = HEIGHT / 2;\n\n    drawStar(im, starX, starY, starSize, starSize / 2, YELLOW);\n\n    // 将图像保存为PNG文件\n    gdImagePng(im, output);\n    fclose(output);\n    gdImageDestroy(im);\n}\n\n// 主函数\nint main() {\n    // 调用绘制越南国旗的函数\n    drawVietnamFlag();\n    return 0;\n}\n \n \n', 'tags': '', 'url': '越南.html'}, {'title': '德國', 'text': '#include <stdio.h>\n#include <gd.h>\n\nvoid draw_germany_flag(gdImagePtr img);\n\nint main() {\n    // 德國國旗的寬度和高度\n    int width = 900;\n    int height = 600;\n\n    // 創建 GD 圖片物件\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    // 呼叫繪圖函數\n    draw_germany_flag(img);\n\n    // 開啟輸出檔案\n    FILE *outputFile = fopen("germany_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    // 將圖片寫入檔案\n    gdImagePng(img, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_germany_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int yellow = gdImageColorAllocate(img, 255, 204, 0);\n\n    // 上方橫條 - 黑色\n    gdImageFilledRectangle(img, 0, 0, width, height / 3, black);\n    // 中間橫條 - 紅色\n    gdImageFilledRectangle(img, 0, height / 3, width, 2 * height / 3, red);\n    // 下方橫條 - 黃色\n    gdImageFilledRectangle(img, 0, 2 * height / 3, width, height, yellow);\n}\n \n \n', 'tags': '', 'url': '德國.html'}, {'title': '法國', 'text': '#include <stdio.h>\n#include <gd.h>\n\nvoid draw_france_flag(gdImagePtr img);\n\nint main() {\n    // 法國國旗的寬度和高度\n    int width = 510;\n    int height = (int)(width * 2.0 / 3.0);\n\n    // 創建 GD 圖片物件\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    // 呼叫繪圖函數\n    draw_france_flag(img);\n\n    // 開啟輸出檔案\n    FILE *outputFile = fopen("france_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    // 將圖片寫入檔案\n    gdImagePng(img, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_france_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    int blue = gdImageColorAllocate(img, 0, 85, 164);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    int red = gdImageColorAllocate(img, 239, 65, 53);\n\n    // 畫出三個垂直條紋\n    int stripeWidth = width / 3;\n    gdImageFilledRectangle(img, 0, 0, stripeWidth - 1, height - 1, blue);\n    gdImageFilledRectangle(img, stripeWidth, 0, 2 * stripeWidth - 1, height - 1, white);\n    gdImageFilledRectangle(img, 2 * stripeWidth, 0, width - 1, height - 1, red);\n}\n \n \n', 'tags': '', 'url': '法國.html'}, {'title': '俄羅斯', 'text': '#include <stdio.h>\n#include <gd.h>\n\n#define WIDTH 810  // 俄罗斯国旗的长度\n#define HEIGHT 540  // 俄罗斯国旗的高度\n#define WHITE 0xFFFFFF  // 白色\n#define BLUE 0x0033A0  // 蓝色\n#define RED 0xD52B1E  // 红色\n\nvoid drawRussiaFlag() {\n    gdImagePtr im;\n    FILE *output;\n\n    im = gdImageCreateTrueColor(WIDTH, HEIGHT);\n    output = fopen("./../images/russia_flag.png", "wb");\n\n    // 绘制白色背景\n    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, WHITE);\n\n    // 计算横向条纹的高度\n    int stripeHeight = HEIGHT / 3;\n\n    // 绘制蓝色横向条纹\n    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, stripeHeight - 1, BLUE);\n\n    // 绘制白色横向条纹\n    gdImageFilledRectangle(im, 0, stripeHeight, WIDTH - 1, 2 * stripeHeight - 1, WHITE);\n\n    // 绘制红色横向条纹\n    gdImageFilledRectangle(im, 0, 2 * stripeHeight, WIDTH - 1, HEIGHT - 1, RED);\n\n    // 将图像保存为PNG文件\n    gdImagePng(im, output);\n    fclose(output);\n    gdImageDestroy(im);\n}\n\nint main() {\n    // 调用绘制俄罗斯国旗的函数\n    drawRussiaFlag();\n    return 0;\n}\n \n \n \n', 'tags': '', 'url': '俄羅斯.html'}, {'title': 'w17＆w18', 'text': '\n \n', 'tags': '', 'url': 'w17＆w18.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};
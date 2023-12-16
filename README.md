# cmsite
cmsimde template uses mdecycu/cmsimde as submodule

On Replit:

for cmsite: git submodule update --init --recursive 

for cmsimde_site: cmsimde is as directory not submodule

for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent

def drawjapaneseflag():
    width = 30  # 日本國旗的寬度
    height = 20  # 日本國旗的高度

    RED_BG = "\033[41m"
    WHITE_BG = "\033[47m"
    RESET = "\033[0m"

    # 上半部分
    for _ in range(height // 2):
        print(RED_BG + "  " * width + RESET)

    # 中央圓圈
    for _ in range(height % 2):
        print(
            RED_BG + "  " * ((width - 10) // 2) + 
            WHITE_BG + "  " * 10 + 
            RED_BG + "  " * ((width - 10) // 2) + RESET
        )

    # 下半部分，與上半部分相同
    for _ in range(height // 2):
        print(RED_BG + "  " * width + RESET)

if _name == "main_":
    drawjapaneseflag()

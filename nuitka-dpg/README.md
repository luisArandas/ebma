trying to compile dearpygui


[macos]<br>

python3 -m nuitka --clang --follow-imports --enable-plugin=pyside6 --standalone --onefile main.py <br>
./main.bin

[windows10]<br>

python -m nuitka --lto=no --clang  --onefile --windows-icon-from-ico=../res/images/logo_small_icon_only_inverted.ico --plugin-enable=numpy --enable-plugin=anti-bloat --noinclude-pytest-mode=nofollow --noinclude-setuptools-mode=nofollow --plugin-enable=pylint-warnings --plugin-enable=tk-inter --windows-disable-console  ../main.py' <br>

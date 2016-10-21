# HRMarionette
フロントエンド開発用のJavascriptライブラリ

MarionetteJSを少しばかり使いやすくした。

## 環境構築

### リポジトリのクローン
```shell
# Clone HRMarionette
$ git clone https://github.com/hashimotoryoh/HRMarionette.git
$ cd HRMarionette
```

### NodeJSのインストール
```shell
# Install NodeJS
$ brew install node
$ node -v
```

※ `Homebrew`利用

### Bowerのインストール
```shell
# Install Bower
$ npm install bower -g
$ bower -v

# Install Bower Components
$ bower install

# Check Installation
$ bower list
HRMarionette <HRMarionette Directory>
├─┬ backbone-super#1.0.2 (latest is 1.0.4)
│ └── backbone#1.1.2 (1.3.3 available)
├─┬ backbone.marionette#2.2.2 (latest is 3.1.0)
│ ├─┬ backbone#1.1.2 (latest is 1.3.3)
│ │ └── underscore#1.8.3
│ ├─┬ backbone.babysitter#0.1.12 (latest is 1.0.0-pre.2)
│ │ ├── backbone#1.1.2 (1.2.3 available, latest is 1.3.3)
│ │ └── underscore#1.8.3
│ ├─┬ backbone.wreqr#1.3.7
│ │ ├── backbone#1.1.2
│ │ └── underscore#1.8.3
│ ├── jquery#2.2.4 (latest is 3.1.1)
│ └── underscore#1.8.3 incompatible with 1.4.4 - 1.6.0 (1.6.0 available, latest is 1.8.3)
├── handlebars#2.0.0 (latest is 4.0.5)
├── require-css#0.1.8
├── requirejs#2.1.15 (latest is 2.3.2)
├── requirejs-hbs#0.1.1
└── requirejs-text#2.0.12 (latest is 2.0.15)
```

最後`bower list`で↑のように表示されればOK。

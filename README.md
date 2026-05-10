# Choose the Number

A small browser game I built by converting a Python script into HTML, CSS and JavaScript. Nothing fancy — just a clean number guessing game that runs straight in the browser, no installs needed.

---

## What it does

The game picks a random number between 1 and 100. You have 5 tries to guess it. After each guess it tells you if you went too high or too low. If you use all 5 tries without getting it, it shows you the answer. Simple as that.

---

## Files in this project

```
PY/
├── gameata.html      — the main page, open this in your browser
├── gameStyle.css     — all the styling
├── scriptFile.js     — the game logic
└── randomGame.py     — the original Python script this was based on
```

---

## How to run it

Just double click `gameata.html` and it opens in your browser. No server, no setup, nothing to install.

If you use VS Code, you can also right click the file and hit **Open with Live Server** if you have that extension.

---

## How the Python code maps to JavaScript

The original script was written in Python. Here's roughly how each part translated over:

| Python | JavaScript |
|---|---|
| `random.randint(1, 100)` | `Math.floor(Math.random() * 100) + 1` |
| `input("Enter your guess")` | an `<input>` field in the HTML |
| `print("Too low!")` | updates a div's text content |
| `print("Too high!")` | same, different color |
| `count > 5` + `sys.exit()` | disables the input and shows a play again button |
| running the script again | clicking the play again button calls `reset()` |

---

## You can find the orignal python script in the file name "randomGame.py". 

## Things I changed from the original

- The Python version let you guess forever until you got it (the `count > 5` check was inside the loop so you still got that last guess). The web version locks you out cleanly after 5.
- Added a guess history so you can see all your previous guesses in one line.
- Added a play again button instead of having to rerun the script.
- Enter key works the same as clicking Submit.

---

## Built with

- HTML
- CSS
- Vanilla JavaScript
- Originally written in Python

I used just three files, no frameworks, no libraries, no dependencies.
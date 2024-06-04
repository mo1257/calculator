$(document).ready(function() {
  let expression = "";

  const operators = ["+", "-", "*", "/"];

  function calculate(expression) {
    try {
      return new Function(`"use strict"; return (${expression})`)();
    } catch (e) {
      return "Error";
    }
  }

  $(".button").click(function() {
    const value = $(this).val();

    if (value === "=") {
      expression = calculate(expression).toString();
      $("#result").val(expression);
    } else if (value === "AC") {
      expression = "";
      $("#result").val("");
    } else {
      const lastChar = expression.slice(-1);
      if (!(operators.includes(lastChar) && operators.includes(value)) && !(lastChar === "." && value === ".")) {
        if (expression === "0" && value === ".") {
          expression += value;
        } else if (expression === "0" && !operators.includes(value)) {
          expression = value;
        } else {
          expression += value;
        }
        $("#result").val(expression);
      }
    }
  });
});
//1. `$(document).ready(function() { ... });`:
//- ページが読み込まれた後に、内部の関数が実行される。

//2. `let expression = "";`:
//- 数式を格納するための変数。

//3. `const operators = ["+", "-", "*", "/"];`:
//- 使用できる演算子のリスト。

//4. `function calculate(expression) { ... }`:
//- 数式を計算する関数。例外が発生した場合は"Error"を返す。

//5. `$(".button").click(function() { ... });`:
//- ボタンがクリックされたときの処理。

//6. `const value = $(this).val();`:
//- クリックされたボタンの値を取得。

//7. `if (value === "=") { ... }`:
//- "="が押された場合、計算結果を表示。

//8. `else if (value === "AC") { ... }`:
//- "AC"が押された場合、数式をリセット。

//9. `else { ... }`:
//- 他のボタンが押された場合の処理。連続した演算子を防止し、数式を更新。

//1. `const lastChar = expression.slice(-1);`
//- `expression`の最後の文字を取得します。

//2. `if (!(operators.includes(lastChar) && operators.includes(value)))`
//- 最後の文字と新しい入力値の両方が演算子でないことを確認します。

//3. `if (expression === "0" && !operators.includes(value))`
//- `expression`が"0"で、新しい値が演算子でない場合、`expression`を新しい値に置き換えます。

//4. `else { expression += value; }`
//- それ以外の場合、新しい値を`expression`に追加します。

//5. `$("#result").val(expression);`
//- 更新された`expression`を表示します。

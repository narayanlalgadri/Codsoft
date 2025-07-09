function displayvalue(value) {
  const display = document.getElementById('display');
  const op = ['+', '-', '*', '/'];
  const op1 = ['*', '/'];
  const lc = display.value.slice(-1);

  if (op.includes(value) && op.includes(lc)) {
    return;
  }

  if (display.value === '' && op1.includes(value)) {
    return;
  }

  display.value += value;
}

function clearbtn() {
  document.getElementById('display').value = '';
}

function deletebtn() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function equal() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = '';
  }
}

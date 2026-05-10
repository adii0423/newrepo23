function rand() {
  return Math.floor(Math.random() * 100) + 1;
}

var secret = rand();
var count  = 0;
var guesses = [];

function guess() {
  var val   = parseInt(document.getElementById('inp').value);
  var msg   = document.getElementById('msg');
  var tries = document.getElementById('tries');
  var hist  = document.getElementById('hist');

  if (!val || val < 1 || val > 100) {
    msg.className   = 'msg';
    msg.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  count++;
  guesses.push(val);
  var left = 5 - count;

  if (val === secret) {
    msg.className   = 'msg win';
    msg.textContent = 'Correct! You got it in ' + count + (count === 1 ? ' try.' : ' tries.');
    tries.textContent = '';
    end();
  } else if (count >= 5) {
    msg.className   = 'msg lose';
    msg.textContent = 'Out of tries. The number was ' + secret + '.';
    tries.textContent = '';
    end();
  } else if (val < secret) {
    msg.className   = 'msg low';
    msg.textContent = 'Too low.';
    tries.textContent = left + ' ' + (left === 1 ? 'try' : 'tries') + ' left';
  } else {
    msg.className   = 'msg high';
    msg.textContent = 'Too high.';
    tries.textContent = left + ' ' + (left === 1 ? 'try' : 'tries') + ' left';
  }

  hist.textContent = guesses.length ? 'Guesses: ' + guesses.join(', ') : '';
  document.getElementById('inp').value = '';
  document.getElementById('inp').focus();
}

function end() {
  document.getElementById('inp').disabled             = true;
  document.getElementById('btn').disabled             = true;
  document.getElementById('restartBtn').style.display = 'block';
  document.getElementById('hist').textContent         = guesses.length ? 'Guesses: ' + guesses.join(', ') : '';
}

function reset() {
  secret  = rand();
  count   = 0;
  guesses = [];
  document.getElementById('inp').disabled             = false;
  document.getElementById('inp').value                = '';
  document.getElementById('btn').disabled             = false;
  document.getElementById('msg').textContent          = '';
  document.getElementById('msg').className            = 'msg';
  document.getElementById('tries').textContent        = '';
  document.getElementById('hist').textContent         = '';
  document.getElementById('restartBtn').style.display = 'none';
  document.getElementById('inp').focus();
}

document.getElementById('inp').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') guess();
});
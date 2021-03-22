const input = document.getElementById('search');

document.getElementById('search').addEventListener('keyup', function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById('button').click();
  }
});

function searchLink() {
  const amazonsearch = input.value;
  document.getElementById('amazon').innerHTML =
    'Here is a link to your search results';
  document.getElementById(
    'amazon'
  ).href = `https://www.amazon.com/s?k=${amazonsearch}&ref=nb_sb_noss_1`;
  document.getElementById('amazon').target = '_blank';

  const targetsearch = input.value;
  document.getElementById('target').innerHTML =
    'Here is a link to your search results';
  document.getElementById(
    'target'
  ).href = `https://www.target.com/s?searchTerm=${targetsearch}`;
  document.getElementById('target').target = '_blank';

  const walmartsearch = input.value;
  document.getElementById('walmart').innerHTML =
    'Here is a link to your search results';
  document.getElementById(
    'walmart'
  ).href = `https://www.walmart.com/search/?query=${walmartsearch}`;
  document.getElementById('walmart').target = '_blank';
}

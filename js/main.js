(function () {
  var source = document.getElementById("js-translate-source");
  var sourceValue = source.value;
  const target = document.getElementById("js-translate-target");
  const translateBtnJa = document.getElementById("js-translate-btn--ja");
  const translateBtnEn = document.getElementById("js-translate-btn--en");

  translateBtnEn.addEventListener("click", e => {
    sourceValue = source.value;
    var url = `https://script.google.com/macros/s/AKfycbw5i-VCdZcwGwHcImZCJEex471nEHAPthmaWGN8446bfhata55qgLvJ/exec?text=${sourceValue}&source=en&target=ja`;
    fetch(url)
      .then(res => res.json())
      .then(text => {
        target.innerHTML = text.text;
      });
  });

  translateBtnJa.addEventListener("click", e => {
    sourceValue = source.value;
    var url = `https://script.google.com/macros/s/AKfycbw5i-VCdZcwGwHcImZCJEex471nEHAPthmaWGN8446bfhata55qgLvJ/exec?text=${sourceValue}&source=ja&target=en`;
    fetch(url)
      .then(res => res.json())
      .then(text => {
        target.innerHTML = text.text;
      });
  });

})();
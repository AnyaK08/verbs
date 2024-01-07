let lng;

$(".js-lng").on("click", function () {
  lng = $(this).attr("id");
  //   console.log(lng);
  getAllVerbs(lng);
});

function getAllVerbs(lng) {
  // Инициализация строки HTML
  var htmlString = "<div class='row'>";
  let verbs;
  if (lng === "en") {
    verbs = en;
  } else {
    verbs = ro;
  }
  // Проход по массиву объектов
  for (var i = 0; i < verbs.length; i++) {
    // Получение значения параметра verb для текущего объекта
    var verbTranslation = verbs[i].verb;

    // Добавление элемента списка с текущим значением verb в строку HTML
    htmlString += "<div class='col-2'>" + verbTranslation + "</div>";
  }

  // Завершение строки HTML
  htmlString += "</div>";

  $("#verbs").html(htmlString);
}

var en = [
  {
    verb: "play - играть",
  },
  {
    verb: "swim - плавать",
  },
 
];

var ro = [
  {
    verb: "joaca - играть",
  },
  {
    verb: "înot - плавать",
  },
];

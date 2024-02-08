let lng;
let allVerbs;

$(".js-lng").on("click", function () {
  lng = $(this).attr("id");
  //   console.log(lng);
  getAllVerbs(lng);
});

function getAllVerbs(lng) {
  // Инициализация строки HTML
  var htmlString = "<div class='row'>";
  var lngObj;

  if (lng === "en") {
    lngObj = eng;
  } else {
    lngObj = ro;
  }

  allVerbs = lngObj.verbs;
  // Формируем HTML для всех глаголов выбранного языка
  // Проход по массиву объектов
  for (var i = 0; i < allVerbs.length; i++) {
    // Получение значения параметра verb для текущего объекта
    var verbTranslation = allVerbs[i].verb;
    // 

    // Добавление элемента списка с текущим значением verb в строку HTML
    htmlString +=
      "<div class='col-2'> <button class='btn btn-outline-info js-show'>" +
      verbTranslation +
      "</button> </div>";
  }

  // Завершение строки HTML
  htmlString += "</div>";
  // HTML с нужными глаголами помещаем в div с id "verbs"
  $("#verbs").html(htmlString);

  // помещаем местоимения выбраного языка в нужные ячейки таблицы
  $("#i").text(lngObj.pronouns[0]);
  $("#you").text(lngObj.pronouns[1]);
  $("#he").text(lngObj.pronouns[2]);
  $("#we").text(lngObj.pronouns[3]);
  $("#wy").text(lngObj.pronouns[4]);
  $("#they").text(lngObj.pronouns[5]);
}

// навешиваем обработчик событий на элемент с классом 
// .js-show, которого еще нет на странице в момент загрузки скрипта 
$("#verbs").on("click", ".js-show", function () {
  console.log(this);
  console.log($(this));
  const verb = $(this).text();
  //  console.log(verb);
$("#selected_verb").text(verb);
  // Проход по массиву объектов
  for (var i = 0; i < allVerbs.length; i++) {
    if (verb === allVerbs[i].verb) {
      console.log(verb + " found!");
      $("#i_mean").text(allVerbs[i].forms[0]);
      $("#we_mean").text(allVerbs[i].forms[1]);
      $("#you_mean").text(allVerbs[i].forms[2]);
      $("#wy_mean").text(allVerbs[i].forms[3]);
      $("#he_mean").text(allVerbs[i].forms[4]);
      $("#they_mean").text(allVerbs[i].forms[5]);
    }
  }
});

var eng = {
  pronouns: ["I", "You", "He/She", "We", "You", "They"],
  verbs: [
    {
      verb: "play - играть",
      forms: ["play", "play", "plays", "play", "play", "play"],
    },
    {
      verb: "swim - плавать",
    },
    {
      verb: "be - быть",
    },
    {
      verb: "have - иметь",
    },
    {
      verb: "give - давать",
    },
    {
      verb: "take - брать",
    },
    {
      verb: "know - знать",
    },
    {
      verb: "understand - понимать",
    },
    {
      verb: "remember - помнить",
    },
    {
      verb: "help - помогать",
    },
  ],
};

var ro = {
  pronouns: ["Eu", "Tu", "El/Ea", "Noi", "Voi", "Ei/Ele"],
  verbs: [
    {
      verb: "joaca - играть",
      forms: ["joc" , "joci" , "joacă" , "jucăm" , "jucați" , "joacă"]
    },
    {
      verb: "înot - плавать",
    },
    {
      verb: "a fi - быть",
    },
    {
      verb: "a avea - иметь",
    },
    {
      verb: "a da - давать",
    },
    {
      verb: "a lua - брать",
    },
    {
      verb: "a sti - знать",
    },
    {
      verb: "a intelege - понимать",
    },
    {
      verb: "a aminti - помнить",
    },
    {
      verb: "a ajuta - помогать",
    },
  ],
};

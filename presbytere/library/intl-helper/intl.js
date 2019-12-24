Intl.UserLanguage = function(languages, availables){
    var languageNotFound = true;
    var language = languages[0];
    var i = 0;
    while(languageNotFound && i < languages.length){
        var preferedLanguage = languages[i++];

        for (var j = 0; j < availables.length && languageNotFound; j++) {
        if(preferedLanguage.startsWith(availables[j])){
            language = availables[j];
            languageNotFound = false;
        }
        }
    }

    return language;
}

Intl.BuildResources = function(pages, languages){
    var resources = {};

    pages.forEach(page => {
        languages.forEach(language => {
        $.ajax("components/" + page + "." + language + ".json").done(function(currentPageResource) {
            var r = $.extend(true, resources, currentPageResource);
        })
        })
    });

    return resources;
}
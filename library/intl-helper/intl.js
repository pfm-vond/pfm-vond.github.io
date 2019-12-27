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

if(window.Json === undefined)
{
    window.Json = {};
}

Json.Fusion = function(rootfolder, fileNames){
    var fusionedContent = {};

    fileNames.forEach(file => {        
        $.ajax({
            url: rootfolder + file + ".json",
            async: false,
        })
        .done(function(content) {
            var r = $.extend(true, fusionedContent, content);
        })
    });

    return fusionedContent;
}

Intl.BuildResources = function(rootfolder, resourceFiles, languages){
    var resources = {};

    languages.forEach(language => {
        var files = resourceFiles.map(x => x + "." + language)
        var currentPageResource = Json.Fusion(rootfolder, files);
        var current = {};
        current[language] = currentPageResource;
        $.extend(true, resources, current);
    });

    return resources;
}

Intl.Vue = function(resourceFiles, availableLanguages)
{
    Vue.use(httpVueLoader);
    
    return i18n = new VueI18n({
        locale: Intl.UserLanguage(window.navigator.languages, availableLanguages),
        fallbackLocale: availableLanguages[0],
        messages: Intl.BuildResources("content/resources/", resourceFiles, availableLanguages),
        dateTimeFormats: Json.Fusion("i18n/", [ "date" ])
    });
     
}
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

Intl.BuildResources = function(rootfolder, resourceFiles, languages){
    var resources = {};

    resourceFiles.forEach(resource => {
        languages.forEach(language => {
            $.ajax(
            {
                url: rootfolder + resource + "." + language + ".json",
                async: false
            }).done(function(currentPageResource) {
                var r = $.extend(true, resources, currentPageResource);
            })
        });
        $.ajax(
            {
                url: rootfolder + resource + ".json",
                async: false
            }).done(function(currentPageResource) {
            var r = $.extend(true, resources, currentPageResource);
        })
    });

    return resources;
}
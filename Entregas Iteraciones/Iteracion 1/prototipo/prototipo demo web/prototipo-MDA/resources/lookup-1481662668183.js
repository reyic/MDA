(function(window, undefined) {
  var dictionary = {
    "6103c78c-07c8-42c0-a21c-62e0cbe41112": "crear-ver alumno",
    "a0ddb61c-12e8-423b-993b-c65c1f2b9f5d": "crear-ver asignatura",
    "f9d36163-48eb-467c-9f12-7cec02735421": "eliminar alumno",
    "b0c8d07f-7004-4583-9896-81a3dce78928": "Asignar profesor",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Asignar alumno",
    "9c7d3e35-c584-45a1-9a07-e77da1e34dc1": "Desvincular profesor",
    "0f48dc8b-de1b-47d3-9fce-7e4484aac5ec": "Desvincular alumno",
    "0afa4a6e-b289-4451-8067-21d3299f1205": "Inicio",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
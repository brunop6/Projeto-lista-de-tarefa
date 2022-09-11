"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFF";
    DesignColors["brack"] = "#000";
})(DesignColors || (DesignColors = {}));
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 1] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 2] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 0] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.SUPPORT);

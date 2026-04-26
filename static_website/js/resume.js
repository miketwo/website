/* global $ */
/* global _ */
/* global ResumeData */
/* nomen: false */
/* jshint onevar: false */
/* jslint onevar: false */

var DynamicResume = function ($el) {
    var $body = $("body");
    var resume = window.ResumeData || {};
    var pageMode = $body.data("resumeMode") || "web";

    _.templateSettings.variable = "rc";

    var template = _.template(
        $("script.template").html()
    );

    $el.append(template(resume));

    function clearHighlights() {
        $el.find(".subdued, .highlight").removeClass("subdued highlight", 300);
        $("[data-highlight='reset']").addClass("active");
        $("[data-highlight]").not("[data-highlight='reset']").removeClass("active");
    }

    function applyHighlight(tag) {
        $("[data-highlight]").removeClass("active");
        $("[data-highlight='" + tag + "']").addClass("active");

        $el.find("li, .titleblock span").addClass("subdued").removeClass("highlight");
        $el.find("." + tag).removeClass("subdued").addClass("highlight");
    }

    $("[data-highlight]").on("click", function () {
        var tag = $(this).data("highlight");

        if (tag === "reset") {
            clearHighlights();
            return;
        }

        applyHighlight(tag);
    });

    $("[data-action='print']").on("click", function () {
        window.print();
    });

    if (pageMode === "web" && $("#buttons").length) {
        $("#buttons").sticky({topSpacing: 0});
    }

    return {
        template: template,
        resume: resume
    };
};

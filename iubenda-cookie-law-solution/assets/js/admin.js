var _iub=_iub||[];function circularBar(e){e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg"\n     viewBox="0 0 32 32">\n    <circle class="circle1"\n            cy="16"\n            cx="16"\n            r="13"/>\n    <circle class="circle2"\n            cy="16"\n            cx="16"\n            r="13"/>\n</svg>\n<span> </span>';var t=parseInt(e.dataset.perc),a=e.querySelector(".circle2"),n="#CF7463",o=(e.querySelector("span").innerHTML=t+"<b>%</b>",50<=t&&(n="#F5B350"),80<t&&(n="#1CC691"),parseInt(getComputedStyle(a,null).getPropertyValue("stroke-dasharray")));a.style.strokeDashoffset=o-o*t/100,e.style.color=n}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".circularBar").forEach(function(e){circularBar(e)})}),((e,l)=>{var t=e.IUB=e.IUB||{};function a(e){l(".modal").removeClass("shown");e=l(e.target).data("modal-name");l(e).addClass("shown")}function n(){l("#modal-rating").addClass("shown")}function o(e){e=l(e.target).data("modal-name");l(e).removeClass("shown")}function i(e){e.target.matches(".show-modal")||e.target.closest(".modal__window")||e.target.closest(".show-rating-modal")||l(".modal").removeClass("shown")}function c(e){l(e.target).is(":checked")?l(l(e.target).data("section-name")).show():l(l(e.target).data("section-name")).hide()}function s(e){l(e.target).is(":checked")&&(l(l(e.target).data("section-group")).hide(),l(l(e.target).data("section-name")).show())}function r(e){l(l(e.target).data("element-name")).removeClass("inactive")}function d(e){l(l(e.target).data("section-name")).show()}function u(e){e.stopImmediatePropagation(),e.preventDefault();var t=l(l(e.target)).serialize(),a=l(l(e.target)).find("button[type=submit]"),n=l(l(e.target)).find('input[name="_redirect"]').val(),o=l(l(e.target)).find('input[name="show_modal"]').val();return l.ajax({type:"POST",dataType:"json",url:iubMainVars.site_url+"/wp-admin/admin-ajax.php",data:t,beforeSend:function(){a.addClass("btn-loading"),a.prop("disabled",!0)},success:function(e){a.removeClass("btn-loading"),a.prop("disabled",!1),"done"===e.status?null!=o?(l(".modal").removeClass("shown"),l(o).addClass("shown")):window.location=n:(e.focus&&l(e.focus).length&&(l(e.focus).trigger("click"),l([document.documentElement,document.body]).animate({scrollTop:l(e.focus).offset().top},500)),l("#modal-no-website-found").addClass("shown"))},error:function(e){(403===e.status?alert:S)(e.responseText),a.removeClass("btn-loading"),a.prop("disabled",!1)},complete:function(){a.removeClass("btn-loading"),a.prop("disabled",!1)}}),!1}function p(e){e.preventDefault();var t=l(l(e.target)).serialize(),a=l(l(e.target)).find("button[type=submit]"),n=l(l(e.target)).find('input[name="_redirect"]').val();return l.ajax({type:"POST",dataType:"json",url:iubMainVars.site_url+"/wp-admin/admin-ajax.php",data:t,beforeSend:function(){a.addClass("btn-loading"),a.prop("disabled",!0)},success:function(e){a.removeClass("btn-loading"),a.prop("disabled",!1),"done"===e.status?window.location=n:e.focus&&(l(e.focus).trigger("click"),l([document.documentElement,document.body]).animate({scrollTop:l(e.focus).offset().top},500),null!=e.message_code)&&"missing_legalisation"===e.message_code||l("#modal-no-website-found").addClass("shown")},error:function(e){(403===e.status?alert:S)(e.responseText),a.removeClass("btn-loading"),a.prop("disabled",!1)},complete:function(){a.removeClass("btn-loading"),a.prop("disabled",!1)}}),!1}function f(e){var t=l(e.target).data("service-name");let a=l(e.target).data("service-key");var n=l(e.target).is(":checked");!0===n?(e.stopImmediatePropagation(),e.preventDefault(),window.location=l(e.target).data("redirect")):l.ajax({type:"post",dataType:"json",url:iubMainVars.site_url+"/wp-admin/admin-ajax.php",data:{action:"toggle_services",name:t,status:n,iub_nonce:iubMainVars.iub_toggle_service_nonce},success:function(t){var e;"done"===t.status&&(l("."+a+"-item").removeClass("list_radar__item--on").addClass("list_radar__item--off"),l("#configiration-"+a).toggle(),null!=(e=l("#"+a+"-status-label"))&&e.html(e.data("status-label-off")),null!=t.rating_percentage)&&document.querySelectorAll(".circularBar").forEach(function(e){l(e).attr("data-perc",t.rating_percentage),circularBar(e)})},error:function(e,t){var a="",a=0===e.status?"Not connect.\n Verify Network.":404==e.status?"Requested page not found. [404]":500==e.status?"Internal Server Error [500].":"parsererror"===t?"Requested JSON parse failed.":"timeout"===t?"Time out error.":"abort"===t?"Ajax request aborted.":"Uncaught Error.\n"+e.responseText;console.log(a)}})}function g(e){l(e.target).parents("#alert-div").fadeOut()}function b(e){e.preventDefault(),document.querySelector("#public_api_key").reportValidity();var t=l("#public_api_key").val(),e={public_api_key:t},a=l("#public_api_button");l.ajax({type:"post",dataType:"json",url:iubMainVars.site_url+"/wp-admin/admin-ajax.php",data:{action:"save_cons_options",iubenda_consent_solution:e,iub_cons_nonce:iubMainVars.iub_save_cons_options_nonce},beforeSend:function(){a.addClass("btn-loading"),a.prop("disabled",!0)},success:function(e){a.removeClass("btn-loading"),a.prop("disabled",!1),"done"===e.status?l.ajax({type:"post",url:iubMainVars.site_url+"/wp-admin/admin-ajax.php",data:{action:"auto_detect_forms",public_api_key:t,iub_nonce:iubMainVars.iub_auto_detect_forms_nonce},success:function(e){l("#auto-detect-forms").html(e),l("#public-api-key-div").show()}}):l("#modal-no-website-found").addClass("shown")},error:function(e,t){var a="",a=0===e.status?"Not connect.\n Verify Network.":404==e.status?"Requested page not found. [404]":500==e.status?"Internal Server Error [500].":"parsererror"===t?"Requested JSON parse failed.":"timeout"===t?"Time out error.":"abort"===t?"Ajax request aborted.":"Uncaught Error.\n"+e.responseText;console.log(a)}})}function m(e){e.preventDefault();var e=l("#auto-detect-forms"),t=l("#auto-detect-parent-div"),e=(t.addClass("loader"),e.css("visibility","hidden"),l('input[name="public_api_key"]').val());l.ajax({type:"post",url:iubMainVars.site_url+"/wp-admin/admin-ajax.php",data:{action:"auto_detect_forms",public_api_key:e,iub_nonce:iubMainVars.iub_auto_detect_forms_nonce},success:function(e){t.removeClass("loader"),l("#auto-detect-forms").html(e),l("#auto-detect-forms").css("visibility","visible")},error:function(e,t){var a="",a=0===e.status?"Not connect.\n Verify Network.":404==e.status?"Requested page not found. [404]":500==e.status?"Internal Server Error [500].":"parsererror"===t?"Requested JSON parse failed.":"timeout"===t?"Time out error.":"abort"===t?"Ajax request aborted.":"Uncaught Error.\n"+e.responseText;console.log(a)}})}function h(e){e.preventDefault();var t=l(l(e.target).data("append-section"));l(l(e.target).data("clone-section")).clone().each(function(){this.id=Math.random(),l(this).find("input, textarea, button, select").prop("disabled",!1)}).appendTo(t).hide().fadeIn(300)}function v(e){e.preventDefault(),l(l(e.target)).closest(l(e.target).data("remove-section")).remove(),l("#parent-selector :input").attr("disabled",!0)}function _(e){l(e.target).is(":checked")?l(l(e.target).data("required-control")).show():l(l(e.target).data("required-control")).hide()}function y(t){l(".iub-pp-code, .iub-tc-code").each(function(){var e=l(this).html();l(this).html(e.replace("white",l(t.target).val()).replace("black",l(t.target).val()))}),l(".iub-language-code").each(function(){var e=l(this).val();l(this).val(e.replace("white",l(t.target).val()).replace("black",l(t.target).val()))})}function k(e){e=l(l(e.target));0<l("#iub-tc-code-"+e.data("language")).length&&(l("#iub-tc-code-"+e.data("language")).text(e.val()),l("#iub-embed-code-readonly-"+e.data("language")).trigger("click")),0<l("#iub-pp-code-"+e.data("language")).length&&(l("#iub-pp-code-"+e.data("language")).text(e.val()),l("#iub-embed-code-readonly-"+e.data("language")).trigger("click"))}function E(e){l(l(l(e.target)).data("group")).each(function(){l(e.target).is(":checked")&&l(this).prop("checked",l(e.target).is(":checked")),l(this).attr("disabled",l(e.target).is(":checked"))})}l(document).ready(function(){t.ELEMS={body:l("body")},t.ELEMS.body.on("click",".show-modal",a),t.ELEMS.body.on("click",".show-rating-modal",n),t.ELEMS.body.on("click",".hide-modal",o),t.ELEMS.body.on("click",i),t.ELEMS.body.on("click",".section-checkbox-control",c),t.ELEMS.body.on("click",".section-radio-control",s),t.ELEMS.body.on("click",".active-class-control",r),t.ELEMS.body.on("click",".show-class-control",d),t.ELEMS.body.on("submit",".ajax-form",u),t.ELEMS.body.on("submit",".ajax-form-to-options",p),t.ELEMS.body.on("click",".service-checkbox",f),t.ELEMS.body.on("click","#alert-close",g),t.ELEMS.body.on("click","#public_api_button",b),t.ELEMS.body.on("click",".auto-detect-forms",m),t.ELEMS.body.on("click",".add-custom-section",h),t.ELEMS.body.on("click",".remove-custom-section",v),t.ELEMS.body.on("click",".required-control",_),t.ELEMS.body.on("click",".update-button-style",y),t.ELEMS.body.on("change keyup past",".iub-embed-code-tc, .iub-embed-code-pp",k),t.ELEMS.body.on("change past",".iub-embed-code-tc, .iub-embed-code-pp",k),t.ELEMS.body.on("change click",".iub-toggle-elements-status",E),t.ELEMS.body.on("click",".legislation-checkbox",M),t.ELEMS.body.on("change",".iub-embed-code-cs",C),t.ELEMS.body.on("change",".cs-configuration-type",C),t.ELEMS.body.on("click",".iub-language-tab",L),t.ELEMS.body.on("change",".blocking-method",T)}),null!==l("#integration-div")&&l(".iub-language-code").on("keyup change past",function(){var e;e=!0,l(".iub-language-code").each(function(){if(""!=l(this).val())return e=!1}),e?l("#integration-div").hide():l("#integration-div").show()}).trigger("change"),l(document).on("click",".position-select > div > label",function(e){l(this).closest(".position-select > div").hasClass("open")||l(this).closest(".position-select > div").addClass("open")}),l(document).on("mousedown",function(e){var t=l(".position-select > div.open");t.length&&!t.is(e.target)&&0===t.has(e.target).length&&0===l(".pcr-app").has(e.target).length&&t.removeClass("open")}),l(document).on("click",".add-preferences-field",function(e){e.preventDefault(),l("#postbox-container-2").change();e=(e=l("#preferences-field-template").html()).replace(/__PREFERENCE_ID__/g,l(".preferences-field").length++),l(".preferences-table .add-preferences-field").closest("tr").before('<tr class="preferences-field options-field" style="display: none;">'+e+"</tr>"),e=l(".preferences-field").last();e.find(".preferences-inputs").prop("disabled",!1),e.fadeIn(300)}),l(document).on("click",".remove-preferences-field",function(e){e.preventDefault(),l("#postbox-container-2").change(),l(this).closest(".preferences-field").fadeOut(300,function(){l(this).remove()})});var x=l(".exclude-field").length,w=(l(document).on("click",".add-exclude-field",function(e){e.preventDefault(),l("#postbox-container-2").change();e=(e=l("#exclude-field-template").html()).replace(/__EXCLUDE_ID__/g,x++).replace("disabled","");l(".exclude-table .add-exclude-field").closest("tr").before('<tr class="exclude-field options-field" style="display: none;">'+e+"</tr>"),l(".exclude-field").last().fadeIn(300)}),l(document).on("click",".remove-exclude-field",function(e){e.preventDefault(),l("#postbox-container-2").change(),l(this).closest(".exclude-field").fadeOut(300,function(){l(this).remove()})}),l(function(){l(".cs-configuration-type").on("change",function(){"simplified"==l("input[name='iubenda_cookie_law_solution[configuration_type]']:checked").val()?l(".iub-language-code").attr("disabled",!0):l(".iub-language-code").attr("disabled",!1)}),l(".cs-configuration-type:checked:first").trigger("change")}),l(".legal_notices-field").length);function M(e){var t=l("#legislation-gdpr"),a=t.prop("checked"),n=l("#legislation-uspr"),o=n.prop("checked"),i=l("#legislation-lgpd"),c=i.prop("checked"),s=l("#legislation-all"),e=("legislation-all"==l(e.target).attr("id")||a&&o&&c?(t.prop("checked",!1),n.prop("checked",!1),i.prop("checked",!1),s.prop("checked",!0)):s.prop("checked",!1),s.prop("checked"));o||e?l("#explicit-fieldset input:checkbox").each(function(){l(this).prop("checked",!0),l(this).prop("disabled",!0)}):l("#explicit-fieldset input:checkbox").each(function(){l(this).prop("disabled",!1)})}function S(e){var t="#alert-div",a="#alert-image",n="#alert-message",o="#alert-div-container";t.length&&a.length&&n.length&&o.length&&(l(t).addClass("alert--failure"),l(a).attr("src",iubMainVars.plugin_url+"/assets/images/banner_failure.svg"),l(n).html(e),l(o).fadeIn(300))}function C(e){let t=l(e.target).val();"manual"==t&&(t=l(".iub-embed-code-cs-container.active textarea.iub-embed-code-cs").val());e=l('input[name="iubenda_cookie_law_solution[configuration_type]"]:checked').val();null!==t&&j(t,e)}function L(e){var e=(e=l((e=e).target).data("target-textarea"))?l(e).val():"",t=l('input[name="iubenda_cookie_law_solution[configuration_type]"]:checked').val();null!==e&&j(e,t)}function j(e,t){let n=!1;n||(n=!0,l.ajax({type:"post",dataType:"json",url:iubMainVars.site_url+"/wp-admin/admin-ajax.php",data:{action:"check_frontend_auto_blocking_status",code:e,configuration_type:t,iub_nonce:iubMainVars.check_frontend_auto_blocking_status},success:function(e){var t,a;l("#frontend_auto_blocking").prop("checked",e).change(),e=e,t=l("#auto-blocking-warning-message"),a=l("#auto-blocking-info-message"),e?(t.removeClass("d-flex"),a.addClass("d-flex")):(t.addClass("d-flex"),a.removeClass("d-flex")),n=!1},error:function(){n=!1},complete:function(){n=!1}}))}function T(){var e=l(".blocking-method").toArray().every(function(e){return!l(e).prop("checked")}),t=l("#both-blocking-methods-disabled-warning-message");e?t.addClass("d-flex"):t.removeClass("d-flex")}l(document).on("click",".add-legal_notices-field",function(e){e.preventDefault(),l("#postbox-container-2").change();e=(e=l("#legal_notices-field-template").html()).replace(/__LEGAL_NOTICE_ID__/g,w++),console.log(e),l(".legal_notices-table .add-legal_notices-field").closest("tr").before('<tr class="legal_notices-field options-field" style="display: none;">'+e+"</tr>"),e=l(".legal_notices-field").last();e.find(".legal-notices-inputs").prop("disabled",!1),e.fadeIn(300)}),l(document).on("click",".remove-legal_notices-field",function(e){e.preventDefault(),l("#postbox-container-2").change(),l(this).closest(".legal_notices-field").fadeOut(300,function(){l(this).remove()})}),l(document).on("change","#postbox-container-2",function(){var n={};0<iubMainVars.form_id&&(n.all=l('.subject-fields-select.select-id option:not([value=""])').map(function(){return l(this).val()}).get(),l.each(["subject","preferences","exclude"],function(e,a){n[a]=[];var t=l("."+a+"-field select");l.each(t,function(e,t){""!=l(t).val()&&n[a].push(l(t).val())}),n.fieldType=l.unique(n[a]),0<n[a].length&&(0!==l(".template-field ."+a+"-fields-select option:disabled").length&&n[a].length,n.all.length==n[a].length?l(".add-"+a+"-field").attr("disabled","disabled"):l(".add-"+a+"-field").attr("disabled",!1),l.each(n.all,function(e,t){l.inArray(t,n[a])<0?(l("."+a+'-fields-select option:not(:checked)[value="'+t+'"]').attr("disabled",!1),l(".template-field ."+a+'-fields-select option[value="'+t+'"]').attr("disabled",!1)):(l("."+a+'-fields-select option:not(:checked)[value="'+t+'"]').attr("disabled","disabled"),l(".template-field ."+a+'-fields-select option[value="'+t+'"]').attr("disabled","disabled"))}))}))}),l(function(){l("#postbox-container-2").change()}),l(document).on("mouseenter mouseleave","#postbox-container-2 .options-field, #postbox-container-2 .submit-field",function(){l("#postbox-container-2").change()}),l(function(e){e("#iub-website-language").on("change",function(){try{_iub.quick_generator.input.privacy_policy.langs=[e(this).val()]}catch(e){console.log(e)}}).trigger("change")}),l(document).on("click",".notice-dismiss, .notice-dismiss-by-text",function(e){e.preventDefault(),l(this).closest("div.is-dismissible").slideUp()}),l(document).on("click",".dismiss-notification-alert",function(e){l.ajax({type:"post",dataType:"json",url:iubMainVars.site_url+"/wp-admin/admin-ajax.php",data:{action:"iubenda_dismiss_general_notice",iub_nonce:iubMainVars.iub_dismiss_general_notice,dismiss_key:l(e.target).data("dismiss-key")}})}),l(document).ready(function(e){e(e(".legislation-checkbox").get().reverse()).each(function(){if(e(this).prop("checked"))return e(this).prop("checked",!1).trigger("click"),!1})}),T()})(window,jQuery);
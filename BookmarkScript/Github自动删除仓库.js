(function () {
    var repository_el = document.querySelector("#options_bucket > div.Box.color-border-danger > ul > li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > p:nth-child(2) > strong");
    var input_el = document.querySelector("#options_bucket > div.Box.color-border-danger > ul > li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > form > p > input");
    var submit_el = document.querySelector("#options_bucket > div.Box.color-border-danger > ul > li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > form > button");
    if (confirm("开源不易，代码不易，确认删除【" + repository_el.textContent + "】这个仓库吗？摘繁华版权所有")) {
        input_el.value = repository_el.textContent;
        submit_el.disabled = false;
        submit_el.click();
        alert("仓库【" + repository_el.textContent + "】即将删除！");
    } else
        alert("取消删除仓库【" + repository_el.textContent + "】。");
})();
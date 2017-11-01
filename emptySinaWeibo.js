// ==UserScript==
// @name         Empty Sina Weibo's Posts
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Delete Sina Weibo's posts automatically per 600ms
// @author       Yu Mao
// @match        http*://weibo.com/p/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load',function(){
        setTimeout(insertBtn,3000);
    });

    function insertBtn(){
        var ulBar = document.querySelector('.tab.W_fl');
        var li = document.createElement('li');
        var btn = document.createElement('button');
        li.classList.add('tab_li');
        btn.textContent = '清空微博';
        btn.setAttribute('style','text-decoration: none;color: #fff;background-color: rgb(255, 129, 64); \
text-align: center;letter-spacing: .5px;border:none;padding: 5px;cursor:pointer;border-radius:2px;');
        btn.addEventListener('click',deletePost,false);
        li.appendChild(btn);
        ulBar.appendChild(li);
        console.log('Button inserted');
    }

    function deletePost(){
        setInterval(function(){
            var deleteBtn = document.querySelector('a[title="删除此条微博"]');
            deleteBtn.click();
            var confirmBtn = document.querySelector('a[node-type="ok"]');
            confirmBtn.click();
            console.log(confirmBtn,deleteBtn);},600);
    }
})();

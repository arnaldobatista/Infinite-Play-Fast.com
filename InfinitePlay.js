// ==UserScript==
// @name         Infinite Play - Fast.com
// @homepageURL
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script para executar o teste de velocidade de forma constante
// @license MIT
// @icon https://fast.com/assets/favicons/favicon.ico
// @author       Arnaldo Carpi
// @copyright 2022, Arnaldo Carpi (https://github.com/arnaldocarpi)
// @match        https://fast.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict'
    const play = () => {
        const interval = setInterval(() => {
            const play = document.querySelector('#speed-progress-indicator-icon')
            if (play) {
                clearInterval(interval)
                if (!play.classList.contains('oc-icon-pause')) {
                    play.click()
                }
            }
        }, 1000)
    }
    const time = 300
    const playFunction = () => {
        if (document.querySelector('.oc-icon-refresh')) {
            play()
        }
    }
    setInterval(playFunction, time)
})()

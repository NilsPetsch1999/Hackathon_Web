import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { initCounter } from "../counter.mjs";

class MockButton {
    constructor() {
        this.textContent = "";
        this.listeners = {};
    }

    addEventListener(type, handler) {
        this.listeners[type] = handler;
    }

    click() {
        if (this.listeners.click) {
            this.listeners.click();
        }
    }
}

class MockDocument {
    constructor(button) {
        this.button = button;
    }

    getElementById(id) {
        if (id === "counter-button") {
            return this.button;
        }
        return null;
    }
}

function testInitialAndIncrement() {
    const button = new MockButton();
    const doc = new MockDocument(button);

    initCounter(doc);

    assert.equal(button.textContent, "0", "initial counter value should be 0");
    button.click();
    assert.equal(button.textContent, "1", "counter should increment on click");
}

function testReloadResets() {
    const firstButton = new MockButton();
    initCounter(new MockDocument(firstButton));
    firstButton.click();
    assert.equal(firstButton.textContent, "1");

    const secondButton = new MockButton();
    initCounter(new MockDocument(secondButton));
    assert.equal(secondButton.textContent, "0", "counter should reset on reload");
}

function testCenteredStyles() {
    const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
    assert.match(html, /display:\s*flex;/, "body should use flex layout");
    assert.match(html, /align-items:\s*center;/, "body should center vertically");
    assert.match(html, /justify-content:\s*center;/, "body should center horizontally");
}

testInitialAndIncrement();
testReloadResets();
testCenteredStyles();

console.log("counter tests passed");

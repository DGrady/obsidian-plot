import { Plugin, MarkdownPostProcessorContext } from "obsidian";

import "jsxgraph";

import * as d3 from "d3";
(window as any).d3 = d3;

import * as Plot from "@observablehq/plot";
(window as any).Plot = Plot;

import * as duckdb from "@duckdb/duckdb-wasm";
(window as any).duckdb = duckdb;

import * as arquero from "arquero";
(window as any).arquero = arquero;

async function script(src: string, div: HTMLElement, ctx: MarkdownPostProcessorContext) {
	const script = document.createElement("script");
	script.type = "module";
	script.textContent = src;
	div.parentElement?.replaceChild(script, div);
}

export default class ScriptPlugin extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor("script", script);
	}

	onunload() {}
}

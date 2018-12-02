(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{450:function(n,s,a){"use strict";a.r(s),s.default='<p>In the past, one of webpack’s trade-offs when bundling was that each module in your bundle would be wrapped in individual function closures. These wrapper functions made it slower for your JavaScript to execute in the browser. In comparison, tools like Closure Compiler and RollupJS ‘hoist’ or concatenate the scope of all your modules into one closure and allow for your code to have a faster execution time in the browser.</p>\n<p>This plugin will enable the same concatenation behavior in webpack. By default this plugin is already enabled in <a href="/configuration/mode/#mode-production">production <code>mode</code></a> and disabled otherwise. If you need to override the production <code>mode</code> optimization, set the <a href="/configuration/optimization/#optimizationconcatenatemodules"><code>optimization.concatenateModules</code> option</a> to <code>false</code>. To enable concatenation behavior in other modes, you can add <code>ModuleConcatenationPlugin</code> manually or use the <code>optimization.concatenateModules</code> option:</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>ModuleConcatenationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<blockquote>\n<p>This concatenation behavior is called “scope hoisting.”</p>\n<p>Scope hoisting is specifically a feature made possible by ECMAScript Module syntax. Because of this webpack may fallback to normal bundling based on what kind of modules you are using, and <a href="https://medium.com/webpack/webpack-freelancing-log-book-week-5-7-4764be3266f5">other conditions</a>.</p>\n</blockquote>\n<blockquote class="warning">\n<p>Keep in mind that this plugin will only be applied to <a href="/api/module-methods/#es6-recommended">ES6 modules</a> processed directly by webpack. When using a transpiler, you\'ll need to disable module processing (e.g. the <a href="https://babeljs.io/docs/en/babel-preset-env#modules"><code>modules</code></a> option in Babel).</p>\n</blockquote>\n<h2 id="optimization-bailouts">Optimization Bailouts<a href="#optimization-bailouts" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>As the article explains, webpack attempts to achieve partial scope hoisting. It will merge modules into a single scope but cannot do so in every case. If webpack cannot merge a module, the two alternatives are Prevent and Root. Prevent means the module must be in its own scope. Root means a new module group will be created. The following conditions determine the outcome:</p>\n<table>\n<thead>\n<tr>\n<th>Condition</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>Non ES6 Module<p class="description mobile">Prevent</p></p></div></td>\n<td class="description desktop">Prevent</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>Imported By Non Import<p class="description mobile">Root</p></p></div></td>\n<td class="description desktop">Root</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>Imported From Other Chunk<p class="description mobile">Root</p></p></div></td>\n<td class="description desktop">Root</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>Imported By Multiple Other Module Groups<p class="description mobile">Root</p></p></div></td>\n<td class="description desktop">Root</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>Imported With <code>import()</code><p class="description mobile">Root</p></p></div></td>\n<td class="description desktop">Root</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>Affected By <code>ProvidePlugin</code> Or Using <code>module</code><p class="description mobile">Prevent</p></p></div></td>\n<td class="description desktop">Prevent</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>HMR Accepted<p class="description mobile">Root</p></p></div></td>\n<td class="description desktop">Root</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>Using <code>eval()</code><p class="description mobile">Prevent</p></p></div></td>\n<td class="description desktop">Prevent</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p>In Multiple Chunks<p class="description mobile">Prevent</p></p></div></td>\n<td class="description desktop">Prevent</td>\n</tr>\n<tr>\n<td><div class="title"><p>Condition</p><p>Outcome</p></div>\n<div class="content"><p><code>export * from "cjs-module"</code><p class="description mobile">Prevent</p></p></div></td>\n<td class="description desktop">Prevent</td>\n</tr>\n</tbody>\n</table>\n<h3 id="module-grouping-algorithm">Module Grouping Algorithm<a href="#module-grouping-algorithm" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The following pseudo JavaScript explains the algorithm:</p>\n<pre><code class="hljs language-js">modules<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModuleGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    root<span class="token operator">:</span> module\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  module<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">dependency</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">tryToAdd</span><span class="token punctuation">(</span>group<span class="token punctuation">,</span> dependency<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>group<span class="token punctuation">.</span>modules<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    orderedModules <span class="token operator">=</span> <span class="token function">topologicalSort</span><span class="token punctuation">(</span>group<span class="token punctuation">.</span>modules<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    concatenatedModule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcatenatedModule</span><span class="token punctuation">(</span>orderedModules<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    chunk<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>concatenatedModule<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    orderedModules<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">groupModule</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      chunk<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>groupModule<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">tryToAdd</span><span class="token punctuation">(</span><span class="token parameter">group<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>group<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasPreconditions</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> nextGroup <span class="token operator">=</span> group<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> module<span class="token punctuation">.</span>dependents<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">check<span class="token punctuation">,</span> dependent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> check <span class="token operator">&#x26;&#x26;</span> <span class="token function">tryToAdd</span><span class="token punctuation">(</span>nextGroup<span class="token punctuation">,</span> dependent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  module<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">dependency</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">tryToAdd</span><span class="token punctuation">(</span>group<span class="token punctuation">,</span> dependency<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  group<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>nextGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="debugging-optimization-bailouts">Debugging Optimization Bailouts<a href="#debugging-optimization-bailouts" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>When using the webpack CLI, the <code>--display-optimization-bailout</code> flag will display bailout reasons. When using the webpack config, just add the following to the <code>stats</code> object:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  stats<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Examine all modules</span>\n    maxModules<span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>\n    <span class="token comment">// Display bailout reasons</span>\n    optimizationBailout<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);
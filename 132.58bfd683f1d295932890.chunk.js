(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{426:function(n,e,a){"use strict";a.r(e),e.default='<p><a href="https://npmjs.com/package/eslint-webpack-plugin"><img src="https://img.shields.io/npm/v/eslint-webpack-plugin.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/eslint-webpack-plugin.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/eslint-webpack-plugin"><img src="https://david-dm.org/webpack-contrib/eslint-webpack-plugin.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/eslint-webpack-plugin/actions"><img src="https://github.com/webpack-contrib/eslint-webpack-plugin/workflows/eslint-webpack-plugin/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/eslint-webpack-plugin"><img src="https://codecov.io/gh/webpack-contrib/eslint-webpack-plugin/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=eslint-webpack-plugin"><img src="https://packagephobia.now.sh/badge?p=eslint-webpack-plugin" alt="size"></a></p>\n<blockquote>\n<p>A ESLint plugin for webpack</p>\n</blockquote>\n<h2 id="about-plugin">About plugin<a href="#about-plugin" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The plugin was born with the purpose of solving some problems of the <a href="https://github.com/webpack-contrib/eslint-loader">eslint-loader</a>.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th align="center">eslint-webpack-plugin</th>\n<th align="center">eslint-loader</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p></p><p>eslint-webpack-plugin</p><p>eslint-loader</p></div>\n<div class="content"><p>Easy configuration<p class="description mobile">:heavy_check_mark:</p></p></div></td>\n<td align="center" class="description desktop">:heavy_check_mark:</td>\n<td align="center">:heavy_multiplication_x:</td>\n</tr>\n<tr>\n<td><div class="title"><p></p><p>eslint-webpack-plugin</p><p>eslint-loader</p></div>\n<div class="content"><p>Generate unique an output report<p class="description mobile">:heavy_check_mark:</p></p></div></td>\n<td align="center" class="description desktop">:heavy_check_mark:</td>\n<td align="center">:heavy_multiplication_x:</td>\n</tr>\n<tr>\n<td><div class="title"><p></p><p>eslint-webpack-plugin</p><p>eslint-loader</p></div>\n<div class="content"><p>Using cache directly from eslint<p class="description mobile">:heavy_check_mark:</p></p></div></td>\n<td align="center" class="description desktop">:heavy_check_mark:</td>\n<td align="center">:heavy_multiplication_x:</td>\n</tr>\n<tr>\n<td><div class="title"><p></p><p>eslint-webpack-plugin</p><p>eslint-loader</p></div>\n<div class="content"><p>Lint only changed files<p class="description mobile">:heavy_check_mark:</p></p></div></td>\n<td align="center" class="description desktop">:heavy_check_mark:</td>\n<td align="center">:heavy_multiplication_x:</td>\n</tr>\n</tbody>\n</table>\n<h2 id="migrate-from-eslint-loader">Migrate from <code>eslint-loader</code><a href="#migrate-from-eslint-loader" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The loader <code>eslint-loader</code> will be deprecated soon, please use this plugin instead.</p>\n<p>Before:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token operator">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token operator">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token comment">// eslint options (if necessary)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>After:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'eslint-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint-webpack-plugin --save-dev</code></pre>\n<p><strong>Note</strong>: You also need to install <code>eslint</code> from npm, if you haven\'t already:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint --save-dev</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>In your webpack configuration:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'eslint-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>You can pass <a href="https://eslint.org/docs/developer-guide/nodejs-api#%e2%97%86-new-eslint-options">eslint options</a>.</p>\n<p>Note that the config option you provide will be passed to the <code>ESLint</code> class.\nThis is a different set of options than what you\'d specify in <code>package.json</code> or <code>.eslintrc</code>.\nSee the <a href="https://eslint.org/docs/developer-guide/nodejs-api#%e2%97%86-new-eslint-options">eslint docs</a> for more details.</p>\n<p><strong>Warning</strong>: In eslint-webpack-plugin version 1 the options were passed to the now deprecated <a href="https://eslint.org/docs/developer-guide/nodejs-api#cliengine">CLIEngine</a>.</p>\n<h3 id="context"><code>context</code><a href="#context" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String</code></li>\n<li>Default: <code>compiler.context</code></li>\n</ul>\n<p>A string indicating the root of your files.</p>\n<h3 id="eslintpath"><code>eslintPath</code><a href="#eslintpath" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String</code></li>\n<li>Default: <code>eslint</code></li>\n</ul>\n<p>Path to <code>eslint</code> instance that will be used for linting. If the <code>eslintPath</code> is a folder like a official eslint, or specify a <code>formatter</code> option. now you dont have to install <code>eslint</code>.</p>\n<h3 id="files"><code>files</code><a href="#files" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String|Array[String]</code></li>\n<li>Default: <code>\'.\'</code></li>\n</ul>\n<p>Specify directories, files, or globs. Must be relative to <code>options.context</code>.\nDirectories are traveresed recursively looking for files matching <code>options.extensions</code>.\nFile and glob patterns ignore <code>options.extensions</code>.</p>\n<h3 id="extensions"><code>extensions</code><a href="#extensions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String|Array[String]</code></li>\n<li>Default: <code>\'js\'</code></li>\n</ul>\n<p>Specify extensions that should be checked.</p>\n<h3 id="fix"><code>fix</code><a href="#fix" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will enable <a href="https://eslint.org/docs/developer-guide/nodejs-api#%e2%97%86-eslint-outputfixes-results">ESLint autofix feature</a>.</p>\n<p><strong>Be careful: this option will change source files.</strong></p>\n<h3 id="formatter"><code>formatter</code><a href="#formatter" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>String|Function</code></li>\n<li>Default: <code>\'stylish\'</code></li>\n</ul>\n<p>Accepts a function that will have one argument: an array of eslint messages (object). The function must return the output as a string. You can use official <a href="https://eslint.org/docs/user-guide/formatters/">eslint formatters</a>.</p>\n<h3 id="lintdirtymodulesonly"><code>lintDirtyModulesOnly</code><a href="#lintdirtymodulesonly" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Lint only changed files, skip lint on start.</p>\n<h3 id="errors-and-warning">Errors and Warning<a href="#errors-and-warning" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>By default the plugin will auto adjust error reporting depending on eslint errors/warnings counts.</strong>\nYou can still force this behavior by using <code>emitError</code> <strong>or</strong> <code>emitWarning</code> options:</p>\n<h4 id="emiterror"><code>emitError</code><a href="#emiterror" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will always return errors, if set to <code>true</code>.</p>\n<h4 id="emitwarning"><code>emitWarning</code><a href="#emitwarning" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will always return warnings, if set to <code>true</code>.</p>\n<h4 id="failonerror"><code>failOnError</code><a href="#failonerror" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will cause the module build to fail if there are any errors, if set to <code>true</code>.</p>\n<h4 id="failonwarning"><code>failOnWarning</code><a href="#failonwarning" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will cause the module build to fail if there are any warnings, if set to <code>true</code>.</p>\n<h4 id="quiet"><code>quiet</code><a href="#quiet" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Will process and report errors only and ignore warnings, if set to <code>true</code>.</p>\n<h4 id="outputreport"><code>outputReport</code><a href="#outputreport" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Type: <code>Boolean|Object</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Write the output of the errors to a file, for example a checkstyle xml file for use for reporting on Jenkins CI.</p>\n<p>The <code>filePath</code> is an absolute path or relative to the webpack config: <code>output.path</code>.\nYou can pass in a different <code>formatter</code> for the output file,\nif none is passed in the default/configured formatter will be used.</p>\n<h2 id="changelog">Changelog<a href="#changelog" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/eslint-webpack-plugin/blob/master/CHANGELOG.md">Changelog</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/eslint-webpack-plugin/blob/master/LICENSE">MIT</a></p>\n'}}]);
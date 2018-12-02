(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{439:function(e,n,a){"use strict";a.r(n),n.default='<p>The <code>DllPlugin</code> and <code>DllReferencePlugin</code> provide means to split bundles in a way that can drastically improve build time performance. The term "DLL" stands for Dynamic-link library which was originally introduced by Microsoft.</p>\n<h2 id="dllplugin"><code>DllPlugin</code><a href="#dllplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This plugin is used in a separate webpack configuration exclusively to create a dll-only-bundle. It creates a <code>manifest.json</code> file, which is used by the <a href="#dllreferenceplugin"><code>DllReferencePlugin</code></a> to map dependencies.</p>\n<ul>\n<li><code>context</code> (optional): context of requests in the manifest file (defaults to the webpack context.)</li>\n<li><code>format</code> (boolean = false): If <code>true</code>, manifest json file (output) will be formatted.</li>\n<li><code>name</code>: name of the exposed dll function (<a href="https://github.com/webpack/webpack/blob/master/lib/TemplatedPathPlugin.js">TemplatePaths</a>: <code>[hash]</code> &#x26; <code>[name]</code> )</li>\n<li><code>path</code>: <strong>absolute path</strong> to the manifest json file (output)</li>\n<li><code>entryOnly</code> (boolean = true): if <code>true</code>, only entry points will be exposed</li>\n<li><code>type</code>: type of the dll bundle</li>\n</ul>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>We recommend using DllPlugin only with <code>entryOnly: true</code>, otherwise tree shaking in the DLL won\'t work as all the exports might be used.</p>\n</blockquote>\n<p>Creates a <code>manifest.json</code> which is written to the given <code>path</code>. It contains mappings from require and import requests to module ids. It is used by the <code>DllReferencePlugin</code>.</p>\n<p>Combine this plugin with <a href="/configuration/output/#outputlibrary"><code>output.library</code></a> option to expose (aka, put into the global scope) the dll function.</p>\n<h2 id="dllreferenceplugin"><code>DllReferencePlugin</code><a href="#dllreferenceplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This plugin is used in the primary webpack config, it references the dll-only-bundle(s) to require pre-built dependencies.</p>\n<ul>\n<li><code>context</code>: (<strong>absolute path</strong>) context of requests in the manifest (or content property)</li>\n<li><code>extensions</code>: Extensions used to resolve modules in the dll bundle (only used when using \'scope\').</li>\n<li><code>manifest</code> : an object containing <code>content</code> and <code>name</code> or a string to the absolute path of the JSON manifest to be loaded upon compilation</li>\n<li><code>content</code> (optional): the mappings from request to module id (defaults to <code>manifest.content</code>)</li>\n<li><code>name</code> (optional): an identifier where the dll is exposed (defaults to <code>manifest.name</code>) (see also <a href="/configuration/externals/"><code>externals</code></a>)</li>\n<li><code>scope</code> (optional): prefix which is used for accessing the content of the dll</li>\n<li><code>sourceType</code> (optional): how the dll is exposed (<a href="/configuration/output/#outputlibrarytarget">libraryTarget</a>)</li>\n</ul>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>References a dll manifest file to map dependency names to module ids, then requires them as needed using the internal <code>__webpack_require__</code> function.</p>\n<blockquote class="warning">\n<p>Keep the <code>name</code> consistent with <a href="/configuration/output/#outputlibrary"><code>output.library</code></a>.</p>\n</blockquote>\n<h3 id="modes">Modes<a href="#modes" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>This plugin can be used in two different modes, <em>scoped</em> and <em>mapped</em>.</p>\n<h4 id="scoped-mode">Scoped Mode<a href="#scoped-mode" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>The content of the dll is accessible under a module prefix. i.e. with <code>scope = \'xyz\'</code> a file <code>abc</code> in the dll can be access via <code>require(\'xyz/abc\')</code>.</p>\n<blockquote class="tip">\n<p><a href="https://github.com/webpack/webpack/tree/master/examples/dll-user">See an example use of scope</a></p>\n</blockquote>\n<h4 id="mapped-mode">Mapped Mode<a href="#mapped-mode" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>The content of the dll is mapped to the current directory. If a required file matches a file in the dll (after resolving), then the file from the dll is used instead.</p>\n<p>Because this happens after resolving every file in the dll bundle, the same paths must be available for the consumer of the dll bundle. i.e. if the dll contains <code>lodash</code> and the file <code>abc</code>, <code>require(\'lodash\')</code> and <code>require(\'./abc\')</code> will be used from the dll, rather than building them into the main bundle.</p>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<blockquote class="warning">\n<p><code>DllReferencePlugin</code> and <code>DllPlugin</code> are used in <em>separate</em> webpack configs.</p>\n</blockquote>\n<p><strong>webpack.vendor.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  context<span class="token operator">:</span> __dirname<span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">\'[name]_[hash]\'</span><span class="token punctuation">,</span>\n  path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'manifest.json\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.app.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  context<span class="token operator">:</span> __dirname<span class="token punctuation">,</span>\n  manifest<span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./manifest.json\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  scope<span class="token operator">:</span> <span class="token string">\'xyz\'</span><span class="token punctuation">,</span>\n  sourceType<span class="token operator">:</span> <span class="token string">\'commonjs2\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack/webpack/tree/master/examples/dll">Vendor</a> and <a href="https://github.com/webpack/webpack/tree/master/examples/dll-user">User</a></p>\n<p><em>Two separate example folders. Demonstrates scope and context.</em></p>\n<blockquote class="tip">\n<p>Multiple <code>DllPlugins</code> and multiple <code>DllReferencePlugins</code>.</p>\n</blockquote>\n<h2 id="references">References<a href="#references" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="source">Source<a href="#source" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li><a href="https://github.com/webpack/webpack/blob/master/lib/DllPlugin.js">DllPlugin source</a></li>\n<li><a href="https://github.com/webpack/webpack/blob/master/lib/DllReferencePlugin.js">DllReferencePlugin source</a></li>\n<li><a href="https://github.com/webpack/webpack/blob/master/lib/DllEntryPlugin.js">DllEntryPlugin source</a></li>\n<li><a href="https://github.com/webpack/webpack/blob/master/lib/DllModuleFactory.js">DllModuleFactory source</a></li>\n<li><a href="https://github.com/webpack/webpack/blob/master/lib/LibManifestPlugin.js">ManifestPlugin source</a></li>\n</ul>\n<h3 id="tests">Tests<a href="#tests" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li><a href="https://github.com/webpack/webpack/blob/master/test/configCases/dll-plugin/0-create-dll/webpack.config.js">DllPlugin creation test</a></li>\n<li><a href="https://github.com/webpack/webpack/blob/master/test/configCases/dll-plugin/2-use-dll-without-scope/webpack.config.js">DllPlugin without scope test</a></li>\n<li><a href="https://github.com/webpack/webpack/tree/master/test/configCases/dll-plugin">DllReferencePlugin use Dll test</a></li>\n</ul>\n'}}]);
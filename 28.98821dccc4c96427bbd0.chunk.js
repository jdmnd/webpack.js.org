(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{319:function(e,t,a){"use strict";a.r(t),t.default='<p>Hot Module Replacement (HMR) exchanges, adds, or removes <a href="/concepts/modules/">modules</a> while an application is running, without a full reload. This can significantly speed up development in a few ways:</p>\n<ul>\n<li>Retain application state which is lost during a full reload.</li>\n<li>Save valuable development time by only updating what\'s changed.</li>\n<li>Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser\'s dev tools.</li>\n</ul>\n<h2 id="how-it-works">How It Works<a href="#how-it-works" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Let\'s go through some different viewpoints to understand exactly how HMR works...</p>\n<h3 id="in-the-application">In the Application<a href="#in-the-application" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The following steps allow modules to be swapped in and out of an application:</p>\n<ol>\n<li>The application asks the HMR runtime to check for updates.</li>\n<li>The runtime asynchronously downloads the updates and notifies the application.</li>\n<li>The application then asks the runtime to apply the updates.</li>\n<li>The runtime synchronously applies the updates.</li>\n</ol>\n<p>You can set up HMR so that this process happens automatically, or you can choose to require user interaction for updates to occur.</p>\n<h3 id="in-the-compiler">In the Compiler<a href="#in-the-compiler" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>In addition to normal assets, the compiler needs to emit an "update" to allow updating from the previous version to the new version. The "update" consists of two parts:</p>\n<ol>\n<li>The updated <a href="/concepts/manifest">manifest</a> (JSON)</li>\n<li>One or more updated chunks (JavaScript)</li>\n</ol>\n<p>The manifest contains the new compilation hash and a list of all updated chunks. Each of these chunks contains the new code for all updated modules (or a flag indicating that the module was removed).</p>\n<p>The compiler ensures that module IDs and chunk IDs are consistent between these builds. It typically stores these IDs in memory (e.g. with <a href="/configuration/dev-server/">webpack-dev-server</a>), but it\'s also possible to store them in a JSON file.</p>\n<h3 id="in-a-module">In a Module<a href="#in-a-module" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>HMR is an opt-in feature that only affects modules containing HMR code. One example would be patching styling through the <a href="https://github.com/webpack-contrib/style-loader"><code>style-loader</code></a>. In order for patching to work, the <code>style-loader</code> implements the HMR interface; when it receives an update through HMR, it replaces the old styles with the new ones.</p>\n<p>Similarly, when implementing the HMR interface in a module, you can describe what should happen when the module is updated. However, in most cases, it\'s not mandatory to write HMR code in every module. If a module has no HMR handlers, the update bubbles up. This means that a single handler can update a complete module tree. If a single module from the tree is updated, the entire set of dependencies is reloaded.</p>\n<p>See the <a href="/api/hot-module-replacement">HMR API page</a> for details on the <code>module.hot</code> interface.</p>\n<h3 id="in-the-runtime">In the Runtime<a href="#in-the-runtime" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Here things get a bit more technical... if you\'re not interested in the internals, feel free to jump to the <a href="/api/hot-module-replacement">HMR API page</a> or <a href="/guides/hot-module-replacement">HMR guide</a>.</p>\n<p>For the module system runtime, additional code is emitted to track module <code>parents</code> and <code>children</code>. On the management side, the runtime supports two methods: <code>check</code> and <code>apply</code>.</p>\n<p>A <code>check</code> makes an HTTP request to the update manifest. If this request fails, there is no update available. If it succeeds, the list of updated chunks is compared to the list of currently loaded chunks. For each loaded chunk, the corresponding update chunk is downloaded. All module updates are stored in the runtime. When all update chunks have been downloaded and are ready to be applied, the runtime switches into the <code>ready</code> state.</p>\n<p>The <code>apply</code> method flags all updated modules as invalid. For each invalid module, there needs to be an update handler in the module or in its parent(s). Otherwise, the invalid flag bubbles up and invalidates parent(s) as well. Each bubble continues until the app\'s entry point or a module with an update handler is reached (whichever comes first). If it bubbles up from an entry point, the process fails.</p>\n<p>Afterwards, all invalid modules are disposed (via the dispose handler) and unloaded. The current hash is then updated and all <code>accept</code> handlers are called. The runtime switches back to the <code>idle</code> state and everything continues as normal.</p>\n<h2 id="get-started">Get Started<a href="#get-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>HMR can be used in development as a LiveReload replacement. <a href="/configuration/dev-server/">webpack-dev-server</a> supports a <code>hot</code> mode in which it tries to update with HMR before trying to reload the whole page. See the <a href="/guides/hot-module-replacement">Hot Module Replacement guide</a> for details.</p>\n<blockquote class="tip">\n<p>As with many other features, webpack\'s power lies in its customizability. There are <em>many</em> ways of configuring HMR depending on the needs of a particular project. However, for most purposes, <code>webpack-dev-server</code> is a good fit and will allow you to get started with HMR quickly.</p>\n</blockquote>\n'}}]);
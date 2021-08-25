import{o as n,c as s,a}from"./app.3029eb60.js";const t='{"title":"👉 curry","description":"","frontmatter":{},"headers":[{"level":2,"title":"👉 curry","slug":"👉-curry"},{"level":3,"title":"✍️ 实现","slug":"✍️-实现"},{"level":3,"title":"📌 测试","slug":"📌-测试"}],"relativePath":"js/utils/curry/index.md","lastUpdated":1629935592707}',p={},o=[a('<h2 id="👉-curry"><a class="header-anchor" href="#👉-curry" aria-hidden="true">#</a> 👉 curry</h2><p>在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。这个技术由克里斯托弗·斯特雷奇以逻辑学家哈斯凯尔·加里命名的，尽管它是 Moses Schönfinkel 和戈特洛布·弗雷格发明的。</p><p><code>柯里化是将一个接受多个参数的函数分解成一系列函数，每个函数只接受一个参数。</code> 例如：将 <code>f(a,b,c)</code> 变换为 <code>f(a)(b)(c)</code> 。</p><h3 id="✍️-实现"><a class="header-anchor" href="#✍️-实现" aria-hidden="true">#</a> ✍️ 实现</h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 如果参数的数量（args.length）大于或等于原函数中定义的参数数量（func.length），</span>\n    <span class="token comment">// 则直接使用 func.apply 将参数传递。</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> func<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 否则，我们只得到一部分参数，此时还未调用 func，</span>\n    <span class="token comment">// 则返回一个新的匿名函数，重新柯里化，提供之前的参数（args）和当前匿名函数参数（args2）。</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">curried</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="📌-测试"><a class="header-anchor" href="#📌-测试" aria-hidden="true">#</a> 📌 测试</h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> currySum <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">currySum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6 - 未柯里</span>\n<span class="token function">currySum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6 - 完全柯里</span>\n<span class="token function">currySum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6 - 第一个参数柯里</span>\n</code></pre></div><hr><h4 id="🔗-参考链接"><a class="header-anchor" href="#🔗-参考链接" aria-hidden="true">#</a> 🔗 参考链接</h4><ul><li><a href="https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96" target="_blank" rel="noopener noreferrer">[wiki] 柯里化</a></li><li><a href="https://stackoverflow.com/questions/36314/what-is-currying" target="_blank" rel="noopener noreferrer">What is &#39;Currying&#39;?</a></li><li><a href="https://javascript.info/currying-partials" target="_blank" rel="noopener noreferrer">[javascript.info] currying</a></li></ul>',10)];p.render=function(a,t,p,c,e,u){return n(),s("div",null,o)};export{t as __pageData,p as default};

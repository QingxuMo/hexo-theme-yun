/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "816ee915f47192e8d940927db64e8a62"
  },
  {
    "url": "about.html",
    "revision": "ebe875a5f4c6a46e93b981d767088e4d"
  },
  {
    "url": "assets/css/0.styles.9bcbb34f.css",
    "revision": "5b75ab49cb3eab9dd89dd14ed1e13adf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d6d97159.js",
    "revision": "1153d8ca73d80c297ad815af94b9083f"
  },
  {
    "url": "assets/js/11.a7247759.js",
    "revision": "564af5cf0d6c2cfbf757a35df59da2cc"
  },
  {
    "url": "assets/js/12.8da905a3.js",
    "revision": "72ddd29ffa8aad697708d0ea28d61153"
  },
  {
    "url": "assets/js/13.6e6ff23c.js",
    "revision": "0419e8bdfbf2a172c7ff0a0bed9880e7"
  },
  {
    "url": "assets/js/14.6ce3a875.js",
    "revision": "a02fd2dfc9f645d330fc593311cbf7cc"
  },
  {
    "url": "assets/js/15.cd1cbce8.js",
    "revision": "97cf7009de3d20b057ec049ad40897da"
  },
  {
    "url": "assets/js/16.a06b6fab.js",
    "revision": "044ea3598c2b1062db1f2f10aaed98c4"
  },
  {
    "url": "assets/js/17.2d2db7a3.js",
    "revision": "f4071750a9db45c84d2d38c169625ed1"
  },
  {
    "url": "assets/js/18.98cec7b5.js",
    "revision": "47233566c6e3f2a20b71d3a7730ff0a2"
  },
  {
    "url": "assets/js/19.6f4721cb.js",
    "revision": "b6a3ade531194298228c5bf49aa1ead2"
  },
  {
    "url": "assets/js/2.fb956e2c.js",
    "revision": "9691cde35362ec84d60bce406d1cdd89"
  },
  {
    "url": "assets/js/20.fa05bbb9.js",
    "revision": "de58ab038536ca40e7cdef713de25672"
  },
  {
    "url": "assets/js/21.3f175b0b.js",
    "revision": "720f2f62891465d6000a3b683b7126ba"
  },
  {
    "url": "assets/js/22.8e694c23.js",
    "revision": "7af7b0c4f3748eeefcd9717106fc3c3e"
  },
  {
    "url": "assets/js/23.380ea46e.js",
    "revision": "e03901db4703cb65f3927517ce4fdb76"
  },
  {
    "url": "assets/js/24.8b9a8fc5.js",
    "revision": "12b8da7f20e3e82a075ed72a301eef21"
  },
  {
    "url": "assets/js/25.9606b576.js",
    "revision": "d4fb8a9d8ef7754616d9e6286478b1e0"
  },
  {
    "url": "assets/js/26.3ecf270e.js",
    "revision": "2e5d2d88acd4651146651e641f6dede0"
  },
  {
    "url": "assets/js/27.17f96ac6.js",
    "revision": "91abea161f206e24cf6661388e0b08aa"
  },
  {
    "url": "assets/js/28.37fa3033.js",
    "revision": "1b64a73ce911de93c55582b97e3858ac"
  },
  {
    "url": "assets/js/29.072c7323.js",
    "revision": "c8eaa4194ec49518babe243738617eea"
  },
  {
    "url": "assets/js/3.8b02a74c.js",
    "revision": "262211ae4cb3f594dc456c8f1dff7894"
  },
  {
    "url": "assets/js/4.790ee0f8.js",
    "revision": "54fd06c708769d0d63697550df6f5eb4"
  },
  {
    "url": "assets/js/5.f86d1b9f.js",
    "revision": "f82bab4189b37020db7773ff3ccaa271"
  },
  {
    "url": "assets/js/6.c76e6c01.js",
    "revision": "a0265341d70f77f2504fc378963ce4cc"
  },
  {
    "url": "assets/js/7.516b2807.js",
    "revision": "962129a198a1fd99cd061c92d16cf645"
  },
  {
    "url": "assets/js/8.fb4c7b58.js",
    "revision": "f3ca9ce956f6064940d8877e7de06e1c"
  },
  {
    "url": "assets/js/9.ab178b01.js",
    "revision": "ae28c11053b03e6f225bb84dc163950c"
  },
  {
    "url": "assets/js/app.645d1888.js",
    "revision": "f86038af036c73f8c9dad31683da3fb2"
  },
  {
    "url": "demo.html",
    "revision": "86953ec203dd82c7d7d96bc06ea7b13c"
  },
  {
    "url": "en/about.html",
    "revision": "8d9ce2d6f100b8834b36e6a911aa500b"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "b469e0860380eb2e99776f9d6b17e8e7"
  },
  {
    "url": "en/guide/config.html",
    "revision": "60674bafca45f6e583bbac510c78ae9a"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "c46c5c915478a33ae40042bb9a0d5d29"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "2a408293be98060b2894805145087b6c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "8e89683e1b91fb81249ca9e55f5f68d5"
  },
  {
    "url": "en/guide/page.html",
    "revision": "1101251e4427d731bccea0168324af20"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "c4d41507905c839385bb9fca40fa658a"
  },
  {
    "url": "en/index.html",
    "revision": "9e91846b3faf6777b7983e8aa1e118d6"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "735ec968b032e35af52dea25d3cee28d"
  },
  {
    "url": "guide/config.html",
    "revision": "0d5b4e91252e6e59cdcb592caebc85fc"
  },
  {
    "url": "guide/faq.html",
    "revision": "4e1dc17fd097430b00770196cf43897d"
  },
  {
    "url": "guide/icon.html",
    "revision": "34bcf15b09ccadd291dc089dbf6dd21f"
  },
  {
    "url": "guide/index.html",
    "revision": "9cb1e52ff588e2701e9d28eb10aa18c0"
  },
  {
    "url": "guide/migrate.html",
    "revision": "1c798cc56d10bf70928dccedd0e4b125"
  },
  {
    "url": "guide/page.html",
    "revision": "dd9f312ef165d7f9e19d5ee2031010c6"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "57625c88b3ae78dd9bb4f23b89540afa"
  },
  {
    "url": "index.html",
    "revision": "892581d04dd98d0badb930e1fd17624f"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
